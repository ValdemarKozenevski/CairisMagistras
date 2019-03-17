(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2065a14b","chunk-f72b1efa","chunk-2d208524","chunk-2d0ac01b","chunk-2d0b2178","chunk-2d226cbe","chunk-2d229b77","chunk-2d0d6b42","chunk-2d207f84","chunk-2d0ea130","chunk-2d0abffc"],{1854:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"ucDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.actors,fields:t.actorTableFields}}),o("b-form-group",{attrs:{label:"Preconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePreconditions"}},[o("b-form-textarea",{attrs:{id:"thePreconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.preconditions,callback:function(e){t.preconditions=e},expression:"preconditions"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.steps,fields:t.stepTableFields}}),o("b-form-group",{attrs:{label:"Postconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePostconditions"}},[o("b-form-textarea",{attrs:{id:"thePostconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.postconditions,callback:function(e){t.postconditions=e},expression:"postconditions"}})],1)],1):t._e()],1)},i=[],r={name:"use-case-modal",props:{environment:String,usecase:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.usecase,actorTableFields:{actor:{label:"Actor"}},stepTableFields:{no:{label:"No"},step:{label:"Step"}}}},watch:{usecase:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Use Case"},actors:function(){return void 0!=this.objt?this.objt.theActors.map(function(t){return{actor:t}}):[]},preconditions:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePreCond:""},postconditions:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePostCond:""},steps:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theSteps.map(function(t,e){return{no:e+1,step:t.theStepText}}):[]}},methods:{show:function(){this.$refs.ucDialog.show()},updateData:function(){this.objt=this.usecase,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},1864:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},i=[],r=(o("6762"),o("2fdb"),o("bc3a")),a=o.n(r),l=o("61da"),s={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var o=this;a.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){o.items=e.data,o.items=o.items.length>0?o.items.filter(function(t){if(!o.existing.includes(t))return t}):[],1==o.items.length&&o.$emit("dimension-select-change",o.items[0]),o.includeall&&("dfd_filter"==o.dimension?o.items.unshift("None"):"persona_characteristic"==o.dimension?o.items.unshift("All"):o.items.unshift("all")),t.selected=t.initial}).catch(function(t){l["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=s,h=o("2877"),b=Object(h["a"])(c,n,i,!1,null,null,null);e["default"]=b.exports},2345:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"domainPropertyDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[o("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:"2","max-rows":"4",readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1):t._e()],1)},i=[],r={name:"domain-property-modal",props:{environment:String,domainproperty:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.domainproperty}},watch:{domainproperty:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Domain Property"}},methods:{show:function(){this.$refs.domainPropertyDialog.show()},updateData:function(){this.objt=this.domainproperty,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},"2fdb":function(t,e,o){"use strict";var n=o("5ca1"),i=o("d2c8"),r="includes";n(n.P+n.F*o("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,o){var n=o("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},6762:function(t,e,o){"use strict";var n=o("5ca1"),i=o("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},6820:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"obstaclemodel"},[""!=t.theEnvironmentName?o("goal-modal",{ref:"goalDialog",attrs:{environment:this.theEnvironmentName,goal:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("obstacle-modal",{ref:"obsDialog",attrs:{environment:this.theEnvironmentName,obstacle:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("countermeasure-modal",{ref:"cmDialog",attrs:{environment:this.theEnvironmentName,countermeasure:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("domain-property-modal",{ref:"dpDialog",attrs:{environment:this.theEnvironmentName,domainproperty:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("use-case-modal",{ref:"ucDialog",attrs:{environment:this.theEnvironmentName,usecase:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("requirement-modal",{ref:"reqDialog",attrs:{requirement:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("role-modal",{ref:"roleDialog",attrs:{role:this.theSelectedObject}}):t._e(),""!=t.theEnvironmentName?o("task-modal",{ref:"taskDialog",attrs:{environment:this.theEnvironmentName,task:this.theSelectedObject}}):t._e(),o("b-card",{attrs:{"no-body":""}},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Environment","label-for":"obstacleModelEnvironment","label-cols":4}},[o("dimension-select",{ref:"obstacleModelEnvironment",attrs:{id:"obstacleModelEnvironment",dimension:"environment"},on:{"dimension-select-change":t.environmentSelected}})],1)],1),""!=t.theEnvironmentName?o("b-col",[o("b-form-group",{attrs:{label:"Obstacle","label-for":"obstacleModelObstacle","label-cols":2}},[o("dimension-select",{ref:"obstacleModelObstacle",attrs:{id:"obstacleModelObstacle",dimension:"obstacle",environment:t.theEnvironmentName,initial:"all",includeall:""},on:{"dimension-select-change":t.obstacleSelected}})],1)],1):t._e()],1)],1)],1),""!=t.theEnvironmentName?o("graphical-model",{attrs:{api:t.obstacleModelURI},on:{"graphical-model-url":t.nodeClicked}}):t._e()],1)},i=[],r=o("bc3a"),a=o.n(r),l=o("e342"),s=o("1864"),c=o("e9d8"),h=o("a3fb"),b=o("df43"),m=o("1854"),u=o("8ff2"),d=o("2345"),f=o("744c"),p=o("a395"),v=o("61da"),g={computed:{obstacleModelURI:function(){return"/api/obstacles/model/environment/"+this.theEnvironmentName+"/obstacle/"+this.theObstacleName}},data:function(){return{theEnvironmentName:"",theObstacleName:"all",theSelectedObject:null}},components:{CountermeasureModal:h["default"],DimensionSelect:s["default"],DomainPropertyModal:d["default"],GoalModal:c["default"],GraphicalModel:l["default"],ObstacleModal:b["default"],RequirementModal:f["default"],RoleModal:p["default"],TaskModal:u["default"],UseCaseModal:m["default"]},methods:{nodeClicked:function(t){var e=this,o=t.slice(5).substring(0,t.slice(5).indexOf("/"));-1!=["goals","countermeasures","obstacles","usecases","domainproperties","requirements","roles","tasks"].indexOf(o)&&a.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.theSelectedObject=t.data,"goals"==o?e.$refs.goalDialog.show():"countermeasures"==o?e.$refs.cmDialog.show():"usecases"==o?e.$refs.ucDialog.show():"obstacles"==o?e.$refs.obsDialog.show():"domainproperties"==o?e.$refs.dpDialog.show():"requirements"==o?e.$refs.reqDialog.show():"roles"==o?e.$refs.roleDialog.show():"tasks"==o&&e.$refs.taskDialog.show()}).catch(function(t){v["a"].$emit("operation-failure",t)})},environmentSelected:function(t){this.theEnvironmentName=t,void 0!=this.$refs.obstacleModelObstacle&&(this.theObstacleName="all",this.$refs.obstacleModelObstacle.selected=this.theObstacleName)},obstacleSelected:function(t){this.theObstacleName=t}}},j=g,y=o("2877"),E=Object(y["a"])(j,n,i,!1,null,null,null);e["default"]=E.exports},"744c":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"reqDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),o("b-form-group",{attrs:{label:"Priority","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePriority"}},[o("b-form-input",{attrs:{readonly:"",id:"thePriority"},model:{value:t.objt.thePriority,callback:function(e){t.$set(t.objt,"thePriority",e)},expression:"objt.thePriority"}})],1),o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[o("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1),o("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theRationale"}},[o("b-form-textarea",{attrs:{id:"theRationale",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theRationale,callback:function(e){t.$set(t.objt,"theRationale",e)},expression:"objt.theRationale"}})],1),o("b-form-group",{attrs:{label:"Fit Criterion","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theFitCriterion"}},[o("b-form-textarea",{attrs:{id:"theFitCriterion",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theFitCriterion,callback:function(e){t.$set(t.objt,"theFitCriterion",e)},expression:"objt.theFitCriterion"}})],1)],1):t._e()],1)},i=[],r={name:"requirement-modal",props:{requirement:Object},data:function(){return{objt:this.requirement}},watch:{requirement:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Requirement"}},methods:{show:function(){this.$refs.reqDialog.show()},updateData:function(){this.objt=this.requirement}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},"8ff2":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"taskDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-tabs",[o("b-tab",{attrs:{title:"Summary",active:""}},[o("b-form-group",{attrs:{label:"Author","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theAuthor"}},[o("b-form-input",{attrs:{readonly:"",id:"theAuthor"},model:{value:t.objt.theAuthor,callback:function(e){t.$set(t.objt,"theAuthor",e)},expression:"objt.theAuthor"}})],1),o("b-form-group",{attrs:{label:"Objective","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theObjective"}},[o("b-form-textarea",{attrs:{id:"theObjective",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theObjective,callback:function(e){t.$set(t.objt,"theObjective",e)},expression:"objt.theObjective"}})],1),o("b-form-group",{attrs:{label:"Dependencies","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDependencies"}},[o("b-form-textarea",{attrs:{id:"theDependencies",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.dependencies,callback:function(e){t.dependencies=e},expression:"dependencies"}})],1)],1),o("b-tab",{attrs:{title:"Narrative"}},[o("b-form-textarea",{attrs:{id:"theNarrative",type:"text",rows:4,"max-rows":6,readonly:""},model:{value:t.narrative,callback:function(e){t.narrative=e},expression:"narrative"}})],1),o("b-tab",{attrs:{title:"Concerns"}},[o("b-table",{attrs:{bordered:"",small:"",items:t.concerns,fields:t.concernTableFields}})],1),o("b-tab",{attrs:{title:"Participants"}},[o("b-table",{attrs:{bordered:"",small:"",items:t.participants,fields:t.participantTableFields}})],1)],1)],1):t._e()],1)},i=[],r={name:"task-modal",props:{environment:String,task:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.task,concernTableFields:{concern:{label:"Asset"}},participantTableFields:{thePersona:{label:"Persona"},theDuration:{label:"Duration"},theFrequency:{label:"Frequency"},theDemands:{label:"Demands"},theGoalConflict:{label:"Goal Conflict"}},durationLookup:{Low:"Seconds",Medium:"Minutes",High:"Hours or Longer"},frequencyLookup:{Low:"Hours or more",Medium:"Daily - Weekly",High:"Monthly or less"}}},watch:{task:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Task"},dependencies:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theDependencies:""},narrative:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theNarrative:""},concerns:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theAssets.map(function(t){return{concern:t}}):[]},participants:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePersonas.map(function(e){return{thePersona:e.thePersona,theDuration:t.durationLookup[e.theDuration],theFrequency:t.frequencyLookup[e.theFrequency],theDemands:e.theDemands,theGoalConflict:e.theGoalConflict}}):[]}},methods:{show:function(){this.$refs.taskDialog.show()},updateData:function(){this.objt=this.task,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},a395:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"roleDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Short Code","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theShortCode"}},[o("b-form-input",{attrs:{readonly:"",id:"theShortCode"},model:{value:t.objt.theShortCode,callback:function(e){t.$set(t.objt,"theShortCode",e)},expression:"objt.theShortCode"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1):t._e()],1)},i=[],r={name:"role-modal",props:{role:Object},data:function(){return{objt:this.role}},watch:{role:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Role"}},methods:{show:function(){this.$refs.roleDialog.show()},updateData:function(){this.objt=this.role}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},a3fb:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"cmDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:4,"max-rows":6,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),o("b-form-group",{attrs:{label:"Cost","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theCost"}},[o("b-form-input",{attrs:{readonly:"",id:"theCost"},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.requirements,fields:t.reqTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:t.targets,fields:t.targetTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:t.notNone,fields:t.propTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:t.roles,fields:t.roleTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:t.personas,fields:t.personaTableFields}})],1):t._e()],1)},i=[],r={name:"countermeasure-modal",props:{environment:String,countermeasure:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.countermeasure,roleTableFields:{name:{label:"Role"}},reqTableFields:{name:{label:"Requirement"}},propTableFields:{name:{label:"Property"},value:{label:"Value"},rationale:{label:"Rationale"}},targetTableFields:{theName:{label:"Target"},theEffectiveness:{label:"Effectiveness"},theRationale:{label:"Rationale"}},personaTableFields:{theTask:{label:"Task"},thePersona:{label:"Persona"},theDuration:{label:"Duration"},theFrequency:{label:"Frequency"},theDemands:{label:"Demands"},theGoalConflict:{label:"Goal Conflict"}}}},watch:{countermeasure:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Countermeasure"},cost:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theCost:[]},roles:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theRoles.map(function(t){return{name:t}}):[]},requirements:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theRequirements.map(function(t){return{name:t}}):[]},targets:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theTargets:[]},notNone:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theProperties.filter(function(t){return"None"!=t.value}):[]},personas:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePersonas:[]}},methods:{show:function(){this.$refs.cmDialog.show()},updateData:function(){this.objt=this.countermeasure,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},aae3:function(t,e,o){var n=o("d3f4"),i=o("2d95"),r=o("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},d2c8:function(t,e,o){var n=o("aae3"),i=o("be13");t.exports=function(t,e,o){if(n(e))throw TypeError("String#"+o+" doesn't accept regex!");return String(i(t))}},df43:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"obstacleDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[o("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1),o("b-form-group",{attrs:{label:"Category","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theCategory"}},[o("b-form-input",{attrs:{readonly:"",id:"theCategory"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),o("b-form-group",{attrs:{label:"Definition","label-class":"font-weight-bold text-sm-left","label-for":"theDefinition"}},[o("b-form-textarea",{attrs:{id:"theDefinition",type:"text",rows:"2","max-rows":"4",readonly:""},model:{value:t.definition,callback:function(e){t.definition=e},expression:"definition"}})],1),o("b-form-group",{attrs:{label:"Probability","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theProbability"}},[o("b-form-input",{attrs:{readonly:"",id:"theProbability"},model:{value:t.probability,callback:function(e){t.probability=e},expression:"probability"}})],1),o("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-for":"theProbabilityRationale"}},[o("b-form-textarea",{attrs:{id:"theProbabilityRationale",type:"text",rows:"2","max-rows":"4",readonly:""},model:{value:t.rationale,callback:function(e){t.rationale=e},expression:"rationale"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.concerns,fields:t.concernTableFields}})],1):t._e()],1)},i=[],r={name:"obstacle-modal",props:{environment:String,obstacle:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.obstacle,concernTableFields:{concern:{label:"Concern"}}}},watch:{obstacle:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Obstacle"},definition:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theDefinition:""},category:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theCategory:""},fitCriterion:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theFitCriterion:""},probability:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theProbability:""},rationale:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theProbabilityRationale:""},concerns:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theConcerns.map(function(t){return{concern:t}}):[]}},methods:{show:function(){this.$refs.obstacleDialog.show()},updateData:function(){this.objt=this.obstacle,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports},e9d8:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"goalDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[o("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1),o("b-form-group",{attrs:{label:"Category","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theCategory"}},[o("b-form-input",{attrs:{readonly:"",id:"theCategory"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),o("b-form-group",{attrs:{label:"Priority","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePriority"}},[o("b-form-input",{attrs:{readonly:"",id:"thePriority"},model:{value:t.priority,callback:function(e){t.priority=e},expression:"priority"}})],1),o("b-form-group",{attrs:{label:"Definition","label-class":"font-weight-bold text-sm-left","label-for":"theDefinition"}},[o("b-form-textarea",{attrs:{id:"theDefinition",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.definition,callback:function(e){t.definition=e},expression:"definition"}})],1),o("b-form-group",{attrs:{label:"Fit Criterion","label-class":"font-weight-bold text-sm-left","label-for":"theFitCriterion"}},[o("b-form-textarea",{attrs:{id:"theFitCriterion",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.fitCriterion,callback:function(e){t.fitCriterion=e},expression:"fitCriterion"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:t.concerns,fields:t.concernTableFields}})],1):t._e()],1)},i=[],r={name:"goal-modal",props:{environment:String,goal:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.goal,concernTableFields:{concern:{label:"Concern"}}}},watch:{goal:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Goal"},definition:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theDefinition:""},category:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theCategory:""},fitCriterion:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theFitCriterion:""},priority:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].thePriority:""},concerns:function(){var t=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName==t.theEnvironmentName})[0].theConcerns.map(function(t){return{concern:t}}):[]}},methods:{show:function(){this.$refs.goalDialog.show()},updateData:function(){this.objt=this.goal,this.theEnvironmentName=this.environment}}},a=r,l=o("2877"),s=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2065a14b.9fbc4451.js.map