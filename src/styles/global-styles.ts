import { createGlobalStyle } from 'styled-components'
import { StyleConstants } from './StyleConstants'

//prettier-ignore
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};

    @media only screen and (display-mode: standalone) and (orientation: portrait) {
      height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT});
      padding-top: calc(${StyleConstants.COMBINED_BAR_HEIGHT});
    }

    background-color: ${p => p.theme.background};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`

/* //TODO: Add after body when there are fonts to load (Replace Inter with that Font)
body.fontLoaded {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
*/

//NOTE: Apply serif fonts: "font-family: Georgia, Times, 'Times New Roman', serif;"
