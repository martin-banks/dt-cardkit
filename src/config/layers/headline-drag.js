import colors from '../colors'

export default {
  draggable: true,
  type: 'text',
  name: 'headlineDrag',
  label: 'Headline',
  x: 540,
  y: {
    attach: 'kickerBottom',
    offset: 20,
  },
  fontSize: 100,
  textAnchor: 'middle',
  get lineHeight () {
    return this.fontSize * 1.1;
  },
  useAsFilename: true,
  text: 'Display text here',
  fontFamily: 'RobotoCond',
  fill: '#333',
  editable: {
    text: true,
    fill: { options: colors },
    fontSize: {
      min: 50,
      max: 200,
      step: 10
    },
    textAnchor: true
  }
}