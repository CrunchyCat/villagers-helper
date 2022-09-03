"use strict";(self.webpackChunkvilrs=self.webpackChunkvilrs||[]).push([[767],{8492:(e,t,i)=>{i.d(t,{l:()=>v});var r=i(4869),n=i(9466),a=i(6473),l=i(7993),o=i(131);const c=e=>{let{click:t}=e;return(0,o.BX)(s,{onClick:t,children:[(0,o.tZ)(d,{}),(0,o.tZ)(d,{}),(0,o.tZ)(d,{})]})},s=r.ZP.button`height:1.4rem;width:1.875rem;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;&:focus{outline:none;}`,d=r.ZP.div`width:100%;height:12%;background-color:${e=>e.theme.primary};`;var m=i(6352),h=i(2219),g=i(632),p=i(7215),f=i(8446);const u=i.p+"static/media/logo.b0e1f40989880cf418e4.webp",v=e=>{let{title:t,btnSearch:i}=e;const{actions:r}=(0,p.oX)(),a=(0,m.v9)(h.O),l=(0,m.v9)(g.P),s=(0,m.I0)();return(0,o.BX)(x,{children:[l===f.n.light&&(0,o.tZ)(b,{}),(0,o.tZ)(Z,{className:"mobile",children:(0,o.tZ)(c,{click:()=>s(r.toggleSideDrawer(!a.showDrawer))})}),(0,o.BX)(k,{to:"/",className:"desktop",children:[(0,o.tZ)("img",{src:u,alt:"vilrs"}),(0,o.BX)("span",{children:[(0,o.tZ)("strong",{children:"vilrs"}),"A helpful tool for villagers"]})]}),(0,o.tZ)(y,{children:t}),(0,o.tZ)(w,{className:"mobile",children:i&&(0,o.tZ)("div",{onClick:i})}),(0,o.BX)(P,{className:"desktop",children:[(0,o.tZ)(n.OL,{to:"/rules",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game rules",children:"rules"}),(0,o.tZ)(n.OL,{to:"/configs",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game configurations",children:"configurations"}),(0,o.tZ)(n.OL,{to:"/cards",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game cards",children:"cards"}),(0,o.tZ)(n.OL,{to:"/settings",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"settings",children:"settings"})]})]})},x=r.ZP.header`position:fixed;top:0;width:100%;height:calc(${a.P.COMBINED_BAR_HEIGHT});padding:calc(${a.P.STATUS_BAR_HEIGHT}) calc(1.5rem + env(safe-area-inset-right)) 0 calc(1.5rem + env(safe-area-inset-left));z-index:5;display:flex;box-shadow:0 1px 0 0 ${e=>e.theme.borderLight};background-color:${e=>e.theme.background};@supports (backdrop-filter:blur(6px)){backdrop-filter:blur(6px);background-color:${e=>e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")};}.desktop{display:none !important;}${l.N}{align-items:center;.desktop{display:inherit !important;}.mobile{display:none !important;}}`,b=r.ZP.div`@media only screen and (display-mode:standalone) and (orientation:portrait){position:absolute;top:0;left:0;width:100%;height:env(safe-area-inset-top);z-index:-1;background:linear-gradient(#0000005a 80%,#ffffff00 80%);}`,Z=r.ZP.div`flex:1;margin-right:auto;display:flex;align-items:center;`,k=(0,r.ZP)(n.OL)`flex:1;display:flex;align-items:center;justify-content:end;text-decoration:none;img{max-height:calc(${a.P.NAV_BAR_HEIGHT} - 1rem);}span{font-size:0.875rem;color:${e=>e.theme.textSecondary};strong{font-size:1.6rem;color:${e=>e.theme.text};font-weight:bold;margin:0 0.75rem;}}`,y=r.ZP.div`flex:1;display:flex;justify-content:center;align-self:center;font-size:1.634rem;font-weight:bold;color:${e=>e.theme.text};`,w=r.ZP.nav`flex:1;div{margin-left:auto;width:24px;height:100%;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat center;cursor:pointer;}`,P=r.ZP.nav`flex:1;display:flex;.active{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.textSecondary};cursor:default;text-decoration:none;}.inactive{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.primary};text-decoration:none;&:hover{opacity:0.8;}&:active{opacity:0.4;}}`},8826:(e,t,i)=>{i.r(t),i.d(t,{RulesPage:()=>o});var r=i(4869),n=i(5964),a=i(8492),l=i(131);const o=()=>(0,l.BX)(l.HY,{children:[(0,l.BX)(n.ql,{children:[(0,l.tZ)("title",{children:"rules"}),(0,l.tZ)("meta",{name:"description",content:"rules"})]}),(0,l.tZ)(a.l,{title:"rules"}),(0,l.tZ)(c,{})]}),c=r.ZP.main`display:flex;flex-direction:column;align-items:center;`}}]);