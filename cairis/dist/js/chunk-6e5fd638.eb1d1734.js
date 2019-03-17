(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e5fd638","chunk-f72b1efa","chunk-2d0b6727","chunk-2d0ac01b","chunk-2d0abffc"],{1854:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"ucDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?n("b-container",[n("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[n("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1),n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[n("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),n("b-table",{attrs:{bordered:"",small:"",items:e.actors,fields:e.actorTableFields}}),n("b-form-group",{attrs:{label:"Preconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePreconditions"}},[n("b-form-textarea",{attrs:{id:"thePreconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.preconditions,callback:function(t){e.preconditions=t},expression:"preconditions"}})],1),n("b-table",{attrs:{bordered:"",small:"",items:e.steps,fields:e.stepTableFields}}),n("b-form-group",{attrs:{label:"Postconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePostconditions"}},[n("b-form-textarea",{attrs:{id:"thePostconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.postconditions,callback:function(t){e.postconditions=t},expression:"postconditions"}})],1)],1):e._e()],1)},o=[],s={name:"use-case-modal",props:{environment:String,usecase:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.usecase,actorTableFields:{actor:{label:"Actor"}},stepTableFields:{no:{label:"No"},step:{label:"Step"}}}},watch:{usecase:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Use Case"},actors:function(){return void 0!=this.objt?this.objt.theActors.map(function(e){return{actor:e}}):[]},preconditions:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].thePreCond:""},postconditions:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].thePostCond:""},steps:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theSteps.map(function(e,t){return{no:t+1,step:e.theStepText}}):[]}},methods:{show:function(){this.$refs.ucDialog.show()},updateData:function(){this.objt=this.usecase,this.theEnvironmentName=this.environment}}},r=s,a=n("2877"),l=Object(a["a"])(r,i,o,!1,null,null,null);t["default"]=l.exports},1864:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},o=[],s=(n("6762"),n("2fdb"),n("bc3a")),r=n.n(s),a=n("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var n=this;r.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){n.items=t.data,n.items=n.items.length>0?n.items.filter(function(e){if(!n.existing.includes(e))return e}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,d=n("2877"),u=Object(d["a"])(c,i,o,!1,null,null,null);t["default"]=u.exports},"1ccb":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"assetDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?n("b-container",[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[n("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:e.objt.theType,callback:function(t){e.$set(e.objt,"theType",t)},expression:"objt.theType"}})],1),n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-for":"theDescription"}},[n("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),n("b-form-group",{attrs:{label:"Significance","label-class":"font-weight-bold text-sm-left","label-for":"theSignificance"}},[n("b-form-textarea",{attrs:{id:"theSignificance",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theSignificance,callback:function(t){e.$set(e.objt,"theSignificance",t)},expression:"objt.theSignificance"}})],1),n("b-table",{attrs:{bordered:"",small:"",items:e.notNone,fields:e.propTableFields}})],1):e._e()],1)},o=[],s={name:"asset-modal",props:{environment:String,asset:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.asset,propTableFields:{name:{label:"Property"},value:{label:"Value"},rationale:{label:"Rationale"}}}},watch:{asset:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Asset"},notNone:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theProperties.filter(function(e){return"None"!=e.value}):[]}},methods:{show:function(){this.$refs.assetDialog.show()},updateData:function(){this.objt=this.asset,this.theEnvironmentName=this.environment}}},r=s,a=n("2877"),l=Object(a["a"])(r,i,o,!1,null,null,null);t["default"]=l.exports},2906:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dataflowdiagram"},[n("asset-modal",{ref:"assetDialog",attrs:{environment:this.theEnvironmentName,asset:this.theSelectedObject}}),n("use-case-modal",{ref:"ucDialog",attrs:{environment:this.theEnvironmentName,usecase:this.theSelectedObject}}),n("b-card",{attrs:{"no-body":""}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",[n("b-form-group",{attrs:{label:"Environment","label-for":"dfdEnvironment","label-cols":4}},[n("dimension-select",{attrs:{id:"dfdEnvironment",dimension:"environment"},on:{"dimension-select-change":e.environmentSelected}})],1)],1),""!=e.theEnvironmentName?n("b-col",[n("b-form-group",{attrs:{label:"Filter","label-for":"dfdFilter","label-cols":2}},[n("dimension-select",{attrs:{id:"dfdFilter",dimension:"dfd_filter",environment:e.theEnvironmentName,initial:"None",includeall:!0},on:{"dimension-select-change":e.filterSelected}})],1)],1):e._e()],1)],1)],1),n("b-container",{attrs:{fluid:""}},[""!=e.theEnvironmentName?n("graphical-model",{attrs:{api:e.dfdURI},on:{"graphical-model-url":e.nodeClicked}}):e._e()],1)],1)},o=[],s=n("bc3a"),r=n.n(s),a=n("e342"),l=n("1864"),c=n("1ccb"),d=n("1854"),u=n("61da"),h={computed:{dfdURI:function(){return"/api/dataflows/diagram/environment/"+this.theEnvironmentName+"/filter/"+this.theFilterName}},data:function(){return{theEnvironmentName:"",theFilterName:"None",theSelectedObject:null}},components:{GraphicalModel:a["default"],DimensionSelect:l["default"],AssetModal:c["default"],UseCaseModal:d["default"]},methods:{nodeClicked:function(e){var t=this,n=e.slice(5).substring(0,e.slice(5).indexOf("/"));-1!=["assets","usecases"].indexOf(n)&&r.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){t.theSelectedObject=e.data,"assets"==n?t.$refs.assetDialog.show():"usecases"==n&&t.$refs.ucDialog.show()}).catch(function(e){u["a"].$emit("operation-failure",e)})},environmentSelected:function(e){this.theEnvironmentName=e,this.theFilterName="None",this.$refs.dfdFilter.$emit("dimension-select-change",this.theFilterName)},filterSelected:function(e){this.theFilterName=e}}},m=h,f=n("2877"),b=Object(f["a"])(m,i,o,!1,null,null,null);t["default"]=b.exports},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),o=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(e){return!!~o(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}},6762:function(e,t,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},aae3:function(e,t,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},d2c8:function(e,t,n){var i=n("aae3"),o=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}}}]);
//# sourceMappingURL=chunk-6e5fd638.eb1d1734.js.map