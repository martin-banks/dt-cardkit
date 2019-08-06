import colors from '../colors'

export default {
  type: 'text',
  name: 'Quote - credit',
  x: 540,
  // y: 90,
  y: {
    attach: 'quoteDisplay',
    offset: 60,
  },
  fontSize: 48,
  get lineHeight () {
    return this.fontSize * 1;
  },
  textAnchor: 'middle',
  fontFamily: 'RobotoCond',
  fill: '#ffaa00',
  fontWeight: 'bold',
  text: 'QUOTE CREDIT',

  editable: {
    text: true,
    fill: { options: colors },
  },
}