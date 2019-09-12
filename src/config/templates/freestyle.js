import preview from './previews/freestyle.jpg'

// import majorEvent from './previews/3-split/16x9.jpg'
// import story from './previews/3-split/4x3.jpg'
// import portrait from './previews/3-split/3x4.jpg'
// import square from './previews/3-split/square.jpg'
// import instaStories from './previews/3-split/Instagram stories.jpg'


export default {
  info: {
    title: 'Freestyle',
    preview,
    thumbs: {
      '16x9': preview,
      '4x3': preview,
      '3x4': preview,
      'square': preview,
      'Instagram stories': preview,
    },
  },

  layerItems: {
    '16x9': [
      {
        name: 'image',
        settings: {},
      },
      {
        name: 'imageMaskDrag',
        settings: {},
      },
      {
        name: 'kickerBottom',
        settings: {},
      },
      {
        name: 'headlineDrag',
        settings: {},
      },
      {
        name: 'textBottom',
        settings: {},
      }
    ],
    '4x3': [
      {
        name: 'image',
        settings: {},
      },
      {
        name: 'imageMaskDrag',
        settings: {},
      },
      {
        name: 'kickerBottom',
        settings: {},
      },
      {
        name: 'headlineDrag',
        settings: {},
      },
      {
        name: 'textBottom',
        settings: {},
      }
    ],
  },
}