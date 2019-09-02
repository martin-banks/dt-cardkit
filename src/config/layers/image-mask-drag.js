import colors from '../colors'

export default {
  draggable: true,
  name: 'imageMaskDrag',
  label: 'Rectangle',
  type: 'rectangle',
  x: 0,
  y: {
    attach: 'kickerBottom',
    offset: -140,
  },
  width: 1080,
  height: 700,
  opacity: 0.5,
  fill: '#fff',
  editable: {
    fill: {
      options: colors,
    },
    width: {
      step: 30,
      max: 2000
    },
    height: {
      step: 30,
      min: 0,
      max: 2000,
    },
  }
}