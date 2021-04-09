import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'
import moment from 'moment'

const apiUrl = 'https://marhulky.sk:8081/api'

class App extends React.Component{
  constructor(){
    super()
    this.state = {authString:'',authentificated:false}
    this.sendPing = this.sendPing.bind(this)
    this.handleAuthChange = this.handleAuthChange.bind(this)
  }

  handleAuthChange(authString){
    this.setState({authString:authString})
  }

  async sendPing(){
    try{
    await axios.get(apiUrl + '/admin/ping', {
    headers: {
      'auth-token': this.state.authString
    }})
    this.setState({authentificated:true})
    }
    catch(err){
      this.setState({authentificated:false})
      alert('Nesprávne heslo!')
    }
  }
  render(){
    return (this.state.authentificated ? <TimeManager authString={this.state.authString} /> : <Auth sendPing={this.sendPing} handleAuthChange={this.handleAuthChange}/>)
  }
}

class Auth extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
    <input type='text' onChange={(event)=>{this.props.handleAuthChange(event.target.value)}}></input>
    <button onClick={()=>{this.props.sendPing()}}>Prihlásiť sa</button>
    </div>
    )
  }
}

class TimeManager extends React.Component{

  constructor(){
    super()
    this.state = {}
    
  }
  async componentDidMount(){
    const res = await axios.get(apiUrl + '/times')
    console.log(res.data.times)
    this.setState({times:res.data.times})
  }
  render(){
    const cities = this.state.times ? this.state.times.map((city) => {return(<City authString={this.props.authString} data={city}></City>)}) : []
    return(
      <div>
        {cities}
      </div>
    )
  }
}

class City extends React.Component{
  constructor(){
    super()
    this.state = {dates:[]}
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  componentDidMount(){
    this.setState({dates:this.props.data.dates})
  }
  async handleDateChange(oldval,newval){
    const [day,month,year] = newval.split('-')
    const newvalFormatted = `${year}-${month}-${day}`
    console.log(oldval,newval)
    const oldIndex = this.state.dates.findIndex(elem => elem == oldval)
    let newDates
    console.log(oldIndex)
    if (oldIndex !== -1){
      newDates = this.state.dates
      if (newval === '1999-01-01'){
        newDates = newDates.filter(elem => elem!=oldval)
      }
      else{
        newDates[oldIndex] = newvalFormatted
      }
      this.setState({dates:newDates})
    }
    else{
      newDates = this.state.dates
      newDates.push(newval)
      console.log(newDates)
      this.setState({dates:newDates})
    }
    await axios.patch(apiUrl + '/admin/times/' + this.props.data._id,{dates:newDates},{headers:{'auth-token' : this.props.authString}})
  }
  render(){
    const dates = this.state.dates.map((date)=>{
      return(<DateInput date={date} handleDateChange={this.handleDateChange}/>)})
    return(
      <div>
      <div>{this.props.data.city}</div>
      <button onClick={()=>{this.handleDateChange('XXX',moment().add(1,'day').format('DD-MM-YYYY'))}}>+</button>
      {dates}
      </div>
    )
  }
}

class DateInput extends React.Component{
  render(){
    const [day,month,year] = this.props.date.split('-')
    return(
      <div>
        <input type="date" id="start" name="trip-start"
    value={`${year}-${month}-${day}`} onChange={(event)=>{this.props.handleDateChange(this.props.date,event.target.value)}}></input>
        <button onClick={()=>{this.props.handleDateChange(this.props.date,'1999-01-01')}}>X</button>
      </div>
    )
  }
}

export default App;
