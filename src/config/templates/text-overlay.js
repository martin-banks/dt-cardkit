import preview from './previews/text-overlay.jpg'

export default {
  info: {
    title: 'Text overlay',
    preview,
  },

  layerItems: {
    '16x9': [
      {
        name: 'image',
        settings: {
          label: 'image',
        }
      },
      {
        name: 'gradientLeft',
        settings: {
          label: 'gradient',
        }
      },
      {
        name: 'kicker',
        settings: {
          label: 'kicker',
        }
      },
      {
        name: 'text',
        settings: {
          label: 'text',
        }
      },
      {
        name: 'headline',
        settings: {
          label: 'footer',
        }
      }
    ],
    '4x3': [
      {
        name: 'image',
        settings: {
          label: 'image',
        }
      },
      {
        name: 'gradientLeft',
        settings: {
          label: 'gradient',
        }
      },
      {
        name: 'kicker',
        settings: {
          label: 'kicker',
        }
      },
      {
        name: 'text',
        settings: {
          label: 'text',
        }
      },
      {
        name: 'headline',
        settings: {
          label: 'footer',
        }
      }
    ],
  }
}