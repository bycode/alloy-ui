AUI.add("aui-form-builder-field",function(b5){var bW=b5.Lang,aW=bW.isArray,bS=bW.isString,h="acceptChildren",e="bodyContent",aQ="boundingBox",ce="builder",cl="button",I="buttons",x="buttonsNode",aG="checkbox",J="checked",o="children",ch="clearfix",aR="close",aS="component",cq="contentBox",aK="container",cx="dataType",ci="default",aX="delete",bH="disabled",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",b6="dropNode",bq="dropZone",a2="dropZoneNode",aE="duplicate",Q="edit",bI="",bp="field",g="fields",a8="fixed",bN="for",q="form",be="formBuilder",aF="form-builder-field",s="help",n="helper",au="hidden",r="icon",cg="id",ai="label",b1="labelNode",bC="lightbulb",bg="metadata",aB="name",cy="node",b="panel",ba="portalLayout",aN="predefinedValue",bs="proxy",cd="readOnlyAttributes",ao="required",a7="requiredFlagNode",bG="state",bn="select",aZ="settings",ar="settingsFormNode",W="showLabel",av="size",X=" ",bR="string",bY="strings",ac="templateNode",bK="text",aq="textarea",u="tip",bv="tipIconNode",Y="type",aD="unique",bT="zone",bj="widget",z=b5.getClassName,bm=z(aS),aJ=z(bp,ai),p=z(n,ch),ae=z(n,au),bP=z(bG,ci),d=z(bp),bt=z(bp,bK),B=z(q,ce,cl),bL=z(q,ce,cl,aX),a4=z(q,ce,cl,aE),U=z(q,ce,cl,Q),a3=z(q,ce,az,cy),am=z(q,ce,az,bT),cw=z(q,ce,r),j=z(q,ce,r,aX),w=z(q,ce,r,aE),ak=z(q,ce,r,Q),E=z(q,ce,r,u),bM=z(q,ce,bp),bz=z(q,ce,bp,I),br=z(q,ce,a8),cv=z(q,ce,ao),bF=z(q,ce,aD),G=z(bj),b3='<li class="'+[G,bm,bM].join(X)+'"></li>',a='<div class="'+[bz,ae].join(X)+'">'+'<a class="'+[B,U].join(X)+'" href="javascript:;" title="Edit">'+'<div class="'+[cw,ak].join(X)+'"></div>'+"</a>"+'<a class="'+[B,a4].join(X)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[cw,w].join(X)+'"></div>'+"</a>"+'<a class="'+[B,bL].join(X)+'" href="javascript:;" title="Delete">'+'<div class="'+[cw,j].join(X)+'"></div>'+"</a>"+"</div>",C='<div class="'+p+'"></div>',ab='<ul class="'+am+'"></ul>',aj='<span class="'+[d,bt].join(X)+'"></span>',a6='<label class="'+aJ+'"></label>',ay='<span class="'+cv+'">*</span>',cu="<p></p>",bk='<a href="javascript:;" class="'+E+'"></a>';var t=b5.Component.create({NAME:aF,ATTRS:{acceptChildren:{value:true},dataType:{value:bR},disabled:{value:false},fixed:{value:false},formBuilder:{value:undefined},id:{value:bI},icon:{value:bI},key:{value:bI},label:{value:bI},localizationMap:{value:{}},name:{valueFn:function(){var A=this;return A.get(Y)+(++b5.Env._uidx);}},parent:{value:null},predefinedValue:{value:bI},readOnlyAttributes:{value:[],validator:aW},required:{setter:b5.DataType.Boolean.parse,value:false},selected:{setter:b5.DataType.Boolean.parse,value:false},showLabel:{setter:b5.DataType.Boolean.parse,value:true},template:{value:bI},tip:{value:bI},type:{value:bI},unique:{setter:b5.DataType.Boolean.parse,value:false},buttonsNode:{valueFn:function(){return b5.Node.create(a);}},dropZoneNode:{valueFn:function(){return b5.Node.create(ab);}},labelNode:{valueFn:function(){return b5.Node.create(a6);}},requiredFlagNode:{valueFn:function(){return b5.Node.create(ay);}},templateNode:{valueFn:"getNode"},tipIconNode:{valueFn:function(){return b5.Node.create(bk);}}},AUGMENTS:[b5.FormBuilderFieldSupport],UI_ATTRS:[h,bH,a8,ai,aB,aN,ao,W,u,aD],HTML_PARSER:{buttonsNode:bO+bz,dropZoneNode:bO+am,labelNode:ai+bO+aJ,requiredFlagNode:bO+cv,tipIconNode:bO+E},prototype:{BOUNDING_TEMPLATE:b3,initializer:function(){var A=this;A.get(aQ).setData(bp,A);A.toolTip=new b5.Tooltip({trigger:A.get(bv),hideDelay:100});},bindUI:function(){var A=this;},renderUI:function(){var A=this;var cC=A.get(aQ);var cF=A.get(x);var L=A.get(cq);var cB=A.get(b1);var cE=A.get(a7);var cD=A.get(ac);var cA=A.get(bv);L.addClass(p);cC.prepend(cF);L.append(cB);L.append(cE);L.append(cA);L.append(cD);A.toolTip.render();},settingsNodesMap:{},saveSettings:function(){var A=this;var L=A.get(be);var cA=L.get(ar);b5.Array.each(b5.io._serialize(cA._node).split("&"),function(cC){var cB=cC.split("=");A.set(cB[0],decodeURIComponent(cB[1]));});},renderSettings:function(){var cI=this;var cE=cI.get(be);var A=cE.get(ar);var cJ=cE.get(bY);var cB=cI.settingsNodesMap;if(!cI.fieldSettingsNode){cI.fieldSettingsNode=b5.Node.create(C);var cG=b5.Node.create(C);var cC=b5.Node.create(aj);var L=b5.Node.create(a6);var cH=b5.Node.create(cu);L.setContent(cJ[Y]);cH.setContent(cI.get(cx)||cI.get(Y));cC.append(L);cC.append(cH);cC.appendTo(cG);cI._renderSettingsFields([{type:"text",name:ai,labelText:"Label",value:cI.get(ai)},{type:"checkbox",name:W,labelText:"Show label",labelAlign:"left",value:cI.get(W)},{type:"text",name:aB,labelText:"Name",value:cI.get(aB)},{type:"checkbox",name:ao,labelText:"Required",labelAlign:"left",value:ao},{type:"text",name:aN,labelText:"Default value",value:cI.get(aN)},{type:"textarea",name:u,labelText:"Tip",value:cI.get(u)}],cG);var cD=cB.labelSettingNode;cD.on({input:b5.bind(cI._onLabelInput,cI)});var cF=cB.showLabelSettingNode;cF.set(J,cI.get(W));cF.on({change:b5.bind(cI._onSettingsFieldChange,cI)});var cA=cB.requiredSettingNode;cA.set(J,cI.get(ao));cA.on({change:b5.bind(cI._onSettingsFieldChange,cI)});cI.propertiesPanel=new b5.Panel({bodyContent:cG,collapsible:true,title:"Properties"}).render();cI.fieldSettingsNode.append(cI.propertiesPanel.get(aQ));}A.setContent(cI.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelInput:function(L){var A=this;var cB=L.target;var cA=cB.val();A.set(ai,cA);},_onSettingsFieldChange:function(L){var A=this;var cB=L.target;var cA=cB.val();if(cB.get(Y)===aG){cA=cB.get(J);}A.set(cB.get(aB),cA);},_renderSettingsFields:function(L,cB){var A=this;var cA=A.get(cd);b5.each(L,function(cD){var cE;if(b5.Array.indexOf(cA,cD.name)>-1){cD.disabled=true;}if(cD.type===bn){cE=new b5.Select(cD);}else{if(cD.type===aq){cE=new b5.Textarea(cD);}else{cE=new b5.Field(cD);}}cE.render(cB);var cC=cE.get(cy);if(cD.type===aG){cC.set(J,cD.value);}A.settingsNodesMap[cD.name+"SettingNode"]=cC;});},_uiSetAcceptChildren:function(cC){var A=this;var L=A.get(aQ);var cB=A.get(a2);
var cA=L.one(bO+am);if(cC&&!cA){L.append(cB);}else{if(!cC&&cA){cA.remove();}else{if(cC&&cA){A.set(a2,cA);}}}},_uiSetDisabled:function(cA){var A=this;var L=A.get(ac);if(cA){L.setAttribute(bH,cA);}else{L.removeAttribute(bH);}},_uiSetFixed:function(cA){var A=this;var cB=A.get(x);var L=cB.one(bO+bL);L.toggleClass(ae,cA);},_uiSetLabel:function(cA){var A=this;var L=A.get(b1);L.setContent(cA);},_uiSetName:function(cA){var A=this;var L=A.get(ac);L.set(aB,cA);},_uiSetPredefinedValue:function(cA){var A=this;var L=A.get(ac);L.val(cA);},_uiSetRequired:function(cA){var A=this;var L=A.get(a7);L.toggleClass(ae,!cA);},_uiSetShowLabel:function(cA){var A=this;var L=A.get(b1);L.toggleClass(ae,!cA);},_uiSetTip:function(cA){var A=this;var L=A.get(bv);L.toggleClass(ae,!cA);A.toolTip.set(e,cA);},_uiSetUnique:function(cA){var A=this;var L=A.get(aQ);var cB=A.get(x);L.toggleClass(bF,cA);cB.one(bO+a4).toggleClass(ae,cA);}}});b5.FormBuilderField=t;b5.FormBuilder.types["field"]=b5.FormBuilderField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,bw=function(A){return(A instanceof b5.Node);},a5=function(A){return(A instanceof b5.NodeList);},a9=b5.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aQ="boundingBox",cl="button",cj="buttonType",cq="contentBox",aK="container",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bI="",bp="field",g="fields",aF="form-builder-field",bU="form-builder-button-field",cg="id",r="icon",a0="input",ai="label",aB="name",cy="node",R="option",ad="options",ba="portalLayout",aN="predefinedValue",bs="proxy",bQ="reset",bf="selected",bX="selectedIndex",ax="submit",X=" ",bY="strings",aH="template",ac="templateNode",bK="text",Y="type",m="value",z=b5.getClassName,bu=z(bp,a0),O=z(bp,a0,bK),bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),bJ='<input id="{id}" class="'+[b8,bu].join(X)+'" name="{name}" type="{type}" value="{value}" />',cz=[ax,bQ,cl];var b7=b5.Component.create({NAME:bU,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:ax,validator:function(A){return b5.Array(cz).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:a9(ax)},showLabel:{value:false},template:{valueFn:function(){return bJ;}}},UI_ATTRS:b5.FormBuilderField.UI_ATTRS.concat([cj]),CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{getHTML:function(){var A=this;var cC=A.get(aH);var cE=A.get(cg);var cB=A.get(ai);var cA=A.get(aB);var L=A.get(cj);var cD=A.get(aN);return b5.substitute(cC,{id:cE,label:cB,name:cA,type:L,value:cD});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var cG=this;var cD=cG.get(be);var A=cD.get(ar);var cC=cG.get(cj);var cH=cD.get(bY);var cB=cG.settingsNodesMap;b5.FormBuilderButtonField.superclass.renderSettings.apply(cG,arguments);if(!cG._renderedButtonSettings){cG._renderedButtonSettings=true;var L=cG.propertiesPanel.get(e);var cF=[];b5.each(cz,function(cI){cF.push({labelText:cH[cI],value:cI});});cG._renderSettingsFields([{labelText:"Button type",name:cj,options:cF,type:"select"}],L.item(0));var cE=cB["buttonTypeSettingNode"];cE.on({change:b5.bind(cG._onButtonTypeChange,cG)});var cA=b5.Array(cz).indexOf(cC);cE.all(R).item(cA).set(bf,true);}},_onButtonTypeChange:function(L){var A=this;var cA=L.target;A.set(cj,cA.get(m));},_uiSetButtonType:function(cA){var A=this;var L=A.get(ac);L.setAttribute(Y,cA);}}});b5.FormBuilderButtonField=b7;b5.FormBuilder.types["button"]=b5.FormBuilderButtonField;var bW=b5.Lang,aW=bW.isArray,aY=bW.isBoolean,aA=bW.isNumber,bS=bW.isString,aU="boolean",aQ="boundingBox",e="bodyContent",aG="checkbox",J="checked",aw="choice",cq="contentBox",aK="container",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bI="",bp="field",g="fields",aF="form-builder-field",cn="form-builder-checkbox-field",cg="id",r="icon",bi="inline",ai="label",c="labels",aB="name",cy="node",S="parentNode",ba="portalLayout",aN="predefinedValue",bs="proxy",av="size",X=" ",aH="template",ac="templateNode",m="value",z=b5.getClassName,d=z(bp),an=z(bp,aG),b2=z(bp,aw),bM=z(aF),co=z(aF,aG),b8=z(aF,cy),bP=z(bG,ci),bZ=z(bp,c,bi),b3='<li class="'+[G,bm,bM,co].join(X)+'"></li>',aT='<input id="{id}" class="'+[b8,d,an,b2].join(X)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var aa=b5.Component.create({NAME:cn,ATTRS:{dataType:{value:aU},predefinedValue:{setter:b5.DataType.Boolean.parse,value:false},template:{valueFn:function(){return aT;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{BOUNDING_TEMPLATE:b3,bindUI:function(){var A=this;b5.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.get(ac);L.on({"change":b5.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.get(cq);var cB=A.get(ac);var cA=A.get(b1);b5.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);cA.insert(cB,cA,"before");},getHTML:function(){var A=this;var cB=A.get(aH);var cC=A.get(J);var cE=A.get(cg);var cA=A.get(ai);var L=A.get(aB);var cD=A.get(aN);return b5.substitute(cB,{checked:cC?'checked="checked"':bI,id:cE,label:cA,name:L,value:cD});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(be);var cB=L.get(ar);var cC=A.settingsNodesMap;b5.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedCheckboxSettings){A._renderedCheckboxSettings=true;cC.predefinedValueSettingNode.get(S).remove();var cA=A.propertiesPanel.get(e);A._renderSettingsFields([{type:"checkbox",name:aN,labelText:"Checked",labelAlign:"left"}],cA.item(0));var cD=cC.predefinedValueSettingNode;cD.on({change:b5.bind(A._onValueChange,A)});cD.set(J,A.get(aN));}},_onValueChange:function(L){var A=this;var cA=L.target;A.set(aN,cA.get(J));},_uiSetPredefinedValue:function(cC){var A=this;var L=A.get(ac);var cA=A.settingsNodesMap;
var cB=cA.predefinedValueSettingNode;if(cB){cB.set(J,cC);}L.set(J,cC);}}});b5.FormBuilderCheckBoxField=aa;b5.FormBuilder.types["checkbox"]=b5.FormBuilderCheckBoxField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,bw=function(A){return(A instanceof b5.Node);},a5=function(A){return(A instanceof b5.NodeList);},aQ="boundingBox",cq="contentBox",aK="container",cx="dataType",bO=".",az="drop",bI="",bp="field",g="fields",aF="form-builder-field",F="form-builder-fieldset-field",cg="id",r="icon",ai="label",aB="name",cy="node",aN="predefinedValue",X=" ",bY="strings",aH="template",ac="templateNode",bK="text",Y="type",m="value",bT="zone",z=b5.getClassName,bM=z(aF),b8=z(aF,cy),am=z(q,ce,az,bT),aM='<fieldset id="{id}" class="'+[b8].join(X)+'"></fieldset>',k='<legend class="'+aJ+'"></legend>';var y=b5.Component.create({NAME:F,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},template:{valueFn:function(){return aM;}},labelNode:{valueFn:function(){return b5.Node.create(k);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[h,ai,W],CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{CONTENT_TEMPLATE:aM,renderUI:function(){var A=this;var cB=A.get(aQ);var cD=A.get(x);var L=A.get(cq);var cA=A.get(b1);var cC=A.get(ac);if(!cB.contains(cD)){cB.prepend(cD);}if(!L.contains(cA)){L.append(cA);}},getHTML:function(){var A=this;var L=A.get(aH);var cA=A.get(cg);return b5.substitute(L,{id:cA});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var cH=this;var cD=cH.get(be);var A=cD.get(ar);var cI=cD.get(bY);var cA=cH.settingsNodesMap;if(!cH._renderedFieldsetSettings){cH._renderedFieldsetSettings=true;cH.fieldSettingsNode=b5.Node.create(C);var cF=b5.Node.create(C);var cB=b5.Node.create(aj);var L=b5.Node.create(a6);var cG=b5.Node.create(cu);L.setContent(cI[Y]);cG.setContent(cH.get(cx)||cH.get(Y));cB.append(L);cB.append(cG);cB.appendTo(cF);cH._renderSettingsFields([{type:"text",name:ai,labelText:"Label",value:cH.get(ai)},{type:"checkbox",name:W,labelText:"Show label",labelAlign:"left",value:cH.get(W)}],cF);var cC=cA["labelSettingNode"];cC.on({input:b5.bind(cH._onLabelInput,cH)});var cE=cA["showLabelSettingNode"];cE.set(J,cH.get(W));cE.on({change:b5.bind(cH._onSettingsFieldChange,cH)});cH.propertiesPanel=new b5.Panel({bodyContent:cF,collapsible:true,title:"Properties"}).render();cH.fieldSettingsNode.append(cH.propertiesPanel.get(aQ));}A.setContent(cH.fieldSettingsNode);},_uiSetAcceptChildren:function(cC){var A=this;var L=A.get(cq);var cB=A.get(a2);var cA=L.one(bO+am);if(cC&&!cA){L.append(cB);}else{if(!cC&&cA){cA.remove();}else{if(cC&&cA){A.set(a2,cA);}}}}}});b5.FormBuilderFieldsetField=y;b5.FormBuilder.types["fieldset"]=b5.FormBuilderFieldsetField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,bw=function(A){return(A instanceof b5.Node);},a5=function(A){return(A instanceof b5.NodeList);},aQ="boundingBox",cq="contentBox",aK="container",cx="dataType",bO=".",bI="",bp="field",g="fields",aF="form-builder-field",cp="form-builder-file-upload-field",cg="id",r="icon",ai="label",aB="name",cy="node",aN="predefinedValue",X=" ",bY="strings",aH="template",ac="templateNode",bK="text",Y="type",m="value",z=b5.getClassName,bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),bB='<input id="{id}" class="'+[b8].join(X)+'" name="{name}" type="file" value="{value}" />';var K=b5.Component.create({NAME:cp,ATTRS:{template:{valueFn:function(){return bB;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{getHTML:function(){var A=this;var cC=A.get(aH);var cE=A.get(cg);var cA=A.get(ai);var L=A.get(aB);var cB=A.get(av);var cD=A.get(aN);return b5.substitute(cC,{id:cE,label:cA,name:L,value:cD});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var cI=this;var cE=cI.get(be);var A=cE.get(ar);var cJ=cE.get(bY);var cB=cI.settingsNodesMap;if(!cI._renderedFileUploadSettings){cI._renderedFileUploadSettings=true;cI.fieldSettingsNode=b5.Node.create(C);var cG=b5.Node.create(C);var cC=b5.Node.create(aj);var L=b5.Node.create(a6);var cH=b5.Node.create(cu);L.setContent(cJ[Y]);cH.setContent(cI.get(cx)||cI.get(Y));cC.append(L);cC.append(cH);cC.appendTo(cG);cI._renderSettingsFields([{type:"text",name:ai,labelText:"Label",value:cI.get(ai)},{type:"checkbox",name:W,labelText:"Show label",labelAlign:"left",value:cI.get(W)},{type:"text",name:aB,labelText:"Name",value:cI.get(aB)},{type:"checkbox",name:ao,labelText:"Required",labelAlign:"left",value:cI.get(ao)},{type:"textarea",name:u,labelText:"Tip",value:cI.get(u)}],cG);var cD=cB.labelSettingNode;cD.on({input:b5.bind(cI._onLabelInput,cI)});var cF=cB.showLabelSettingNode;cF.set(J,cI.get(W));cF.on({change:b5.bind(cI._onSettingsFieldChange,cI)});var cA=cB.requiredSettingNode;cA.set(J,cI.get(ao));cA.on({change:b5.bind(cI._onSettingsFieldChange,cI)});cI.propertiesPanel=new b5.Panel({bodyContent:cG,collapsible:true,title:"Properties"}).render();cI.fieldSettingsNode.append(cI.propertiesPanel.get(aQ));}A.setContent(cI.fieldSettingsNode);}}});b5.FormBuilderFileUploadField=K;b5.FormBuilder.types["fileupload"]=b5.FormBuilderFileUploadField;var cf=b5.Lang,cr=b5.Array,aW=cf.isArray,aA=cf.isNumber,bS=cf.isString,bE=cf.sub,bw=function(A){return(A instanceof b5.Node);},a5=function(A){return(A instanceof b5.NodeList);},a9=b5.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),T="add",bV="addNode",aQ="boundingBox",cl="button",cj="buttonType",cq="contentBox",aK="container",ci="default",at="defaultLabel",cs="defaultOptions",D="defaultValue",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bp="field",g="fields",aF="form-builder-field",M="form-builder-multiple-choice-field",r="icon",cg="id",a0="input",ah="item",ai="label",ck="multiple",aB="name",cy="node",R="option",bA="optionTemplate",ad="options",aN="predefinedValue",bs="proxy",ct="remove",bQ="reset",ax="submit",X=" ",aH="template",ac="templateNode",bK="text",Y="type",m="value",z=b5.getClassName,bu=z(bp,a0),O=z(bp,a0,bK),l=z(bp,ad,T),cb=z(bp,ad,ah),ca=z(bp,ad,ah,a0),aO=z(bp,ad,ah,a0,ai),af=z(bp,ad,ah,a0,m),bb=z(bp,ad,ah,ct),bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),P="",ap='<div class="'+[cb,bZ,p].join(X)+'">'+'<input type="text" class="'+[ca,aO,bu,O].join(X)+'" value="{label}" />'+'<input type="text" class="'+[ca,af,bu,O].join(X)+'" value="{value}" />'+'<a href="javascript:;" class="'+bb+'">&nbsp;</a>'+"</div>";
TPL_ADD='<a class="'+l+'" href="javascript:;">Add an option</a>',ENTER="ENTER";var bl=b5.Component.create({NAME:ad,ATTRS:{allowClear:{value:false},defaultLabel:{value:P},defaultValue:{value:P},disabled:{validator:aY,value:false},options:{getter:"_getOptions",validator:aW,value:[]},addNode:{valueFn:function(){return b5.Node.create(TPL_ADD);}}},HTML_PARSER:{addNode:bO+l},UI_ATTRS:[ad,bH],EXTENDS:b5.Widget,prototype:{renderUI:function(){var A=this;var L=A.get(aQ);var cA=A.get(bV);if(!cA.inDoc()){L.append(cA);}},bindUI:function(){var A=this;var L=A.get(aQ);var cA=A.get(bV);cA.on("click",b5.bind(A._onClickAdd,A));L.delegate("click",b5.bind(A._onClickOptionRemove,A),bO+bb);L.delegate("keypress",b5.bind(A._onKeyPressOption,A),bO+ca);},add:function(cA){var A=this;var L=A.get(ad);L.push(cA);A.set(ad,L);},clear:function(){var A=this;if(A.get(ALLOW_CLEAR)){A.set(ad,[]);}},remove:function(cA){var A=this;var L=A.get(cq);var cB=A._getOptionNode(cA);if(!A.get(bH)){if(cB){cB.remove();}A.items=L.all(bO+cb);}},_addNewOption:function(){var L=this;var cC=null;if(!L.get(bH)){var cA=L.get(cq);var cB=bE(ap,{label:L.get(at),value:L.get(D)});cC=b5.Node.create(cB);cA.append(cC);var A=cC.one(a0);A.focus();A.select();L.items=cA.all(bO+cb);}return cC;},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(cA){var A=this;var L=[];if(A.items){b5.each(A.items,function(cD,cB,cG){var cF=cD.one(bO+aO);var cE=cD.one(bO+af);var cC=cA[cB]||{};cC.label=cF.val();cC.value=cE.val();L.push(cC);});}else{L=cA;}return L;},_indexOfTarget:function(cA){var A=this;var L=cA.ancestor(bO+cb);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(cB){var A=this;var cA=A.get(ad);var L=A._indexOfTarget(cB.target);A.remove(L);},_onKeyPressOption:function(cC){var A=this;var cB=A.get(ad);var cD=cC.currentTarget;var L=A.items;if(cC.isKey(ENTER)){var cA=A._indexOfTarget(cD);var cE=cD.hasClass(af);if((cA==L.size()-1)&&cE){A._addNewOption();}}},_uiSetDisabled:function(cB){var A=this;var cA=A.get(bV);var L=A.get(aQ);cA.toggleClass(ae,cB);L.all(bO+bb).toggleClass(ae,cB);if(cB){L.all(a0).setAttribute(bH,cB);}else{L.all(a0).removeAttribute(bH);}},_uiSetOptions:function(cB){var A=this;var cA=A.get(cq);var L=[];cr.each(cB,function(cD,cC,cE){L.push(bE(ap,cD));});cA.setContent(L.join(P));A.items=cA.all(bO+cb);}}});var f=b5.Component.create({NAME:M,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'}},UI_ATTRS:[h,aN,ai,aB,ad,W],CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{getNode:function(){var A=this;return b5.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;var L=A.get(cd);b5.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var cB=b5.Node.create(C);A.optionsPanel=new b5.Panel({bodyContent:cB,collapsible:true,title:"Options"}).render();var cA=b5.Array.indexOf(L,ad)>-1;A.options=new bl({disabled:cA,options:A.get(ad)}).render(cB);A.fieldSettingsNode.append(A.optionsPanel.get(aQ));}},saveSettings:function(){var A=this;b5.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(ad,A.options.get(ad));},_uiSetOptions:function(cC){var A=this;var cB=A.get(ac);var cA=A.get(bA);var L=[];cr.each(cC,function(cE,cD,cF){L.push(bE(cA,cE));});cB.setContent(L.join(P));}}});b5.FormBuilderMultipleChoiceField=f;b5.FormBuilder.types["multiple-choice"]=b5.FormBuilderMultipleChoiceField;var bW=b5.Lang,aW=bW.isArray,aY=bW.isBoolean,aA=bW.isNumber,bS=bW.isString,aQ="boundingBox",e="bodyContent",J="checked",aw="choice",cq="contentBox",aK="container",bO=".",bI="",bp="field",g="fields",aF="form-builder-field",bc="form-builder-radio-field",cg="id",r="icon",bi="inline",ai="label",c="labels",aB="name",cy="node",H="optionsContainerNode",aN="predefinedValue",V="radio",av="size",X=" ",aH="template",ac="templateNode",m="value",z=b5.getClassName,d=z(bp),b2=z(bp,aw),bM=z(aF),aP=z(aF,V),b8=z(aF,cy),b9=z(aF,ad,aK),bP=z(bG,ci),bZ=z(bp,c,bi),b3='<li class="'+[G,bm,bM,aP].join(X)+'"></li>',Z='<div class="'+b9+'"></div>',aV='<input id="{id}" class="'+[b8,d,b2].join(X)+'" name="{name}" type="radio" value="{value}" {checked} />',cc='<input type="hidden" />';var i=b5.Component.create({NAME:bc,ATTRS:{name:{value:V},optionTemplate:{value:aV},template:{valueFn:function(){return aV;}},optionsContainerNode:{valueFn:function(){return b5.Node.create(Z);}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bM,HTML_PARSER:{optionsContainerNode:bO+b9,templateNode:bO+b8},EXTENDS:b5.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:b3,renderUI:function(){var A=this;var L=A.get(cq);var cA=A.get(H);b5.FormBuilderRadioField.superclass.renderUI.apply(A,arguments);L.append(cA);},getNode:function(){var A=this;return b5.Node.create(cc);},_onFieldChange:function(L){var A=this;var cA=L.target;A.set(aN,cA.val());},_uiSetDisabled:function(cA){var A=this;var L=A.get(H);L.all(a0).each(function(cB){if(cA){cB.setAttribute(bH,cA);}else{cB.removeAttribute(bH);}});},_uiSetOptions:function(cC){var A=this;var L=A.get(cq);var cB=A.get(H);var cA=A.get(ac);cB.empty();b5.each(cC,function(cF){var cE=new b5.Field({type:V,disabled:A.get(bH),name:A.get(aB),labelText:cF.label,labelAlign:"left",value:cF.value}).render(cB);var cD=cE.get(cy);if(cF.value==A.get(aN)){cD.set(J,true);}if(A.get(bH)){cD.setAttribute(bH,cC);}else{cD.removeAttribute(bH);}cD.on({change:b5.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(cC){var A=this;var L=A.get(be);var cA=L.get(ar);var cB=cA.one("input[name=predefinedValue]");if(cB){cB.val(cC);}}}});b5.FormBuilderRadioField=i;b5.FormBuilder.types["radio"]=b5.FormBuilderRadioField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,bw=function(A){return(A instanceof b5.Node);
},a5=function(A){return(A instanceof b5.NodeList);},a9=b5.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aQ="boundingBox",cl="button",cj="buttonType",cq="contentBox",aK="container",cs="defaultOptions",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bI="",bp="field",g="fields",aF="form-builder-field",b4="form-builder-select-field",cg="id",r="icon",a0="input",ai="label",ck="multiple",aB="name",cy="node",R="option",ad="options",ba="portalLayout",aN="predefinedValue",bs="proxy",bQ="reset",bX="selectedIndex",ax="submit",X=" ",aH="template",ac="templateNode",bK="text",Y="type",m="value",z=b5.getClassName,bu=z(bp,a0),O=z(bp,a0,bK),bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),bD='<select id="{id}" class="'+[b8].join(X)+'" name="{name}" value="{value}"></select>';var ag=b5.Component.create({NAME:b4,ATTRS:{multiple:{setter:b5.DataType.Boolean.parse,value:false},template:{valueFn:function(){return bD;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:b5.FormBuilderField.UI_ATTRS.concat([ck]),CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var cB=A.get(aH);var cD=A.get(cg);var cA=A.get(ai);var L=A.get(aB);var cC=A.get(aN);return b5.substitute(cB,{id:cD,label:cA,name:L,value:cC});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cA=L.get(be);var cC=cA.get(ar);var cD=L.settingsNodesMap;b5.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var cB=L.propertiesPanel.get(e);L._renderSettingsFields([{type:"checkbox",name:ck,labelText:"Multiple",labelAlign:"left"}],cB.item(0));var A=cD["multipleSettingNode"];A.on({change:b5.bind(L._onSettingsFieldChange,L)});A.set(J,L.get(ck));}},_uiSetMultiple:function(cA){var A=this;var L=A.get(ac);if(cA){L.setAttribute(ck,ck);}else{L.removeAttribute(ck);}}}});b5.FormBuilderSelectField=ag;b5.FormBuilder.types["select"]=b5.FormBuilderSelectField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,bw=function(A){return(A instanceof b5.Node);},a5=function(A){return(A instanceof b5.NodeList);},aQ="boundingBox",cq="contentBox",aK="container",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bI="",bp="field",g="fields",aF="form-builder-field",a1="form-builder-input-field",cg="id",r="icon",a0="input",ai="label",aB="name",cy="node",ba="portalLayout",aN="predefinedValue",bs="proxy",X=" ",aH="template",ac="templateNode",bK="text",m="value",by="width",z=b5.getClassName,bu=z(bp,a0),O=z(bp,a0,bK),bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),bJ='<input id="{id}" class="'+[b8,bu,O].join(X)+'" name="{name}" type="text" value="{value}" />',aI={small:25,medium:50,large:100};var bx=b5.Component.create({NAME:a1,ATTRS:{template:{valueFn:function(){return bJ;}},templateNode:{valueFn:"getNode"},width:{setter:b5.DataType.String.evaluate,value:25}},CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderField,prototype:{bindUI:function(){var A=this;b5.FormBuilderTextField.superclass.bindUI.apply(A,arguments);var L=A.get(ac);L.on({input:b5.bind(A._onValueInput,A)});},getHTML:function(){var A=this;var cC=A.get(aH);var cE=A.get(cg);var cA=A.get(ai);var L=A.get(aB);var cD=A.get(aN);var cB=A.get(by);return b5.substitute(cC,{id:cE,label:cA,name:L,value:cD,width:cB});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());},renderSettings:function(){var cG=this;var cF=cG.get(be);var cA=cF.get(ar);var cE=cG.settingsNodesMap;var cH=cF.get(bY);b5.FormBuilderTextField.superclass.renderSettings.apply(cG,arguments);if(!cG._renderedInputSettings){cG._renderedInputSettings=true;var cC=cG.propertiesPanel.get(e);var A=0;var cD=-1;var cB=[];b5.each(aI,function(cK,cJ){if(cK==cG.get(by)){cD=A;}cB.push({labelText:cH[cJ],value:cK});A++;});cG._renderSettingsFields([{labelText:"Width",name:by,options:cB,type:"select",value:cG.get(by)}],cC.item(0));var L=cE["predefinedValueSettingNode"];L.on({input:b5.bind(cG._onValueInput,cG)});var cI=cE["widthSettingNode"];cI.on({change:b5.bind(cG._onWidthChange,cG)});cI.all(R).item(cD).set(bf,true);}},_onValueInput:function(L){var A=this;var cA=L.target;A.set(aN,cA.val());},_onWidthChange:function(L){var A=this;var cA=L.target;A.set(by,cA.val());},_uiSetWidth:function(cA){var A=this;var L=A.get(ac);L.addClass(z("w"+cA));L.removeClass(z("w"+A.prevWidth));A.prevWidth=cA;}}});b5.FormBuilderTextField=bx;b5.FormBuilder.types["text"]=b5.FormBuilderTextField;var bW=b5.Lang,aW=bW.isArray,aA=bW.isNumber,bS=bW.isString,aQ="boundingBox",cq="contentBox",aK="container",bO=".",bd="drag",aC="dragContainer",v="dragContainerNode",b0="dragNodesList",az="drop",bh="dropContainer",bo="dropContainerNode",bI="",bp="field",g="fields",aF="form-builder-field",cm="form-builder-textarea-field",cg="id",r="icon",ai="label",aB="name",cy="node",ba="portalLayout",aN="predefinedValue",bs="proxy",av="size",X=" ",aH="template",ac="templateNode",bK="text",aq="textarea",m="value",z=b5.getClassName,d=z(bp),bt=z(bp,bK),N=z(bp,aq),bM=z(aF),b8=z(aF,cy),bP=z(bG,ci),al='<textarea id="{id}" class="'+[b8,d,bt,N].join(X)+'" name="{name}">{value}</textarea>';var aL=b5.Component.create({NAME:cm,ATTRS:{template:{valueFn:function(){return al;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bM,HTML_PARSER:{templateNode:bO+b8},EXTENDS:b5.FormBuilderTextField,prototype:{getHTML:function(){var A=this;var cC=A.get(aH);var cE=A.get(cg);var cA=A.get(ai);var L=A.get(aB);var cB=A.get(av);var cD=A.get(aN);return b5.substitute(cC,{id:cE,label:cA,name:L,value:cD});},getNode:function(){var A=this;return b5.Node.create(A.getHTML());}}});b5.FormBuilderTextAreaField=aL;b5.FormBuilder.types["textarea"]=b5.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","aui-tooltip","io","substitute"],skinnable:true});