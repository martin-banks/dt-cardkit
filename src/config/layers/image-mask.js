import colors from '../colors'

export default {
  type: 'rectangle',
  name: 'rectangle',
  label: 'Rectangle',
  x: 0,
  y: {
    attach: 'end',
    offset: -1960,
  },
  width: 1080,
  height: 2000,
  opacity: 0.5,
  fill: '#fff',
  editable: {
    fill: {
      options: colors,
    },
    width: {
      step: 30,
      max: 1080
    },
    // opacity: true,
    // height: {
    //   min: 100,
    //   max: 2000,
    //   step: 50
    // }
  }
}