import preview from './previews/split-three.jpg'

export default {
  layers: {},
  info: {
    title: 'Split Three',
    preview,
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
    ],
  },
}
