import colors from '../colors'

export default {
  type: 'text',
  name: 'Quote - display',
  x: 540,
  // y: 170,
  y: {
    attach: 'quoteMark',
    offset: 120,
  },
  fontSize: 150,
  textAnchor: 'middle',
  get lineHeight () {
    return this.fontSize * 1;
  },
  useAsFilename: true,
  text: '"Display\nquote here"',
  fontFamily: 'RobotoCond',
  fill: '#fff',
  fontWeight: 'bold',
  draggable: true,

  editable: {
    text: true,
    fill: { options: colors },
    // text: {
    //   options: [
    //     'Default text option 1',
    //     'Default text option 2',
    //   ],
    // },
    fontSize: {
      min: 50,
      max: 300,
      step: 10
    },
    lineheight: true
  }
}