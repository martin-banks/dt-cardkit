import preview from './previews/display-quote.jpg'

export default {
  layers: {
    image: { hidden: false },
    gradientLeft: { hidden: false },
    quoteMark: { hidden: false },
    quoteDisplay: { hidden: false },
    quoteCredit: { hidden: false },
  },

  layerItems: [
    {
      name: 'image',
      settings: {
        label: 'display-quote-image',
        y: 0,
      },
    },
    {
      name: 'gradientLeft',
      settings: {
        label: 'display-quote-gradientLeft',
        y: 0,
      },
    },
    {
      name: 'quoteMark',
      settings: {
        label: 'display-quote-quoteMark',
        y: 0,
      },
    },
    {
      name: 'quoteDisplay',
      settings: {
        label: 'display-quote-quoteDisplay',
        y: 0,
      },
    },
    {
      name: 'quoteCredit',
      settings: {
        label: 'display-quote-quoteCredit',
        y: 0,
      },
    },
  ],
  info: {
    title: 'Display quote',
    preview,
  }
}