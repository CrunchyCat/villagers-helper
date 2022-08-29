"use strict";(self.webpackChunkvilrs=self.webpackChunkvilrs||[]).push([[515],{8492:(e,t,r)=>{r.d(t,{l:()=>b});var i=r(4781),a=(r(4206),r(9466)),n=r(6473),o=r(7993),l=r(131);const s=e=>{let{click:t}=e;return(0,l.BX)(c,{onClick:t,children:[(0,l.tZ)(d,{}),(0,l.tZ)(d,{}),(0,l.tZ)(d,{})]})},c=i.ZP.button`height:1.4rem;width:1.875rem;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;&:focus{outline:none;}`,d=i.ZP.div`width:100%;height:12%;background-color:${e=>e.theme.primary};`;var m=r(6352),h=r(2219),g=r(632),p=r(7215),u=r(8446);const f=r.p+"static/media/logo.b0e1f40989880cf418e4.webp",b=e=>{let{title:t,btnSearch:r}=e;const{actions:i}=(0,p.oX)(),n=(0,m.v9)(h.O),o=(0,m.v9)(g.P),c=(0,m.I0)();return(0,l.BX)(v,{children:[o===u.n.light&&(0,l.tZ)(x,{}),(0,l.tZ)(y,{className:"mobile",children:(0,l.tZ)(s,{click:()=>c(i.toggleSideDrawer(!n.showDrawer))})}),(0,l.BX)(Z,{to:"/",className:"desktop",children:[(0,l.tZ)("img",{src:f,alt:"vilrs"}),(0,l.BX)("span",{children:[(0,l.tZ)("strong",{children:"vilrs"}),"A helpful tool for villagers"]})]}),(0,l.tZ)(w,{children:t}),(0,l.tZ)(k,{className:"mobile",children:r&&(0,l.tZ)("div",{onClick:r})}),(0,l.BX)($,{className:"desktop",children:[(0,l.tZ)(a.OL,{to:"/rules",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game rules",children:"rules"}),(0,l.tZ)(a.OL,{to:"/configs",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game configurations",children:"configurations"}),(0,l.tZ)(a.OL,{to:"/cards",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game cards",children:"cards"}),(0,l.tZ)(a.OL,{to:"/settings",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"settings",children:"settings"})]})]})},v=i.ZP.header`position:fixed;top:0;width:100%;height:calc(${n.P.COMBINED_BAR_HEIGHT});padding:calc(${n.P.STATUS_BAR_HEIGHT}) calc(1.5rem + env(safe-area-inset-right)) 0 calc(1.5rem + env(safe-area-inset-left));z-index:5;display:flex;box-shadow:0 1px 0 0 ${e=>e.theme.borderLight};background-color:${e=>e.theme.background};@supports (backdrop-filter:blur(6px)){backdrop-filter:blur(6px);background-color:${e=>e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")};}.desktop{display:none !important;}${o.A3.medium`
    align-items: center;
    .desktop {
      display: inherit !important
    }
    .mobile {
      display: none !important
    }
  `}`,x=i.ZP.div`@media only screen and (display-mode:standalone) and (orientation:portrait){position:absolute;top:0;left:0;width:100%;height:env(safe-area-inset-top);z-index:-1;background:linear-gradient(#0000005a 80%,#ffffff00 80%);}`,y=i.ZP.div`flex:1;margin-right:auto;display:flex;align-items:center;`,Z=(0,i.ZP)(a.OL)`flex:1;display:flex;align-items:center;justify-content:end;text-decoration:none;img{max-height:calc(${n.P.NAV_BAR_HEIGHT} - 1rem);}span{font-size:0.875rem;color:${e=>e.theme.textSecondary};strong{font-size:1.6rem;color:${e=>e.theme.text};font-weight:bold;margin:0 0.75rem;}}`,w=i.ZP.div`flex:1;display:flex;justify-content:center;align-self:center;font-size:1.634rem;font-weight:bold;color:${e=>e.theme.text};`,k=i.ZP.nav`flex:1;div{margin-left:auto;width:24px;height:100%;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat center;cursor:pointer;}`,$=i.ZP.nav`flex:1;display:flex;.active{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.textSecondary};cursor:default;text-decoration:none;}.inactive{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.primary};text-decoration:none;&:hover{opacity:0.8;}&:active{opacity:0.4;}}`},403:(e,t,r)=>{r.d(t,{P:()=>i});const i=r(4781).ZP.p`font-size:1rem;line-height:1.5;color:${e=>e.theme.textSecondary};margin:0.625rem 0 1.5rem 0;`},5130:(e,t,r)=>{r.r(t),r.d(t,{SettingsPage:()=>D});var i=r(4781),a=r(4206);const n=i.ZP.label`text-transform:uppercase;font-weight:normal;margin:0 0 0.625rem 0;padding:0;color:${e=>e.theme.textSecondary};font-size:0.75rem;`;var o=r(7993),l=r(131);const s=(0,a.X$)((e=>{let{id:t,img:r,label:i,className:a,isSelected:n,...o}=e;return(0,l.BX)(c,{className:a,children:[(0,l.tZ)("input",{type:"checkbox",id:t,checked:n,...o}),(0,l.BX)("label",{htmlFor:t,children:[i,r&&(0,l.tZ)("img",{src:r,alt:i})]})]})})),c=i.ZP.div`input[type='checkbox']{margin:0;opacity:0;width:0;height:0;padding:0;+ label{width:100%;margin:0;display:inline-block;padding-left:1.375rem;padding-top:0.0625rem;position:relative;z-index:1;font-size:0.875rem;color:${e=>e.theme.text};cursor:pointer;a{color:${e=>e.theme.text};text-decoration:none;}img{width:1.5rem;float:right;}&::before{position:absolute;top:0.25rem;left:0;display:inline-block;width:1rem;height:1rem;border-radius:25%;background-color:${e=>e.theme.background};content:'';border:2px solid ${e=>e.theme.border};transition:all 0.1s;}&::after{display:none;content:'';position:absolute;display:inline-block;width:0.375rem;height:0.375rem;border-radius:25%;top:0.5625rem;left:0.3125rem;background-color:${e=>e.theme.background};}${o.A3.medium`
        &:hover {
          &::before {
            border-color: ${e=>e.theme.primary};
          }
        }
      `}}&:disabled{+ label{opacity:0.6;cursor:auto;&:hover{&::before{border-color:${e=>e.theme.border};}}}}&:focus{+ label{&::before{box-shadow:0 0 0 3px ${e=>e.theme.primary.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.2)")};}}}&:checked{+ label{&::before{background-color:${e=>e.theme.primary};border-color:${e=>e.theme.primary};}&::after{display:inline-block;}}}}`;var d=r(6352),m=r(5074),h=r(8619),g=r(7717),p=r(4240),u=r(7314);const f=function(e){e||(e="_NOT_TRANSLATED_");for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return[e,...r]},b=()=>f(u.I.expSelector.selectExp,"Select Expansions");var v=r(9755);const x=()=>{const{t:e}=(0,p.$)(),t=(0,d.v9)(m.j),{actions:r}=(0,h.Jf)(),i=(0,d.I0)();return(0,l.BX)(y,{children:[(0,l.tZ)(n,{children:e(...b())}),(0,l.tZ)(Z,{children:v.Xx[v.ZA.Exp].sets.filter(((e,t)=>0!==t)).map(((e,a)=>(0,l.tZ)(s,{id:""+(a+1),img:e.img,label:e.name,onChange:()=>(e=>{const a=t.includes(e)?t.filter((t=>t!==e)):t.concat(e);(0,g.ym)(a),i(r.setSelectedExpansions(a))})(a+1),isSelected:t.includes(a+1)},a)))})]})},y=i.ZP.div`display:flex;flex-direction:column;`,Z=i.ZP.div`display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;row-gap:0.5rem;column-gap:2rem;`,w=(0,a.X$)((e=>{let{id:t,label:r,className:i,isSelected:a,...n}=e;return(0,l.BX)(k,{className:i,children:[(0,l.tZ)("input",{type:"radio",id:t,checked:a,...n}),(0,l.tZ)("label",{htmlFor:t,children:r})]})})),k=i.ZP.div`input[type='radio']{margin:0;opacity:0;width:0;height:0;padding:0;+ label{margin:0;display:inline-block;padding-left:1.375rem;padding-top:0.0625rem;position:relative;z-index:1;font-size:0.875rem;color:${e=>e.theme.text};cursor:pointer;a{color:${e=>e.theme.text};text-decoration:none;}&::before{position:absolute;top:0.25rem;left:0;display:inline-block;width:1rem;height:1rem;border-radius:50%;background-color:${e=>e.theme.background};content:'';border:2px solid ${e=>e.theme.border};transition:all 0.1s;}&::after{display:none;content:'';position:absolute;display:inline-block;width:0.375rem;height:0.375rem;border-radius:50%;top:0.5625rem;left:0.3125rem;background-color:${e=>e.theme.background};}&:hover{&::before{border-color:${e=>e.theme.primary};}}}&:disabled{+ label{opacity:0.6;cursor:auto;&:hover{&::before{border-color:${e=>e.theme.border};}}}}&:focus{+ label{&::before{box-shadow:0 0 0 3px ${e=>e.theme.primary.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.2)")};}}}&:checked{+ label{&::before{background-color:${e=>e.theme.primary};border-color:${e=>e.theme.primary};}&::after{display:inline-block;}}}}`;var $=r(1402),S=r(632),P=r(2488);const E=()=>f(u.I.themeSwitch.selectTheme,"Select Theme"),N=()=>{const{t:e}=(0,p.$)(),t=(0,d.v9)(S.O),r=(0,d.I0)(),i=e=>{const t=e.target.value;(0,P.DV)(t),r($.uQ.changeTheme(t))};return(0,l.BX)(B,{children:[(0,l.tZ)(n,{children:e(...E())}),(0,l.BX)(X,{children:[(0,l.tZ)(w,{id:"system",label:"System theme",name:"theme",onChange:i,value:"system",isSelected:"system"===t}),(0,l.tZ)(w,{id:"light",label:"Light",name:"theme",onChange:i,value:"light",isSelected:"light"===t}),(0,l.tZ)(w,{id:"dark",label:"Dark",name:"theme",onChange:i,value:"dark",isSelected:"dark"===t})]})]})},B=i.ZP.div`display:flex;flex-direction:column;`,X=i.ZP.div`display:flex;div{margin-right:1.5rem;}`,z=()=>f(u.I.languageSwitch.selectLanguage,"Select Language"),A=()=>{const{t:e,i18n:t}=(0,p.$)(),r=e=>{t.changeLanguage(e.target.value)};return(0,l.BX)(I,{children:[(0,l.tZ)(n,{children:e(...z())}),(0,l.BX)(C,{children:[(0,l.tZ)(w,{id:"en",label:"English",name:"language",onChange:r,value:"en",isSelected:t.language.startsWith("en")}),(0,l.tZ)(w,{id:"es",label:"Espa\xf1ol",name:"language",onChange:r,value:"es",isSelected:t.language.startsWith("es")})]})]})},I=i.ZP.div`display:flex;flex-direction:column;`,C=i.ZP.div`display:flex;div{margin-right:1.5rem;}`;var O=r(5964),L=r(8492),T=r(403);const D=()=>(0,l.BX)(l.HY,{children:[(0,l.BX)(O.ql,{children:[(0,l.tZ)("title",{children:"settings"}),(0,l.tZ)("meta",{name:"description",content:"settings"})]}),(0,l.tZ)(L.l,{title:"settings"}),(0,l.tZ)(_,{children:(0,l.BX)(H,{children:[(0,l.BX)("div",{children:[(0,l.tZ)(n,{children:"configurations"}),(0,l.tZ)(T.P,{style:{margin:".5rem 0 0 0"},children:"user configurations will be shown here."})]}),(0,l.tZ)(x,{}),(0,l.tZ)(A,{}),(0,l.tZ)(N,{})]})})]}),_=i.ZP.main`width:100%;max-width:52.75rem;height:100%;max-height:49.25rem;margin:0 auto;padding:1rem max(1rem,env(safe-area-inset-right)) calc(1rem + env(safe-area-inset-bottom)) max(1rem,env(safe-area-inset-left));display:flex;flex-direction:column;`,H=i.ZP.div`height:100%;display:flex;flex-flow:column wrap;justify-content:space-between;row-gap:1rem;column-gap:3rem;`},8619:(e,t,r)=>{r.d(t,{E3:()=>s,Jf:()=>h});var i=r(1685),a=r(5381),n=r(7717),o=r(9755);const l=[{name:"Standard Game",color:"#ff0000",cards:[o.Gb.Founders]}],s={configs:(0,n.Li)()||l,selectedExps:(0,n.tO)()||[o.NE.Base,o.NE.FourPlayer,o.NE.Promo1,o.NE.DiceTower,o.NE.Profiteers,o.NE.Saints,o.NE.Scoundrels]},c=(0,i.o)({name:"userData",initialState:s,reducers:{setDisabledCards(e,t){e.configs=t.payload},setSelectedExpansions(e,t){e.selectedExps=t.payload}}}),{actions:d,reducer:m}=c,h=()=>((0,a.v)({key:c.name,reducer:c.reducer}),{actions:c.actions})},5074:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(5323),a=r(8619);(0,i.P1)([e=>e.userData||a.E3],(e=>e.configs));const n=(0,i.P1)([e=>e.userData||a.E3],(e=>e.selectedExps))},7717:(e,t,r)=>{r.d(t,{Li:()=>a,tO:()=>n,ym:()=>i});const i=e=>{var t;return null===(t=window.localStorage)||void 0===t?void 0:t.setItem("selectedExps",JSON.stringify(e))},a=()=>{var e;return null!==(e=window.localStorage)&&void 0!==e&&e.getItem("configs")?JSON.parse(window.localStorage.getItem("configs")||"[]"):null},n=()=>{var e;return null!==(e=window.localStorage)&&void 0!==e&&e.getItem("selectedExps")?JSON.parse(window.localStorage.getItem("selectedExps")||"[]"):null}}}]);