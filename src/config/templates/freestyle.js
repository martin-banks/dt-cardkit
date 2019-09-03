import preview from './previews/freestyle.jpg'

export default {
  info: {
    title: 'Freestyle',
    preview
  },

  layerItems: {
    '16x9': [
      { name: 'image' },
      { name: 'imageMaskDrag' },
      { name: 'kickerBottom' },
      { name: 'headlineDrag' },
      { name: 'textBottom' }
    ],
    '4x3': [
      { name: 'image' },
      { name: 'imageMaskDrag' },
      { name: 'kickerBottom' },
      { name: 'headlineDrag' },
      { name: 'textBottom' }
    ],
  },
}