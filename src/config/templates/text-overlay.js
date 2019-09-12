import preview from './previews/text-overlay.jpg'

import majorEvent from './previews/3-split/16x9.jpg'
import story from './previews/3-split/4x3.jpg'
import portrait from './previews/3-split/3x4.jpg'
import square from './previews/3-split/square.jpg'
import instaStories from './previews/3-split/Instagram stories.jpg'


export default {
  info: {
    title: 'Text overlay',
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
          label: 'image',
        }
      },
      {
        name: 'gradientLeft',
        settings: {
          label: 'gradient',
        }
      },
      {
        name: 'kicker',
        settings: {
          label: 'kicker',
        }
      },
      {
        name: 'text',
        settings: {
          label: 'text',
        }
      },
      {
        name: 'headline',
        settings: {
          label: 'footer',
        }
      }
    ],
    '4x3': [
      {
        name: 'image',
        settings: {
          label: 'image',
        }
      },
      {
        name: 'gradientLeft',
        settings: {
          label: 'gradient',
        }
      },
      {
        name: 'kicker',
        settings: {
          label: 'kicker',
        }
      },
      {
        name: 'text',
        settings: {
          label: 'text',
        }
      },
      {
        name: 'headline',
        settings: {
          label: 'footer',
        }
      }
    ],
  }
}