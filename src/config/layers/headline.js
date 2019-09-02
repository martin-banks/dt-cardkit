import colors from '../colors'

export default {
  type: 'text',
  name: 'headline',
  label: 'Headline',
  x: 540,
  // y: 50,
  y: {
    attach: 'kicker',
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
  // fontWeight: 'bold',
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
      max: 200,
      step: 10
    }
  }
}