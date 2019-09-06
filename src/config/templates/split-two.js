import preview from './previews/split-two.jpg'


export default {
  info: {
    title: 'Split 2',
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
          y: 1760,
        }
      },
    ],
  },
}
