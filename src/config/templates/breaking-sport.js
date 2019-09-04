import preview from './previews/placeholder.jpg'

import background16x9 from '../images/backgrounds/breaking-sport/16x9'
import backgroundInstagramStories from '../images/backgrounds/breaking-sport/instagram-stories'
import backgroundsquare from '../images/backgrounds/breaking-sport/square'

export default {
  info: {
    title: 'Breaking: Sport',
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
        name: 'logoSportTelegraph',
        settings: {
          label: 'logo-sport-telegraph',
          x: '3%',
          y: '5.5%',
          width: '14%',
        }
      },
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
          x: '5%',
          y: '5%',
          width: '50%',
          height: '40%',
        },
      },
      {
        name: 'logoSportTelegraph',
        settings: {
          label: 'logo-sport-telegraph',
          // settings in here
        }
      },
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
          x: '5%',
          y: '5%',
          width: '50%',
          height: '40%',
        },
      },
      {
        name: 'logoSportTelegraph',
        settings: {
          label: 'logo-sport-telegraph',
          // settings in here
        }
      },
    ],
  },
}
