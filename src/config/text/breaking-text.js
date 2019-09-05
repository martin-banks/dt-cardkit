// import colors from '../colors'

export default {
  type: 'text',
  name: 'breaking-text',
  label: 'breaking-text',
  x: 0,
  // y: 0,
  y: {
    attach: 'breaking-title',
    offset: 110
  },
  fill: '#fff',
  fontSize: 75,
  textAnchor: 'start',
  // lineHeight: 100,
  get lineHeight () {
    return this.fontSize * 0.9
  },
  fontFamily: 'RobotoMed',
  text: 'XXXXXXX\nXXXXXXX',
  editable: {
    text: true,
    // fontSize: {
    //   min: 40,
    //   max: 100,
    //   step: 5,
    // },
    // fill: { options: colors },
  },
}