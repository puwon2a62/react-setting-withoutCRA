import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components'

const sizes: { [key: string]: number; } = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
}

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined,
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined,
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined,
}

const media: Media = {
  mobile: () => undefined,
  tablet: () => undefined,
  desktop: () => undefined
}

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = () => css`@media only screen and (min-width: ${sizes.desktop}px)`
      break
    case 'tablet':
      acc.tablet = () => css`@media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px)`
      break
    case 'mobile':
      acc.mobile = () => css`@media only screen and (max-width: ${sizes.tablet}px)`
      break
    default:
      break
  }
  return acc
}, media)

const colors = {
  white: '#ffffff',
  black: '#000000'
}

const secondaryColors = {}
const fontSizes: string[] = []

const theme = {
  colors,
  fontSizes,
  secondaryColors,
  media
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
export default theme
