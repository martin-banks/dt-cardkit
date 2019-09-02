export default {
  '16x9': {
    name: '16x9',
    card: {
      width: 1920,
      height: 1080,
    },
    ratio: '16:9',
    usecases: [
      'Major event',
      'Defcon',
      'Twitter',
    ],
  },
  '4x3': {
    name: '4x3',
    card: {
      width: 1920,
      height: 1440,
    },
    ratio: '4:3',
    usecases: [
      'Story'
    ],
  },
  '3x4': {
    name: '3x4',
    card: {
      width: 1440,
      height: 1920,
    },
    ratio: '3:4',
    usecases: [
      'Story portrait'
    ],
  },
  square: {
    name:'square',
    card: {
      width: 1920,
      height: 1920,
    },
    ratio: '1:1',
    usecases: [
      'Instagram'
    ],
  },
  'Instagram stories': {
    name: 'Instagram stories',
    card: {
      width: 1080,
      height: 1920,
    },
    ratio: '9:16',
    usecases: [
      'Instagram stories'
    ],
  },
}