import preview from './previews/split-four.jpg'

import majorEvent from './previews/4-split/16x9.jpg'
import story from './previews/4-split/4x3.jpg'
import portrait from './previews/4-split/3x4.jpg'
import square from './previews/4-split/square.jpg'
import instaStories from './previews/4-split/Instagram stories.jpg'


export default {
  layers: {},
  info: {
    title: 'Split Four',
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
          label: 'crop4-First-image',
          x: '0%',
          y: '0%',
          width: '25%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Second-image',
          x: '25.5%',
          y: '0%',
          width: '24.5%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Third-image',
          x: '50.5%',
          y: '0%',
          width: '24.5%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Fourth-image',
          x: '75.5%',
          y: '0%',
          width: '24.5%',
          height: '100%',
        }
      },
    ],

    '4x3': [
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-First-image',
          x: '0%',
          y: '0%',
          width: '49.5%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Second-image',
          x: '50.5%',
          y: '0%',
          width: '49.5%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Third-image',
          x: '200%',
          y: '200%',
          width: '0%',
          height: '0%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Fourth-image',
          x: '200%',
          y: '200%',
          width: '0%',
          height: '0%',
        }
      },
    ],
    '3x4': [
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-First-image',
          x: '0%',
          y: '0%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Second-image',
          x: '50.5%',
          y: '0%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Third-image',
          x: '0%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Fourth-image',
          x: '50.5%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
    ],
    'square': [
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-First-image',
          x: '0%',
          y: '0%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Second-image',
          x: '50.5%',
          y: '0%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Third-image',
          x: '0%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Fourth-image',
          x: '50.5%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
    ],
    'Instagram stories': [
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-First-image',
          x: '0%',
          y: '0%',
          width: '49.5%',
          height: '49.9%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Second-image',
          x: '50.5%',
          y: '0%',
          width: '49.5%',
          height: '49.9%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Third-image',
          x: '0%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'crop4-Fourth-image',
          x: '50.5%',
          y: '50.5%',
          width: '49.5%',
          height: '49.5%',
        }
      },
    ],
  },
}
