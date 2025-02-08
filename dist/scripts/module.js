var I=d=>{throw TypeError(d)};var M=(d,e,t)=>e.has(d)||I("Cannot "+t);var c=(d,e,t)=>(M(d,e,"read from private field"),t?t.call(d):e.get(d)),L=(d,e,t)=>e.has(d)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(d):e.set(d,t),P=(d,e,t,s)=>(M(d,e,"write to private field"),s?s.call(d,t):e.set(d,t),t);const p={INIT:"init",READY:"ready",RENDER_CHAT_MESSAGE:"renderChatMessage",GET_SCENE_CONTROLS:"getSceneControlButtons",RENDER_SCENE_CONTROLS:"renderSceneControls",RENDER_PLAYERS_LIST:"renderPlayerList",RENDER_SCENE_NAV:"renderSceneNavigation",COLLAPSE_SCENE_NAV:"collapseSceneNavigation",EXPAND_SCENE_NAV:"expandSceneNavigation",COLLAPSE_SIDE_BAR:"collapseSidebar",RENDER_HOTBAR:"renderHotbar"},O="crlngn-ui",F="crlngn-ui",D=["%cCarolingian UI","color:rgb(54, 0, 119); font-weight: bold;","|"],S={select:"select",checkbox:"checkbox",text:"text"},m={client:"client",world:"world"},l={enableChatStyles:{tag:"enable-chat-styles",label:"Enable styles for chat messages",hint:"Adds style modifications to chat cards. When dark mode is selected on Foundry, makes chat cards dark as well. MOSTLY FOR DND5E - only partial support for other systems.",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!0,requiresReload:!0},customFont:{tag:"custom-font",label:"Custom fonts",hint:`You can type the name of custom fonts loaded on Foundry core and they will be used throughout the interface. Names with spaces must be written with double quotes ("Font Name"). If the font doesn't load you haven't typed the name correctly, or the font was not found. Default value: "Work Sans", Arial, sans-serif`,propType:String,inputType:S.text,default:'"Work Sans", "Roboto", Arial, sans-serif',scope:m.client,config:!0,requiresReload:!0},debugMode:{tag:"debug-mode",label:"Debug Mode",hint:"Enable or disable debug messages on browser console",propType:Boolean,inputType:S.checkbox,default:!1,scope:m.client,config:!0},sceneNavCollapsed:{tag:"scene-nav-collapsed",label:"Scene Navigation Collapsed",hint:"Current state of the scene navigation toggle. Is it collapsed?",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!1},sceneNavDisabled:{tag:"scene-nav-disabled",label:"Disable Scene Nav Styles",hint:"If you are having layout issues with a non-compatible module, you can disable my custom styles for Scene Navigation. This will also affect positioning of the macro bar",propType:Boolean,inputType:S.checkbox,default:!1,scope:m.client,config:!0,requiresReload:!0},sceneNavPos:{tag:"scene-nav-pos",label:"Scene Navigation Position",hint:"Stores current position of navigation for reset when it's re-rendered",propType:Number,inputType:S.number,default:0,scope:m.client,config:!1},enableMacroLayout:{tag:"enable-macro-layout",label:"Enable macro resize",hint:"The module reduces the size of macro slots on the hotbar, and enlarges the numbers. Disable this setting to use default Foundry layout.",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!0,requiresReload:!1},showSceneNavOnHover:{tag:"show-scene-nav-on-hover",label:"Show scene list on hover",hint:"If the scene navigation is collapsed, you can show it by hovering the mouse over the top of screen.",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!0,requiresReload:!1},autoHideLeftControls:{tag:"auto-hide-secondary-controls",label:"Auto hide secondary controls",hint:"Enable to keep the secondary bar on the left controls hidden unless you hover on the region or click on an item",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!0,requiresReload:!1},autoHidePlayerList:{tag:"auto-hide-player-list",label:"Auto hide player list",hint:"Enable to keep the bottom left players list minimized, except when hovered",propType:Boolean,inputType:S.checkbox,default:!0,scope:m.client,config:!0,requiresReload:!1}};class n{static registerSettings(){document.querySelector("body").classList.add(F),Object.entries(l).forEach(async s=>{const o=s[1];r.log("Registering... ",[s]);const a={name:o.label,hint:o.hint,default:o.default,type:o.propType,scope:o.scope,config:o.config,requiresReload:o.requiresReload||!1,onChange:u=>n.apply(o.tag,u)};await game.settings.register(O,o.tag,a),n.get(o.tag)===void 0&&n.set(o.tag,o.default),r.log("registerSettings",[o.tag,n.get(o.tag)])}),Hooks.on(p.RENDER_SCENE_CONTROLS,n.applyLeftControlsSettings),Hooks.on(p.RENDER_PLAYERS_LIST,n.applyPlayersListSettings),Hooks.on(p.RENDER_HOTBAR,n.applyHotBarSettings),n.applySceneNavSettings(),n.get(l.enableChatStyles.tag)&&document.querySelector("body").classList.add("crlngn-chat");const t=n.get(l.customFont.tag);t&&document.querySelector("body.crlngn-ui").style.setProperty("--crlngn-font-family",t)}static get(e,t=O){if(!e)return null;let s=!1;if(t===O)s=game.settings.get(t,e);else{let a=game.settings.storage.get("client")[`${t}.${e}`];a===void 0&&(a=game.settings.storage.get("world").getSetting(`${t}.${e}`)),s=a==null?void 0:a.value,r.log("GET Setting",[a,s])}return s}static set(e,t,s=O){if(!e)return!1;let o=game.settings.storage.get("client")[`${s}.${e}`];o||(o=game.settings.storage.get("world").getSetting(`${s}.${e}`)),r.log("Setting",[e,o]);try{game.settings.set(s,e,t)}catch{r.log("Unable to change setting",[e,o])}return!0}static apply(e,t=void 0){switch(t===void 0&&(t=n.get(e)),r.log("SettingsUtil.apply",[e,t,n.get(e)]),e){case l.enableMacroLayout.tag:n.applyHotBarSettings();break;case l.autoHideLeftControls.tag:n.applyLeftControlsSettings();break;case l.autoHidePlayerList.tag:n.applyPlayersListSettings();break}}static applySettings(){}static applyHotBarSettings(){const e=n.get(l.enableMacroLayout.tag),t=document.querySelector("#hotbar");e?t.classList.remove("foundry-default"):t.classList.add("foundry-default")}static applyLeftControlsSettings(){const e=n.get(l.autoHideLeftControls.tag),t=document.querySelector("#ui-left");e?t.classList.add("auto-hide"):t.classList.remove("auto-hide")}static applyPlayersListSettings(){var e,t;r.log("applyPlayersListSettings",[document.querySelector("#ui-left aside#players"),document.querySelector("aside#players"),n.get(l.autoHidePlayerList.tag)]),n.get(l.autoHidePlayerList.tag)?(e=document.querySelector("#ui-left aside#players"))==null||e.classList.add("auto-hide"):(t=document.querySelector("#ui-left aside#players"))==null||t.classList.remove("auto-hide")}static applySceneNavSettings(){n.set(l.sceneNavPos.tag,0)}}class r{static log(e="",t=[],s=!1){try{const o=n.get(l.debugMode.tag);if(!(s||o))return;console.log(...D,e,...t)}catch{console.log(...D,e,...t)}}static warn(e="",t=[]){console.warn(...D,e,...t)}static logError(e,t){var s;t.ui&&((s=ui.notifications)==null||s.error(e,{localize:!0,permanent:t.permanent})),t.console&&console.error(...D,e)}}class G{static isModuleOn(e){var s;const t=(s=game.modules)==null?void 0:s.get(e);return!!(t!=null&&t.active)}static html(e,t){return e.querySelector(t)}static getFullWidth(e){return window.getComputedStyle(e).width==="0px"?0:e.offsetWidth}}var h,y,w,k,A,x,H;const i=class i{static init(){var e,t;if(n.get(l.sceneNavDisabled.tag)){(e=document.querySelector("#ui-middle"))==null||e.classList.remove("crlngn-ui");return}else(t=document.querySelector("#ui-middle"))==null||t.classList.add("crlngn-ui");i.addListeners(),r.log(p.RENDER_SCENE_NAV,[ui.nav,n.get(l.sceneNavCollapsed.tag)]),i.setNavPosition(0),i.placeNavButtons(),n.get(l.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand(),Hooks.on(p.RENDER_SCENE_NAV,()=>{i.addListeners(),r.log(p.RENDER_SCENE_NAV,[ui.nav,n.get(l.sceneNavCollapsed.tag)]),i.setNavPosition(),i.placeNavButtons(),n.get(l.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand()}),Hooks.on(p.COLLAPSE_SIDE_BAR,s=>{i.placeNavButtons()}),Hooks.on(p.COLLAPSE_SCENE_NAV,(s,o)=>{n.set(l.sceneNavCollapsed.tag,o),r.log("NAV toggle",[s,o])}),Hooks.on(p.EXPAND_SCENE_NAV,(s,o)=>{n.set(l.sceneNavCollapsed.tag,!1),r.log("NAV expand",[s,!1])}),n.apply(l.sceneNavCollapsed.tag)}static addListeners(){var e,t;P(this,h,document.querySelector("#navigation")),P(this,y,document.querySelector("#scene-list")),P(this,k,document.querySelector("#navigation .nav-item.is-root")),P(this,A,document.querySelector("#nav-toggle")),(e=c(this,h))==null||e.addEventListener("mouseenter",()=>{if(!n.get(l.sceneNavCollapsed.tag)||!n.get(l.showSceneNavOnHover.tag))return;clearTimeout(c(this,w));const s=document.querySelector("#scene-list");s.style.display="flex",document.querySelector("#navigation").classList.remove("collapsed")}),(t=c(this,h))==null||t.addEventListener("mouseleave",o=>{if(!(!n.get(l.sceneNavCollapsed.tag)||!n.get(l.showSceneNavOnHover.tag))){if(!o)var o=window.event;o.cancelBubble=!0,o.stopPropagation&&o.stopPropagation(),P(this,w,setTimeout(()=>{clearTimeout(c(this,w)),P(this,w,null);const a=document.querySelector("#scene-list");a.style.display="none",document.querySelector("#navigation").classList.add("collapsed")},700))}})}static placeNavButtons(){var f,v,g,E,N,C,R;const e=(f=c(this,h))==null?void 0:f.querySelectorAll("button.crlngn-nav"),t=((v=c(this,y))==null?void 0:v.scrollWidth)>=((g=c(this,h))==null?void 0:g.offsetWidth);if(r.log("placeNavButtons",[t,e,(E=c(this,y))==null?void 0:E.scrollWidth,(N=c(this,h))==null?void 0:N.offsetWidth]),!t||e.length>0)return;const s=document.createElement("button");s.classList.add("crlngn-nav"),s.classList.add("ui-nav-left");const o=document.createElement("i");o.classList.add("fa"),o.classList.add("fa-chevron-left"),s.addEventListener("click",c(this,x)),s.append(o);const a=document.createElement("button");a.classList.add("crlngn-nav"),a.classList.add("ui-nav-right");const u=document.createElement("i");u.classList.add("fa"),u.classList.add("fa-chevron-right"),a.append(u),a.addEventListener("click",c(this,H)),(C=c(this,h))==null||C.appendChild(s),(R=c(this,h))==null||R.appendChild(a)}static setNavPosition(e){var a,u;const t=e!==void 0?e:n.get(l.sceneNavPos.tag),s=((a=c(this,y))==null?void 0:a.querySelectorAll("li.nav-item"))||[],o=((u=s[t])==null?void 0:u.offsetLeft)*-1;c(this,y).style.marginLeft=o+"px",n.set(l.sceneNavPos.tag,t),r.log("setNavPosition",[e,t,s[t],o])}};h=new WeakMap,y=new WeakMap,w=new WeakMap,k=new WeakMap,A=new WeakMap,x=new WeakMap,H=new WeakMap,L(i,h),L(i,y),L(i,w),L(i,k),L(i,A),L(i,x,e=>{var E,N,C,R,q;const t=(E=c(i,A))==null?void 0:E.offsetWidth,s=G.isModuleOn("compact-scene-navigation")?(N=c(i,k))==null?void 0:N.offsetWidth:0,o=(C=c(i,y))==null?void 0:C.querySelector("li.nav-item:not(.is-root)"),a=((R=c(i,y))==null?void 0:R.querySelectorAll("li.nav-item"))||[],u=o.offsetWidth,f=n.get(l.sceneNavPos.tag)||0,v=Math.floor((((q=c(i,h))==null?void 0:q.offsetWidth)-(f===0?s:0)-t*2)/u);r.log("onNavLast",["currPos",f,v]);let g=f-v;g=g<0?0:g,r.log("onNavLast",["sceneCount",a.length,f,g]),i.setNavPosition(g)}),L(i,H,e=>{var E,N,C,R,q;const t=(E=c(i,A))==null?void 0:E.offsetWidth,s=G.isModuleOn("compact-scene-navigation")?(N=c(i,k))==null?void 0:N.offsetWidth:0,o=(C=c(i,y))==null?void 0:C.querySelector("li.nav-item:not(.is-root)"),a=((R=c(i,y))==null?void 0:R.querySelectorAll("li.nav-item:not(.is-root)"))||[],u=o.offsetWidth,f=n.get(l.sceneNavPos.tag)||0,v=Math.floor((((q=c(i,h))==null?void 0:q.offsetWidth)-(f===0?s:0)-t*2)/u);r.log("onNavLast",["currPos",f,v]);let g=f+v;g=g>a.length?a.length:g,i.setNavPosition(g)});let B=i;class V{static enrichCard(e,t){var s,o,a,u,f,v;if(n.get(l.enableChatStyles.tag)){const g=((a=(o=(s=e.flags)==null?void 0:s.dnd5e)==null?void 0:o.activity)==null?void 0:a.type)||((v=(f=(u=e.flags)==null?void 0:u.dnd5e)==null?void 0:f.roll)==null?void 0:v.type)||"custom",E=t.get(0);E.classList.add("crlngn"),E.classList.add(g)}}}var T;const b=class b{static init(){Hooks.once(p.INIT,()=>{var e;(e=document.querySelector("#ui-middle"))==null||e.classList.add("crlngn-ui"),r.log("Initiating module",[],!0),n.registerSettings(),Hooks.on(p.RENDER_CHAT_MESSAGE,c(b,T))}),Hooks.once(p.READY,()=>{var e=n.get("debug-mode");e&&(CONFIG.debug.hooks=!0),r.log("Core Ready",[]),B.init()})}static setupKeyListeners(){window.addEventListener("keydown",e=>{const t=e.key;b.keysPressed.indexOf(t)<0&&b.keysPressed.push(t),r.log("Keydown",[b.keysPressed])}),window.addEventListener("keyup",e=>{const t=e.key,s=b.keysPressed.indexOf(t);s>=0&&b.keysPressed.splice(s,1),r.log("Keyup",[b.keysPressed])})}};T=new WeakMap,L(b,T,(e,t)=>{r.log(p.RENDER_CHAT_MESSAGE,[e,t]),V.enrichCard(e,t)});let W=b;W.init();
//# sourceMappingURL=module.js.map
