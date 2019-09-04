import preview from './previews/inset-single.jpg'

export default {
  info: {
    title: 'Inset',
    preview,
  },
  layerItems: {
    '16x9': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '60%',
          y: '3.5%',
          width: '38%',
          height: '50%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60.5%',
          y: '4.3%',
          width: '37%',
          height: '48.4%',
        }
      },
    ],
    '4x3': [
      {
        name: 'image',
        settings: {
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '60%',
          y: '3.4%',
          width: '38%',
          height: '50%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60.5%',
          y: '4.3%',
          width: '37%',
          height: '48.3%',
        }
      },
    ],
    '3x4': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '60%',
          y: '2.5%',
          width: '37.5%',
          height: '40%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60.5%',
          y: '3%',
          width: '36.5%',
          height: '39%',
        }
      },
    ],
    'square': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '60%',
          y: '3.5%',
          width: '37%',
          height: '45%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60.6%',
          y: '4.2%',
          width: '35.7%',
          height: '43.5%',
        }
      },
    ],
    'Instagram stories': [
      {
        name: 'image',
        settings: {
          rotate: 0,
          label: 'background-image',
        }
      },
      {
        name: 'overlayGradientFromRight',
        settings: {},
      },
      {
        name: 'rectFixed',
        settings: {
          label: 'border',
          x: '55%',
          y: '65%',
          width: '42%',
          height: '33%',
          fill: '#fff'
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '56%',
          y: '65.5%',
          width: '40%',
          height: '31.8%',
        }
      },
    ],
  }
}
