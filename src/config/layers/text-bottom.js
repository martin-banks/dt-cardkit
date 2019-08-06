import colors from '../colors'

export default {
  draggable: true,
  type: 'text',
  name: 'Subtitle',
  x: 540,
  y: {
    attach: 'headlineDrag',
    offset: 60
  },
  fontSize: 50,
  textAnchor: 'middle',
  get lineHeight () {
    return this.fontSize * 1.2;
  },
  fontFamily: 'RobotoBlack',
  fill: '#333',
  editable: {
    text: true,
    fontSize: {
      min: 40,
      max: 100,
      step: 10,
    },
    fill: { options: colors },
  },
  text: 'Subtitle text',
}
