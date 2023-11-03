(function(){"use strict";var t={5536:function(t,o,e){var s=e(6369),n=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("Map")],1)},i=[],a=function(){var t=this,o=t._self._c;return o("div",[o("l-map",{ref:"map",staticClass:"map",staticStyle:{height:"100%",", width":"100%"},attrs:{center:t.center,zoom:t.zoom,zoomAnimation:!0,options:t.mapOptions},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[t.tracking?o("l-marker",{attrs:{"lat-lng":t.currentLocation}}):t._e(),o("pop1",{staticClass:"popup",class:{show:t.popVal1},attrs:{show:t.popVal1},on:{close:t.closeP}}),o("pop2",{staticClass:"popup",class:{show:t.popVal2},attrs:{show:t.popVal2},on:{close:t.closeP}}),o("pop3",{staticClass:"popup",class:{show:t.popVal3},attrs:{show:t.popVal3},on:{close:t.closeP}}),o("pop4",{staticClass:"popup",class:{show:t.popVal4},attrs:{show:t.popVal4},on:{close:t.closeP}}),o("pop5",{staticClass:"popup",class:{show:t.popVal5},attrs:{show:t.popVal5},on:{close:t.closeP}}),o("l-tile-layer",{attrs:{url:t.url}}),o("input",{staticClass:"my-location-button",class:{"tracking-button":t.tracking},attrs:{type:"button",value:"내 위치"},on:{click:t.goToMyLocation}}),o("input",{staticClass:"center-button",attrs:{type:"button",value:"탐방로"},on:{click:t.goToCenter}})],1)],1)},l=[],r=e(3512),p=e(9926),c=e(7530),u=e(3153),h=e.n(u),m=function(){var t=this,o=t._self._c;return t.show?o("div",{staticClass:"black-bg"},[o("div",{staticClass:"white-bg"},[o("button",{staticClass:"close-button",on:{click:t.closeP}},[t._v("닫기")]),o("h4",[t._v(" 팝업창1 만들거임")]),o("p",[t._v(" 마커1 누르면 뜨는 팝업창 ! ")]),o("div",{attrs:{align:"center",justipy:"center"}},[o("img",{attrs:{src:"",id:"photoimg",width:"100px",height:"100px"}}),o("input",{attrs:{type:"file",name:"photofile",id:"photofile",accept:"image/*",capture:"camera"},on:{change:t.onPhotoFileChange}}),o("input",{staticClass:"cam-button",attrs:{type:"button",value:"!!!카메라!!!"},on:{click:t.triggerCamera}})])])]):t._e()},d=[],g={props:{show:{type:Boolean,required:!0}},methods:{closeP(){this.$emit("close")},triggerCamera(){const t=this.$el.querySelector("#photofile");t.click()},onPhotoFileChange(t){let o;o=window.FileReader?t.target.files[0].name:t.target.value.split("/").pop().split("\\").pop(),console.log("파일 사이즈 : "+t.target.files[0].size),console.log("파일명 : "+o),this.previewImage(t.target)},previewImage(t){if(t.files&&t.files[0]){let o=new FileReader;o.onload=t=>{this.$el.querySelector("#photoimg").setAttribute("src",t.target.result),this.$el.querySelector("#photoimg").style.display="block"},o.readAsDataURL(t.files[0])}}}},f=g,v=e(1001),b=(0,v.Z)(f,m,d,!1,null,null,null),_=b.exports,w=function(){var t=this,o=t._self._c;return t.show?o("div",{staticClass:"black-bg"},[o("div",{staticClass:"white-bg"},[o("button",{on:{click:t.closeP}},[t._v("닫기")]),o("h4",[t._v(" 쉿! 가만히 앉아 눈을 감아요")]),o("p",[t._v(" 60초 동안 주변 소리에 귀 기울여 볼까요? ")]),o("p",[t._v(" 어떤 소리가 들리나요? ")]),o("p",[t._v(" 들리는 소리를 글로 표현해 적습니다 ")]),o("p",[t._v(" 예) 째액째액, 까악까악, 윙윙 ")]),o("br"),o("br"),t._m(0),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userResponse,expression:"userResponse"}],attrs:{placeholder:"여기에 소리를 표현해보세요..."},domProps:{value:t.userResponse},on:{input:function(o){o.target.composing||(t.userResponse=o.target.value)}}}),o("button",{on:{click:t.submitResponse}},[t._v("제출하기")])])]):t._e()},Z=[function(){var t=this,o=t._self._c;return o("figure",[o("figcaption",[t._v("새소리를 들어보세요!!!")]),o("audio",{attrs:{controls:"",src:"/99941F4C5CF91EAC0F.mp3"}},[o("a",{attrs:{href:"/99941F4C5CF91EAC0F.mp3"}},[t._v("Download audio")])])])}],k={props:{show:{type:Boolean,required:!0}},data(){return{userResponse:""}},methods:{closeP(){this.$emit("close")},submitResponse(){console.log(this.userResponse),this.userResponse=""}}},C=k,P=(0,v.Z)(C,w,Z,!1,null,null,null),y=P.exports,I=function(){var t=this,o=t._self._c;return t.show?o("div",{staticClass:"black-bg"},[o("div",{staticClass:"white-bg"},[o("h4",[t._v(" 팝업창3 만들거임")]),o("p",[t._v(" 마커3 누르면 뜨는 팝업창 ! ")]),o("button",{on:{click:t.closeP}},[t._v("닫기")])])]):t._e()},O=[],V={props:{show:{type:Boolean,required:!0}},methods:{closeP(){this.$emit("close")}}},x=V,$=(0,v.Z)(x,I,O,!1,null,null,null),j=$.exports,R=function(){var t=this,o=t._self._c;return t.show?o("div",{staticClass:"black-bg"},[o("div",{staticClass:"white-bg"},[o("h4",[t._v(" 팝업창4 만들거임")]),o("p",[t._v(" 마커4 누르면 뜨는 팝업창 ! ")]),o("button",{on:{click:t.closeP}},[t._v("닫기")])])]):t._e()},z=[],U={props:{show:{type:Boolean,required:!0}},methods:{closeP(){this.$emit("close")}}},A=U,F=(0,v.Z)(A,R,z,!1,null,null,null),L=F.exports,M=function(){var t=this,o=t._self._c;return t.show?o("div",{staticClass:"black-bg"},[o("div",{staticClass:"white-bg"},[o("h4",[t._v(" 팝업창5 만들거임")]),o("p",[t._v(" 마커5 누르면 뜨는 팝업창 ! ")]),o("button",{on:{click:t.closeP}},[t._v("닫기")])])]):t._e()},T=[],B={props:{show:{type:Boolean,required:!0}},methods:{closeP(){this.$emit("close")}}},D=B,E=(0,v.Z)(D,M,T,!1,null,null,null),q=E.exports,G=e(7093),S=e(8858),X=e(6431),N=(e(2640),{data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",center:[37.40436362096728,128.0495492913938],zoom:15,previousZoom:null,bounds:null,popVal1:!1,popVal2:!1,popVal3:!1,popVal4:!1,popVal5:!1,isZoomIn:!1,watchID:null,tracking:!1,currentLocation:[0,0],mapOptions:{minZoom:14,maxZoom:18}}},components:{LMap:r.Z,LTileLayer:p.Z,LMarker:c.Z,pop1:_,pop2:y,pop3:j,pop4:L,pop5:q},mounted(){delete u.Icon.Default.prototype._getIconUrl,u.Icon.Default.mergeOptions({iconRetinaUrl:X,iconUrl:G,shadowUrl:S}),this.loadGPX()},methods:{zoomUpdated(t){this.zoom=t},centerUpdated(t){this.center=t},boundsUpdated(t){this.bounds=t},openP(t){setTimeout((()=>{this["popVal"+(t+1)]=!0}),700)},closeP(){this.popVal1=!1,this.popVal2=!1,this.popVal3=!1,this.popVal4=!1,this.popVal5=!1,this.isZoomIn&&(this.$refs.map.mapObject.setZoom(this.previousZoom),this.isZoomIn=!1)},goToMyLocation(){this.tracking?navigator.geolocation&&this.watchID&&(navigator.geolocation.clearWatch(this.watchID),this.watchID=null):navigator.geolocation?this.watchID=navigator.geolocation.watchPosition((t=>{this.currentLocation=[t.coords.latitude,t.coords.longitude],this.$refs.map.mapObject.setView(this.currentLocation)})):alert("브라우저에서 Geolocation을 지원하지 않습니다."),this.tracking=!this.tracking},goToCenter(){this.$refs.map.mapObject.setView([37.408473,128.045787],14)},loadGPX(){const t="/REMEMBER/치악산 탐방서비스 등산로.gpx";new(h().GPX)(t,{async:!0,marker_options:{startIconUrl:"",endIconUrl:"",shadowUrl:"",wptIconUrls:{"":e(711)}}}).on("addpoint",(t=>{let o=t.point._popup._content;o=o.replace(/<[^>]*>?/gm,""),t.point.on("click",(()=>{switch(o){case"치악산국립공원사무소":this.isZoomIn||(this.previousZoom=this.zoom,this.$refs.map.mapObject.setZoomAround([t.point._latlng.lat,t.point._latlng.lng],36),this.isZoomIn=!0),this.openP(0);break;case"구룡자동차야영장":this.isZoomIn||(this.previousZoom=this.zoom,this.$refs.map.mapObject.setZoomAround([t.point._latlng.lat,t.point._latlng.lng],36),this.isZoomIn=!0),this.openP(1);break;case"황장목숲길":this.isZoomIn||(this.previousZoom=this.zoom,this.$refs.map.mapObject.setZoomAround([t.point._latlng.lat,t.point._latlng.lng],36),this.isZoomIn=!0),this.openP(2);break;case"구룡사":this.isZoomIn||(this.previousZoom=this.zoom,this.$refs.map.mapObject.setZoomAround([t.point._latlng.lat,t.point._latlng.lng],36),this.isZoomIn=!0),this.openP(3);break;case"자생식물관찰원":this.isZoomIn||(this.previousZoom=this.zoom,this.$refs.map.mapObject.setZoomAround([t.point._latlng.lat,t.point._latlng.lng],36),this.isZoomIn=!0),this.openP(4);break}}))})).on("loaded",(t=>{this.$refs.map.mapObject.fitBounds(t.target.getBounds())})).addTo(this.$refs.map.mapObject)}}}),W=N,H=(0,v.Z)(W,a,l,!1,null,null,null),J=H.exports,K={name:"App",components:{Map:J}},Q=K,Y=(0,v.Z)(Q,n,i,!1,null,null,null),tt=Y.exports,ot=e(4529);s.ZP.config.productionTip=!1,s.ZP.use(ot.Z),new s.ZP({render:t=>t(tt)}).$mount("#app")},711:function(t,o,e){t.exports=e.p+"img/ggomi.9ccaeea9.png"}},o={};function e(s){var n=o[s];if(void 0!==n)return n.exports;var i=o[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,s,n,i){if(!s){var a=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],i=t[c][2];for(var l=!0,r=0;r<s.length;r++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[r])}))?s.splice(r--,1):(l=!1,i<a&&(a=i));if(l){t.splice(c--,1);var p=n();void 0!==p&&(o=p)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/REMEMBER/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,s){var n,i,a=s[0],l=s[1],r=s[2],p=0;if(a.some((function(o){return 0!==t[o]}))){for(n in l)e.o(l,n)&&(e.m[n]=l[n]);if(r)var c=r(e)}for(o&&o(s);p<a.length;p++)i=a[p],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},s=self["webpackChunkvue_leaflet"]=self["webpackChunkvue_leaflet"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(5536)}));s=e.O(s)})();
//# sourceMappingURL=app.9f73aede.js.map