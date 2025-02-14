var se=Object.defineProperty;var ae=u=>{throw TypeError(u)};var ne=(u,e,t)=>e in u?se(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var $=(u,e,t)=>ne(u,typeof e!="symbol"?e+"":e,t),j=(u,e,t)=>e.has(u)||ae("Cannot "+t);var c=(u,e,t)=>(j(u,e,"read from private field"),t?t.call(u):e.get(u)),m=(u,e,t)=>e.has(u)?ae("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(u):e.set(u,t),v=(u,e,t,o)=>(j(u,e,"write to private field"),o?o.call(u,t):e.set(u,t),t),w=(u,e,t)=>(j(u,e,"access private method"),t);const y={INIT:"init",READY:"ready",RENDER_CHAT_MESSAGE:"renderChatMessage",GET_SCENE_CONTROLS:"getSceneControlButtons",RENDER_SCENE_CONTROLS:"renderSceneControls",RENDER_PLAYERS_LIST:"renderPlayerList",RENDER_SCENE_NAV:"renderSceneNavigation",COLLAPSE_SCENE_NAV:"collapseSceneNavigation",EXPAND_SCENE_NAV:"expandSceneNavigation",COLLAPSE_SIDE_BAR:"collapseSidebar",RENDER_HOTBAR:"renderHotbar",RENDER_CAMERA_VIEWS:"renderCameraViews"},X="crlngn-ui",re="crlngn-ui",V=["%cCarolingian UI","color:rgb(54, 0, 119); font-weight: bold;","|"],f={select:"select",checkbox:"checkbox",text:"text",number:"number"},h={client:"client",world:"world"},i={enableChatStyles:{tag:"enable-chat-styles",label:"Enable styles for chat messages",hint:"Adds style modifications to chat cards. When dark mode is selected on Foundry, makes chat cards dark as well. MOSTLY FOR DND5E - only partial support for other systems.",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!0},customFont:{tag:"custom-font",label:"Custom fonts",hint:`You can type the name of custom fonts loaded on Foundry core and they will be used throughout the interface. Names with spaces must be written with double quotes ("Font Name"). If the font doesn't load you haven't typed the name correctly, or the font was not found. Default value: "Work Sans", Arial, sans-serif`,propType:String,inputType:f.text,default:'"Work Sans", "Roboto", Arial, sans-serif',scope:h.client,config:!0,requiresReload:!0},debugMode:{tag:"debug-mode",label:"Debug Mode",hint:"Enable or disable debug messages on browser console",propType:Boolean,inputType:f.checkbox,default:!1,scope:h.client,config:!0},sceneNavCollapsed:{tag:"scene-nav-collapsed",label:"Scene Navigation Collapsed",hint:"Current state of the scene navigation toggle. Is it collapsed?",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!1},sceneNavEnabled:{tag:"scene-nav-enabled",label:"Enable Scene Nav Styles",hint:"If you are having layout issues with a non-compatible module, you can disable my custom styles for Scene Navigation.",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!0},sceneNavPos:{tag:"scene-nav-pos",label:"Scene Navigation Position",hint:"Stores current position of navigation for reset when it's re-rendered",propType:Number,inputType:f.number,default:0,scope:h.client,config:!1},enableMacroLayout:{tag:"enable-macro-layout",label:"Enable macro resize",hint:"The module reduces the size of macro slots on the hotbar, and enlarges the numbers. Disable this setting to use default Foundry layout.",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!1},showSceneNavOnHover:{tag:"show-scene-nav-on-hover",label:"Show scene list on hover",hint:"If the scene navigation is collapsed, you can show it by hovering the mouse over the top of screen.",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!1},autoHideLeftControls:{tag:"auto-hide-secondary-controls",label:"Auto hide secondary controls",hint:"Enable to keep the secondary bar on the left controls hidden unless you hover on the region or click on an item",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!1},autoHidePlayerList:{tag:"auto-hide-player-list",label:"Auto hide player list",hint:"Enable to keep the bottom left players list minimized, except when hovered",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!1},collapseMacroBar:{tag:"collapse-macro-bar",label:"Collapse Macro Bar",hint:"Enable to have the macro hotbar start minimized by default on world load.",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.client,config:!0,requiresReload:!1},enableCameraStyles:{tag:"enable-camera-styles",label:"Enable floating camera dock",hint:"Apply styles to camera dock, so video players are floating and can be placed anywhere on screen. You may still pop out individual videos and move them independently",propType:Boolean,inputType:f.checkbox,default:!0,scope:h.world,config:!0,requiresReload:!0},cameraDockPosX:{tag:"camera-dock-pos-x",label:"X position of camera dock",hint:"Position of camera dock on X axis, from left. In absolute pixels. ",propType:Number,inputType:f.number,default:0,scope:h.client,config:!0},cameraDockPosY:{tag:"camera-dock-pos-y",label:"Y position of camera dock",hint:"Position of camera dock on Y axis, from bottom. In absolute pixels. ",propType:Number,inputType:f.number,default:100,scope:h.client,config:!0},cameraDockWidth:{tag:"camera-dock-width",label:"Width of camera dock",hint:"Width of camera dock when not minimized, in absolute pixels. ",propType:Number,inputType:f.number,default:120,scope:h.client,config:!0},cameraDockHeight:{tag:"camera-dock-height",label:"Height of camera dock",hint:"Height of camera dock when not minimized, in absolute pixels. ",propType:Number,inputType:f.number,default:120,scope:h.client,config:!0},controlIconSize:{tag:"conrol-icon-size",label:"Size of control icons",hint:"If you use a very large screen, you may want to change the size of the icons on left controls. This may affect some other UI elements",propType:Number,choices:{1:"small",2:"normal"},inputType:f.number,default:1,scope:h.client,config:!0}};class J{static isModuleOn(e){var o;const t=(o=game.modules)==null?void 0:o.get(e);return!!(t!=null&&t.active)}static html(e,t){return e.querySelector(t)}static getFullWidth(e){return window.getComputedStyle(e).width==="0px"?0:e.offsetWidth}static getOffsetBottom(e){const t=e.offsetTop,o=e.offsetHeight,n=e.offsetParent;return(n?n.clientHeight:window.innerHeight)-(t+o)}}var W,O,B,I,z,M,Y,E,Q,Z,U,_;const a=class a{static init(){s.get(i.enableCameraStyles.tag)?(Hooks.on(y.RENDER_CAMERA_VIEWS,a.onRenderFloating),d.log("CameraUtil",[s.get(i.enableCameraStyles.tag)]),a.onRenderFloating()):(Hooks.on(y.RENDER_CAMERA_VIEWS,a.onRenderPlain),a.onRenderPlain())}static onRenderPlain(){var e;(e=document.querySelector("#camera-views"))==null||e.classList.add("visible")}static onRenderFloating(){var o,n,r;(o=document.querySelector("#camera-views"))==null||o.classList.add("crlngn-ui"),a.cameraContainer=document.querySelector("#camera-views .camera-container");const e=document.querySelector("#camera-views .user-controls"),t=document.querySelector("#camera-views .camera-grid");d.log("CameraUtil.onRender",[s.get(i.cameraDockPosX.tag),s.get(i.cameraDockPosY.tag)]),a.cameraContainer&&t&&e&&((n=a.cameraContainer)==null||n.insertBefore(e,t),(r=document.querySelector("#camera-views .camera-container"))==null||r.classList.add("visible")),a.makeDraggable(),a.makeResizeable(),a.resetPositionAndSize(),a.placeControlsToggle()}static placeControlsToggle(){const e=document.querySelector("#camera-views .user-controls"),t=e==null?void 0:e.querySelectorAll(".crlngn-video-toggle");if(d.log("placeControlsToggle",[e,t]),(t==null?void 0:t.length)>0)return;const o=document.querySelector("#camera-views .user-controls .control-bar"),n=document.createElement("button");n.classList.add("crlngn-video-toggle"),n.innerHTML='<i class="fa fa-play-circle" aria-hidden="true"></i>',e==null||e.insertBefore(n,o)}static makeDraggable(){var e;(e=a.cameraContainer)==null||e.addEventListener("mousedown",t=>{var r,g;const o=document.querySelector("body.crlngn-ui");if(d.log("mousedown",[t.target]),(r=t.target.parentNode)!=null&&r.classList.contains("volume-bar"))return;o==null||o.addEventListener("mousemove",w(a,E,Z)),o==null||o.addEventListener("mouseup",w(a,E,Q));const n=J.getOffsetBottom(a.cameraContainer);a.isDragging=!0,v(a,W,t.clientX-((g=a.cameraContainer)==null?void 0:g.offsetLeft)),v(a,O,window.innerHeight-t.clientY-n),t.stopPropagation()})}static makeResizeable(){if(a.cameraContainer){const e=document.querySelector("body.crlngn-ui"),t=document.createElement("div");t.classList.add("resize-handle"),a.cameraContainer.append(t),t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation(),a.isResizing=!0,v(a,B,o.clientX),v(a,I,o.clientY),v(a,Y,parseInt(getComputedStyle(a.cameraContainer).bottom)||0),v(a,z,a.cameraContainer.offsetWidth),v(a,M,a.cameraContainer.offsetHeight),e==null||e.addEventListener("mousemove",w(a,E,U)),e==null||e.addEventListener("mouseup",w(a,E,_))})}}static resetPositionAndSize({x:e,y:t,w:o,h:n}={x:null,y:null,w:null,h:null}){if(a.cameraContainer){if(!e&&!t&&!o&&!n){const r=s.get(i.cameraDockPosX.tag)||0,g=s.get(i.cameraDockPosY.tag)||0,p=s.get(i.cameraDockWidth.tag)||0,S=s.get(i.cameraDockHeight.tag)||0;a.cameraContainer.style.left=`${r}px`,a.cameraContainer.style.bottom=`${g}px`,a.cameraContainer.style.width=`${p}px`,a.cameraContainer.style.height=`${S}px`}e&&(a.cameraContainer.style.left=`${e}px`),t&&(a.cameraContainer.style.bottom=`${t}px`),o&&(a.cameraContainer.style.width=`${o}px`),n&&(a.cameraContainer.style.height=`${n}px`)}}};W=new WeakMap,O=new WeakMap,B=new WeakMap,I=new WeakMap,z=new WeakMap,M=new WeakMap,Y=new WeakMap,E=new WeakSet,Q=function(e){var t,o;if(a.isDragging){const n=document.querySelector("body.crlngn-ui");s.set(i.cameraDockPosX.tag,parseInt((t=a.cameraContainer)==null?void 0:t.style.left)||0),s.set(i.cameraDockPosY.tag,parseInt((o=a.cameraContainer)==null?void 0:o.style.bottom)||0),n==null||n.removeEventListener("mousemove",w(a,E,Z)),n==null||n.removeEventListener("mouseup",w(a,E,Q)),a.isDragging=!1,e.stopPropagation()}},Z=function(e){if(a.isDragging&&(d.log("mousemove",[e.target.parentNode]),a.cameraContainer)){let t=e.clientX-c(a,W),o=window.innerHeight-e.clientY-c(a,O);t+a.cameraContainer.offsetWidth>window.innerWidth&&(t=window.innerWidth-a.cameraContainer.offsetWidt),a.cameraContainer.style.left=`${t}px`,o+a.cameraContainer.offsetHeight>window.innerHeight&&(o=window.innerHeight-a.cameraContainer.offsetHeight),a.cameraContainer.style.bottom=`${o}px`}},U=function(e){if(!a.isResizing)return;const t=c(a,z)+(e.clientX-c(a,B)),o=e.clientY-c(a,I),n=c(a,M)+o,r=c(a,Y)-o;a.cameraContainer.style.width=`${t}px`,a.cameraContainer.style.height=`${n}px`,a.cameraContainer.style.bottom=`${r}px`},_=function(){var t,o,n,r,g,p;const e=document.querySelector("body.crlngn-ui");a.isResizing=!1,e==null||e.removeEventListener("mousemove",w(a,E,U)),e==null||e.removeEventListener("mouseup",w(a,E,_)),d.log("onStopResize",[(t=a.cameraContainer)==null?void 0:t.style.width,(o=a.cameraContainer)==null?void 0:o.style.height,(n=a.cameraContainer)==null?void 0:n.style.bottom]),s.set(i.cameraDockWidth.tag,parseInt(((r=a.cameraContainer)==null?void 0:r.style.width)||0)),s.set(i.cameraDockHeight.tag,parseInt(((g=a.cameraContainer)==null?void 0:g.style.height)||0)),s.set(i.cameraDockPosY.tag,parseInt((p=a.cameraContainer)==null?void 0:p.style.bottom)||0)},m(a,E),m(a,W,0),m(a,O,0),$(a,"isDragging",!1),$(a,"cameraContainer"),$(a,"isResizing",!1),m(a,B,0),m(a,I,0),m(a,z,0),m(a,M,0),m(a,Y,0);let H=a;class s{static registerSettings(){document.querySelector("body").classList.add(re),Object.entries(i).forEach(async n=>{const r=n[1];d.log("Registering... ",[n]);const g={name:r.label,hint:r.hint,default:r.default,type:r.propType,scope:r.scope,config:r.config,requiresReload:r.requiresReload||!1,onChange:p=>s.apply(r.tag,p)};r.choices&&(g.choices=r.choices),await game.settings.register(X,r.tag,g),s.get(r.tag)===void 0&&s.set(r.tag,r.default),d.log("registerSettings",[r.tag,s.get(r.tag)])}),Hooks.on(y.RENDER_SCENE_CONTROLS,s.applyLeftControlsSettings),Hooks.on(y.RENDER_PLAYERS_LIST,s.applyPlayersListSettings),Hooks.on(y.RENDER_HOTBAR,()=>{s.applyHotBarSettings(),s.applyHotBarCollapse()}),s.applySceneNavSettings(),s.get(i.enableChatStyles.tag)&&document.querySelector("body").classList.add("crlngn-chat");const t=s.get(i.customFont.tag);t&&document.querySelector("body.crlngn-ui").style.setProperty("--crlngn-font-family",t);const o=s.get(i.controlIconSize.tag);o&&s.applyControlIconSize(o)}static get(e,t=X){if(!e)return null;let o=!1;if(t===X)o=game.settings.get(t,e);else{let r=game.settings.storage.get("client")[`${t}.${e}`];r===void 0&&(r=game.settings.storage.get("world").getSetting(`${t}.${e}`)),o=r==null?void 0:r.value,d.log("GET Setting",[r,o])}return o}static set(e,t,o=X){if(!e)return!1;let n=game.settings.storage.get("client")[`${o}.${e}`];n||(n=game.settings.storage.get("world").getSetting(`${o}.${e}`)),d.log("Setting",[e,n]);try{game.settings.set(o,e,t)}catch{d.log("Unable to change setting",[e,n])}return!0}static apply(e,t=void 0){switch(t===void 0&&(t=s.get(e)),d.log("SettingsUtil.apply",[e,t,s.get(e)]),e){case i.enableMacroLayout.tag:s.applyHotBarSettings();break;case i.collapseMacroBar.tag:s.applyHotBarCollapse();break;case i.autoHideLeftControls.tag:s.applyLeftControlsSettings();break;case i.autoHidePlayerList.tag:s.applyPlayersListSettings();break;case i.cameraDockPosX.tag:s.applyCameraPosX(t);break;case i.cameraDockPosY.tag:s.applyCameraPosY(t);break;case i.cameraDockWidth.tag:s.applyCameraWidth(t);break;case i.cameraDockHeight.tag:s.applyCameraHeight(t);break;case i.controlIconSize.tag:s.applyControlIconSize(t);break}}static applySettings(){}static applyHotBarSettings(){const e=s.get(i.enableMacroLayout.tag),t=document.querySelector("#hotbar");!e&&t?t.classList.add("foundry-default"):t&&t.classList.remove("foundry-default")}static applyHotBarCollapse(){s.get(i.collapseMacroBar.tag)&&ui.hotbar.collapse()}static applyLeftControlsSettings(){const e=s.get(i.autoHideLeftControls.tag),t=document.querySelector("#ui-left");e?t.classList.add("auto-hide"):t.classList.remove("auto-hide")}static applyPlayersListSettings(){var e,t;d.log("applyPlayersListSettings",[document.querySelector("#players"),s.get(i.autoHidePlayerList.tag)]),s.get(i.autoHidePlayerList.tag)?(e=document.querySelector("#players"))==null||e.classList.add("auto-hide"):(t=document.querySelector("#players"))==null||t.classList.remove("auto-hide")}static applySceneNavSettings(){s.set(i.sceneNavPos.tag,0)}static applyCameraPosX(e){const t=e||s.get(i.cameraDockPosX.tag);H.resetPositionAndSize({x:t})}static applyCameraPosY(e){const t=e||s.get(i.cameraDockPosY.tag);H.resetPositionAndSize({y:t})}static applyCameraWidth(e){const t=e||s.get(i.cameraDockWidth.tag);H.resetPositionAndSize({w:t})}static applyCameraHeight(e){const t=e||s.get(i.cameraDockHeight.tag);H.resetPositionAndSize({h:t})}static applyControlIconSize(e){const t=document.querySelector("body.crlngn-ui"),o=e==1?"36px":"42px";t.style.setProperty("--left-control-item-size",o)}}class d{static log(e="",t=[],o=!1){try{const n=s.get(i.debugMode.tag);if(!(o||n))return;console.log(...V,e,...t)}catch{console.log(...V,e,...t)}}static warn(e="",t=[]){console.warn(...V,e,...t)}static logError(e,t){var o;t.ui&&((o=ui.notifications)==null||o.error(e,{localize:!0,permanent:t.permanent})),t.console&&console.error(...V,e)}}var C,L,x,A,T,F,G;const l=class l{static init(){const e=document.querySelector("#ui-middle");if(s.get(i.sceneNavEnabled.tag)&&e)e.classList.add("crlngn-ui");else if(e){e.classList.remove("crlngn-ui");return}l.addListeners(),d.log(y.RENDER_SCENE_NAV,[ui.nav,s.get(i.sceneNavCollapsed.tag)]),l.setNavPosition(0),l.placeNavButtons(),s.get(i.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand(),Hooks.on(y.RENDER_SCENE_NAV,()=>{l.addListeners(),d.log(y.RENDER_SCENE_NAV,[ui.nav,s.get(i.sceneNavCollapsed.tag)]),l.setNavPosition(),l.placeNavButtons(),s.get(i.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand()}),Hooks.on(y.COLLAPSE_SIDE_BAR,t=>{l.placeNavButtons()}),Hooks.on(y.COLLAPSE_SCENE_NAV,(t,o)=>{s.set(i.sceneNavCollapsed.tag,o),d.log("NAV toggle",[t,o])}),Hooks.on(y.EXPAND_SCENE_NAV,(t,o)=>{s.set(i.sceneNavCollapsed.tag,!1),d.log("NAV expand",[t,!1])}),s.apply(i.sceneNavCollapsed.tag)}static addListeners(){var e,t;v(this,C,document.querySelector("#navigation")),v(this,L,document.querySelector("#scene-list")),v(this,A,document.querySelector("#navigation .nav-item.is-root")),v(this,T,document.querySelector("#nav-toggle")),(e=c(this,C))==null||e.addEventListener("mouseenter",()=>{if(!s.get(i.sceneNavCollapsed.tag)||!s.get(i.showSceneNavOnHover.tag))return;clearTimeout(c(this,x));const o=document.querySelector("#scene-list");o.style.display="flex",document.querySelector("#navigation").classList.remove("collapsed")}),(t=c(this,C))==null||t.addEventListener("mouseleave",n=>{if(!(!s.get(i.sceneNavCollapsed.tag)||!s.get(i.showSceneNavOnHover.tag))){if(!n)var n=window.event;n.cancelBubble=!0,n.stopPropagation&&n.stopPropagation(),v(this,x,setTimeout(()=>{clearTimeout(c(this,x)),v(this,x,null);const r=document.querySelector("#scene-list");r.style.display="none",document.querySelector("#navigation").classList.add("collapsed")},700))}})}static placeNavButtons(){var p,S,b,k,R,N,D;const e=(p=c(this,C))==null?void 0:p.querySelectorAll("button.crlngn-nav"),t=((S=c(this,L))==null?void 0:S.scrollWidth)>=((b=c(this,C))==null?void 0:b.offsetWidth);if(d.log("placeNavButtons",[t,e,(k=c(this,L))==null?void 0:k.scrollWidth,(R=c(this,C))==null?void 0:R.offsetWidth]),!t||e.length>0)return;const o=document.createElement("button");o.classList.add("crlngn-nav"),o.classList.add("ui-nav-left");const n=document.createElement("i");n.classList.add("fa"),n.classList.add("fa-chevron-left"),o.addEventListener("click",c(this,F)),o.append(n);const r=document.createElement("button");r.classList.add("crlngn-nav"),r.classList.add("ui-nav-right");const g=document.createElement("i");g.classList.add("fa"),g.classList.add("fa-chevron-right"),r.append(g),r.addEventListener("click",c(this,G)),(N=c(this,C))==null||N.appendChild(o),(D=c(this,C))==null||D.appendChild(r)}static setNavPosition(e){var r,g;const t=e!==void 0?e:s.get(i.sceneNavPos.tag),o=((r=c(this,L))==null?void 0:r.querySelectorAll("li.nav-item"))||[],n=((g=o[t])==null?void 0:g.offsetLeft)*-1;c(this,L).style.marginLeft=n+"px",s.set(i.sceneNavPos.tag,t),d.log("setNavPosition",[e,t,o[t],n])}};C=new WeakMap,L=new WeakMap,x=new WeakMap,A=new WeakMap,T=new WeakMap,F=new WeakMap,G=new WeakMap,m(l,C),m(l,L),m(l,x),m(l,A),m(l,T),m(l,F,e=>{var k,R,N,D,q;const t=(k=c(l,T))==null?void 0:k.offsetWidth,o=J.isModuleOn("compact-scene-navigation")?(R=c(l,A))==null?void 0:R.offsetWidth:0,n=(N=c(l,L))==null?void 0:N.querySelector("li.nav-item:not(.is-root)"),r=((D=c(l,L))==null?void 0:D.querySelectorAll("li.nav-item"))||[],g=n.offsetWidth,p=s.get(i.sceneNavPos.tag)||0,S=Math.floor((((q=c(l,C))==null?void 0:q.offsetWidth)-(p===0?o:0)-t*2)/g);d.log("onNavLast",["currPos",p,S]);let b=p-S;b=b<0?0:b,d.log("onNavLast",["sceneCount",r.length,p,b]),l.setNavPosition(b)}),m(l,G,e=>{var k,R,N,D,q;const t=(k=c(l,T))==null?void 0:k.offsetWidth,o=J.isModuleOn("compact-scene-navigation")?(R=c(l,A))==null?void 0:R.offsetWidth:0,n=(N=c(l,L))==null?void 0:N.querySelector("li.nav-item:not(.is-root)"),r=((D=c(l,L))==null?void 0:D.querySelectorAll("li.nav-item:not(.is-root)"))||[],g=n.offsetWidth,p=s.get(i.sceneNavPos.tag)||0,S=Math.floor((((q=c(l,C))==null?void 0:q.offsetWidth)-(p===0?o:0)-t*2)/g);d.log("onNavLast",["currPos",p,S]);let b=p+S;b=b>r.length?r.length:b,l.setNavPosition(b)});let ee=l;class ie{static enrichCard(e,t){var o,n,r,g,p,S;if(s.get(i.enableChatStyles.tag)){const b=((r=(n=(o=e.flags)==null?void 0:o.dnd5e)==null?void 0:n.activity)==null?void 0:r.type)||((S=(p=(g=e.flags)==null?void 0:g.dnd5e)==null?void 0:p.roll)==null?void 0:S.type)||"custom",k=t.get(0);k.classList.add("crlngn"),k.classList.add(b)}}}class oe{static init(){Hooks.on(y.RENDER_PLAYERS_LIST,oe.onRender)}static onRender(){const e=document.querySelector("aside#players"),t=document.querySelector('aside#players h3[aria-label="Players"]'),o=e.offsetHeight;document.querySelector("body.crlngn-ui").style.setProperty("--players-list-height",o+"px"),t.addEventListener("click",()=>{e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")})}}var K;const P=class P{static init(){Hooks.once(y.INIT,()=>{var e;(e=document.querySelector("#ui-middle"))==null||e.classList.add("crlngn-ui"),d.log("Initiating module",[],!0),s.registerSettings(),Hooks.on(y.RENDER_CHAT_MESSAGE,c(P,K))}),Hooks.once(y.READY,()=>{var e=s.get("debug-mode");e&&(CONFIG.debug.hooks=!0),d.log("Core Ready",[]),ee.init(),H.init(),oe.init()})}static setupKeyListeners(){window.addEventListener("keydown",e=>{const t=e.key;P.keysPressed.indexOf(t)<0&&P.keysPressed.push(t),d.log("Keydown",[P.keysPressed])}),window.addEventListener("keyup",e=>{const t=e.key,o=P.keysPressed.indexOf(t);o>=0&&P.keysPressed.splice(o,1),d.log("Keyup",[P.keysPressed])})}};K=new WeakMap,m(P,K,(e,t)=>{d.log(y.RENDER_CHAT_MESSAGE,[e,t]),ie.enrichCard(e,t)});let te=P;te.init();
//# sourceMappingURL=module.js.map
