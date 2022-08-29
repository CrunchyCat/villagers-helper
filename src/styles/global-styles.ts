import { createGlobalStyle } from 'styled-components'
import { StyleConstants } from './StyleConstants'

//prettier-ignore

export const GlobalStyle = createGlobalStyle`body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding-top:calc(${StyleConstants.COMBINED_BAR_HEIGHT});background-color:${p =>p.theme.background}}#root{min-width:100%;height:calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT})}button,select{font-family:inherit;font-size:inherit}`

//NOTE: Edit global styles below, then minify above (styled-components does not minify global styles)
// export const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//     padding-top: calc(${StyleConstants.COMBINED_BAR_HEIGHT});
//     background-color: ${p => p.theme.background};
//   }
//   #root {
//     min-width: 100%;
//     height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT});
//     @supports (-webkit-touch-callout: none){
//       @media only screen and (display-mode: browser) {
//         height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT} - ${StyleConstants.BROWSER_BAR_HEIGHT});
//       }
//     }
//   }
//   input, select, button {
//     font-family: inherit;
//     font-size: inherit;
//   }`

//TODO: App global styles, EX: .icon { width: 1.5rem; height: 1.5rem; }

/* //TODO: Add after body when there are fonts to load (Replace Inter with that Font)
body.fontLoaded {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
*/

//NOTE: Apply serif fonts: "font-family: Georgia, Times, 'Times New Roman', serif;"
