webpackJsonp([2],{496:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=(n(59),n(44)),s=n(0),c=n.n(s),l=n(525),u=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.sendMes=function(){n.props.onChange("\u5367\u69fd \u513f\u5b50\u6765\u4fe1\u4e86")},n.state={name:"\u7238\u7238\u6ca1\u6253\u6211"},n.sendMes=n.sendMes.bind(n),n}return a(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"erzi"},c.a.createElement(i.a,{type:"primary",onClick:this.sendMes},"\u7ed9\u7238\u7238\u5199\u4fe1"),c.a.createElement("p",null,this.props.msg||"\u6211\u662f\u732a"))}}]),t}(c.a.Component),h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChildChange=function(e){console.log(e),n.setState({content:e,erziMes:""})},n.hitson=function(){console.log("asd"),n.setState({content:"\u6211\u53bb\u6253\u513f\u5b50",erziMes:"\u7238\u7238\u8981\u6765\u6253\u6211"})},n.state={content:"\u7b49\u513f\u5b50\u53d1\u4fe1"},n.hitson=n.hitson.bind(n),n}return a(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"baba"},c.a.createElement(p,{onChange:this.handleChildChange,msg:this.state.erziMes}),"Father",c.a.createElement("p",null,this.state.content),c.a.createElement(i.a,{type:"primary",onClick:this.hitson},"\u6253\u513f\u5b50"))}}]),t}(c.a.Component);t.default=h},525:function(e,t,n){var r=n(526);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(494)(r,o);r.locals&&(e.exports=r.locals)},526:function(e,t,n){t=e.exports=n(493)(!0),t.push([e.i,".erzi{height:200px;width:400px;background:#2b5766}.baba,.erzi{padding:20px}.baba{height:500px;width:600px;background:green;color:#fff;font-weight:700}","",{version:3,sources:["D:/react/react-admin-demo/src/routes/Fscom/index.css"],names:[],mappings:"AAAA,MACE,aAAa,AACb,YAAa,AAEb,kBAA4B,CAC7B,AACD,YAHE,YAAe,CAUhB,AAPD,MACE,aAAc,AACd,YAAa,AAEb,iBAAkB,AAClB,WAAc,AACd,eAAkB,CACnB",file:"index.css",sourcesContent:[".erzi{\r\n  height:200px;\r\n  width: 400px;\r\n  padding:  20px;\r\n  background: rgb(43, 87, 102)\r\n}\r\n.baba{\r\n  height: 500px;\r\n  width: 600px;\r\n  padding: 20px;\r\n  background: green;\r\n  color:  white;\r\n  font-weight: bold;\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.d57906f8.chunk.js.map