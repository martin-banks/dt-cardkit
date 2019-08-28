import preview from './previews/display-quote.jpg'

export default {
  layers: {

    image: { hidden: false },

    // imageMaskDrag: { hidden: true },
    // imageMask: { hidden: true },

    gradientLeft: { hidden: false },

    // end: { hidden: true },
    // endBottom: { hidden: true },

    // kickerBottom: { hidden: true },
    // kicker: { hidden: true },

    // textBottom: { hidden: true },
    // text: { hidden: true },

    // headlineDrag: { hidden: true },
    // headline: { hidden: true },

    quoteMark: { hidden: false },
    quoteDisplay: { hidden: false },
    quoteCredit: { hidden: false },
  },

  layerItems: [
    'image',
    'gradientLeft',
    'quoteMark',
    'quoteDisplay',
    'quoteCredit',
  ],
  info: {
    title: 'Display quote',
    preview,
  }
}