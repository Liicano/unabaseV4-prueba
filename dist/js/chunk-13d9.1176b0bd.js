(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d9"],{"2ee3":function(e,n,t){var l,o;(function(i,r){if(null===i)throw new Error("Google-maps package can be used only in browser");l=r,o="function"===typeof l?l.call(n,t,n,e):l,void 0===o||(e.exports=o)})("undefined"!==typeof window?window:null,function(){"use strict";var e="3.31",n=null,t=null,l=!1,o=[],i=[],r=null,a={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};a.VERSION=e,a.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",a._googleMockApiObject={},a.load=function(e){null===t?!0===l?e&&o.push(e):(l=!0,window[a.WINDOW_CALLBACK_NAME]=function(){u(e)},a.createLoader()):e&&e(t)},a.createLoader=function(){n=document.createElement("script"),n.type="text/javascript",n.src=a.createUrl(),document.body.appendChild(n)},a.isLoaded=function(){return null!==t},a.createUrl=function(){var e=a.URL;return e+="?callback="+a.WINDOW_CALLBACK_NAME,a.KEY&&(e+="&key="+a.KEY),a.LIBRARIES.length>0&&(e+="&libraries="+a.LIBRARIES.join(",")),a.CLIENT&&(e+="&client="+a.CLIENT),a.CHANNEL&&(e+="&channel="+a.CHANNEL),a.LANGUAGE&&(e+="&language="+a.LANGUAGE),a.REGION&&(e+="&region="+a.REGION),a.VERSION&&(e+="&v="+a.VERSION),e},a.release=function(u){var s=function(){a.KEY=null,a.LIBRARIES=[],a.CLIENT=null,a.CHANNEL=null,a.LANGUAGE=null,a.REGION=null,a.VERSION=e,t=null,l=!1,o=[],i=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[a.WINDOW_CALLBACK_NAME]&&delete window[a.WINDOW_CALLBACK_NAME],null!==r&&(a.createLoader=r,r=null),null!==n&&(n.parentElement.removeChild(n),n=null),u&&u()};l?a.load(function(){s()}):s()},a.onLoad=function(e){i.push(e)},a.makeMock=function(){r=a.createLoader,a.createLoader=function(){window.google=a._googleMockApiObject,window[a.WINDOW_CALLBACK_NAME]()}};var u=function(e){var n;for(l=!1,null===t&&(t=window.google),n=0;n<i.length;n++)i[n](t);for(e&&e(t),n=0;n<o.length;n++)o[n](t);o=[]};return a})},"39eb":function(e,n,t){"use strict";var l=t("6119"),o=t.n(l);o.a},"52d7":function(e,n,t){"use strict";t.d(n,"a",function(){return l});var l="YOUR_API_KEY"},6119:function(e,n,t){},"78d0":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"map"}})},o=[],i=t("2ee3"),r=t.n(i),a=t("52d7");r.a.KEY=a["a"];var u={data:function(){return{nav:null}},methods:{initMap:function(e){var n=new e.maps.LatLng(40.748817,-73.985428),t={zoom:13,center:n,scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},l=new e.maps.Map(document.getElementById("map"),t),o=new e.maps.Marker({position:n,title:"Regular Map!"});o.setMap(l)}},mounted:function(){var e=this;r.a.load(function(n){e.initMap(n)})}},s=u,c=(t("39eb"),t("2877")),p=Object(c["a"])(s,l,o,!1,null,null,null);p.options.__file="FullScreenMap.vue";n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-13d9.1176b0bd.js.map