"use strict";(self.webpackChunkvilrs=self.webpackChunkvilrs||[]).push([[881],{8492:(e,t,r)=>{r.d(t,{l:()=>w});var i=r(4869),o=r(9466),a=r(6473),n=r(7993),c=r(131);const d=e=>{let{click:t}=e;return(0,c.BX)(l,{onClick:t,children:[(0,c.tZ)(s,{}),(0,c.tZ)(s,{}),(0,c.tZ)(s,{})]})},l=i.ZP.button`height:1.4rem;width:1.875rem;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;&:focus{outline:none;}`,s=i.ZP.div`width:100%;height:12%;background-color:${e=>e.theme.primary};`;var h=r(6352),m=r(2219),g=r(632),p=r(7215),u=r(8446);const v=r.p+"static/media/logo.b0e1f40989880cf418e4.webp",w=e=>{let{title:t,btnSearch:r}=e;const{actions:i}=(0,p.oX)(),a=(0,h.v9)(m.O),n=(0,h.v9)(g.P),l=(0,h.I0)();return(0,c.BX)(f,{children:[n===u.n.light&&(0,c.tZ)(x,{}),(0,c.tZ)(b,{className:"mobile",children:(0,c.tZ)(d,{click:()=>l(i.toggleSideDrawer(!a.showDrawer))})}),(0,c.BX)(Z,{to:"/",className:"desktop",children:[(0,c.tZ)("img",{src:v,alt:"vilrs"}),(0,c.BX)("span",{children:[(0,c.tZ)("strong",{children:"vilrs"}),"A helpful tool for villagers"]})]}),(0,c.tZ)(y,{children:t}),(0,c.tZ)($,{className:"mobile",children:r&&(0,c.tZ)("div",{onClick:r})}),(0,c.BX)(k,{className:"desktop",children:[(0,c.tZ)(o.OL,{to:"/rules",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game rules",children:"rules"}),(0,c.tZ)(o.OL,{to:"/configs",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game configurations",children:"configurations"}),(0,c.tZ)(o.OL,{to:"/cards",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game cards",children:"cards"}),(0,c.tZ)(o.OL,{to:"/settings",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"settings",children:"settings"})]})]})},f=i.ZP.header`position:fixed;top:0;width:100%;height:calc(${a.P.COMBINED_BAR_HEIGHT});padding:calc(${a.P.STATUS_BAR_HEIGHT}) calc(1.5rem + env(safe-area-inset-right)) 0 calc(1.5rem + env(safe-area-inset-left));z-index:5;display:flex;box-shadow:0 1px 0 0 ${e=>e.theme.borderLight};background-color:${e=>e.theme.background};@supports (backdrop-filter:blur(6px)){backdrop-filter:blur(6px);background-color:${e=>e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")};}.desktop{display:none !important;}${n.N}{align-items:center;.desktop{display:inherit !important;}.mobile{display:none !important;}}`,x=i.ZP.div`@media only screen and (display-mode:standalone) and (orientation:portrait){position:absolute;top:0;left:0;width:100%;height:env(safe-area-inset-top);z-index:-1;background:linear-gradient(#0000005a 80%,#ffffff00 80%);}`,b=i.ZP.div`flex:1;margin-right:auto;display:flex;align-items:center;`,Z=(0,i.ZP)(o.OL)`flex:1;display:flex;align-items:center;justify-content:end;text-decoration:none;img{max-height:calc(${a.P.NAV_BAR_HEIGHT} - 1rem);}span{font-size:0.875rem;color:${e=>e.theme.textSecondary};strong{font-size:1.6rem;color:${e=>e.theme.text};font-weight:bold;margin:0 0.75rem;}}`,y=i.ZP.div`flex:1;display:flex;justify-content:center;align-self:center;font-size:1.634rem;font-weight:bold;color:${e=>e.theme.text};`,$=i.ZP.nav`flex:1;div{margin-left:auto;width:24px;height:100%;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat center;cursor:pointer;}`,k=i.ZP.nav`flex:1;display:flex;.active{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.textSecondary};cursor:default;text-decoration:none;}.inactive{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.primary};text-decoration:none;&:hover{opacity:0.8;}&:active{opacity:0.4;}}`},2872:(e,t,r)=>{r.r(t),r.d(t,{CardsPage:()=>U});var i=r(5964),o=r(8492),a=r(4869),n=r(6473),c=r(7993),d=r(9755),l=r(131);const s=e=>{let{group:t,width:r,height:i}=e;return(0,l.BX)("svg",{width:r,height:i,viewBox:"0 0 64 64",children:[t===d.ZA.All&&(0,l.tZ)("circle",{cx:"32",cy:"32",r:"30"}),t===d.ZA.Suit&&(0,l.BX)(l.HY,{children:[(0,l.tZ)("circle",{cx:"32",cy:"32",r:"30",strokeWidth:"4",fill:"none"}),(0,l.tZ)("circle",{cx:"25",cy:"25",r:"5"}),(0,l.tZ)("circle",{cx:"41",cy:"23",r:"5"}),(0,l.tZ)("circle",{cx:"23",cy:"41",r:"5"}),(0,l.tZ)("circle",{cx:"39",cy:"39",r:"5"})]}),t===d.ZA.Exp&&(0,l.BX)(l.HY,{children:[(0,l.tZ)("circle",{cx:"32",cy:"32",r:"27",strokeWidth:"10",fill:"none"}),(0,l.tZ)("circle",{cx:"26",cy:"26",r:"7"}),(0,l.tZ)("circle",{cx:"40",cy:"24",r:"3"}),(0,l.tZ)("circle",{cx:"24",cy:"40",r:"3"}),(0,l.tZ)("circle",{cx:"38",cy:"38",r:"7"})]})]})},h=e=>{let{width:t,height:r}=e;return(0,l.tZ)("svg",{width:t,height:r,viewBox:"0 0 64 64",children:(0,l.tZ)("path",{d:"M0 0h13v13H0zm18 4h46v5H18zM0 26h13v12H0zm18 3h46v6H18zM0 51h13v13H0zm18 4h46v5H18z"})})},m=e=>{let{width:t,height:r}=e;return(0,l.tZ)("svg",{width:t,height:r,viewBox:"0 0 28 28",children:(0,l.tZ)("path",{d:"M10.8 15c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3H5.3C4 25 3 24 3 22.7v-5.4C3 16 4 15 5.3 15h5.5Zm12 0c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3h-5.4C16 25 15 24 15 22.7v-5.4c0-1.3 1-2.3 2.3-2.3h5.4Zm-12-12C12 3 13 4 13 5.3v5.5c0 1.2-1 2.2-2.3 2.2H5.3C4 13 3 12 3 10.7V5.3C3 4 4 3 5.3 3h5.5Zm12 0C24 3 25 4 25 5.3v5.5c0 1.2-1 2.2-2.3 2.2h-5.4C16 13 15 12 15 10.7V5.3C15 4 16 3 17.3 3h5.4Z"})})},g=e=>{let{width:t,height:r}=e;return(0,l.tZ)("svg",{width:t,height:r,viewBox:"0 0 11 11",stroke:"none",children:(0,l.tZ)("path",{d:"M5 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm4 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM5 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM1 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V9c0-.6.4-1 1-1z"})})},p=e=>{let{view:t,width:r,height:i}=e;return(0,l.BX)(l.HY,{children:[t===d.G7.Compact&&(0,l.tZ)(h,{width:r,height:i}),t===d.G7.Normal&&(0,l.tZ)(m,{width:r,height:i}),t===d.G7.Wide&&(0,l.tZ)(g,{width:r,height:i})]})};var u=r(6352),v=r(1685),w=r(5381);const f={view:d.G7.Normal,hideViewbar:!1,group:d.ZA.Suit,query:"",hasFood:!1,hasBuilders:!1},x=(0,v.o)({name:"cardsFilters",initialState:f,reducers:{setView(e,t){e.view=t.payload},setViewbarHidden(e,t){e.hideViewbar=t.payload},setGroup(e,t){e.group=t.payload},setQuery(e,t){e.query=t.payload},setHasFood(e,t){e.hasFood=t.payload},setHasBuilders(e,t){e.hasBuilders=t.payload}}}),b=()=>((0,w.v)({key:x.name,reducer:x.reducer}),{actions:x.actions}),Z=(0,r(5323).P1)([e=>e.cardsFilters||f],e=>e),y=e=>{let{width:t,height:r}=e;return(0,l.tZ)("svg",{width:t,height:r,viewBox:"0 0 24 24",children:(0,l.tZ)("path",{d:"M19 6h-14c-1.1 0-1.4.6-.6 1.4l4.2 4.2c.8.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-.8.6-2.1 1.4-2.9l4.2-4.2c.8-.8.5-1.4-.6-1.4z"})})},$=()=>{const e=(0,u.v9)(Z),{actions:t}=b(),r=(0,u.I0)();return(0,l.BX)(k,{isHidden:e.hideViewbar,children:[(0,l.tZ)(H,{title:"filter",onClick:()=>{r(t.setHasFood(Math.random()<.5)),r(t.setHasBuilders(Math.random()<.5))},children:(0,l.tZ)(y,{width:"1.5rem",height:"1.5rem"})}),(0,l.tZ)(B,{defaultValue:e.query,onChange:e=>r(t.setQuery(e.target.value.toLowerCase()))}),(0,l.tZ)(H,{onClick:()=>r(t.setGroup((e.group+1)%d.xW)),title:"group by: "+d.Xx[e.group].name,children:(0,l.tZ)(s,{group:e.group,width:"1.5rem",height:"1.5rem"})}),(0,l.tZ)(H,{onClick:()=>r(t.setView((e.view+1)%d.g)),title:d.tk[e.view]+" view",children:(0,l.tZ)(p,{view:e.view,width:"1.5rem",height:"1.5rem"})})]})},k=a.ZP.div`position:sticky;top:calc(3rem + ${n.P.STATUS_BAR_HEIGHT});z-index:4;width:100%;height:${e=>e.isHidden?"0":"3.5rem"};padding-top:${e=>e.isHidden?"0":"1rem"};padding-right:env(safe-area-inset-right);display:flex;align-items:center;justify-content:flex-end;gap:1.5%;opacity:${e=>e.isHidden?"0":"1"};transform:${e=>e.isHidden?"translateY(-7rem)":"translateX(0)"};transition:height 0.4s,padding-top 0.1s,opacity 0.8s,transform 0.5s ease-out;${c.N}{height:3.5rem;padding-top:1rem;opacity:1;transform:translateX(0);}`,B=a.ZP.input`width:52%;max-width:22rem;height:100%;padding:0.5rem 1rem 0.5rem 2.5rem;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border:0.1rem solid ${e=>e.theme.textSecondary};border-radius:1.5rem;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='20' height='20' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat 0.75rem center;@media only screen and (pointer:fine){&:hover{border-color:${e=>e.theme.text};}}&:focus{outline:none;border-color:${e=>e.theme.primary};}@supports (backdrop-filter:blur(2px)){backdrop-filter:blur(2px);background-color:${e=>e.theme.backgroundVariant.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.85)")};}`,H=a.ZP.div`width:15.5%;max-width:4rem;padding:0.4rem;display:flex;justify-content:center;align-items:center;color:${e=>e.theme.text};stroke:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border:0.1rem solid ${e=>e.theme.textSecondary};border-radius:1.5rem;user-select:none;cursor:pointer;&:active{border-color:${e=>e.theme.primary};}@media only screen and (pointer:fine){&:hover{border-color:${e=>e.theme.text};}}@supports (backdrop-filter:blur(2px)){backdrop-filter:blur(2px);background-color:${e=>e.theme.backgroundVariant.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.85)")};}`;var C=r(4206);const P=e=>{let{width:t,height:r}=e;return(0,l.BX)("svg",{width:t,height:r,viewBox:"0 0 490.3 490.3",children:[(0,l.tZ)("circle",{cx:"245.15",cy:"245.15",r:"215.15",strokeWidth:"60",fill:"none"}),(0,l.tZ)("path",{d:"M270 221h-50c-8 0-15 7-15 15v148c0 8 7 15 15 15h50c8 0 15-7 15-15V236c0-8-7-15-15-15zM245 91a44 44 0 1 0 0 89 44 44 0 0 0 0-89z"})]})},S=e=>{let{cardID:t,view:r,editMode:i,selectCard:o}=e;const a=d._u[t],n=d.Xx[d.ZA.Suit].sets[a.suit].color,[c,s]=(0,C.eJ)(!1),[h,m]=(0,C.eJ)(!1);return(0,l.tZ)(l.HY,{children:i?(0,l.BX)(z,{children:[(0,l.tZ)(X,{editMode:!0,view:r,color:n,flip:!c,flipRight:"b"===a.name.toLowerCase().charAt(0)||"c"===a.name.toLowerCase().charAt(0)||"p"===a.name.toLowerCase().charAt(0)||"s"===a.name.toLowerCase().charAt(0)||"w"===a.name.toLowerCase().charAt(0),src:h?a.imgBack:a.imgFront,alt:a.name,onClick:()=>{o(t,!1),s(e=>!e),setTimeout(()=>m(e=>!e),120)}}),(0,l.BX)(V,{show:c,color:n,children:[(0,l.BX)(N,{wide:r===d.G7.Wide,children:[(0,l.tZ)("p",{children:a.name}),(0,l.tZ)("strong",{children:"disabled"})]}),(0,l.BX)(A,{onClick:()=>o(t,!0),children:["\xa0info\xa0",(0,l.tZ)(P,{})]})]})]}):(0,l.tZ)(X,{editMode:!1,view:r,color:n,flip:!c,src:a.imgFront,alt:a.name,onClick:()=>{o(t,!0),c||(s(!0),setTimeout(()=>s(!1),350))}})})},z=a.ZP.div`position:relative;`,X=a.ZP.img`max-width:${e=>e.view===d.G7.Normal?"11rem":"7.447rem"};max-height:42vh;border:groove ${e=>e.color};box-shadow:0.075rem 0.075rem 0.15rem ${e=>e.color};border-width:0 1px 1px 0;border-radius:6.5%/4%;user-select:none;cursor:pointer;${e=>e.editMode?`transform:translateZ(-1000px) ${e.flip?"rotate3d(0,0,0,0,0);":`rotate3d(${e.flipRight?-.05:.05},1,0.08,-180deg) scale(-1, 1);`};`:`transform:${e.flip?"translateY(0);":"scale(1.17) translateY(-5vh);"};`} transition:max-width 0.35s,transform 0.5s;`,V=a.ZP.div`position:absolute;top:11%;left:6%;width:88%;height:82%;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none;user-select:none;visibility:${e=>e.show?"visible":"hidden"};opacity:${e=>e.show?1:0};transition:all 0.6s ease-out;`,N=a.ZP.div`margin-top:0.5rem;padding:0.2rem;text-align:center;opacity:0.8;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:1.5rem;p{margin:0;font-size:${e=>e.wide?"0.97rem":"clamp(0.97rem, 3.5vh, 1.46rem)"};font-weight:bold;transition:all 0.35s;}`,A=a.ZP.div`align-self:center;padding:0.1rem;display:flex;align-items:center;opacity:0.8;font-weight:900;color:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:1.5rem;cursor:pointer;pointer-events:all;svg{width:2.2rem;height:2.2rem;stroke:${e=>e.theme.text};background-color:${e=>e.theme.backgroundVariant};border-radius:50%;}`;var M=r(3053),E=r(7215),G=r(5074),I=r(2934),_=r(331),L=r(1354),O=r(8981);const j=e=>{let{setID:t,set:r,query:i,view:o,editMode:a}=e;const n=(0,u.v9)(G.j),c=(0,u.v9)(Z),s=(0,E.oX)().actions,h=(0,u.I0)(),m=r.cards.filter(e=>n.includes(d._u[e].exp)),g=m.filter(e=>d._u[e].name.toLowerCase().indexOf(i)>-1).filter(e=>!c.hasFood||d._u[e].food).filter(e=>!c.hasBuilders||d._u[e].builders);return g.length?(0,l.BX)(D,{color:r.color,compact:o!==d.G7.Normal,children:[(0,l.tZ)(T,{color:r.color,compact:o!==d.G7.Normal,children:(0,l.tZ)("img",{src:r.img,alt:r.name})}),o===d.G7.Compact?(0,l.tZ)(q,{color:r.color,children:(0,l.tZ)("tbody",{children:g.map((e,t)=>{const r=d._u[e];return(0,l.BX)("tr",{onClick:()=>h(s.setCardModal(e)),children:[(0,l.tZ)("td",{children:r.name}),(0,l.tZ)("td",{children:r.lock&&(0,l.BX)(W,{title:`${r.name} is unlocked by ${d._u[r.lock].name}`,children:[(0,l.tZ)("img",{src:I,alt:"unlocked by: "+d._u[r.lock].name}),d._u[r.lock].name]})}),(0,l.tZ)("td",{children:!!r.food&&(0,l.tZ)(J,{children:[...Array(r.food).keys()].map(e=>(0,l.tZ)(_.N,{width:"1.825rem",height:"1.825rem"},e))})}),(0,l.tZ)("td",{children:!!r.builders&&(0,l.tZ)(W,{children:[...Array(r.builders).keys()].map(e=>(0,l.tZ)("img",{src:L,alt:r.builders+" Builder(s)"},e))})}),(0,l.BX)("td",{children:[r.gold&&(0,l.tZ)(M.q,{gold:r.gold,width:"1.825rem",height:"1.825rem"}),r.discard&&(0,l.tZ)(O.v,{playType:"discard",color:d.Xx[d.ZA.Suit].sets[r.suit].color,width:"1.1rem",height:"1.825rem"})]})]},t)})})}):(0,l.BX)(l.HY,{children:[(0,l.BX)(F,{wide:o===d.G7.Wide,children:[(0,l.tZ)("h1",{children:r.name}),(0,l.BX)("div",{children:[`(${g.length}/${m.length})`,(0,l.tZ)(P,{})]})]}),(0,l.tZ)(Y,{color:r.color,wide:o===d.G7.Wide,children:g.map((e,t)=>(0,l.tZ)(S,{cardID:e,view:o,editMode:a,selectCard:(e,t)=>t?h(s.setCardModal(e)):void console.log("disabling card...")},t))})]})]},t):null},D=a.ZP.div`width:100%;margin:${e=>e.compact?"0.75rem":"1.2rem"} auto 0 auto;display:flex;flex-direction:column;background-color:${e=>e.theme.backgroundVariant};box-shadow:0.05rem 0.05rem 0.1rem ${e=>e.color};border-radius:1.5rem;overflow:hidden;transition:all 0.35s ease-in-out;@media only screen and (display-mode:standalone){width:calc( 100% - 0.65 * env(safe-area-inset-left) - 0.65 * env(safe-area-inset-right) );}`,T=a.ZP.div`display:flex;justify-content:center;padding-top:${e=>e.compact?"1.75rem":"2.5rem"};background-color:${e=>e.color};img{position:absolute;align-self:center;width:${e=>e.compact?"2.5rem":"4rem"};transition:width 0.2s ease-in-out;}transition:padding-top 0.2s ease-in-out;`,F=a.ZP.div`margin:1rem 1rem 0 1rem;display:flex;&::before,h1,div{content:'';flex-basis:100%;}h1{text-align:center;font-size:${e=>e.wide?"1.75rem":"2rem"};line-height:${e=>e.wide?"2rem":"3rem"};font-weight:bold;white-space:nowrap;color:${e=>e.theme.text};margin:${e=>e.wide?"0.25rem 0 0.25rem 0":"1rem 0 0.5rem 0"};transition:all 0.25s ease-in-out;}div{display:flex;justify-content:flex-end;align-items:center;color:${e=>e.theme.textSecondary};}svg{stroke:${e=>e.theme.textSecondary};margin-left:0.7rem;width:1.5rem;height:1.5rem;cursor:pointer;}`,Y=a.ZP.div`display:flex;flex-flow:row wrap;justify-content:center;padding:${e=>e.wide?"0.5rem":"1.25rem"} 0;gap:${e=>e.wide?"0.5rem 0.35rem":"0.75rem"};background-color:${e=>e.color}40;transition:all 0.25s ease-in-out;`,q=a.ZP.table`background-color:${e=>e.color}40;overflow:hidden;tbody > tr{td{line-height:1.825rem;padding:0.25rem 0;border-top:1px solid ${e=>e.color};color:${e=>e.theme.text};&:first-child{width:32%;font-weight:bold;padding-left:0.5rem;}&:nth-child(2){width:31.7%;}&:nth-child(3){width:17%;}&:nth-child(4){width:9.2%;}&:last-child{width:10.1%;}}&:first-child > td{padding-top:1.25rem;}&:last-child > td{padding-bottom:0.35rem;}&:nth-child(even){background-color:${e=>e.color}30;}}`,W=a.ZP.div`display:flex;align-items:center;gap:0.25rem;font-size:0.9rem;color:${e=>e.theme.text};img{max-width:1.825rem;max-height:1.825rem;width:auto;height:auto;}`,J=a.ZP.div`display:flex;color:#fe3d33;stroke:#fe3d33;transform:scale(1.2);`,R=()=>{const e=(0,u.v9)(Z);return(0,l.BX)(Q,{children:[(0,l.tZ)($,{}),Object.entries(d.Xx[e.group].sets).filter(e=>{var t;return!(null!=(t=e[1])&&t.hide)}).map(t=>{let[r,i]=t;return(0,l.tZ)(j,{setID:r,set:i,query:e.query.trim(),view:e.view,editMode:!1},r)})]})},Q=a.ZP.main`max-width:78rem;margin:0 auto;display:flex;flex-direction:column;padding:0 0.2rem 0.5rem 0.2rem;`,U=()=>{const e=(0,u.v9)(Z),{actions:t}=b(),r=(0,u.I0)();return(0,l.BX)(l.HY,{children:[(0,l.BX)(i.ql,{children:[(0,l.tZ)("title",{children:"cards"}),(0,l.tZ)("meta",{name:"description",content:"cards"})]}),(0,l.tZ)(o.l,{title:"cards",btnSearch:()=>r(t.setViewbarHidden(!e.hideViewbar))}),(0,l.tZ)(R,{})]})}},8619:(e,t,r)=>{r.d(t,{E3:()=>d,Jf:()=>s});var i=r(1685),o=r(5381),a=r(7717),n=r(9755);const c=[{name:"Standard Game",color:"#ff0000",cards:[n.Gb.Founders]}],d={configs:(0,a.Li)()||c,selectedExps:(0,a.tO)()||[n.NE.Base,n.NE.FourPlayer,n.NE.Promo1,n.NE.DiceTower,n.NE.Profiteers,n.NE.Saints,n.NE.Scoundrels]},l=(0,i.o)({name:"userData",initialState:d,reducers:{setDisabledCards(e,t){e.configs=t.payload},setSelectedExpansions(e,t){e.selectedExps=t.payload}}}),s=()=>((0,o.v)({key:l.name,reducer:l.reducer}),{actions:l.actions})},5074:(e,t,r)=>{r.d(t,{j:()=>a});var i=r(5323),o=r(8619);(0,i.P1)([e=>e.userData||o.E3],e=>e.configs);const a=(0,i.P1)([e=>e.userData||o.E3],e=>e.selectedExps)},7717:(e,t,r)=>{r.d(t,{Li:()=>o,tO:()=>a,ym:()=>i});const i=e=>{var t;return null==(t=window.localStorage)?void 0:t.setItem("selectedExps",JSON.stringify(e))},o=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("configs")?JSON.parse(window.localStorage.getItem("configs")||"[]"):null},a=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("selectedExps")?JSON.parse(window.localStorage.getItem("selectedExps")||"[]"):null}}}]);