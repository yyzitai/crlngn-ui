var D=r=>{throw TypeError(r)};var I=(r,t,e)=>t.has(r)||D("Cannot "+e);var c=(r,t,e)=>(I(r,t,"read from private field"),e?e.call(r):t.get(r)),p=(r,t,e)=>t.has(r)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),C=(r,t,e,s)=>(I(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);const y={CHAT_MESSAGE:"chatMessage",INIT:"init",READY:"ready",PRE_CREATE_CHAT_MESSAGE:"preCreateChatMessage",CREATE_CHAT_MESSAGE:"createChatMessage",RENDER_CHAT_MESSAGE:"renderChatMessage",CREATE_MEASURED_TEMPLATE:"createMeasuredTemplate",REFRESH_MEASURED_TEMPLATE:"refreshMeasuredTemplate",GET_SCENE_CONTROLS:"getSceneControlButtons",RENDER_SCENE_NAV:"renderSceneNavigation",COLLAPSE_SCENE_NAV:"collapseSceneNavigation",EXPAND_SCENE_NAV:"expandSceneNavigation"},v="crlngn-ui",G="crlngn-ui",m=["%cCarolingian UI","color:rgb(54, 0, 119); font-weight: bold;","|"],N={select:"select",checkbox:"checkbox"},P={client:"client",world:"world"},g={enableChatStyles:{tag:"enable-chat-styles",label:"Enable styles for chat messages",hint:"Adds small modifications of style for chat cards. When dark mode is selected on Foundry, makes chat cards dark as well.",propType:Boolean,inputType:N.checkbox,default:!0,scope:P.client,config:!0},debugMode:{tag:"debug-mode",label:"Debug Mode",hint:"Enable or disable debug messages on browser console",propType:Boolean,inputType:N.checkbox,default:!1,scope:P.client,config:!0},sceneNavCollapsed:{tag:"scene-nav-collapsed",label:"Scene Navigation Collapsed",hint:"Current state of the scene navigation toggle. Is it collapsed?",propType:Boolean,inputType:N.checkbox,default:!0,scope:P.client,config:!1},sceneNavPos:{tag:"scene-nav-pos",label:"Scene Navigation Position",hint:"Stores current position of navigation for reset when it's re-rendered",propType:Number,inputType:N.number,default:0,scope:P.client,config:!1}};class o{static registerSettings(){document.querySelector("body").classList.add(G),Object.entries(g).forEach(async e=>{const s=e[1];l.log("Registering... ",[e]),await game.settings.register(v,s.tag,{name:s.label,hint:s.hint,default:s.default,type:s.propType,scope:s.scope,config:s.config,onChange:n=>o.apply(s.tag,n)}),o.get(s.tag)===void 0&&o.set(s.tag,s.default),o.get(g.enableChatStyles.tag)&&document.querySelector("body").classList.add("crlngn-chat"),l.log("registerSettings",[s.tag,o.get(s.tag)])})}static get(t,e=v){if(!t)return null;let s=!1;if(e===v)s=game.settings.get(e,t);else{let i=game.settings.storage.get("client")[`${e}.${t}`];i===void 0&&(i=game.settings.storage.get("world").getSetting(`${e}.${t}`)),s=i==null?void 0:i.value,l.log("GET Setting",[i,s])}return s}static set(t,e,s=v){if(!t)return!1;let n=game.settings.storage.get("client")[`${s}.${t}`];n||(n=game.settings.storage.get("world").getSetting(`${s}.${t}`)),l.log("Setting",[t,n]);try{game.settings.set(s,t,e)}catch{l.log("Unable to change setting",[t,n])}return!0}static apply(t,e=void 0){e===void 0&&(e=o.get(t)),l.log("SettingsUtil.apply",[t,e,o.get(t)])}static applySettings(){Object.entries(g).forEach(e=>{const s=e[1];let n=o.get(s.tag);o.apply(s.tag,n)})}}class l{static log(t="",e=[],s=!1){try{const n=o.get(g.debugMode.tag);if(!(s||n))return;console.log(...m,t,...e)}catch{console.log(...m,t,...e)}}static warn(t="",e=[]){console.warn(...m,t,...e)}static logError(t,e){var s;e.ui&&((s=ui.notifications)==null||s.error(t,{localize:!0,permanent:e.permanent})),e.console&&console.error(...m,t)}}var E,d,h,A,w;const a=class a{static init(){l.log("TopNavigation",[ui,ui.nav.collapse]),Hooks.on(y.RENDER_SCENE_NAV,(t,e,s)=>{a.addListeners(),l.log(y.RENDER_SCENE_NAV,[ui.nav,o.get(g.sceneNavCollapsed.tag)]),a.setNavPosition(),a.placeNavButtons(),o.get(g.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand()}),Hooks.on(y.COLLAPSE_SCENE_NAV,(t,e)=>{o.set(g.sceneNavCollapsed.tag,e),l.log("NAV toggle",[t,e])}),Hooks.on(y.EXPAND_SCENE_NAV,(t,e)=>{o.set(g.sceneNavCollapsed.tag,!1),l.log("NAV expand",[t,!1])}),o.apply(g.sceneNavCollapsed.tag)}static addListeners(){C(this,E,document.querySelector("#navigation")),C(this,d,document.querySelector("#scene-list")),c(this,E).addEventListener("mouseenter",()=>{clearTimeout(c(this,h)),ui.nav.expand()}),c(this,E).addEventListener("mouseleave",e=>{if(!e)var e=window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),C(this,h,setTimeout(()=>{clearTimeout(c(this,h)),C(this,h,null),ui.nav.collapse()},500))})}static placeNavButtons(){const t=document.createElement("button");t.classList.add("crlngn"),t.classList.add("ui-nav-left");const e=document.createElement("i");e.classList.add("fa"),e.classList.add("fa-chevron-left"),t.addEventListener("click",c(this,A)),t.append(e);const s=document.createElement("button");s.classList.add("crlngn"),s.classList.add("ui-nav-right");const n=document.createElement("i");n.classList.add("fa"),n.classList.add("fa-chevron-right"),s.append(n),s.addEventListener("click",c(this,w)),c(this,E).appendChild(t),c(this,E).appendChild(s)}static setNavPosition(t){var n;const e=t||o.get(g.sceneNavPos.tag),s=(n=c(this,d))==null?void 0:n.querySelector("li:first-child");s.style.marginLeft=e+"px"}};E=new WeakMap,d=new WeakMap,h=new WeakMap,A=new WeakMap,w=new WeakMap,p(a,E),p(a,d),p(a,h),p(a,A,t=>{var S,b;const e=(S=c(a,d))==null?void 0:S.querySelector("li:first-child"),s=e.offsetWidth,n=Math.floor(((b=c(a,d))==null?void 0:b.offsetWidth)/s),i=parseInt(e.style.marginLeft||0);let u=0;if(i<0){const L=Number(i+s*n);u=L<0?L:0}o.set(g.sceneNavPos.tag,u),a.setNavPosition(u),l.log("onNavLast",[n,s,i,u])}),p(a,w,t=>{var S,b,L,T,R,M;const e=(S=c(a,d))==null?void 0:S.querySelector("li:first-child"),s=e.offsetWidth,n=Math.floor(((b=c(a,d))==null?void 0:b.offsetWidth)/s),i=parseInt(e.style.marginLeft||0);let u=0;if(l.log("onNavNext",[e.style.marginLeft,i]),((L=c(a,d))==null?void 0:L.scrollWidth)+i>((T=c(a,d))==null?void 0:T.offsetWidth)){const x=Number(i-s*n),O=-(((R=c(a,d))==null?void 0:R.offsetWidth)-s);u=x>O?x:O}o.set(g.sceneNavPos.tag,u),a.setNavPosition(u),l.log("onNavNext",[n,s,i,u,(M=c(a,d))==null?void 0:M.offsetWidth])});let k=a;class f{static init(){Hooks.once(y.INIT,()=>{l.log("Initiating module",[],!0),o.registerSettings()}),Hooks.once(y.READY,()=>{k.init();var t=o.get("debug-mode");t&&(CONFIG.debug.hooks=!0),l.log("Core Ready",[])})}static setupKeyListeners(){window.addEventListener("keydown",t=>{const e=t.key;f.keysPressed.indexOf(e)<0&&f.keysPressed.push(e),l.log("Keydown",[f.keysPressed])}),window.addEventListener("keyup",t=>{const e=t.key,s=f.keysPressed.indexOf(e);s>=0&&f.keysPressed.splice(s,1),l.log("Keyup",[f.keysPressed])})}}f.init();
//# sourceMappingURL=module.js.map
