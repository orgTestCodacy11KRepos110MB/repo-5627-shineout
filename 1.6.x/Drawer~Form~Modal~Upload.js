(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[3],{302:function(e,t,r){"use strict";var n=r(0),m=r.n(n),a=r(13),b=r.n(a),o=r(604),i=r.n(o),c=r(9),y=Object(c.a)(i.a,"progress"),g=function(r){return r.from?[{pos:"0%",color:r.from},{pos:"100%",color:r.to}]:Object.keys(r).sort(function(e,t){return window.parseInt(e)-window.parseInt(t)}).reduce(function(e,t){return e.push({pos:t,color:r[t]}),e},[])},s=r(4),l=r(5),u=r(6),f=r(7),h=r(2);function d(n){return function(){var e,t=Object(h.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(h.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(f.a)(this,e)}}var p=function(e){Object(u.a)(r,e);var t=d(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"getStyle",value:function(){var e=this.props.value,t=0;return t=e<=60?e/60*15:15*(1-e/100),{left:"".concat(e,"%"),transform:"translateX(-50%) rotate(".concat(t,"deg)")}}},{key:"render",value:function(){var e=this.props.children;return m.a.createElement("div",{className:y("popup"),style:this.getStyle()},m.a.createElement("span",{className:y("value")},e),m.a.createElement("span",{className:y("arrow")}))}}]),r}(m.a.Component);function v(e){var t=e.children,r=e.strokeWidth,n=e.type,a=e.value,o=e.color,i=e.style,c=e.background,s=e.popup,l=void 0!==t,u=s&&l,f=b()(y("line",n,u&&"line-popup"),e.className),h={width:"".concat(a/100*100,"%"),borderRadius:r/2};return"string"==typeof o?(h.background=o,h.backgroundSize="1em 1em"):"object"==typeof o&&(h.background="linear-gradient(to right, ".concat(g(o).reduce(function(e,t){var r="".concat(t.color," ").concat(t.pos);return e?"".concat(e,",").concat(r):r},""),")")),m.a.createElement("div",{className:f,style:i},m.a.createElement("div",{className:y("background"),style:{height:r,background:c,borderRadius:r/2}},m.a.createElement("div",{className:y("front"),style:h})),l&&(s?m.a.createElement(p,Object.assign({},e,{value:a})):m.a.createElement("div",{className:y("content")},t)))}v.defaultProps={strokeWidth:8};var O=v;function j(e){var t=e.children,r=e.strokeWidth,n=e.type,a=e.color,o=e.size,i=e.value,c=e.background,s=e.strokeLinecap,l=b()(y("circle",n),e.className),u=100-Math.ceil(2*r/o*100),f=2*Math.PI*u,h=[f*(i/100),f*(1-i/100)],d=Object.assign({width:o,height:o},e.style),p=0===i&&"round"===s?0:2*r,v=a&&"object"==typeof a;return m.a.createElement("div",{className:l,style:d},m.a.createElement("svg",{viewBox:"0 0 200 200"},v?m.a.createElement("defs",null,m.a.createElement("linearGradient",{id:"progress-linear",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},g(a).map(function(e){return m.a.createElement("stop",{key:e.pos,offset:e.pos,stopColor:e.color})}))):null,m.a.createElement("circle",{className:y("background"),cx:"100",cy:"100",r:u,strokeWidth:2*r,fill:"transparent",style:{stroke:c}}),m.a.createElement("circle",{className:y("front"),cx:"100",cy:"100",r:u,fill:"transparent",style:{stroke:v?"url('#progress-linear')":a},strokeDasharray:h,strokeLinecap:s,strokeWidth:p})),t&&m.a.createElement("div",{className:y("content")},t))}j.defaultProps={strokeLinecap:"round",strokeWidth:8,size:100};var k=j;function R(e){switch(e.shape){case"circle":return m.a.createElement(k,e);default:return m.a.createElement(O,e)}}R.defaultProps={shape:"line"},R.displayName="ShineoutProgress";t.a=R},312:function(e,t,r){"use strict";var n=r(59),p=r(12),a=r(601),v=r.n(a),o=r(603),i=r(4),c=r(5),s=r(1),l=r(6),u=r(7),f=r(2),h=r(0),w=r.n(h),d=r(13),E=r.n(d),y=r(41),m=r(17),b=r(22),g=r(42),O=r(897),j=r.n(O),k=r(9),x=Object(k.a)(j.a,"upload");var R=function(e){var t=e.url,r=e.name,n=(e.cors,e.file),a=e.onProgress,o=e.onLoad,i=e.onError,c=e.withCredentials,s=e.params,l=void 0===s?{}:s,u=e.headers,f=void 0===u?{}:u,h=e.onStart;if(t){var d=new FormData;Object.keys(l).forEach(function(e){d.append(e,l[e])}),d.append(r,n);var p,v,m,b=(p="post",v=t,"withCredentials"in(m=new XMLHttpRequest)?m.open(p,v,!0):"undefined"!=typeof XDomainRequest?(m=new XDomainRequest).open(p,v):m=null,m);return b.withCredentials=c,a&&b.upload.addEventListener("progress",a,!1),b.onload=function(e){return o(e.currentTarget)},b.onerror=i,Object.keys(f).forEach(function(e){b.setRequestHeader(e,f[e])}),h&&h(n),b.send(d),b}console.error(new Error("action is required, but its value is ".concat(t)))};function D(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var C={display:"none"},P=function(e){Object(l.a)(n,e);var r=D(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).locked=!1,t.bindElement=t.bindElement.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"bindElement",value:function(e){this.input=e}},{key:"click",value:function(){var e=this;this.locked||(this.locked=!0,this.input.value="",this.input.click(),setTimeout(function(){e.locked=!1},1e3))}},{key:"render",value:function(){var e=this.props,t=e.accept,r=e.onChange,n=e.multiple,a=e.webkitdirectory;return w.a.createElement("input",{ref:this.bindElement,accept:t,multiple:n,onChange:r,style:C,webkitdirectory:a,type:"file"})}}]),n}(h.PureComponent),S=r(302),N=r(49),L=r(45);function F(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var I=w.a.createElement("span",{style:{display:"inline-block",marginRight:8}},w.a.createElement(N.a,{size:10,name:"ring"})),A=function(e){Object(l.a)(n,e);var r=F(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).handleRemove=t.handleRemove.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleRemove",value:function(){this.props.onRemove(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.message,r=e.name,n=e.status,a=e.process,o=x("view-file",3===n&&"error");return w.a.createElement("div",{className:o},w.a.createElement("div",{className:x("text")},1===n&&I," ",r," ",t&&w.a.createElement("span",null,"(",t,") ")),w.a.createElement("a",{className:x("delete"),onClick:this.handleRemove},L.a.Close),3!==n&&w.a.createElement(S.a,{className:x("progress"),background:0<=a?"#e9ecef":"transparent",value:a,strokeWidth:2}))}}]),n}(h.PureComponent),V=r(191);function H(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var U=function(e){Object(l.a)(n,e);var r=H(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).handleRemove=t.handleRemove.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleRemove",value:function(){this.props.onRemove(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.process,r=e.status,n=e.style,a=e.data,o=e.message,i=x("image-item",3===r&&"error");return w.a.createElement("div",{style:n,className:i},a&&w.a.createElement(V.a,{src:a,fit:"center",width:"auto",height:0,className:x("image-bg")}),o&&w.a.createElement("div",{className:x("message")},o),w.a.createElement("span",{className:x("delete"),onClick:this.handleRemove}),w.a.createElement("div",{className:x("progress-bg")},w.a.createElement(S.a,{className:x("progress"),color:"#f2f2f2",background:"rgba(0,0,0,0.5)",value:t,strokeWidth:2})))}}]),n}(h.PureComponent),T=r(85);function _(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var M=function(e){Object(l.a)(n,e);var r=_(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={visible:!1},t.handleRemoveConfirm=t.handleRemoveConfirm.bind(Object(s.a)(t)),t.handleRemoveLater=t.handleRemoveLater.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleRemoveConfirm",value:function(e){var t=this.props.onVisibleChange;t&&t(e),this.setState({visible:e})}},{key:"handleRemoveLater",value:function(){var t=this.props.onRemove;return new Promise(function(e){t&&t(),e()})}},{key:"render",value:function(){var e=this.state.visible,t=this.props.confirm;if(!t)return null;var r="object"==typeof t?t:{children:t};return w.a.createElement(T.a.Confirm,Object.assign({},r,{onOk:this.handleRemoveLater,visible:e,onVisibleChange:this.handleRemoveConfirm}))}}]),n}(m.a);function G(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var z=function(e){Object(l.a)(n,e);var r=G(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={confirm:!1},t.handleRemove=t.handleRemove.bind(Object(s.a)(t)),t.handleRecover=t.handleRecover.bind(Object(s.a)(t)),t.handleConfirmChange=t.handleConfirmChange.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleRemove",value:function(){this.props.onRemove(this.props.index)}},{key:"handleRecover",value:function(){var e=this.props,t=e.onRecover,r=e.value;t(e.index,r)}},{key:"handleConfirmChange",value:function(e){this.setState({confirm:e})}},{key:"render",value:function(){var e=this.state.confirm,t=this.props,r=t.renderResult,n=t.value,a=t.recoverAble,o=t.showRecover,i=t.removeConfirm,c=x("view-value",a&&"to-be-delete",e&&"view-active");return w.a.createElement("div",{className:c},w.a.createElement("div",{className:x("text")},r(n)),this.props.onRemove&&w.a.createElement("a",{className:x("delete"),onClick:i?void 0:this.handleRemove},L.a.Close,w.a.createElement(M,{onVisibleChange:this.handleConfirmChange,confirm:i,onRemove:this.handleRemove})),o&&w.a.createElement("a",{className:x("recover"),onClick:this.handleRecover},L.a.Recovery))}}]),n}(h.PureComponent);z.defaultProps={renderResult:function(e){return e},recoverAble:!1};var W=z;function q(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var K=function(e){Object(l.a)(n,e);var r=q(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={confirm:!1},t.handleRemove=t.handleRemove.bind(Object(s.a)(t)),t.handleRecover=t.handleRecover.bind(Object(s.a)(t)),t.bindImage=t.bindImage.bind(Object(s.a)(t)),t.handlePreview=t.handlePreview.bind(Object(s.a)(t)),t.handleConfirmChange=t.handleConfirmChange.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"bindImage",value:function(e){this.image=e}},{key:"handleRemove",value:function(){this.props.onRemove(this.props.index)}},{key:"handleRecover",value:function(){var e=this.props,t=e.onRecover,r=e.value;t(e.index,r)}},{key:"handleConfirmChange",value:function(e){this.setState({confirm:e})}},{key:"handlePreview",value:function(){var e=this.props,t=e.onPreview,r=e.renderResult,n=e.value,a=e.index,o=e.values;t?t(r(n),n,a,o):this.image&&this.image.preview()}},{key:"renderOptions",value:function(){var e=this.props.removeConfirm,t=this.state.confirm;return w.a.createElement("div",{className:x("image-options",t&&"image-active")},w.a.createElement("a",{className:x("options-item"),onClick:this.handlePreview},L.a.Preview),this.props.onRemove&&w.a.createElement("a",{className:x("options-item","options-remove"),onClick:e?void 0:this.handleRemove},L.a.Delete,w.a.createElement(M,{onVisibleChange:this.handleConfirmChange,onRemove:this.handleRemove,confirm:e})))}},{key:"render",value:function(){var e=this.props,t=e.value,r=e.renderResult,n=e.recoverAble,a=e.renderContent,o=e.style,i=e.showRecover,c=e.index,s=e.values,l=x("image-item","image-result",n&&"to-be-delete"),u=r(t);return w.a.createElement("div",{style:o,className:l},u&&(a?a(u,t,c,s):w.a.createElement(V.a,{ref:this.bindImage,src:u,href:u,fit:"center",width:"auto",height:0,className:x("image-bg")})),i&&w.a.createElement("a",{className:x("recover"),onClick:this.handleRecover},L.a.Recovery),this.showRemove&&w.a.createElement("span",{className:x("delete"),onClick:this.handleRemove}),!a&&this.renderOptions())}},{key:"showRemove",get:function(){var e=this.props,t=e.onRemove,r=e.renderContent;return t&&r}}]),n}(h.PureComponent);K.defaultProps={renderResult:function(e){return e}};var B=K,X=r(37),Y=Object(X.a)(),J=Y.Provider,Q=r(194);function Z(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var $=function(e){Object(l.a)(n,e);var r=Z(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={drop:!1},t.handleDrag=t.handleDrag.bind(Object(s.a)(t)),t.handleFileDrop=t.handleFileDrop.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleFileDrop",value:function(e){var t=e.dataTransfer.files,r=this.props,n=r.accept,a=r.multiple,o=r.onDrop,i=r.dropData,c=n?Array.prototype.filter.call(t,function(e){return Object(Q.a)(e,n)}):t;c&&0!==c.length&&o&&o(a?c:[c[0]],i)}},{key:"handleDrag",value:function(e){this.props.disabled||(e.preventDefault(),e.stopPropagation(),this.setState({drop:"dragover"===e.type}),"drop"===e.type&&this.handleFileDrop(e))}},{key:"render",value:function(){var e=this.state.drop,t=this.props,r=t.children,n=t.className;return this.props.drop?w.a.createElement("span",{className:E()(n,x(e&&"drop")),onDragOver:this.handleDrag,onDragLeave:this.handleDrag,onDrop:this.handleDrag},r):r}}]),n}(w.a.Component);$.defaultProps={drop:!1};var ee=r(32);function te(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var re=r(67);function ne(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var ae=[{key:"size",param:function(e){return e.size}},{key:"ext",param:function(e){var t=e.name.split(".");return t[t.length-1]}},{key:"customValidator",param:function(e){return e}}],oe=function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=e.apply(void 0,r);return a&&"function"==typeof a.then?a:new Promise(function(e,t){a instanceof Error&&t(a),e(!0)})},ie=function(e){Object(l.a)(a,e);var t,r,n=ne(a);function a(e){var t;return Object(i.a)(this,a),(t=n.call(this,e)).state={files:{},recycle:[]},t.addFile=t.addFile.bind(Object(s.a)(t)),t.bindElement=t.bindElement.bind(Object(s.a)(t)),t.handleAddClick=t.handleAddClick.bind(Object(s.a)(t)),t.removeFile=t.removeFile.bind(Object(s.a)(t)),t.removeValue=t.removeValue.bind(Object(s.a)(t)),t.recoverValue=t.recoverValue.bind(Object(s.a)(t)),t.validatorHandle=t.validatorHandle.bind(Object(s.a)(t)),t.useValidator=t.useValidator.bind(Object(s.a)(t)),t.handleFileDrop=t.handleFileDrop.bind(Object(s.a)(t)),t.handleReplace=t.handleReplace.bind(Object(s.a)(t)),e.validateHook(t.validate.bind(Object(s.a)(t))),t}return Object(c.a)(a,[{key:"getAction",value:function(e){var t=this.props.action;return"string"==typeof t?t:"function"==typeof t?t(e):""}},{key:"validatorHandle",value:function(e,t){var r=this.props.validatorHandle;return"function"==typeof r?r(e,t):r}},{key:"bindElement",value:function(e){this.input=e}},{key:"handleAddClick",value:function(){this.props.disabled||this.input.click()}},{key:"validate",value:function(){var r=this.state.files;return new Promise(function(e,t){0<Object.keys(r).length&&t(new g.a("")),e(!0)})}},{key:"removeFile",value:function(t){var e=this.props.onErrorRemove,r=this.state.files[t];r&&(r.xhr&&r.xhr.abort&&r.xhr.abort(),this.setState(Object(y.a)(function(e){delete e.files[t]}),function(){3===r.status&&e&&e(r.xhr,r.blob,r)}))}},{key:"removeValue",value:function(t){var r=this,e=this.props,n=e.recoverAble,a=e.disabled,o=e.beforeRemove;if(!a){var i=this.props.value[t];("function"==typeof o?o(i):Promise.resolve()).then(function(){r.setState(Object(y.a)(function(e){e.recycle.push(r.props.value[t]),"number"==typeof n&&e.recycle.length>n&&e.recycle.shift()}));var e=Object(y.a)(r.props.value,function(e){e.splice(t,1)});r.props.onChange(e)}).catch(function(){})}}},{key:"recoverValue",value:function(t,r){this.props.disabled||(this.props.onChange(Object(y.a)(this.props.value,function(e){e.push(r)})),this.setState(Object(y.a)(function(e){e.recycle.splice(t,1)})))}},{key:"useValidator",value:(r=Object(o.a)(v.a.mark(function e(t){var r,n,a,o,i,c,s,l,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,n=r.validator,a=r.accept,o=r.forceAccept,i=r.forceAcceptErrorMsg,c=this.state.files,s=null,l=0,!o){e.next=8;break}if(Object(Q.a)(t,a)){e.next=8;break}return e.abrupt("return",new Error(i||Object(ee.a)("invalidAccept")));case 8:if(!ae[l]){e.next=24;break}if("function"==typeof n[(u=ae[l]).key])return e.prev=11,e.next=14,oe(n[u.key],u.param(t),c);e.next=21;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),s=e.t0 instanceof Error?e.t0:new Error(e.t0);case 19:if(s instanceof Error)return e.abrupt("return",s);e.next=21;break;case 21:l+=1,e.next=8;break;case 24:return e.abrupt("return",null);case 25:case"end":return e.stop()}},e,this,[[11,16]])})),function(e){return r.apply(this,arguments)})},{key:"addFile",value:(t=Object(o.a)(v.a.mark(function e(t){var r,i,n,a,o,c,s,l,u,f,h,d=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,i=r.beforeUpload,n=r.value,a=r.limit,o=r.filesFilter,c=Object(p.a)({},this.state.files),s=t.fromDragger&&t.files?t.files:t.target.files,o&&(s=o(Array.from(s))||[]),(l=a-n.length-Object.keys(this.state.files).length)<=0)return e.abrupt("return");e.next=7;break;case 7:u=Array.from({length:Math.min(s.length,l)}),f=v.a.mark(function e(t){var r,n,a,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=s[t],n=Object(b.c)(),a={name:r.name,process:-1,status:1,blob:r},c[n]=a,e.next=6,d.useValidator(r);case 6:if(!((o=e.sent)instanceof Error)){e.next=15;break}if(d.validatorHandle(o,a.blob)){e.next=11;break}return delete c[n],e.abrupt("return","continue");case 11:return a.message=o.message,a.status=3,i&&i(r,d.validatorHandle).then(function(t){d.setState(Object(y.a)(function(e){e.files[n]=Object.assign({},e.files[n],t)}))}).catch(function(){return!0}),e.abrupt("return","continue");case 15:i?i(r,d.validatorHandle).then(function(t){3!==t.status&&(c[n].xhr=d.uploadFile(n,r,t.data)),d.setState(Object(y.a)(function(e){e.files[n]=Object.assign({},e.files[n],t)}))}).catch(function(){d.setState(Object(y.a)(function(e){delete e.files[n]}))}):c[n].xhr=d.uploadFile(n,r);case 16:case"end":return e.stop()}},e)}),h=0;case 10:if(h<u.length)return e.delegateYield(f(h),"t0",12);e.next=18;break;case 12:if("continue"===e.t0)return e.abrupt("continue",15);e.next=15;break;case 15:h++,e.next=10;break;case 18:this.setState({files:c});case 19:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"uploadFile",value:function(n,a,o){var i=this,e=this.props,c=e.onSuccess,t=e.name,r=e.htmlName,s=e.cors,l=e.params,u=e.withCredentials,f=e.headers,h=e.request,d=e.onProgress,p=e.onStart,v=h||R,m=!1,b={url:this.getAction(a),name:r||t,cors:s,params:l,withCredentials:u,file:a,headers:f,onStart:p,onProgress:function(e,t){var r="number"==typeof e.percent?e.percent:e.loaded/e.total*100;m||(m=!0,setTimeout(function(){m=!1},16),i.state.files[n]&&i.setState(Object(y.a)(function(e){e.files[n].process=r,t&&(e.files[n].message=t)}),function(){"function"==typeof d&&d(i.state.files[n])}))},onSuccess:c,onLoad:function(e){var t;if(/^2|1223/.test(e.status))if("text"!==e.responseType&&e.responseType||(t=e.responseText),t||(t=e.response),c&&(t=c(t,a,o,e)),t instanceof Error)i.setState(Object(y.a)(function(e){e.files[n].status=3,e.files[n].name=a.name,e.files[n].message=t.message}));else{i.setState(Object(y.a)(function(e){delete e.files[n]}));var r=Object(y.a)(i.props.value,function(e){e.push(t)});i.props.onChange(r)}else i.handleError(n,e,a)},onError:function(e){return i.handleError(n,e,a)}};return!1!==d&&null!==d||delete b.onProgress,v(b)}},{key:"handleFileDrop",value:function(e){this.addFile({files:e,fromDragger:!0})}},{key:"handleReplace",value:function(e,t){var r=this;this.removeValue(t),setTimeout(function(){r.addFile({files:e,fromDragger:!0})})}},{key:"handleError",value:function(t,e,r){var n=this.props,a=n.onError,o=n.onHttpError,i=e.statusText;a&&(i=a(e,r)),o&&(i=o(e,r)||i),this.setState(Object(y.a)(function(e){e.files[t]&&(e.files[t].status=3,e.files[t].message=i)}))}},{key:"renderHandle",value:function(){var e=this.props,t=e.limit,r=e.value,n=e.children,a=e.accept,o=e.multiple,i=e.disabled,c=e.webkitdirectory,s=e.drop,l=r.length+Object.keys(this.state.files).length;if(0<t&&t<=l)return null;var u={multiple:o,addFile:this.addFile,accept:a,disabled:i,limit:t};return w.a.createElement($,{drop:s,accept:a,disabled:i,onDrop:this.handleFileDrop,multiple:o||1<t},w.a.createElement("span",{className:x("handle",i&&"disabled"),onClick:this.handleAddClick},w.a.createElement(J,{value:u},n),w.a.createElement(P,{webkitdirectory:c,accept:a,ref:this.bindElement,multiple:o,onChange:this.addFile})))}},{key:"render",value:function(){var r=this,e=this.props,n=e.limit,a=e.value,o=e.renderResult,t=e.style,i=e.imageStyle,c=e.recoverAble,s=e.showUploadList,l=e.customResult,u=e.disabled,f=e.renderContent,h=e.accept,d=e.drop,p=e.leftHandler,v=e.onPreview,m=e.removeConfirm,b=this.state,y=b.files,g=b.recycle,O=d&&!i,j=E()(x("_",u&&"disabled",!1===s&&"hide-list",O&&"file-drop"),this.props.className),k=i?U:A,R=i?B:W;return l?w.a.createElement("div",{className:j,style:t},this.renderHandle(),w.a.createElement(l,{value:a,files:y,onValueRemove:this.removeValue,onFileRemove:this.removeFile})):w.a.createElement("div",Object.assign({className:j,style:t},Object(re.a)(this.props)),!i&&this.renderHandle(),i&&p&&this.renderHandle(),s&&a.map(function(e,t){return w.a.createElement($,{drop:d,multiple:!1,key:t,accept:h,dropData:t,disabled:u,onDrop:r.handleReplace},w.a.createElement(R,{renderContent:f,value:e,values:a,index:t,style:i,renderResult:o,onRemove:r.removeValue,removeConfirm:m,onPreview:v}))}),s&&Object.keys(y).map(function(e){return w.a.createElement(k,Object.assign({},y[e],{key:e,id:e,style:i,onRemove:r.removeFile}))}),i&&!p&&this.renderHandle(),c&&g.map(function(e,t){return w.a.createElement(R,{renderContent:f,key:t,value:e,values:g,index:t,renderResult:o,recoverAble:!!c,showRecover:c&&n>a.length,onRecover:r.recoverValue,style:i})}))}}]),a}(m.b);ie.defaultProps={cors:!1,limit:100,recoverAble:!1,validator:{},value:[],withCredentials:!1,showUploadList:!0,validatorHandle:!0};var ce,se=(ce=ie,function(e){Object(l.a)(r,e);var t=te(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props,t=e.forceAccept,r=e.accept;return w.a.createElement(ce,Object.assign({},this.props,{accept:t||r,forceAccept:!!t}))}}]),r}(w.a.PureComponent)),le=r(15);function ue(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var fe=function(e){var t=e.className,r=e.disabled,n=e.urlInvalid,a=e.children,o=e.style,i=e.width,c=e.height,s=Object(le.a)(e,["className","disabled","urlInvalid","children","style","width","height"]),l=E()(x("image-plus","image-item",r&&"disabled",n&&"url-invalid-border"),t),u=Object.assign({},{width:i,height:c},o);return w.a.createElement("div",Object.assign({},s,{style:u,tabIndex:r?-1:0,className:l}),a||w.a.createElement("div",{className:x("indicator",n&&"url-invalid-indicator")}))};fe.defaultProps={width:80,height:80};var he=function(e){Object(l.a)(n,e);var r=ue(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).beforeUpload=t.beforeUpload.bind(Object(s.a)(t)),t.handleMouseDown=t.handleMouseDown.bind(Object(s.a)(t)),t.handleKeyDown=t.handleKeyDown.bind(Object(s.a)(t)),t.state={urlInvalid:!1},t.timeout=null,t}return Object(c.a)(n,[{key:"beforeUpload",value:function(c,s){var l=this;return new Promise(function(n,a){var o=l.props.validator.imageSize,i={},e=new FileReader;e.onload=function(e){var t=e.target.result;i.data=t;var r=new window.Image;r.onerror=function(){l.setState(Object(y.a)(function(e){e.urlInvalid=!0})),a()},r.onload=function(){if(o){var e=o(r);e instanceof Error&&(s(e,c)||a(),i.status=3,i.message=e.message),n(i)}else n(i)},r.src=t},e.readAsDataURL(c)})}},{key:"handleKeyDown",value:function(e){this.setState({urlInvalid:!1}),13===e.keyCode&&e.target.click()}},{key:"handleMouseDown",value:function(){this.setState({urlInvalid:!1})}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=t.width,a=t.height,o=t.ignorePreview,i=Object(le.a)(t,["children","width","height","ignorePreview"]),c=this.state.urlInvalid;c&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.setState({urlInvalid:!1})},3e3));var s={width:n,height:a};return w.a.createElement(se,Object.assign({},i,{imageStyle:s,beforeUpload:o?void 0:this.beforeUpload}),w.a.createElement(fe,{disabled:this.props.disabled,style:s,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,urlInvalid:c},r),c&&w.a.createElement("div",{style:{width:"100%",position:"relative"}},w.a.createElement("div",{className:x("url-invalid-message")},Object(ee.a)("urlInvalidMsg"))))}}]),n}(h.PureComponent);he.defaultProps={accept:"image/*",height:80,validator:{},width:80};var de=he,pe=r(66);function ve(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var me=function(e){13===e.keyCode&&e.target.click()},be=function(e){Object(l.a)(n,e);var r=ve(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={progress:-1},t.handleError=t.handleError.bind(Object(s.a)(t)),t.handleSuccess=t.handleSuccess.bind(Object(s.a)(t)),t.handleProgress=t.handleProgress.bind(Object(s.a)(t)),t.handleStart=t.handleChange.bind(Object(s.a)(t),0),t.handleOver=t.handleChange.bind(Object(s.a)(t),-1),t.handleUpload=t.handleUpload.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({progress:e})}},{key:"handleProgress",value:function(e){this.handleChange(e.process)}},{key:"handleError",value:function(e){var t=this.props.onError;t&&t(e),this.handleOver()}},{key:"handleSuccess",value:function(){var e=this.props.onSuccess;e&&e.apply(void 0,arguments),this.handleOver()}},{key:"handleUpload",value:function(e){0<=this.state.progress&&e.stopPropagation()}},{key:"renderLoadingView",value:function(e){var t,r=this.props,n=r.placeholder,a=r.loading;return Object(h.isValidElement)(a)?w.a.createElement("span",null,a):w.a.createElement("span",null,(t=e,w.a.createElement("span",{style:{display:"inline-block",marginRight:8}},w.a.createElement(N.a,{size:10,name:"ring",color:t}))),"string"==typeof a?a:n)}},{key:"render",value:function(){var e=this.props,t=e.placeholder,r=e.type,n=Object(le.a)(e,["placeholder","type"]),a=0<=this.state.progress,o={right:a?"".concat(100-this.state.progress,"%"):"100%"};return w.a.createElement(se,Object.assign({},n,{limit:void 0,onProgress:this.handleProgress,onStart:this.handleStart,showUploadList:!1,onError:this.handleError,onSuccess:this.handleSuccess}),w.a.createElement(pe.a,{tabIndex:n.disabled?-1:0,disabled:n.disabled,className:x("button",a&&"uploading"),type:r,onClick:this.handleUpload,onKeyDown:me},a&&[w.a.createElement("div",{key:"cover",className:x("cover")}),w.a.createElement("div",{key:"bg",style:o,className:x("bg")},this.renderLoadingView("#fff"))],w.a.createElement("span",null,a?this.renderLoadingView():t)))}}]),n}(m.b);be.defaultProps={type:"primary"};var ye=be;function ge(n){return function(){var e,t=Object(f.a)(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(f.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(u.a)(this,e)}}var Oe,je=function(e){Object(l.a)(n,e);var r=ge(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).handleDrop=t.handleDrop.bind(Object(s.a)(t)),t}return Object(c.a)(n,[{key:"getMatchedFile",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=this.props.accept;return Array.prototype.slice.call(e).filter(function(e){return Object(Q.a)(e,t)})}},{key:"handleDrop",value:function(e){(0,this.props.addFile)({files:e,fromDragger:!0})}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.disabled,n=e.multiple,a=e.limit,o=e.accept;return w.a.createElement($,{className:x("dragger-wrapper"),drop:!0,disabled:r,multiple:n||1<a,accept:o,onDrop:this.handleDrop},w.a.createElement("div",{className:x("dragger-area",r&&"disabled")},t))}}]),n}(m.b),ke=Object(n.a)(se);ke.Image=Object(n.a)(de),ke.ImageHandler=fe,ke.Button=Object(n.a)(ye),ke.Dragger=(Oe=je,function(t){return w.a.createElement(Y.Consumer,null,function(e){return w.a.createElement(Oe,Object.assign({},t,e))})}),ke.displayName="ShineoutUpload",ke.Image.displayName="ShineoutImageUpload",ke.Button.displayName="ShineoutButtonUpload",ke.Dragger.displayName="ShineoutDraggerUpload";t.a=ke},601:function(e,t,r){e.exports=r(602)},602:function(e,t,r){var n=function(i){"use strict";var s,e=Object.prototype,u=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},a=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o,i,c,s,a=t&&t.prototype instanceof b?t:b,l=Object.create(a.prototype),u=new C(n||[]);return l._invoke=(o=e,i=r,c=u,s=h,function(e,t){if(s===p)throw new Error("Generator is already running");if(s===v){if("throw"===e)throw t;return S()}for(c.method=e,c.arg=t;;){var r=c.delegate;if(r){var n=E(r,c);if(n){if(n===m)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(s===h)throw s=v,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s=p;var a=f(o,i,c);if("normal"===a.type){if(s=c.done?v:d,a.arg===m)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(s=v,c.method="throw",c.arg=a.arg)}}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}i.wrap=c;var h="suspendedStart",d="suspendedYield",p="executing",v="completed",m={};function b(){}function l(){}function y(){}var g={};g[a]=function(){return this};var O=Object.getPrototypeOf,j=O&&O(O(P([])));j&&j!==e&&u.call(j,a)&&(g=j);var k=y.prototype=b.prototype=Object.create(g);function R(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function w(s,l){var t;this._invoke=function(r,n){function e(){return new l(function(e,t){!function t(e,r,n,a){var o=f(s[e],s,r);if("throw"!==o.type){var i=o.arg,c=i.value;return c&&"object"==typeof c&&u.call(c,"__await")?l.resolve(c.__await).then(function(e){t("next",e,n,a)},function(e){t("throw",e,n,a)}):l.resolve(c).then(function(e){i.value=e,n(i)},function(e){return t("throw",e,n,a)})}a(o.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function E(e,t){var r=e.iterator[t.method];if(r===s){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=s,E(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=s),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=s,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:s,done:!0}}return l.prototype=k.constructor=y,(y.constructor=l).displayName=o(y,n,"GeneratorFunction"),i.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,o(e,n,"GeneratorFunction")),e.prototype=Object.create(k),e},i.awrap=function(e){return{__await:e}},R(w.prototype),w.prototype[r]=function(){return this},i.AsyncIterator=w,i.async=function(e,t,r,n,a){void 0===a&&(a=Promise);var o=new w(c(e,t,r,n),a);return i.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},R(k),o(k,n,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},i.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=s)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=s),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var a=this.tryEntries[t],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var i=u.call(a,"catchLoc"),c=u.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=s),m}},i}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},603:function(e,t,r){"use strict";function s(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function n(c){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=c.apply(e,i);function a(e){s(n,t,r,a,o,"next",e)}function o(e){s(n,t,r,a,o,"throw",e)}a(void 0)})}}r.d(t,"a",function(){return n})},604:function(e,t){},897:function(e,t){}}]);