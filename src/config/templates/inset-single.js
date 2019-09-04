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
        name: 'overlayGradient',
        settings: {
          rotate: 180,
          x: '40%',
          width: '60%',
        },
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
        name: 'overlayGradient',
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
    ]
  }
}
