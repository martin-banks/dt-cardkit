import colors from '../colors'

export default {
  type: 'text',
  name: 'breaking-kicker',
  label: 'breaking-kicker',
  x: 0, // '48%',
  y: 0, // '12.5%',
  fontSize: 80,
  textAnchor: 'start',
  get lineHeight () {
    return this.fontSize * 1.1;
  },
  fontFamily: 'RobotoMed',
  fill: '#6cc2ee',
  editable: {
    text: true,
    // fontSize: {
    //   min: 40,
    //   max: 100,
    //   step: 5,
    // },
    // fill: { options: colors },
  },
  text: 'BREAKING',
}