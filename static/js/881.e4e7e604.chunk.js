"use strict";(self.webpackChunkvilrs=self.webpackChunkvilrs||[]).push([[881],{8492:(e,t,r)=>{r.d(t,{l:()=>w});var i=r(4781),o=(r(4206),r(9466)),a=r(6473),n=r(7993),d=r(131);const c=e=>{let{click:t}=e;return(0,d.BX)(l,{onClick:t,children:[(0,d.tZ)(s,{}),(0,d.tZ)(s,{}),(0,d.tZ)(s,{})]})},l=i.ZP.button`height:1.4rem;width:1.875rem;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;&:focus{outline:none;}`,s=i.ZP.div`width:100%;height:12%;background-color:${e=>e.theme.primary};`;var h=r(6352),m=r(2219),g=r(632),p=r(7215),u=r(8446);const v=r.p+"static/media/logo.b0e1f40989880cf418e4.webp",w=e=>{let{title:t,btnSearch:r}=e;const{actions:i}=(0,p.oX)(),a=(0,h.v9)(m.O),n=(0,h.v9)(g.P),l=(0,h.I0)();return(0,d.BX)(f,{children:[n===u.n.light&&(0,d.tZ)(x,{}),(0,d.tZ)(b,{className:"mobile",children:(0,d.tZ)(c,{click:()=>l(i.toggleSideDrawer(!a.showDrawer))})}),(0,d.BX)(Z,{to:"/",className:"desktop",children:[(0,d.tZ)("img",{src:v,alt:"vilrs"}),(0,d.BX)("span",{children:[(0,d.tZ)("strong",{children:"vilrs"}),"A helpful tool for villagers"]})]}),(0,d.tZ)(y,{children:t}),(0,d.tZ)($,{className:"mobile",children:r&&(0,d.tZ)("div",{onClick:r})}),(0,d.BX)(k,{className:"desktop",children:[(0,d.tZ)(o.OL,{to:"/rules",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game rules",children:"rules"}),(0,d.tZ)(o.OL,{to:"/configs",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game configurations",children:"configurations"}),(0,d.tZ)(o.OL,{to:"/cards",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game cards",children:"cards"}),(0,d.tZ)(o.OL,{to:"/settings",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"settings",children:"settings"})]})]})},f=i.ZP.header`position:fixed;top:0;width:100%;height:calc(${a.P.COMBINED_BAR_HEIGHT});padding:calc(${a.P.STATUS_BAR_HEIGHT}) calc(1.5rem + env(safe-area-inset-right)) 0 calc(1.5rem + env(safe-area-inset-left));z-index:5;display:flex;box-shadow:0 1px 0 0 ${e=>e.theme.borderLight};background-color:${e=>e.theme.background};@supports (backdrop-filter:blur(6px)){backdrop-filter:blur(6px);background-color:${e=>e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")};}.desktop{display:none !important;}@media only screen and (max-width:${n.G}){align-items:center;.desktop{display:inherit !important;}.mobile{display:none !important;}}`,x=i.ZP.div`@media only screen and (display-mode:standalone) and (orientation:portrait){position:absolute;top:0;left:0;width:100%;height:env(safe-area-inset-top);z-index:-1;background:linear-gradient(#0000005a 80%,#ffffff00 80%);}`,b=i.ZP.div`flex:1;margin-right:auto;display:flex;align-items:center;`,Z=(0,i.ZP)(o.OL)`flex:1;display:flex;align-items:center;justify-content:end;text-decoration:none;img{max-height:calc(${a.P.NAV_BAR_HEIGHT} - 1rem);}span{font-size:0.875rem;color:${e=>e.theme.textSecondary};strong{font-size:1.6rem;color:${e=>e.theme.text};font-weight:bold;margin:0 0.75rem;}}`,y=i.ZP.div`flex:1;display:flex;justify-content:center;align-self:center;font-size:1.634rem;font-weight:bold;color:${e=>e.theme.text};`,$=i.ZP.nav`flex:1;div{margin-left:auto;width:24px;height:100%;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat center;cursor:pointer;}`,k=i.ZP.nav`flex:1;display:flex;.active{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.textSecondary};cursor:default;text-decoration:none;}.inactive{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.primary};text-decoration:none;&:hover{opacity:0.8;}&:active{opacity:0.4;}}`},2872:(e,t,r)=>{r.r(t),r.d(t,{CardsPage:()=>ee});var i=r(4206),o=r(5964),a=r(8492),n=r(4781),d=r(6473),c=r(7993),l=r(9755),s=r(131);const h=e=>{let{group:t,width:r,height:i}=e;return(0,s.BX)("svg",{width:r,height:i,viewBox:"0 0 64 64",children:[t===l.ZA.All&&(0,s.tZ)("circle",{cx:"32",cy:"32",r:"30"}),t===l.ZA.Suit&&(0,s.BX)(s.HY,{children:[(0,s.tZ)("circle",{cx:"32",cy:"32",r:"30",strokeWidth:"4",fill:"none"}),(0,s.tZ)("circle",{cx:"25",cy:"25",r:"5"}),(0,s.tZ)("circle",{cx:"41",cy:"23",r:"5"}),(0,s.tZ)("circle",{cx:"23",cy:"41",r:"5"}),(0,s.tZ)("circle",{cx:"39",cy:"39",r:"5"})]}),t===l.ZA.Exp&&(0,s.BX)(s.HY,{children:[(0,s.tZ)("circle",{cx:"32",cy:"32",r:"27",strokeWidth:"10",fill:"none"}),(0,s.tZ)("circle",{cx:"26",cy:"26",r:"7"}),(0,s.tZ)("circle",{cx:"40",cy:"24",r:"3"}),(0,s.tZ)("circle",{cx:"24",cy:"40",r:"3"}),(0,s.tZ)("circle",{cx:"38",cy:"38",r:"7"})]})]})},m=e=>{let{width:t,height:r}=e;return(0,s.tZ)("svg",{width:t,height:r,viewBox:"0 0 64 64",children:(0,s.tZ)("path",{d:"M0 0h13v13H0zm18 4h46v5H18zM0 26h13v12H0zm18 3h46v6H18zM0 51h13v13H0zm18 4h46v5H18z"})})},g=e=>{let{width:t,height:r}=e;return(0,s.tZ)("svg",{width:t,height:r,viewBox:"0 0 28 28",children:(0,s.tZ)("path",{d:"M10.8 15c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3H5.3C4 25 3 24 3 22.7v-5.4C3 16 4 15 5.3 15h5.5Zm12 0c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3h-5.4C16 25 15 24 15 22.7v-5.4c0-1.3 1-2.3 2.3-2.3h5.4Zm-12-12C12 3 13 4 13 5.3v5.5c0 1.2-1 2.2-2.3 2.2H5.3C4 13 3 12 3 10.7V5.3C3 4 4 3 5.3 3h5.5Zm12 0C24 3 25 4 25 5.3v5.5c0 1.2-1 2.2-2.3 2.2h-5.4C16 13 15 12 15 10.7V5.3C15 4 16 3 17.3 3h5.4Z"})})},p=e=>{let{width:t,height:r}=e;return(0,s.tZ)("svg",{width:t,height:r,viewBox:"0 0 11 11",stroke:"none",children:(0,s.tZ)("path",{d:"M5 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm4 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM5 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM1 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V9c0-.6.4-1 1-1z"})})},u=e=>{let{view:t,width:r,height:i}=e;return(0,s.BX)(s.HY,{children:[t===l.G7.Compact&&(0,s.tZ)(m,{width:r,height:i}),t===l.G7.Normal&&(0,s.tZ)(g,{width:r,height:i}),t===l.G7.Wide&&(0,s.tZ)(p,{width:r,height:i})]})};var v=r(6352),w=r(1685),f=r(5381);const x={view:l.G7.Normal,hideViewbar:!1,group:l.ZA.Suit,query:"",hasFood:!1,hasBuilders:!1},b=(0,w.o)({name:"cardsFilters",initialState:x,reducers:{setView(e,t){e.view=t.payload},setViewbarHidden(e,t){e.hideViewbar=t.payload},setGroup(e,t){e.group=t.payload},setQuery(e,t){e.query=t.payload},setHasFood(e,t){e.hasFood=t.payload},setHasBuilders(e,t){e.hasBuilders=t.payload}}}),{actions:Z,reducer:y}=b,$=()=>((0,f.v)({key:b.name,reducer:b.reducer}),{actions:b.actions});const k=(0,r(5323).P1)([e=>e.cardsFilters||x],(e=>e)),B=e=>{let{width:t,height:r}=e;return(0,s.tZ)("svg",{width:t,height:r,viewBox:"0 0 24 24",children:(0,s.tZ)("path",{d:"M19 6h-14c-1.1 0-1.4.6-.6 1.4l4.2 4.2c.8.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-.8.6-2.1 1.4-2.9l4.2-4.2c.8-.8.5-1.4-.6-1.4z"})})},H=()=>{const e=(0,v.v9)(k),{actions:t}=$(),r=(0,v.I0)();return(0,s.BX)(C,{isHidden:e.hideViewbar,children:[(0,s.tZ)(S,{title:"filter",onClick:()=>{r(t.setHasFood(Math.random()<.5)),r(t.setHasBuilders(Math.random()<.5))},children:(0,s.tZ)(B,{width:"1.5rem",height:"1.5rem"})}),(0,s.tZ)(P,{defaultValue:e.query,onChange:e=>r(t.setQuery(e.target.value.toLowerCase()))}),(0,s.tZ)(S,{onClick:()=>r(t.setGroup((e.group+1)%l.xW)),title:`group by: ${l.Xx[e.group].name}`,children:(0,s.tZ)(h,{group:e.group,width:"1.5rem",height:"1.5rem"})}),(0,s.tZ)(S,{onClick:()=>r(t.setView((e.view+1)%l.g)),title:`${l.tk[e.view]} view`,children:(0,s.tZ)(u,{view:e.view,width:"1.5rem",height:"1.5rem"})})]})},C=n.ZP.div`position:sticky;top:calc(3rem + ${d.P.STATUS_BAR_HEIGHT});z-index:4;width:100%;height:${e=>e.isHidden?"0":"3.5rem"};padding-top:${e=>e.isHidden?"0":"1rem"};padding-right:env(safe-area-inset-right);display:flex;align-items:center;justify-content:flex-end;gap:1.5%;opacity:${e=>e.isHidden?"0":"1"};transform:${e=>e.isHidden?"translateY(-7rem)":"translateX(0)"};transition:height 0.4s,padding-top 0.1s,opacity 0.8s,transform 0.5s ease-out;@media only screen and (max-width:${c.G}){height:3.5rem;padding-top:1rem;opacity:1;transform:translateX(0);}`,P=n.ZP.input`width:52%;max-width:22rem;height:100%;padding:0.5rem 1rem 0.5rem 2.5rem;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border:0.1rem solid ${e=>e.theme.textSecondary};border-radius:1.5rem;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='20' height='20' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat 0.75rem center;@media only screen and (pointer:fine){&:hover{border-color:${e=>e.theme.text};}}&:focus{outline:none;border-color:${e=>e.theme.primary};}@supports (backdrop-filter:blur(2px)){backdrop-filter:blur(2px);background-color:${e=>e.theme.backgroundVariant.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.85)")};}`,S=n.ZP.div`width:15.5%;max-width:4rem;padding:0.4rem;display:flex;justify-content:center;align-items:center;color:${e=>e.theme.text};stroke:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border:0.1rem solid ${e=>e.theme.textSecondary};border-radius:1.5rem;user-select:none;cursor:pointer;&:active{border-color:${e=>e.theme.primary};}@media only screen and (pointer:fine){&:hover{border-color:${e=>e.theme.text};}}@supports (backdrop-filter:blur(2px)){backdrop-filter:blur(2px);background-color:${e=>e.theme.backgroundVariant.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.85)")};}`,z=e=>{let{width:t,height:r}=e;return(0,s.BX)("svg",{width:t,height:r,viewBox:"0 0 490.3 490.3",children:[(0,s.tZ)("circle",{cx:"245.15",cy:"245.15",r:"215.15",strokeWidth:"60",fill:"none"}),(0,s.tZ)("path",{d:"M270 221h-50c-8 0-15 7-15 15v148c0 8 7 15 15 15h50c8 0 15-7 15-15V236c0-8-7-15-15-15zM245 91a44 44 0 1 0 0 89 44 44 0 0 0 0-89z"})]})},X=e=>{let{cardID:t,view:r,editMode:o,selectCard:a}=e;const n=l._u[t],d=l.Xx[l.ZA.Suit].sets[n.suit].color,[c,h]=i.eJ(!1),[m,g]=i.eJ(!1);return(0,s.tZ)(s.HY,{children:o?(0,s.BX)(V,{children:[(0,s.tZ)(A,{editMode:!0,view:r,color:d,flip:!c,flipRight:"b"===n.name.toLowerCase().charAt(0)||"c"===n.name.toLowerCase().charAt(0)||"p"===n.name.toLowerCase().charAt(0)||"s"===n.name.toLowerCase().charAt(0)||"w"===n.name.toLowerCase().charAt(0),src:m?n.imgBack:n.imgFront,alt:n.name,onClick:()=>{a(t,!1),h((e=>!e)),setTimeout((()=>g((e=>!e))),120)}}),(0,s.BX)(M,{show:c,color:d,children:[(0,s.BX)(N,{wide:r===l.G7.Wide,children:[(0,s.tZ)("p",{children:n.name}),(0,s.tZ)("strong",{children:"disabled"})]}),(0,s.BX)(E,{onClick:()=>a(t,!0),children:["\xa0info\xa0",(0,s.tZ)(z,{})]})]})]}):(0,s.tZ)(A,{editMode:!1,view:r,color:d,flip:!c,src:n.imgFront,alt:n.name,onClick:()=>{a(t,!0),c||(h(!0),setTimeout((()=>h(!1)),350))}})})},V=n.ZP.div`position:relative;`,A=n.ZP.img`max-width:${e=>e.view===l.G7.Normal?"11rem":"7.447rem"};max-height:42vh;border:groove ${e=>e.color};box-shadow:0.075rem 0.075rem 0.15rem ${e=>e.color};border-width:0 1px 1px 0;border-radius:6.5%/4%;user-select:none;cursor:pointer;${e=>e.editMode?`\n    transform: translateZ(-1000px) ${e.flip?"rotate3d(0,0,0,0,0);":`rotate3d(${e.flipRight?-.05:.05},1,0.08,-180deg) scale(-1, 1);`};\n  `:`\n    transform: ${e.flip?"translateY(0);":"scale(1.17) translateY(-5vh);"};\n  `} transition:max-width 0.35s,transform 0.5s;`,M=n.ZP.div`position:absolute;top:11%;left:6%;width:88%;height:82%;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none;user-select:none;visibility:${e=>e.show?"visible":"hidden"};opacity:${e=>e.show?1:0};transition:all 0.6s ease-out;`,N=n.ZP.div`margin-top:0.5rem;padding:0.2rem;text-align:center;opacity:0.8;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:1.5rem;p{margin:0;font-size:${e=>e.wide?"0.97rem":"clamp(0.97rem, 3.5vh, 1.46rem)"};font-weight:bold;transition:all 0.35s;}`,E=n.ZP.div`align-self:center;padding:0.1rem;display:flex;align-items:center;opacity:0.8;font-weight:900;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:1.5rem;cursor:pointer;pointer-events:all;svg{width:2.2rem;height:2.2rem;stroke:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:50%;}`;var G=r(3053),I=r(7215),_=r(5074),L=r(2934),O=r(331),j=r(1354),D=r(8981);const T=e=>{let{setID:t,set:r,query:i,view:o,editMode:a}=e;const n=(0,v.v9)(_.j),d=(0,v.v9)(k),c=(0,I.oX)().actions,h=(0,v.I0)(),m=r.cards.filter((e=>n.includes(l._u[e].exp))),g=m.filter((e=>l._u[e].name.toLowerCase().indexOf(i)>-1)).filter((e=>!d.hasFood||l._u[e].food)).filter((e=>!d.hasBuilders||l._u[e].builders));return g.length?(0,s.BX)(F,{color:r.color,compact:o!==l.G7.Normal,children:[(0,s.tZ)(Y,{color:r.color,compact:o!==l.G7.Normal,children:(0,s.tZ)("img",{src:r.img,alt:r.name})}),o===l.G7.Compact?(0,s.tZ)(J,{color:r.color,children:(0,s.tZ)("tbody",{children:g.map(((e,t)=>{const r=l._u[e];return(0,s.BX)("tr",{onClick:()=>h(c.setCardModal(e)),children:[(0,s.tZ)("td",{children:r.name}),(0,s.tZ)("td",{children:r.lock&&(0,s.BX)(R,{title:`${r.name} is unlocked by ${l._u[r.lock].name}`,children:[(0,s.tZ)("img",{src:L,alt:`unlocked by: ${l._u[r.lock].name}`}),l._u[r.lock].name]})}),(0,s.tZ)("td",{children:!!r.food&&(0,s.tZ)(Q,{children:[...Array(r.food).keys()].map((e=>(0,s.tZ)(O.N,{width:"1.825rem",height:"1.825rem"},e)))})}),(0,s.tZ)("td",{children:!!r.builders&&(0,s.tZ)(R,{children:[...Array(r.builders).keys()].map((e=>(0,s.tZ)("img",{src:j,alt:`${r.builders} Builder(s)`},e)))})}),(0,s.BX)("td",{children:[r.gold&&(0,s.tZ)(G.q,{gold:r.gold,width:"1.825rem",height:"1.825rem"}),r.discard&&(0,s.tZ)(D.v,{playType:"discard",color:l.Xx[l.ZA.Suit].sets[r.suit].color,width:"1.1rem",height:"1.825rem"})]})]},t)}))})}):(0,s.BX)(s.HY,{children:[(0,s.BX)(q,{wide:o===l.G7.Wide,children:[(0,s.tZ)("h1",{children:r.name}),(0,s.BX)("div",{children:[`(${g.length}/${m.length})`,(0,s.tZ)(z,{})]})]}),(0,s.tZ)(W,{color:r.color,wide:o===l.G7.Wide,children:g.map(((e,t)=>(0,s.tZ)(X,{cardID:e,view:o,editMode:a,selectCard:(e,t)=>t?h(c.setCardModal(e)):void console.log("disabling card...")},t)))})]})]},t):null},F=n.ZP.div`width:100%;margin:${e=>e.compact?"0.75rem":"1.2rem"} auto 0 auto;display:flex;flex-direction:column;background-color:${e=>e.theme.backgroundVariant};box-shadow:0.05rem 0.05rem 0.1rem ${e=>e.color};border-radius:1.5rem;overflow:hidden;transition:all 0.35s ease-in-out;@media only screen and (display-mode:standalone){width:calc( 100% - 0.65 * env(safe-area-inset-left) - 0.65 * env(safe-area-inset-right) );}`,Y=n.ZP.div`display:flex;justify-content:center;padding-top:${e=>e.compact?"1.75rem":"2.5rem"};background-color:${e=>e.color};img{position:absolute;align-self:center;width:${e=>e.compact?"2.5rem":"4rem"};transition:width 0.2s ease-in-out;}transition:padding-top 0.2s ease-in-out;`,q=n.ZP.div`margin:1rem 1rem 0 1rem;display:flex;&::before,h1,div{content:'';flex-basis:100%;}h1{text-align:center;font-size:${e=>e.wide?"1.75rem":"2rem"};line-height:${e=>e.wide?"2rem":"3rem"};font-weight:bold;white-space:nowrap;color:${e=>e.theme.text};margin:${e=>e.wide?"0.25rem  0 0.25rem 0":"1rem  0 0.5rem 0"};transition:all 0.25s ease-in-out;}div{display:flex;justify-content:flex-end;align-items:center;color:${e=>e.theme.textSecondary};}svg{stroke:${e=>e.theme.textSecondary};margin-left:0.7rem;width:1.5rem;height:1.5rem;cursor:pointer;}`,W=n.ZP.div`display:flex;flex-flow:row wrap;justify-content:center;padding:${e=>e.wide?"0.5rem":"1.25rem"} 0;gap:${e=>e.wide?"0.5rem 0.35rem":"0.75rem"};background-color:${e=>e.color}40;transition:all 0.25s ease-in-out;`,J=n.ZP.table`background-color:${e=>e.color}40;overflow:hidden;tbody > tr{td{line-height:1.825rem;padding:0.25rem 0;border-top:1px solid ${e=>e.color};color:${e=>e.theme.text};&:first-child{width:32%;font-weight:bold;padding-left:0.5rem;}&:nth-child(2){width:31.7%;}&:nth-child(3){width:17%;}&:nth-child(4){width:9.2%;}&:last-child{width:10.1%;}}&:first-child > td{padding-top:1.25rem;}&:last-child > td{padding-bottom:0.35rem;}&:nth-child(even){background-color:${e=>e.color}30;}}`,R=n.ZP.div`display:flex;align-items:center;gap:0.25rem;font-size:0.9rem;color:${e=>e.theme.text};img{max-width:1.825rem;max-height:1.825rem;width:auto;height:auto;}`,Q=n.ZP.div`display:flex;color:#fe3d33;stroke:#fe3d33;transform:scale(1.2);`,U=()=>{const e=(0,v.v9)(k);return(0,s.BX)(K,{children:[(0,s.tZ)(H,{}),Object.entries(l.Xx[e.group].sets).filter((e=>{var t;return!(null!=(t=e[1])&&t.hide)})).map((t=>{let[r,i]=t;return(0,s.tZ)(T,{setID:r,set:i,query:e.query.trim(),view:e.view,editMode:!1},r)}))]})},K=n.ZP.main`max-width:78rem;margin:0 auto;display:flex;flex-direction:column;padding:0 0.2rem 0.5rem 0.2rem;`,ee=()=>{const e=(0,v.v9)(k),{actions:t}=$(),r=(0,v.I0)();return(0,s.BX)(s.HY,{children:[(0,s.BX)(o.ql,{children:[(0,s.tZ)("title",{children:"cards"}),(0,s.tZ)("meta",{name:"description",content:"cards"})]}),(0,s.tZ)(a.l,{title:"cards",btnSearch:()=>r(t.setViewbarHidden(!e.hideViewbar))}),(0,s.tZ)(U,{})]})}},8619:(e,t,r)=>{r.d(t,{E3:()=>c,Jf:()=>m});var i=r(1685),o=r(5381),a=r(7717),n=r(9755);const d=[{name:"Standard Game",color:"#ff0000",cards:[n.Gb.Founders]}],c={configs:(0,a.Li)()||d,selectedExps:(0,a.tO)()||[n.NE.Base,n.NE.FourPlayer,n.NE.Promo1,n.NE.DiceTower,n.NE.Profiteers,n.NE.Saints,n.NE.Scoundrels]},l=(0,i.o)({name:"userData",initialState:c,reducers:{setDisabledCards(e,t){e.configs=t.payload},setSelectedExpansions(e,t){e.selectedExps=t.payload}}}),{actions:s,reducer:h}=l,m=()=>((0,o.v)({key:l.name,reducer:l.reducer}),{actions:l.actions})},5074:(e,t,r)=>{r.d(t,{j:()=>a});var i=r(5323),o=r(8619);(0,i.P1)([e=>e.userData||o.E3],(e=>e.configs));const a=(0,i.P1)([e=>e.userData||o.E3],(e=>e.selectedExps))},7717:(e,t,r)=>{r.d(t,{Li:()=>o,tO:()=>a,ym:()=>i});const i=e=>{var t;return null==(t=window.localStorage)?void 0:t.setItem("selectedExps",JSON.stringify(e))},o=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("configs")?JSON.parse(window.localStorage.getItem("configs")||"[]"):null},a=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("selectedExps")?JSON.parse(window.localStorage.getItem("selectedExps")||"[]"):null}}}]);