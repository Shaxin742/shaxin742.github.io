(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"5WY0":function(e,t,a){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,t,a){"use strict";var r=a("TqRt"),s=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=r(a("BMrR"));a("+L6B");var i=r(a("2/Rp"));a("jCWc");var n=r(a("kPKH"));a("Q9mQ");var o=r(a("diRs"));a("MXD1");var d=r(a("CFYs")),u=r(a("MVZn")),f=r(a("lwsE")),c=r(a("W8MJ")),m=r(a("a1gu")),p=r(a("Nsbk")),g=r(a("7W2i"));a("5NDa");var h=r(a("5rEg"));a("OaEy");var v=r(a("2fM7"));a("y8nQ");var E,w,M,b,y=r(a("Vl3Y")),k=s(a("q1tI")),F=a("MuoO"),P=a("LLXN"),C=r(a("mOP9")),S=r(a("usdK")),N=r(a("5WY0")),q=y.default.Item,x=v.default.Option,D=h.default.Group,z={ok:k.default.createElement("div",{className:N.default.success},k.default.createElement(P.FormattedMessage,{id:"validation.password.strength.strong"})),pass:k.default.createElement("div",{className:N.default.warning},k.default.createElement(P.FormattedMessage,{id:"validation.password.strength.medium"})),poor:k.default.createElement("div",{className:N.default.error},k.default.createElement(P.FormattedMessage,{id:"validation.password.strength.short"}))},W={ok:"success",pass:"normal",poor:"exception"},I=(E=(0,F.connect)(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),w=y.default.create(),E(M=w((b=function(e){function t(){var e,a;(0,f.default)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(s))),a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},a.onGetCaptcha=function(){var e=59;a.setState({count:e}),a.interval=setInterval(function(){e-=1,a.setState({count:e}),0===e&&clearInterval(a.interval)},1e3)},a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,s=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){var r=a.state.prefix;s({type:"register/submit",payload:(0,u.default)({},t,{prefix:r})})}})},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var s=a.props.form;t&&t!==s.getFieldValue("password")?r((0,P.formatMessage)({id:"validation.password.twice"})):r()},a.checkPassword=function(e,t,r){var s=a.state,l=s.visible,i=s.confirmDirty;if(t)if(a.setState({help:""}),l||a.setState({visible:!!t}),t.length<6)r("error");else{var n=a.props.form;t&&i&&n.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:(0,P.formatMessage)({id:"validation.password.required"}),visible:!!t}),r("error")},a.changePrefix=function(e){a.setState({prefix:e})},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),r=a.getPasswordStatus();return t&&t.length?k.default.createElement("div",{className:N.default["progress-".concat(r)]},k.default.createElement(d.default,{status:W[r],className:N.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("mail");"ok"===a.status&&S.default.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,d=s.count,u=s.prefix,f=s.help,c=s.visible;return k.default.createElement("div",{className:N.default.main},k.default.createElement("h3",null,k.default.createElement(P.FormattedMessage,{id:"app.register.register"})),k.default.createElement(y.default,{onSubmit:this.handleSubmit},k.default.createElement(q,null,r("mail",{rules:[{required:!0,message:(0,P.formatMessage)({id:"validation.email.required"})},{type:"email",message:(0,P.formatMessage)({id:"validation.email.wrong-format"})}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,P.formatMessage)({id:"form.email.placeholder"})}))),k.default.createElement(q,{help:f},k.default.createElement(o.default,{getPopupContainer:function(e){return e.parentNode},content:k.default.createElement("div",{style:{padding:"4px 0"}},z[this.getPasswordStatus()],this.renderPasswordProgress(),k.default.createElement("div",{style:{marginTop:10}},k.default.createElement(P.FormattedMessage,{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:c},r("password",{rules:[{validator:this.checkPassword}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:(0,P.formatMessage)({id:"form.password.placeholder"})})))),k.default.createElement(q,null,r("confirm",{rules:[{required:!0,message:(0,P.formatMessage)({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:(0,P.formatMessage)({id:"form.confirm-password.placeholder"})}))),k.default.createElement(q,null,k.default.createElement(D,{compact:!0},k.default.createElement(v.default,{size:"large",value:u,onChange:this.changePrefix,style:{width:"20%"}},k.default.createElement(x,{value:"86"},"+86"),k.default.createElement(x,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:(0,P.formatMessage)({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,P.formatMessage)({id:"validation.phone-number.wrong-format"})}]})(k.default.createElement(h.default,{size:"large",style:{width:"80%"},placeholder:(0,P.formatMessage)({id:"form.phone-number.placeholder"})})))),k.default.createElement(q,null,k.default.createElement(l.default,{gutter:8},k.default.createElement(n.default,{span:16},r("captcha",{rules:[{required:!0,message:(0,P.formatMessage)({id:"validation.verification-code.required"})}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,P.formatMessage)({id:"form.verification-code.placeholder"})}))),k.default.createElement(n.default,{span:8},k.default.createElement(i.default,{size:"large",disabled:d,className:N.default.getCaptcha,onClick:this.onGetCaptcha},d?"".concat(d," s"):(0,P.formatMessage)({id:"app.register.get-verification-code"}))))),k.default.createElement(q,null,k.default.createElement(i.default,{size:"large",loading:a,className:N.default.submit,type:"primary",htmlType:"submit"},k.default.createElement(P.FormattedMessage,{id:"app.register.register"})),k.default.createElement(C.default,{className:N.default.login,to:"/User/Login"},k.default.createElement(P.FormattedMessage,{id:"app.register.sign-in"})))))}}]),t}(k.Component),M=b))||M)||M),V=I;t.default=V}}]);