import { mediaMin, mediaMax, sizes } from '../media'
import { css } from 'styled-components/macro'

describe('media min/max', () => {
  it('should return min-width media query in css', () => {
    const mediaQuery = mediaMin.small`color:red;`.join('')
    const cssVersion = css`
      @media (min-width: ${sizes.small}px) {
        color: red;
      }
    `.join('')
    expect(mediaQuery).toEqual(cssVersion)
  })

  it('should return max-width media query in css', () => {
    const mediaQuery = mediaMax.small`color:red;`.join('')
    const cssVersion = css`
      @media (max-width: ${sizes.small}px) {
        color: red;
      }
    `.join('')
    expect(mediaQuery).toEqual(cssVersion)
  })
})
