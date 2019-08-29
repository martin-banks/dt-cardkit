import preview from './previews/split-double.jpg'

export default {
  layers: {},

  layerItems: [
    'clipHalfLeft',
    'clipHalfRight',
  ],
  info: {
    title: 'Test: 2 image split',
    preview,
  },
  // Image shape/sizes
  // Set to null to allow all sizes
  layouts: [
    '16x9',
    '4x3',
    '3x4',
    'square',
  ]
}
