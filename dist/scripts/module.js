var H=l=>{throw TypeError(l)};var G=(l,t,e)=>t.has(l)||H("Cannot "+e);var c=(l,t,e)=>(G(l,t,"read from private field"),e?e.call(l):t.get(l)),b=(l,t,e)=>t.has(l)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(l):t.set(l,e),L=(l,t,e,s)=>(G(l,t,"write to private field"),s?s.call(l,e):t.set(l,e),e);const y={CHAT_MESSAGE:"chatMessage",INIT:"init",READY:"ready",PRE_CREATE_CHAT_MESSAGE:"preCreateChatMessage",CREATE_CHAT_MESSAGE:"createChatMessage",RENDER_CHAT_MESSAGE:"renderChatMessage",CREATE_MEASURED_TEMPLATE:"createMeasuredTemplate",REFRESH_MEASURED_TEMPLATE:"refreshMeasuredTemplate",GET_SCENE_CONTROLS:"getSceneControlButtons",RENDER_SCENE_NAV:"renderSceneNavigation",COLLAPSE_SCENE_NAV:"collapseSceneNavigation",EXPAND_SCENE_NAV:"expandSceneNavigation"},A="crlngn-ui",q="crlngn-ui",P=["%cCarolingian UI","color:rgb(54, 0, 119); font-weight: bold;","|"],N={select:"select",checkbox:"checkbox",text:"text"},v={client:"client",world:"world"},d={enableChatStyles:{tag:"enable-chat-styles",label:"Enable styles for chat messages",hint:"(DnD5e only) Adds style modifications to chat cards. When dark mode is selected on Foundry, makes chat cards dark as well.",propType:Boolean,inputType:N.checkbox,default:!0,scope:v.client,config:!0,requiresReload:!0},customFont:{tag:"custom-font",label:"Custom fonts",hint:`You can type the name of custom fonts loaded on Foundry core and they will be used throughout the interface. Names with spaces must be written with double quotes ("Font Name"). If the font doesn't load you haven't typed the name correctly, or the font was not found. Default value: "Work Sans", Arial, sans-serif`,propType:String,inputType:N.text,default:'"Work Sans", Arial, sans-serif',scope:v.client,config:!0,requiresReload:!0},debugMode:{tag:"debug-mode",label:"Debug Mode",hint:"Enable or disable debug messages on browser console",propType:Boolean,inputType:N.checkbox,default:!1,scope:v.client,config:!0},sceneNavCollapsed:{tag:"scene-nav-collapsed",label:"Scene Navigation Collapsed",hint:"Current state of the scene navigation toggle. Is it collapsed?",propType:Boolean,inputType:N.checkbox,default:!0,scope:v.client,config:!1},sceneNavPos:{tag:"scene-nav-pos",label:"Scene Navigation Position",hint:"Stores current position of navigation for reset when it's re-rendered",propType:Number,inputType:N.number,default:0,scope:v.client,config:!1}};class a{static registerSettings(){document.querySelector("body").classList.add(q),Object.entries(d).forEach(async e=>{const s=e[1];r.log("Registering... ",[e]),await game.settings.register(A,s.tag,{name:s.label,hint:s.hint,default:s.default,type:s.propType,scope:s.scope,config:s.config,requiresReload:s.requiresReload||!1,onChange:o=>a.apply(s.tag,o)}),a.get(s.tag)===void 0&&a.set(s.tag,s.default),a.get(d.enableChatStyles.tag)&&document.querySelector("body").classList.add("crlngn-chat");const n=a.get(d.customFont.tag);n&&document.querySelector("body.crlngn-ui").style.setProperty("--crlngn-font-family",n),r.log("registerSettings",[s.tag,a.get(s.tag)])})}static get(t,e=A){if(!t)return null;let s=!1;if(e===A)s=game.settings.get(e,t);else{let o=game.settings.storage.get("client")[`${e}.${t}`];o===void 0&&(o=game.settings.storage.get("world").getSetting(`${e}.${t}`)),s=o==null?void 0:o.value,r.log("GET Setting",[o,s])}return s}static set(t,e,s=A){if(!t)return!1;let n=game.settings.storage.get("client")[`${s}.${t}`];n||(n=game.settings.storage.get("world").getSetting(`${s}.${t}`)),r.log("Setting",[t,n]);try{game.settings.set(s,t,e)}catch{r.log("Unable to change setting",[t,n])}return!0}static apply(t,e=void 0){e===void 0&&(e=a.get(t)),r.log("SettingsUtil.apply",[t,e,a.get(t)])}static applySettings(){Object.entries(d).forEach(e=>{const s=e[1];let n=a.get(s.tag);a.apply(s.tag,n)})}}class r{static log(t="",e=[],s=!1){try{const n=a.get(d.debugMode.tag);if(!(s||n))return;console.log(...P,t,...e)}catch{console.log(...P,t,...e)}}static warn(t="",e=[]){console.warn(...P,t,...e)}static logError(t,e){var s;e.ui&&((s=ui.notifications)==null||s.error(t,{localize:!0,permanent:e.permanent})),e.console&&console.error(...P,t)}}var p,u,m,w,R;const i=class i{static init(){Hooks.on(y.RENDER_SCENE_NAV,(t,e,s)=>{i.addListeners(),r.log(y.RENDER_SCENE_NAV,[ui.nav,a.get(d.sceneNavCollapsed.tag)]),i.setNavPosition(),i.placeNavButtons(),a.get(d.sceneNavCollapsed.tag)?ui.nav.collapse():ui.nav.expand()}),Hooks.on(y.COLLAPSE_SCENE_NAV,(t,e)=>{a.set(d.sceneNavCollapsed.tag,e),r.log("NAV toggle",[t,e])}),Hooks.on(y.EXPAND_SCENE_NAV,(t,e)=>{a.set(d.sceneNavCollapsed.tag,!1),r.log("NAV expand",[t,!1])}),a.apply(d.sceneNavCollapsed.tag)}static addListeners(){L(this,p,document.querySelector("#navigation")),L(this,u,document.querySelector("#scene-list")),c(this,p).addEventListener("mouseenter",()=>{clearTimeout(c(this,m)),ui.nav.expand()}),c(this,p).addEventListener("mouseleave",e=>{if(!e)var e=window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),L(this,m,setTimeout(()=>{clearTimeout(c(this,m)),L(this,m,null),ui.nav.collapse()},700))})}static placeNavButtons(){const t=document.createElement("button");t.classList.add("crlngn"),t.classList.add("ui-nav-left");const e=document.createElement("i");e.classList.add("fa"),e.classList.add("fa-chevron-left"),t.addEventListener("click",c(this,w)),t.append(e);const s=document.createElement("button");s.classList.add("crlngn"),s.classList.add("ui-nav-right");const n=document.createElement("i");n.classList.add("fa"),n.classList.add("fa-chevron-right"),s.append(n),s.addEventListener("click",c(this,R)),c(this,p).appendChild(t),c(this,p).appendChild(s)}static setNavPosition(t){var n;const e=t||a.get(d.sceneNavPos.tag),s=(n=c(this,u))==null?void 0:n.querySelector("li:first-child");s.style.marginLeft=e+"px"}};p=new WeakMap,u=new WeakMap,m=new WeakMap,w=new WeakMap,R=new WeakMap,b(i,p),b(i,u),b(i,m),b(i,w,t=>{var h,E;const e=(h=c(i,u))==null?void 0:h.querySelector("li:first-child"),s=e.offsetWidth,n=Math.floor(((E=c(i,u))==null?void 0:E.offsetWidth)/s),o=parseInt(e.style.marginLeft||0);let g=0;if(o<0){const S=Number(o+s*n);g=S<0?S:0}a.set(d.sceneNavPos.tag,g),i.setNavPosition(g),r.log("onNavLast",[n,s,o,g])}),b(i,R,t=>{var h,E,S,C,D,x;const e=(h=c(i,u))==null?void 0:h.querySelector("li:first-child"),s=e.offsetWidth,n=Math.floor(((E=c(i,u))==null?void 0:E.offsetWidth)/s),o=parseInt(e.style.marginLeft||0);let g=o;if(r.log("onNavNext",[e.style.marginLeft,o]),((S=c(i,u))==null?void 0:S.scrollWidth)+o>((C=c(i,u))==null?void 0:C.offsetWidth)){const O=Number(o-s*n),I=-(((D=c(i,u))==null?void 0:D.offsetWidth)-s);g=O>I?O:I}a.set(d.sceneNavPos.tag,g),i.setNavPosition(g),r.log("onNavNext",[n,s,o,g,(x=c(i,u))==null?void 0:x.offsetWidth])});let T=i;class W{static enrichCard(t,e){var s,n,o,g,h,E;if(a.get(d.enableChatStyles.tag)){const S=((o=(n=(s=t.flags)==null?void 0:s.dnd5e)==null?void 0:n.activity)==null?void 0:o.type)||((E=(h=(g=t.flags)==null?void 0:g.dnd5e)==null?void 0:h.roll)==null?void 0:E.type)||"custom",C=e.get(0);C.classList.add("crlngn"),C.classList.add(S)}}}var k;const f=class f{static init(){Hooks.once(y.INIT,()=>{r.log("Initiating module",[],!0),a.registerSettings(),Hooks.on(y.RENDER_CHAT_MESSAGE,c(f,k))}),Hooks.once(y.READY,()=>{T.init();var t=a.get("debug-mode");t&&(CONFIG.debug.hooks=!0),r.log("Core Ready",[])})}static setupKeyListeners(){window.addEventListener("keydown",t=>{const e=t.key;f.keysPressed.indexOf(e)<0&&f.keysPressed.push(e),r.log("Keydown",[f.keysPressed])}),window.addEventListener("keyup",t=>{const e=t.key,s=f.keysPressed.indexOf(e);s>=0&&f.keysPressed.splice(s,1),r.log("Keyup",[f.keysPressed])})}};k=new WeakMap,b(f,k,(t,e)=>{r.log(y.RENDER_CHAT_MESSAGE,[t,e]),W.enrichCard(t,e)});let M=f;M.init();
//# sourceMappingURL=module.js.map
