(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93eea556","chunk-41bf07d3","chunk-61f8c9da","chunk-f72b1efa","chunk-5bea572d","chunk-2d0ac01b"],{"0184":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{ref:"associationDialog",attrs:{title:this.dialogTitle},on:{ok:t.onOk}},[t.errors.length?i("p",[i("b",[t._v("Please correct the following error(s):")]),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),i("b-card",[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Asset","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadAssetSelect"}},[i("dimension-select",{ref:"theHeadAssetSelect",attrs:{id:"theHeadAssetSelect",dimension:"template_asset",initial:t.association.association.theHeadAsset},on:{"dimension-select-change":t.headAssetSelected}})],1)],1)],1),t.isArchitecturalPattern?i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadNavSelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNavSelect",options:t.navValues,required:""},model:{value:t.association.association.theHeadNav,callback:function(e){t.$set(t.association.association,"theHeadNav",e)},expression:"association.association.theHeadNav"}})],1)],1)],1):t._e(),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadAdornmentSelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadAdornmentSelect",options:t.typeValues,required:""},model:{value:t.association.association.theHeadAdornment,callback:function(e){t.$set(t.association.association,"theHeadAdornment",e)},expression:"association.association.theHeadAdornment"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Nry","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadNrySelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNrySelect",options:t.nryValues,required:""},model:{value:t.association.association.theHeadNry,callback:function(e){t.$set(t.association.association,"theHeadNry",e)},expression:"association.association.theHeadNry"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadRoleInput"}},[i("b-form-input",{attrs:{id:"theHeadRoleInput"},model:{value:t.association.association.theHeadRole,callback:function(e){t.$set(t.association.association,"theHeadRole",e)},expression:"association.association.theHeadRole"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailRoleInput"}},[i("b-form-input",{attrs:{id:"theTailRoleInput"},model:{value:t.association.association.theTailRole,callback:function(e){t.$set(t.association.association,"theTailRole",e)},expression:"association.association.theTailRole"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Nry","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailNryInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNryInput",options:t.nryValues,required:""},model:{value:t.association.association.theTailNry,callback:function(e){t.$set(t.association.association,"theTailNry",e)},expression:"association.association.theTailNry"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailAdornmentInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailAdornmentInput",options:t.typeValues,required:""},model:{value:t.association.association.theTailAdornment,callback:function(e){t.$set(t.association.association,"theTailAdornment",e)},expression:"association.association.theTailAdornment"}})],1)],1)],1),t.isArchitecturalPattern?i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailNavInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNavInput",options:t.navValues,required:""},model:{value:t.association.association.theTailNav,callback:function(e){t.$set(t.association.association,"theTailNav",e)},expression:"association.association.theTailNav"}})],1)],1)],1):t._e(),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Tail","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailAssetSelect"}},[i("dimension-select",{ref:"theTailAssetSelect",attrs:{id:"theTailAssetSelect",dimension:"template_asset",initial:this.association.association.theTailAsset},on:{"dimension-select-change":t.tailAssetSelected}})],1)],1)],1)],1)],1)],1)},o=[],n=i("1864"),a={name:"component-association-modal",props:{componentAssociation:Object,isArchitecturalPattern:{type:Boolean,default:!0}},data:function(){return{association:this.componentAssociation,errors:[],navValues:["0","1"],typeValues:["Inheritance","Association","Aggregation","Composition","Dependency"],nryValues:["1","*","1..*"]}},components:{DimensionSelect:n["default"]},computed:{dialogTitle:function(){return(this.componentAssociation.update?"Update":"Add")+" Component association"}},methods:{checkForm:function(){return this.errors=[],0==this.association.association.theHeadAsset.length&&this.errors.push("Head Asset is required"),0==this.association.association.theHeadAdornment.length&&this.errors.push("Head Adornment is required"),0==this.association.association.theHeadNry.length&&this.errors.push("Head Multiplicity is required"),0==this.association.association.theTailNry.length&&this.errors.push("Tail Multiplicity is required"),0==this.association.association.theTailAdornment.length&&this.errors.push("Tail Adornment is required"),0==this.association.association.theTailAsset.length&&this.errors.push("Tail Asset is required"),!this.errors.length},show:function(){this.$refs.associationDialog.show()},headAssetSelected:function(t){this.association.association.theHeadAsset=t},tailAssetSelected:function(t){this.association.association.theTailAsset=t},onOk:function(t){this.checkForm()?(this.$emit("association-update",{association:this.association.association,update:this.componentAssociation.update,index:this.componentAssociation.update?this.association.index:-1}),this.$refs.associationDialog.hide()):t.preventDefault()}}},r=a,l=i("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);e["default"]=c.exports},1864:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],n=(i("6762"),i("2fdb"),i("bc3a")),a=i.n(n),r=i("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var i=this;a.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){i.items=e.data,i.items=i.items.length>0?i.items.filter(function(t){if(!i.existing.includes(t))return t}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),t.selected=t.initial}).catch(function(t){r["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,d=i("2877"),u=Object(d["a"])(c,s,o,!1,null,null,null);e["default"]=u.exports},"1e3b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:t.onOk}},[i("b-card",[""==t.environment?i("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e(),""!=t.environment?i("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e()],1)],1)},o=[],n=i("1864"),a={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:n["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(t){this.selected=t},onOk:function(t){0==this.selected.length?(t.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},r=a,l=i("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);e["default"]=c.exports},"2fdb":function(t,e,i){"use strict";var s=i("5ca1"),o=i("d2c8"),n="includes";s(s.P+s.F*i("5147")(n),"String",{includes:function(t){return!!~o(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,i){var s=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,i){"use strict";var s=i("5ca1"),o=i("c366")(!0);s(s.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},aae3:function(t,e,i){var s=i("d3f4"),o=i("2d95"),n=i("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==o(t))}},ba88:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"securitypattern"},[i("component-association-modal",{ref:"assocDialog",attrs:{componentAssociation:t.selectedAssociation,isArchitecturalPattern:!1},on:{"association-update":t.updateStructure}}),i("dimension-modal",{ref:"reqDialog",attrs:{label:"Template requirement",dimension:"template_requirement",existing:t.requirementNames},on:{"dimension-modal-update":t.addPatternRequirement}}),t.errors.length?i("p",[i("b",[t._v("Please correct the following error(s):")]),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),i("b-form",[i("b-card",{attrs:{"no-body":""}},[i("b-tabs",{attrs:{card:""}},[i("b-tab",{attrs:{title:"Summary",active:""}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left","label-for":"theNameInput"}},[i("b-form-input",{attrs:{id:"theNameInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Context","label-class":"font-weight-bold text-md-left","label-for":"theContextText"}},[i("b-form-textarea",{attrs:{id:"theContextText",type:"text",rows:4,"max-rows":4,required:""},model:{value:t.objt.theContext,callback:function(e){t.$set(t.objt,"theContext",e)},expression:"objt.theContext"}})],1)],1),i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Problem","label-class":"font-weight-bold text-md-left","label-for":"theProblemText"}},[i("b-form-textarea",{attrs:{id:"theProblemText",type:"text",rows:4,"max-rows":4,required:""},model:{value:t.objt.theProblem,callback:function(e){t.$set(t.objt,"theProblem",e)},expression:"objt.theProblem"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Solution","label-class":"font-weight-bold text-md-left","label-for":"theSolutionText"}},[i("b-form-textarea",{attrs:{id:"theSolutionText",type:"text",rows:4,"max-rows":4,required:""},model:{value:t.objt.theSolution,callback:function(e){t.$set(t.objt,"theSolution",e)},expression:"objt.theSolution"}})],1)],1)],1)],1)],1),i("b-tab",{attrs:{title:"Structure"}},[i("b-card",{attrs:{"bg-variant":"light","no-body":""}},[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:t.objt.theConcernAssociations,fields:t.structureTableFields},on:{"row-clicked":t.viewStructure},scopedSlots:t._u([{key:"HEAD_structureactions",fn:function(e){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addStructure(e)}}})]}},{key:"structureactions",fn:function(e){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),t.deleteStructure(e.item)}}})]}}])})],1)],1)],1)],1)],1),i("b-tab",{attrs:{title:"Requirements"}},[i("b-card",{attrs:{"bg-variant":"light","no-body":""}},[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:t.objt.theRequirements,fields:t.requirementTableFields},scopedSlots:t._u([{key:"HEAD_requirementactions",fn:function(e){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addRequirement(e)}}})]}},{key:"requirementactions",fn:function(e){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),t.deleteRequirement(e.item)}}})]}}])})],1)],1)],1)],1)],1)],1)],1),i("b-container",{attrs:{fluid:""}},[i("b-form-row",[i("b-col",{attrs:{md:"4","offset-md":"5"}},[i("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),i("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},o=[],n=i("f499"),a=i.n(n),r=i("bc3a"),l=i.n(r),c=i("61da"),d=i("0184"),u=i("1e3b"),h={props:{object:Object,label:String},watch:{object:"setObject"},components:{ComponentAssociationModal:d["default"],DimensionModal:u["default"]},computed:{requirementNames:function(){return void 0!=this.objt&&this.objt.theRequirements.length>0?this.objt.theRequirements.map(function(t){return t.theName}):[]}},data:function(){return{objt:this.object,commitLabel:this.label,envPropIndex:0,errors:[],requirementTableFields:{requirementactions:{label:""},theName:{label:"Name"}},structureTableFields:[{key:"structureactions",label:""},{key:"theHeadAsset",label:"Head Asset"},{key:"theHeadAdornment",label:"Type"},{key:"theHeadNry",label:"Nry"},{key:"theHeadRole",label:"Role"},{key:"theTailRole",label:"Tail Role"},{key:"theTailNry",label:"Nry"},{key:"theTailAdornment",label:"Type"},{key:"theTailAsset",label:"Tail Asset"}],selectedAssociation:{update:!1,association:{theHeadAsset:"",theHeadAdornment:"Association",theHeadNav:0,theHeadNry:"*",theHeadRole:"",theTailRole:"",theTailNry:"*",theTailNav:0,theTailAdornment:"Association",theTailAsset:""}}}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Name is required"),0==this.objt.theContext.length&&this.errors.push("Context is required"),0==this.objt.theProblem.length&&this.errors.push("Problem is required"),0==this.objt.theConcernAssociations.length&&this.errors.push("Structure is required"),0==this.objt.theRequirements.length&&this.errors.push("One ore more requirements are required"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("object-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"securitypattern"}})},deleteRequirement:function(t){this.objt.theRequirements.splice(t,1)},addRequirement:function(){this.$refs.reqDialog.show()},addPatternRequirement:function(t){var e=this;l.a.get("/api/template_requirements/name/"+t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){var i=t.data;i["theAsset"]=i["theAssetName"],delete i["theAssetName"],e.objt.theRequirements.push(i)}).catch(function(t){c["a"].$emit("operation-failure",t)})},addStructure:function(){this.selectedAssociation["association"]={theHeadAsset:"",theHeadNav:0,theHeadAdornment:"Association",theHeadNry:"*",theHeadRole:"",theTailRole:"",theTailNry:"*",theTailNav:0,theTailAdornment:"Association",theTailAsset:""},this.selectedAssociation["update"]=!1,this.$refs.assocDialog.show()},deleteStructure:function(t){this.objt.theConcernAssociations.splice(t,1)},updateStructure:function(t){t.update?this.$set(this.objt.theConcernAssociations,t.index,t.association):this.objt.theConcernAssociations.push(t.association)},viewStructure:function(t,e){this.selectedAssociation["index"]=e,this.selectedAssociation["association"]=JSON.parse(a()(t)),this.selectedAssociation["update"]=!0,this.$refs.assocDialog.show()}}},m=h,b=i("2877"),f=Object(b["a"])(m,s,o,!1,null,null,null);e["default"]=f.exports},d2c8:function(t,e,i){var s=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(s(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}}}]);
//# sourceMappingURL=chunk-93eea556.5a942326.js.map