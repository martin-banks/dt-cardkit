import colors from '../colors'

export default {
  type: 'text',
  name: 'breaking-title',
  label: 'breaking-title',
  x: 0,
  // y: 0,
  y: {
    attach: 'breaking-kicker',
    offset: 100
  },
  fill: '#fff',
  fontSize: 130,
  textAnchor: 'start',
  // lineHeight: 100,
  get lineHeight () {
    return this.fontSize * 0.9
  },
  fontFamily: 'RobotoBlack',
  text: 'XXXXXXX\nXXXXXXX',
  useAsFilename: true,
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