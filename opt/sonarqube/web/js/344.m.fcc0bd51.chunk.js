(window.webpackJsonp=window.webpackJsonp||[]).push([[344,23,361],{1730:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(366),o=n(511),s=n(583);function i(e){const{extensionKey:t,pluginKey:n}=e.params,{branchLike:i,component:a}=e,c=a.extensions&&a.extensions.find(e=>e.key==="".concat(n,"/").concat(t));return c?r.createElement(s.a,{extension:c,options:{branchLike:i,component:a}}):r.createElement(o.default,{withContainer:!1})}},499:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(366),o=n(528),s=n(375),i=n(554);function a({children:e}){return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(o.a,{className:"navbar-global",height:s.rawSizes.globalNavHeightRaw}),e),r.createElement(i.a,null))}},511:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(366),o=n(393),s=n(373),i=n(6),a=n(499);function c({withContainer:e=!0}){const t=e?a.default:r.Fragment;return r.createElement(t,null,r.createElement(o.a,{defaultTitle:Object(i.k)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(i.k)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(i.k)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(s.c,{to:"/"},Object(i.k)("go_back_to_homepage"))))))}},545:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(0),o=n(15);let s=!1;function i(e,t="body"){return new Promise(n=>{const o=document.createElement("script");o.src="".concat(Object(r.getBaseUrl)()).concat(e),o.onload=n,document.getElementsByTagName(t)[0].appendChild(o)})}async function a(e){const t=Object(o.a)(e);if(t)return Promise.resolve(t);if(!s){s=!0,(0,(await Promise.all([n.e(0),n.e(349),n.e(16),n.e(288)]).then(n.bind(null,687))).default)()}await i("/static/".concat(e,".js"));const r=Object(o.a)(e);return r||Promise.reject()}},583:function(e,t,n){"use strict";var r=n(366),o=n(393),s=n(371),i=n(382),a=n(412),c=n(545),l=n(6),p=n(0),u=n(448),m=n(385),d=n(375),h=n(455);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class O extends r.PureComponent{constructor(){super(...arguments),this.state={},this.handleStart=e=>{const t=e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({store:Object(h.default)(),el:this.container,currentUser:this.props.currentUser,intl:this.props.intl,location:this.props.location,router:this.props.router,theme:d,baseUrl:Object(p.getBaseUrl)(),l10nBundle:Object(l.a)()},this.props.options));t&&(r.isValidElement(t)?this.setState({extensionElement:t}):"function"==typeof t&&(this.stop=t))},this.handleFailure=()=>{this.props.onFail(Object(l.k)("page_extension_failed"))}}componentDidMount(){this.startExtension()}componentDidUpdate(e){e.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):e.location!==this.props.location&&this.startExtension()}componentWillUnmount(){this.stopExtension()}startExtension(){Object(c.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)}stopExtension(){this.stop?(this.stop(),this.stop=void 0):this.setState({extensionElement:void 0})}render(){return r.createElement("div",null,r.createElement(o.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:r.createElement("div",{ref:e=>this.container=e}))}}const E={onFail:u.a};t.a=Object(s.injectIntl)(Object(a.a)(Object(i.b)(e=>({currentUser:Object(m.getCurrentUser)(e)}),E)(O)))}}]);
//# sourceMappingURL=344.m.fcc0bd51.chunk.js.map