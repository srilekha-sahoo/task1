(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{1803:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(366),l=n(393),a=n(425),c=n(6),o=n(404),i=n(373),s=n(833),u=n(384),p=n(416),d=n(431),f=n(613),m=n(378);function h({project:e}){const{links:t}=e,n=Object(f.c)(t.map((e,t)=>{const{href:n,name:r,type:l}=e;return{id:"link-".concat(t),name:r,type:l,url:n}})),{lastAnalysisDate:l}=e;return r.createElement("div",{className:"account-project-card clearfix"},r.createElement("aside",{className:"account-project-side"},void 0!==l?r.createElement("div",{className:"account-project-analysis"},r.createElement(p.a,{date:l},e=>Object(c.l)("my_account.projects.analyzed_x",e))):r.createElement("div",{className:"account-project-analysis"},Object(c.k)("my_account.projects.never_analyzed")),void 0!==e.qualityGate&&r.createElement("div",{className:"account-project-quality-gate"},"WARN"===e.qualityGate&&r.createElement(u.a,{className:"little-spacer-right",overlay:Object(c.k)("quality_gates.conditions.warning.tooltip")}),r.createElement(d.a,{"aria-label":Object(c.k)("quality_gates.status"),level:e.qualityGate}))),r.createElement("h3",{className:"account-project-name"},r.createElement(i.c,{to:Object(m.A)(e.key)},e.name)),n.length>0&&r.createElement("div",{className:"account-project-links"},r.createElement("ul",{className:"list-inline"},n.map(e=>r.createElement(s.a,{iconOnly:!0,key:e.id,link:e})))),r.createElement("div",{className:"account-project-key"},e.key),!!e.description&&r.createElement("div",{className:"account-project-description"},e.description))}function b(e){const{projects:t}=e;return r.createElement("div",{id:"account-projects"},0===t.length?r.createElement("div",{className:"js-no-results"},Object(c.k)("my_account.projects.no_results")):r.createElement("p",null,Object(c.k)("my_account.projects.description")),t.length>0&&r.createElement("ul",{className:"account-projects-list"},t.map(e=>r.createElement("li",{key:e.key},r.createElement(h,{project:e})))),t.length>0&&r.createElement(o.a,{count:t.length,loadMore:e.loadMore,ready:!e.loading,total:e.total||0}))}class y extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,page:1},this.loadMore=()=>{this.loadProjects(this.state.page+1)}}componentDidMount(){this.mounted=!0,this.loadProjects()}componentWillUnmount(){this.mounted=!1}loadProjects(e=this.state.page){this.setState({loading:!0});const t={p:e,ps:100};return Object(a.s)(t).then(({paging:t,projects:n})=>{this.setState(r=>({projects:e>1?[...r.projects||[],...n]:n,loading:!1,page:t.pageIndex,total:t.total}))})}render(){const e=r.createElement(l.a,{title:Object(c.k)("my_account.projects")});return null==this.state.projects?r.createElement("div",{className:"text-center"},e,r.createElement("i",{className:"spinner spacer"})):r.createElement("div",{className:"account-body account-container"},e,r.createElement(b,{loadMore:this.loadMore,loading:this.state.loading,projects:this.state.projects,total:this.state.total}))}}},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(367),l=n(366),a=n(375),c=n(438),o=(n(400),n(374));function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(e){let{size:t=12}=e,n=i(e,["size"]);return l.createElement("div",{className:r("help-tooltip",n.className)},l.createElement(o.a,{mouseLeaveDelay:.25,onShow:n.onShow,overlay:n.overlay,placement:n.placement},l.createElement("span",{className:"display-inline-flex-center"},n.children||l.createElement(c.a,{fill:a.colors.gray71,size:t}))))}},398:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(366),l=n(371),a=n(21);const c={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function o({children:e,date:t}){return r.createElement(l.FormattedDate,Object.assign({value:Object(a.b)(t)},c),e)}},400:function(e,t,n){var r=n(369),l=n(401);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var a={insert:"head",singleton:!1},c=(r(l,a),l.locals?l.locals:{});e.exports=c},401:function(e,t,n){(t=n(370)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(367),l=n(366),a=n(6),c=n(377),o=n(376),i=n(368);function s(e){const{className:t,count:n,loading:s,needReload:u,total:p,ready:d=!0}=e,f=p&&p>n;let m;return u&&e.reload?m=l.createElement(i.a,{className:"spacer-left","data-test":"reload",disabled:s,onClick:e.reload},Object(a.k)("reload")):f&&e.loadMore&&(m=l.createElement(i.a,{className:"spacer-left",disabled:s,"data-test":"show-more",onClick:e.loadMore},Object(a.k)("show_more"))),l.createElement("footer",{className:r("spacer-top note text-center",{"new-loading":!d},t)},Object(a.l)("x_of_y_shown",Object(c.formatMeasure)(n,"INT",null),Object(c.formatMeasure)(p,"INT",null)),m,s&&l.createElement(o.a,{className:"text-bottom spacer-left position-absolute"}))}},416:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(463),l=n(366),a=n(371),c=n(21),o=n(6),i=n(398);function s(e){const{children:t=(e=>e),date:n,hourPrecision:s}=e;let u=t;if(!n)return l.createElement(l.Fragment,null,t(Object(o.k)("never")));n&&s&&Object(r.differenceInHours)(Date.now(),n)<1&&(u=()=>t(Object(o.k)("less_than_1_hour_ago")));const p=Object(c.b)(n);return l.createElement(i.a,{date:p},e=>l.createElement("span",{title:e},l.createElement(a.FormattedRelative,{value:p},u)))}},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(366),l=n(372);function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function c(e){let{fill:t="currentColor"}=e,n=a(e,["fill"]);return r.createElement(l.a,Object.assign({},n),r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:t}}))}},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(367),l=n(366),a=n(377);n(457);function c(e){const t=Object(a.formatMeasure)(e.level,"LEVEL"),n=r(e.className,"level","level-"+e.level,{"level-small":e.small,"level-muted":e.muted});return l.createElement("span",{"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"],className:n},t)}},457:function(e,t,n){var r=n(369),l=n(458);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var a={insert:"head",singleton:!1},c=(r(l,a),l.locals?l.locals:{});e.exports=c},458:function(e,t,n){(t=n(370)(!1)).push([e.i,".level{display:inline-block;min-width:80px;height:24px;line-height:24px;border-radius:24px;box-sizing:border-box;color:#fff;letter-spacing:.02em;font-size:13px;font-weight:400;text-align:center;text-shadow:0 0 1px rgba(0,0,0,.35)}.level,.level-small{width:auto;padding-left:9px;padding-right:9px}.level-small{min-width:64px;margin-top:-1px;margin-bottom:-1px;height:20px;line-height:20px;font-size:12px}.level-muted{background-color:#bdbdbd!important}a>.level{margin-bottom:-1px;border-bottom:1px solid;transition:all .2s ease}a>.level:hover{opacity:.8}.level-OK{background-color:#0a0}.level-WARN{background-color:#ed7d20}.level-ERROR{background-color:#d4333f}.level-NONE{background-color:#b4b4b4}.level-NOT_COMPUTED{background-color:#404040}",""]),e.exports=t},483:function(e,t,n){(function(e){!function(e){"use strict";e.exports.is_uri=n,e.exports.is_http_uri=r,e.exports.is_https_uri=l,e.exports.is_web_uri=a,e.exports.isUri=n,e.exports.isHttpUri=r,e.exports.isHttpsUri=l,e.exports.isWebUri=a;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var n,r,l,a,c,o="",i="";if(o=(n=t(e))[1],r=n[2],l=n[3],a=n[4],c=n[5],o&&o.length&&l.length>=0){if(r&&r.length){if(0!==l.length&&!/^\//.test(l))return}else if(/^\/\//.test(l))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(o.toLowerCase()))return i+=o+":",r&&r.length&&(i+="//"+r),i+=l,a&&a.length&&(i+="?"+a),c&&c.length&&(i+="#"+c),i}}}function r(e,r){if(n(e)){var l,a,c,o,i="",s="",u="",p="";if(i=(l=t(e))[1],s=l[2],a=l[3],c=l[4],o=l[5],i){if(r){if("https"!=i.toLowerCase())return}else if("http"!=i.toLowerCase())return;if(s)return/:(\d+)$/.test(s)&&(u=s.match(/:(\d+)$/)[0],s=s.replace(/:\d+$/,"")),p+=i+":",p+="//"+s,u&&(p+=u),p+=a,c&&c.length&&(p+="?"+c),o&&o.length&&(p+="#"+o),p}}}function l(e){return r(e,!0)}function a(e){return r(e)||l(e)}}(e)}).call(this,n(25)(e))},544:function(e,t,n){var r=n(481)((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));e.exports=r},613:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p}));var r=n(387),l=n.n(r),a=n(544),c=n.n(a),o=n(6);const i=["homepage","ci","issue","scm","scm_dev"];function s(e){return i.includes(e.type)}function u(e){const[t,n]=c()(e,s);return[...l()(t,e=>i.indexOf(e.type)),...l()(n,e=>e.name&&e.name.toLowerCase())]}function p(e){return s(e)?Object(o.k)("project_links",e.type):e.name}},704:function(e,t,n){"use strict";var r=n(483);t.a=function(e){return/^(\/|scm:)/.test(e)||!!Object(r.isWebUri)(e)}},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(366),l=n(372);function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function c(e){let{fill:t="currentColor"}=e,n=a(e,["fill"]);return r.createElement(l.a,Object.assign({},n),r.createElement("path",{d:"M13.5 9.5c1.003.033 1.466 1.952 0 2h-2.618L9.685 9.107 8 14.162 6.096 8.45l-.832 3.05-2.829-.002c-.984-.097-1.369-1.951.065-1.998h1.236l2.168-7.95L8 7.838l1.315-3.945L12.118 9.5H13.5z",style:{fill:t}}))}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function i(e){let{fill:t="currentColor"}=e,n=o(e,["fill"]);return r.createElement(l.a,Object.assign({},n),r.createElement("path",{d:"M13.805 9.25c0 .016 0 .04-.008.055C13.133 12.07 10.852 14 7.969 14c-1.524 0-3-.602-4.11-1.656l-1.007 1.008a.497.497 0 0 1-.352.148.504.504 0 0 1-.5-.5V9.5c0-.273.227-.5.5-.5H6c.273 0 .5.227.5.5a.497.497 0 0 1-.148.352l-1.07 1.07a3.988 3.988 0 0 0 6.125-.828c.187-.305.28-.602.413-.914.04-.11.117-.18.235-.18h1.5c.14 0 .25.117.25.25zM14 3v3.5c0 .273-.227.5-.5.5H10a.504.504 0 0 1-.5-.5c0-.133.055-.258.148-.352l1.079-1.078A4.019 4.019 0 0 0 8 4c-1.39 0-2.68.719-3.406 1.906-.188.305-.282.602-.414.914-.04.11-.117.18-.235.18H2.391a.252.252 0 0 1-.25-.25v-.055C2.812 3.922 5.117 2 8 2c1.531 0 3.023.61 4.133 1.656l1.015-1.008A.497.497 0 0 1 13.5 2.5c.273 0 .5.227.5.5z",style:{fill:t}}))}var s=n(429);function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function p(e){let{fill:t="currentColor"}=e,n=u(e,["fill"]);return r.createElement(l.a,Object.assign({},n),r.createElement("path",{d:"M13.002 8.848v4.168a.56.56 0 0 1-.556.555H9.11v-3.334H6.89v3.334H3.554a.56.56 0 0 1-.556-.555V8.848c0-.018.01-.035.01-.052L8 4.68l4.993 4.116c.009.017.009.034.009.052zm1.936-.6l-.538.643a.289.289 0 0 1-.183.096h-.026a.273.273 0 0 1-.182-.061L8 3.916l-6.009 5.01a.297.297 0 0 1-.208.06.289.289 0 0 1-.183-.095l-.538-.642a.285.285 0 0 1 .035-.391L7.34 2.656a1.07 1.07 0 0 1 1.32 0l2.119 1.772V2.735c0-.157.121-.278.278-.278h1.667c.156 0 .278.121.278.278v3.542l1.901 1.58c.113.096.13.279.035.392z",style:{fill:t}}))}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function f(e){let{fill:t="currentColor"}=e,n=d(e,["fill"]);return r.createElement(l.a,Object.assign({},n),r.createElement("path",{d:"M12.557 4.545c.241.247.443.743.443 1.098v7.714c0 .355-.28.643-.625.643h-8.75A.634.634 0 0 1 3 13.357V2.643C3 2.288 3.28 2 3.625 2h5.833c.345 0 .827.208 1.068.455l2.031 2.09zM9.667 2.91v2.518h2.448a.86.86 0 0 0-.144-.275L9.934 3.058a.823.823 0 0 0-.267-.147zm2.5 10.232V6.286H9.458a.634.634 0 0 1-.625-.643V2.857h-5v10.286h8.334z",style:{fill:t}}))}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function h(e){let{type:t}=e,n=m(e,["type"]);switch(t){case"issue":return r.createElement(c,Object.assign({},n));case"homepage":return r.createElement(p,Object.assign({},n));case"ci":return r.createElement(i,Object.assign({},n));case"scm":return r.createElement(f,Object.assign({},n));default:return r.createElement(s.a,Object.assign({},n))}}},833:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(366),l=n(368),a=n(749),c=n(613),o=n(704);class i extends r.PureComponent{constructor(){super(...arguments),this.state={expanded:!1},this.handleClick=e=>{e.preventDefault(),this.setState(({expanded:e})=>({expanded:!e}))},this.handleCollapse=()=>{this.setState({expanded:!1})},this.handleSelect=e=>{e.currentTarget.select()}}render(){const{iconOnly:e,link:t}=this.props,n=Object(c.a)(t),i=Object(o.a)(t.url);return r.createElement("li",null,r.createElement("a",{className:"link-with-icon",href:i?t.url:void 0,onClick:i?void 0:this.handleClick,rel:"nofollow noreferrer noopener",target:"_blank",title:n},r.createElement(a.a,{className:"little-spacer-right",type:t.type}),!e&&n),this.state.expanded&&r.createElement("div",{className:"little-spacer-top display-flex-center"},r.createElement("input",{className:"overview-key width-80",onClick:this.handleSelect,readOnly:!0,type:"text",value:t.url}),r.createElement(l.d,{className:"little-spacer-left",onClick:this.handleCollapse})))}}}}]);
//# sourceMappingURL=304.m.82015490.chunk.js.map