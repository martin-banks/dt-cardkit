import preview from './previews/split-two.jpg'

import majorEvent from './previews/2-split/16x9.jpg'
import story from './previews/2-split/4x3.jpg'
import portrait from './previews/2-split/3x4.jpg'
import square from './previews/2-split/square.jpg'
import instaStories from './previews/2-split/Instagram stories.jpg'


export default {
  info: {
    title: 'Split 2',
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
        name: 'mastheads',
        settings: {
          label: 'mastheads',
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
        name: 'mastheads',
        settings: {
          label: 'mastheads',
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
          width: '100%',
          height: '49%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '0%',
          y: '51%',
          width: '100%',
          height: '49%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
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
        name: 'mastheads',
        settings: {
          label: 'mastheads',
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
          height: '49%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'Second-image',
          x: '0%',
          y: '51%',
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'mastheads',
        settings: {
          label: 'mastheads',
        }
      },
    ],
  },
}
