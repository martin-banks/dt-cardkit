import preview from './previews/split-double.jpg'

export default {
  layers: {},

  // layerItems: [
  //   {
  //     name: 'clipHalfLeft',
  //     settings: {
  //       label: 'left-image',
  //       x: '0%',
  //       y: '0%',
  //       width: '49%',
  //       height: '100%',
  //     }
  //   },
  //   {
  //     name: 'clipHalfLeft',
  //     settings: {
  //       label: 'right-image',
  //       x: '51%',
  //       y: '0%',
  //       width: '49%',
  //       height: '100%',
  //     }
  //   },
  // ],

  layerItems: {
    '16x9': [
      {
        name: 'clipHalfLeft',
        settings: {
          label: 'left-image',
          x: '0%',
          y: '0%',
          width: '49%',
          height: '100%',
        }
      },
      {
        name: 'clipHalfLeft',
        settings: {
          label: 'right-image',
          x: '51%',
          y: '0%',
          width: '49%',
          height: '100%',
        }
      },
    ],
    'Instagram stories': [
      {
        name: 'clipHalfLeft',
        settings: {
          label: 'left-image',
          x: '0%',
          y: '0%',
          width: '100%',
          height: '49%',
        }
      },
      {
        name: 'clipHalfLeft',
        settings: {
          label: 'right-image',
          x: '0%',
          y: '51%',
          width: '100%',
          height: '100%',
        }
      },
    ],
  },
  info: {
    title: 'Test: 2 image split',
    preview,
  },
  // Image shape/sizes
  // Set to null to allow all sizes
  // layouts: [
  //   '16x9',
  //   '4x3',
  //   '3x4',
  //   'square',
  // ],
  // layoutSettings: { 
  //   '16x9': {
      
  //   },
  //   '4x3': {
      
  //   },
  //   '3x4': {
      
  //   },
  //   'square': {
      
  //   },
  // }
}
