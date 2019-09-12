import preview from './previews/split-three.jpg'

import majorEvent from './previews/3-split/16x9.jpg'
import story from './previews/3-split/4x3.jpg'
import portrait from './previews/3-split/3x4.jpg'
import square from './previews/3-split/square.jpg'
import instaStories from './previews/3-split/Instagram stories.jpg'

export default {
  layers: {},
  info: {
    title: 'Split Three',
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
        name: 'croppedImage',
        settings: {
          label: 'First-image',
          x: '0%',
          y: '0%',
          width: '33%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '34%',
          y: '0%',
          width: '33%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Third-image',
          x: '68%',
          y: '0%',
          width: '32%',
          height: '100%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
          y: 920,
        }
      },
    ],

    '4x3': [
      {
        name: 'croppedImage',
        settings: {
          label: 'First-image',
          x: '0%',
          y: '0%',
          width: '49%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '51%',
          y: '0%',
          width: '49%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Third-image',
          x: '200%',
          y: '0%',
          width: '0%',
          height: '0%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
          y: 1280,
        }
      },
    ],
    '3x4': [
      {
        name: 'croppedImage',
        settings: {
          label: 'First-image',
          x: '0%',
          y: '0%',
          width: '50%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '51%',
          y: '0%',
          width: '49%',
          height: '50%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Third-image',
          x: '51%',
          y: '51%',
          width: '49%',
          height: '49%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
          y: 1760,
        }
      },
    ],
    'square': [
      {
        name: 'croppedImage',
        settings: {
          label: 'First-image',
          x: '0%',
          y: '0%',
          width: '50%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '51%',
          y: '0%',
          width: '49%',
          height: '50%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Third-image',
          x: '51%',
          y: '51%',
          width: '49%',
          height: '49%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
          y: 1760,
        }
      },
    ],
    'Instagram stories': [
      {
        name: 'croppedImage',
        settings: {
          label: 'First-image',
          x: '0%',
          y: '0%',
          width: '100%',
          height: '60.4%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '0%',
          y: '61%',
          width: '50%',
          height: '39%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Third-image',
          x: '51%',
          y: '61%',
          width: '49%',
          height: '39%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
          y: 1760,
        }
      },
    ],
  },
}
