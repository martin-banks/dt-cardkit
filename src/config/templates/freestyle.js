import preview from './previews/freestyle.jpg'

export default {
  layers: {
    // imageMask: { hidden: true, },
    // kicker: { hidden: true, },
    // headline: { hidden: true },
    // text: { hidden: true },

    imageMaskDrag: { hidden: false, },
    kickerBottom: { hidden: false, },
    headlineDrag: { hidden: false },
    textBottom: { hidden: false },

    // freeStory: { hidden: true },
    // freeStoryRight: { hidden: true },
    // subscriberStory: { hidden: true },
    // subscriberStoryRight: { hidden: true },
  },

  layerItems: [
    'image',
    'imageMaskDrag',
    'kickerBottom',
    'headlineDrag',
    'textBottom',
  ],
  info: {
    title: 'Freestyle',
    preview
  }
}