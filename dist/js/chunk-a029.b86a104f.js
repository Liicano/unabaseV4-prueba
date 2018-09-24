(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a029"],{"0cde":function(t){t.exports=[{}]},"716b":function(t,e,n){(function(e,n){t.exports=n()})(0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=9)}([function(t,e,n){"use strict";e.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(t,e,n){"use strict";var i=n(2),s=n(5),a=n(0);e.a=function(t,e){if(e.value){var o=n.i(s.a)(a.a,e.value);if("INPUT"!==t.tagName.toLocaleUpperCase()){var d=t.getElementsByTagName("input");1!==d.length||(t=d[0])}t.oninput=function(){var e=t.value.length-t.selectionEnd;t.value=n.i(i.a)(t.value,o),e=Math.max(e,o.suffix.length),e=t.value.length-e,e=Math.max(e,o.prefix.length+1),n.i(i.b)(t,e),t.dispatchEvent(n.i(i.c)("change"))},t.onfocus=function(){n.i(i.b)(t,t.value.length-o.suffix.length)},t.oninput(),t.dispatchEvent(n.i(i.c)("input"))}}},function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.a;"number"==typeof t&&(t=t.toFixed(o(e.precision)));var n=t.indexOf("-")>=0?"-":"",i=a(t),s=c(i,e.precision),d=u(s).split("."),m=d[0],f=d[1];return m=l(m,e.thousands),e.prefix+n+r(m,f,e.decimal)+e.suffix}function s(t,e){var n=t.indexOf("-")>=0?-1:1,i=a(t),s=c(i,e);return parseFloat(s)*n}function a(t){return u(t).replace(/\D+/g,"")||"0"}function o(t){return d(0,t,20)}function d(t,e,n){return Math.max(t,Math.min(e,n))}function c(t,e){var n=Math.pow(10,e);return(parseFloat(t)/n).toFixed(o(e))}function l(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+e)}function r(t,e,n){return e?t+n+e:t}function u(t){return t?t.toString():""}function m(t,e){var n=function(){t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function f(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var p=n(0);n.d(e,"a",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return f})},function(t,e,n){"use strict";function i(t,e){e&&Object.keys(e).map(function(t){d.a[t]=e[t]}),t.directive("money",o.a),t.component("money",a.a)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),a=n.n(s),o=n(1),d=n(0);n.d(e,"Money",function(){return a.a}),n.d(e,"VMoney",function(){return o.a}),n.d(e,"options",function(){return d.a}),n.d(e,"VERSION",function(){return c});var c="0.8.1";e.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(0),a=n(2);e.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return s.a.precision}},decimal:{type:String,default:function(){return s.a.decimal}},thousands:{type:String,default:function(){return s.a.thousands}},prefix:{type:String,default:function(){return s.a.prefix}},suffix:{type:String,default:function(){return s.a.suffix}}},directives:{money:i.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(t,e){var i=n.i(a.a)(t,this.$props);i!==this.formattedValue&&(this.formattedValue=i)}}},methods:{change:function(t){this.$emit("input",this.masked?t.target.value:n.i(a.d)(t.target.value,this.precision))}}}},function(t,e,n){"use strict";e.a=function(t,e){return t=t||{},e=e||{},Object.keys(t).concat(Object.keys(e)).reduce(function(n,i){return n[i]=void 0===e[i]?t[i]:e[i],n},{})}},function(t,e,n){var i=n(7)(n(4),n(8),null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i){var s,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,a=t.default);var d="function"==typeof a?a.options:a;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),n&&(d._scopeId=n),i){var c=d.computed||(d.computed={});Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}})}return{esModule:s,exports:a,options:d}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:t.precision,decimal:t.decimal,thousands:t.thousands,prefix:t.prefix,suffix:t.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:t.formattedValue},on:{change:t.change}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])})},a839:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-small-size-100 md-medium-size-60 md-small-size-60 md-size-60"},[n("md-card",[n("md-card-header",{staticClass:"md-card-header-icon md-card-header-green"},[n("div",{staticClass:"card-icon"},[n("md-icon",[t._v("monetization_on")])],1),n("h4",{staticClass:"title"},[t._v("Nueva venta")])]),n("md-card-content",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-small-size-50 md-size-50"},[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-small-size-70 md-size-80"},[n("div",{staticClass:"md-autocomplete md-success green"},[n("md-autocomplete",{staticClass:"search md-success",attrs:{id:"autocompletadoUsers","md-options":t.employees,"md-open-on-focus":!1},model:{value:t.ventaObject.responsable,callback:function(e){t.$set(t.ventaObject,"responsable",e)},expression:"ventaObject.responsable"}},[(t.$route.meta.rtlActive,n("label",[t._v("Responsable")]))])],1)]),n("div",{staticClass:"md-layout-item md-small-size-10 md-size-10"},[n("md-button",{staticClass:"md-info md-just-icon md-round"},[n("md-icon",[t._v("people")])],1),n("md-tooltip",{attrs:{direction:"bottom"}},[t._v("Mis clientes")])],1)])])]),n("center",[n("h3",[t._v("Datos de la venta")])]),n("md-divider"),n("br"),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-45 md-small-size-45 md-size-45"},[n("div",{staticClass:"md-layout"},[n("label",{staticClass:"md-layout-item md-size-25 md-form-label"},[t._v("\n             Asunto\n            ")]),n("div",{staticClass:"md-layout-item"},[n("md-field",[n("md-input",{attrs:{type:"text"},model:{value:t.ventaObject.asunto,callback:function(e){t.$set(t.ventaObject,"asunto",e)},expression:"ventaObject.asunto"}})],1)],1)])]),n("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-45 md-small-size-45 md-size-45"},[n("div",{staticClass:"md-layout"},[n("label",{staticClass:"md-layout-item md-size-25 md-form-label"},[t._v("\n             Nota\n            ")]),n("div",{staticClass:"md-layout-item"},[n("md-field",[n("md-input",{attrs:{type:"text"},model:{value:t.ventaObject.nota,callback:function(e){t.$set(t.ventaObject,"nota",e)},expression:"ventaObject.nota"}})],1)],1)])])]),n("br"),n("center",[n("h3",[t._v("Agregar items")])]),n("md-divider"),n("br"),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-xsmall-size-20 md-medium-size-25 md-small-size-25 md-size-25"})])],1),n("md-card-actions",{attrs:{"md-alignment":"right"}},[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-size-85 md-small-size-100"},[t.showInputs?t._e():n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-size-55"},[n("div",{staticClass:"md-autocomplete md-success green"},[n("md-autocomplete",{staticClass:"search md-success",attrs:{"md-options":t.itemsModel,"md-open-on-focus":!1},model:{value:t.itemToAdd.nombre,callback:function(e){t.$set(t.itemToAdd,"nombre",e)},expression:"itemToAdd.nombre"}},[(t.$route.meta.rtlActive,n("label",[t._v("Nombre del item")]))])],1)]),n("div",{staticClass:"md-layout-item md-size-15"},[n("md-field",[n("label",[t._v("#")]),n("md-input",{attrs:{type:"number"},model:{value:t.itemToAdd.cantidad,callback:function(e){t.$set(t.itemToAdd,"cantidad",e)},expression:"itemToAdd.cantidad"}})],1)],1),n("div",{staticClass:"md-layout-item md-size-25"},[n("md-field",[n("label",[t._v("Precio")]),n("md-input",{attrs:{type:"number"},model:{value:t.itemToAdd.precio,callback:function(e){t.$set(t.itemToAdd,"precio",e)},expression:"itemToAdd.precio"}})],1)],1)])]),n("div",{staticClass:"md-layout-item md-size-15 md-small-size-100 pull-right",attrs:{"md-alignment":"right"}},[n("div",{staticClass:"pull-right",attrs:{align:"left"}},[t.showInputs?n("div",[n("md-button",{staticClass:"md-warning md-just-icon md-round",on:{click:function(e){t.changeBtnStatus()}}},[n("md-icon",[t._v("add")])],1),n("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("Nuevo item")])],1):t._e(),n("center",[t.showInputs?t._e():n("div",[n("md-button",{staticClass:"md-success md-just-icon md-round",on:{click:function(e){t.saveItem(t.itemToAdd),t.notifyVue("top","center","success")}}},[n("md-icon",[t._v("check")])],1),n("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("Guardar item")])],1)])],1)])])])],1)],1),t.smallAlertModal?n("modal",{on:{close:t.smallAlertModalHide}},[n("template",{slot:"header"},[n("md-button",{staticClass:"md-simple md-just-icon md-round modal-default-button",on:{click:t.smallAlertModalHide}},[n("md-icon",[t._v("clear")])],1)],1),n("template",{slot:"body"},[n("p",[t._v("Are you sure you want to do this?")])]),n("template",{slot:"footer"},[n("md-button",{staticClass:"md-simple",on:{click:t.smallAlertModalHide}},[t._v("Never Mind")]),n("md-button",{staticClass:"md-success md-simple"},[t._v("Yes")])],1)],2):t._e(),n("div",{staticClass:"md-layout-item md-small-size-100 md-medium-size-40 md-small-size-40 md-size-40"},[n("pricing-card",{attrs:{"icon-color":"icon-success"}},[n("md-list",{staticClass:"md-triple-line",staticStyle:{"border-style":"none",width:"100%"},attrs:{slot:"description"},slot:"description"},[t.ventaObject.item.length>0?n("md-content",{staticClass:"md-scrollbar"},t._l(t.ventaObject.item,function(e){return n("md-list-item",{key:e,staticStyle:{padding:"0"}},[n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.nombre)+" "),n("b",[t._v("x")]),t._v(" "+t._s(e.cantidad)+" ")]),n("span",[n("b",[t._v("Precio:  "+t._s(e.precio))])])]),n("div",{staticClass:"md-list-action"},[n("h4",[n("b",[t._v("Subtotal:     $ "+t._s(e.cantidad*e.precio))])])])])})):t._e(),t.ventaObject.item.length<=0?n("md-content",{staticClass:"md-scrollbar"},[n("md-list-item",{staticStyle:{padding:"0"}},[n("div",{staticClass:"md-list-item-text"},[n("center",[n("h3",{staticClass:"vlign-center md-text-danger"},[n("b",[n("i",{staticClass:"fa fa-cart-arrow-down"})])]),t._v("\n                    Venta vacia\n                  ")])],1)]),n("md-list-item",{staticStyle:{padding:"0"}})],1):t._e()],1),n("div",{staticClass:"md-group",attrs:{slot:"footer"},slot:"footer"},[n("md-button",{staticClass:"md-success md-lg",attrs:{slot:"footer","md-alignment":"left"},nativeOn:{click:function(e){t.showSwal("success-message",t.ventaObject.total)}},slot:"footer"},[t._v("FACTURAR")])],1)],1),n("md-card-actions"),n("center",[n("div",{staticClass:"total"},[n("h6",[t._v("Total")]),n("h2",[n("b",[t._v("$")]),t._v(" "+t._s(t.ventaObject.total))]),n("hr",{staticStyle:{"margin-top":"-4%"}})])])],1)],1)])},s=[],a=n("2af9"),o=n("0cde"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-field",[n("money",t._b({staticClass:"md-input"},"money",t.money,!1),[t._v(t._s(t.amount))]),t._v(t._s(t.amount)+"\n   ")],1)],1)},c=[],l=n("716b"),r={props:["amount"],components:{Money:l["Money"]},data:function(){return{money:{decimal:",",thousands:".",prefix:"$ ",suffix:" CLP",precision:0,masked:!0}}}},u=r,m=n("2877"),f=Object(m["a"])(u,d,c,!1,null,null,null);f.options.__file="vMoney.vue";var p=f.exports,v=n("3d20"),b=n.n(v),h={data:function(){return{itemsPrueba:o,itemToAdd:{},ventaObject:{responsable:"",asunto:"",nota:"",item:[],total:0,fecha:""},selectedEmployee:"",employees:["Hector Gonzalez","Simon Gomez","Victor Espinoza"],itemSelectedToAdd:"",itemsModel:["Telefono lg k10","papa","laptop","polera azul adidas"],showInputs:!1}},components:{Tabs:a["s"],Collapse:a["d"],PricingCard:a["m"],vMoney:p,Modal:a["j"]},methods:{saveItem:function(t){this.showInputs=!this.showInputs,this.ventaObject.item.push(t);var e=this.itemToAdd.cantidad*this.itemToAdd.precio;this.ventaObject.total=parseInt(this.ventaObject.total)+parseInt(e)},changeBtnStatus:function(){this.itemToAdd={},this.showInputs=!this.showInputs},notifyVue:function(t,e,n){this.$notify({message:"¡NUEVO ITEM AL CARRITO!",icon:"add_alert",horizontalAlign:e,verticalAlign:t,type:n})},showSwal:function(t,e){var n=this;b()({title:"Venta registrada!",text:"$ "+e+" CLP",type:"success",showCancelButton:!0,confirmButtonClass:"md-button md-success",cancelButtonClass:"md-button md-info",confirmButtonText:"ok",cancelButtonText:"enviar",buttonsStyling:!1}).then(function(t){t.value?(n.ventaObject={},n.$router.push("ventas")):b()({title:"Correo enviado!",text:"hectorluisgonzalezlarreal@gmail.com",type:"success",confirmButtonClass:"md-button md-success",buttonsStyling:!1}).then(function(){n.$router.push("ventas")})})},facturar_venta:function(t){alert(t.asunto)}}},y=h,_=(n("bc6a"),Object(m["a"])(y,i,s,!1,null,"f0d68066",null));_.options.__file="income.vue";e["default"]=_.exports},bc6a:function(t,e,n){"use strict";var i=n("e641"),s=n.n(i);s.a},e641:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a029.b86a104f.js.map