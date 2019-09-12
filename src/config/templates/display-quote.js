import preview from './previews/display-quote.jpg'

import majorEvent from './previews/display-quote/16x9.jpg'
import story from './previews/display-quote/4x3.jpg'
// import portrait from './previews/display-quote/3x4.jpg'
// import square from './previews/display-quote/square.jpg'
// import instaStories from './previews/display-quote/Instagram stories.jpg'


export default {
  info: {
    title: 'Display quote',
    preview,
    thumbs: {
      '16x9': majorEvent,
      '4x3': story,
      // '3x4': portrait,
      // 'square': square,
      // 'Instagram stories': instaStories,
    },
  },
  
  layerItems: {
    '16x9': [
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
    '4x3': [
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
    ]
  },
  // layers: {
  //   image: { hidden: false },
  //   gradientLeft: { hidden: false },
  //   quoteMark: { hidden: false },
  //   quoteDisplay: { hidden: false },
  //   quoteCredit: { hidden: false },
  // },

  // layerItems: [
  //   {
  //     name: 'image',
  //     settings: {
  //       label: 'display-quote-image',
  //       y: 0,
  //     },
  //   },
  //   {
  //     name: 'gradientLeft',
  //     settings: {
  //       label: 'display-quote-gradientLeft',
  //       y: 0,
  //     },
  //   },
  //   {
  //     name: 'quoteMark',
  //     settings: {
  //       label: 'display-quote-quoteMark',
  //       y: 0,
  //     },
  //   },
  //   {
  //     name: 'quoteDisplay',
  //     settings: {
  //       label: 'display-quote-quoteDisplay',
  //       y: 0,
  //     },
  //   },
  //   {
  //     name: 'quoteCredit',
  //     settings: {
  //       label: 'display-quote-quoteCredit',
  //       y: 0,
  //     },
  //   },
  // ],
}