import end from './layers/end'
import endBottom from './layers/end-bottom'
import headlineDrag from './layers/headline-drag'
import headline from './layers/headline'
import image from './layers/image'
import imageMaskDrag from './layers/image-mask-drag'
import imageMask from './layers/image-mask'
import kickerBottom from './layers/kicker-bottom'
import kicker from './layers/kicker'
import textBottom from './layers/text-bottom'
import text from './layers/text'


import quoteMark from './layers/quotemark'
// import quoteMarkGold from './layers/quotemark-gold'
import quoteDisplay from './layers/quote-display'
import quoteCredit from './layers/quote-credit'

// import clipHalfLeft from './layers/clip-half-left'
// import clipHalfRight from './layers/clip-half-right'


// * New components for demos

import croppedImage from './layers/cropped-image'

import rectFixed from './layers/rect-fixed'

import logoSportTelegraph from './logos/sport-telegraph'
import logoNewsTelegraph from './logos/news-telegraph'
import gradientLeft from './layers/gradient-left'
import overlayGradient from './overlays/gradient'
import overlayGradientFromRight from './overlays/gradient-from-right'
import backgroundImageFixed from './backgrounds/image-fixed'

import breakingKicker from './text/breaking-kicker'
import breakingTitle from './text/breaking-title'
import breakingText from './text/breaking-text'

import mastheads from './layers/mastheads'


// ! The order the layers are listed controls the order they are rendered in
export default {
  image,
  croppedImage,
  imageMaskDrag,
  imageMask,
  gradientLeft,
  quoteMark,
  // quoteMarkGold,
  end,
  endBottom,
  kickerBottom,
  kicker,
  textBottom,
  text,
  headlineDrag,
  headline,
  quoteDisplay,
  quoteCredit,
  // clipHalfLeft,
  // clipHalfRight,
  rectFixed,

  logoSportTelegraph,
  logoNewsTelegraph,
  overlayGradient,
  overlayGradientFromRight,
  backgroundImageFixed,

  // Temp items for breaking demo card
  breakingKicker,
  breakingTitle,
  breakingText,
  mastheads
}
