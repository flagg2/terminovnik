(this.webpackJsonpterminovnik=this.webpackJsonpterminovnik||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),r=n(21),s=n.n(r),c=(n(27),n(12)),u=n(3),h=n.n(u),o=n(9),d=n(5),p=n(6),l=n(4),j=n(8),f=n(7),b=(n.p,n(29),n(10)),g=n.n(b),v=n(22),O=n.n(v),m=n(0),C="https://marhulky.sk:8081/api",k=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).state={authString:"",authentificated:!1},t.sendPing=t.sendPing.bind(Object(l.a)(t)),t.handleAuthChange=t.handleAuthChange.bind(Object(l.a)(t)),t}return Object(p.a)(n,[{key:"handleAuthChange",value:function(t){this.setState({authString:t})}},{key:"sendPing",value:function(){var t=Object(o.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get(C+"/admin/ping",{headers:{"auth-token":this.state.authString}});case 3:this.setState({authentificated:!0}),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),this.setState({authentificated:!1}),alert("Nespr\xe1vne heslo!");case 10:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.authentificated?Object(m.jsx)(y,{authString:this.state.authString}):Object(m.jsx)(x,{sendPing:this.sendPing,handleAuthChange:this.handleAuthChange})}}]),n}(i.a.Component),x=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.call(this)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",onChange:function(e){t.props.handleAuthChange(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){t.props.sendPing()},children:"Prihl\xe1si\u0165 sa"})]})}}]),n}(i.a.Component),y=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).state={},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(C+"/times");case 2:e=t.sent,console.log(e.data.times),this.setState({times:e.data.times});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.times?this.state.times.map((function(e){return Object(m.jsx)(S,{authString:t.props.authString,data:e})})):[];return Object(m.jsx)("div",{children:e})}}]),n}(i.a.Component),S=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).state={dates:[]},t.handleDateChange=t.handleDateChange.bind(Object(l.a)(t)),t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({dates:this.props.data.dates})}},{key:"handleDateChange",value:function(){var t=Object(o.a)(h.a.mark((function t(e,n){var a,i,r,s,u,o,d,p;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.split("-"),i=Object(c.a)(a,3),r=i[0],s=i[1],u=i[2],o="".concat(u,"-").concat(s,"-").concat(r),console.log(e,n),d=this.state.dates.findIndex((function(t){return t==e})),console.log(d),-1!==d?(p=this.state.dates,"1999-01-01"===n?p=p.filter((function(t){return t!=e})):p[d]=o,this.setState({dates:p})):((p=this.state.dates).push(n),console.log(p),this.setState({dates:p})),t.next=8,g.a.patch(C+"/admin/times/"+this.props.data._id,{dates:p},{headers:{"auth-token":this.props.authString}});case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.dates.map((function(e){return Object(m.jsx)(D,{date:e,handleDateChange:t.handleDateChange})}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:this.props.data.city}),Object(m.jsx)("button",{onClick:function(){t.handleDateChange("XXX",O()().add(1,"day").format("DD-MM-YYYY"))},children:"+"}),e]})}}]),n}(i.a.Component),D=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this,e=this.props.date.split("-"),n=Object(c.a)(e,3),a=n[0],i=n[1],r=n[2];return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"date",id:"start",name:"trip-start",value:"".concat(r,"-").concat(i,"-").concat(a),onChange:function(e){t.props.handleDateChange(t.props.date,e.target.value)}}),Object(m.jsx)("button",{onClick:function(){t.props.handleDateChange(t.props.date,"1999-01-01")},children:"X"})]})}}]),n}(i.a.Component),P=k,w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),r(t),s(t)}))};s.a.render(Object(m.jsx)(P,{}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.83a76a28.chunk.js.map