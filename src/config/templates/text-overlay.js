import preview from './previews/text-overlay.jpg'

export default {
  layers: {

    image: { hidden: false },

    // imageMaskDrag: { hidden: true },
    // imageMask: { hidden: true },

    gradientLeft: { hidden: false },

    // end: { hidden: true },
    // endBottom: { hidden: true },

    // kickerBottom: { hidden: true },
    kicker: { hidden: false },

    // textBottom: { hidden: true },
    text: { hidden: false },

    // headlineDrag: { hidden: true },
    headline: { hidden: false },

    // quoteMark: { hidden: true },
    // quoteDisplay: { hidden: true },
    // quoteCredit: { hidden: true },

  },
  layerItems: [
    { name: 'image' },
    { name: 'gradientLeft' },
    { name: 'kicker' },
    { name: 'text' },
    { name: 'headline' },
  ],
  info: {
    title: 'Text overlay',
    preview,
  }
}