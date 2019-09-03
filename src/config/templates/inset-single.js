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
          label: 'background-image',
        }
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
        name: 'croppedImage',
        settings: {
          label: 'inset-image',
          x: '60%',
          y: '3%',
          width: '37.5%',
          height: '45%',
        }
      },
    ]
  }
}
