/*
 * Media queries utility
 */

import { css } from 'styled-components/macro'

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  small: 600,
  medium: 1024
}

// Minimum Window Width Media Query
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)}
    }
  `
  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/
