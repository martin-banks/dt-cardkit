import preview from './previews/inset-single.jpg'

import majorEvent from './previews/inset-top-right/16x9.jpg'
import story from './previews/inset-top-right/4x3.jpg'
import portrait from './previews/inset-top-right/3x4.jpg'
import square from './previews/inset-top-right/square.jpg'
import instaStories from './previews/inset-top-right/Instagram stories.jpg'

import gradientBlackFromBottom from '../images/gradients/gradient-from-bottom-black'

export default {
  info: {
    title: 'Inset',
    preview,
    thumbs: {
      '16x9': majorEvent,
      '4x3': story,
      '3x4': portrait,
      'square': square,
      'Instagram stories': instaStories,
    },
  },
  layerItems: {
    '16x9': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: 1300,
          y: 40,
          width: 580,
          height: 800,
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: 1310,
          y: 50,
          width: 560,
          height: 780,
        }
      },
    ],
    '4x3': [
      {
        name: 'image',
        settings: {
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: 1300,
          y: 40,
          width: 580,
          height: 800,
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: 1310,
          y: 50,
          width: 560,
          height: 780,
        }
      },
    ],
    '3x4': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '60%',
          y: '2.5%',
          width: '37.5%',
          height: '40%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60.5%',
          y: '3%',
          width: '36.5%',
          height: '39%',
        }
      },
    ],
    'square': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: 1300,
          y: 40,
          width: 580,
          height: 800,
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: 1310,
          y: 50,
          width: 560,
          height: 780,
        }
      },
    ],
    'Instagram stories': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {
          src: gradientBlackFromBottom,
        },
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '55%',
          y: '65%',
          width: '42%',
          height: '33%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '56%',
          y: '65.5%',
          width: '40%',
          height: '31.8%',
        }
      },
    ],
  }
}
