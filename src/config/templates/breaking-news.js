import preview from './previews/breaking-news.jpg'

import background16x9 from '../images/backgrounds/breaking-news/16x9'
import backgroundInstagramStories from '../images/backgrounds/breaking-news/instagram-stories'
import backgroundsquare from '../images/backgrounds/breaking-news/square'

export default {
  info: {
    title: 'Breaking: News',
    preview,
  },
  layerItems: {
    '16x9': [
      {
        name: 'backgroundImageFixed',
        settings: {
          label: 'background-image',
          src: background16x9,
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'display-image',
          x: '4.5%',
          y: '17%',
          width: '39%',
          height: '74.6%',
          opacity: 1
        },
      },
      {
        name: 'logoNewsTelegraph',
        settings: {
          label: 'logo-news-telegraph',
          x: '3%',
          y: '5.5%',
          // width: '14%',
          height: 123,
        }
      },
      {
        name: 'breakingKicker',
        settings: {
          label: 'breaking-kicker',
          fill: '#da3832',
          x: 922,
          y: 130,
        },
      },
      {
        name: 'breakingTitle',
        settings: {
          label: 'breaking-title',
          x: 922,
          y: 280,
        },
      },
      {
        name: 'breakingText',
        settings: {
          label: 'breaking-text',
          x: 922,
          // y: 280,
        },
      }
    ],
    // '4x3': [
    //   {
    //     name: 'Layer name',
    //     settings: {
    //       label: 'layer-name',
    //       // settings in here
    //     }
    //   },
    // ],
    // '3x4': [
    //   {
    //     name: 'Layer name',
    //     settings: {
    //       label: 'layer-name',
    //       // settings in here
    //     }
    //   },
    // ],

    'square': [
      {
        name: 'overlayImage',
        settings: {
          label: 'background-image',
          src: backgroundsquare,
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'display-image',
          x: 140,
          y: 165,
          width: 1215,
          height: 843,
        },
      },
      {
        name: 'logoNewsTelegraph',
        settings: {
          label: 'logo-news-telegraph',
          x: 85,
          y: 48,
          height: 120,
        }
      },
      {
        name: 'breakingKicker',
        settings: {
          label: 'breaking-kicker',
          fill: '#da3832',
          x: 85,
          y: 1125,
        },
      },
      {
        name: 'breakingTitle',
        settings: {
          label: 'breaking-title',
          x: 85,
          y: 1280,
        },
      },
      {
        name: 'breakingText',
        settings: {
          label: 'breaking-text',
          x: 85,
          y: 1550,
        },
      }
    ],

    'Instagram stories': [
      {
        name: 'overlayImage',
        settings: {
          label: 'background-image',
          src: backgroundInstagramStories,
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'croppedImage',
        settings: {
          label: 'display-image',
          x: '8%',
          y: '7.7%',
          width: '84.3%',
          height: '38%',
        },
      },
      {
        name: 'logoNewsTelegraph',
        settings: {
          label: 'logo-news-telegraph',
          x: 55,
          y: 55,
          height: 93,
        }
      },
      {
        name: 'breakingKicker',
        settings: {
          label: 'breaking-kicker',
          fill: '#da3832',
          x: 50,
          y: 950,
        },
      },
      {
        name: 'breakingTitle',
        settings: {
          label: 'breaking-title',
          x: 50,
          y: 1080,
        },
      },
      {
        name: 'breakingText',
        settings: {
          label: 'breaking-text',
          x: 50,
          y: 1335,
        },
      }
    ],
  },
}