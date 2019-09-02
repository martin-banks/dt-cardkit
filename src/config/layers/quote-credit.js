import colors from '../colors'

export default {
  type: 'text',
  name: 'quoteCredit',
  label: 'Quote - credit',
  x: 70,
  // y: 90,
  y: {
    attach: 'quoteDisplay',
    offset: 60,
  },
  fontSize: 48,
  get lineHeight () {
    return this.fontSize * 1;
  },
  textAnchor: 'start',
  fontFamily: 'RobotoCond',
  fill: '#ffcc22',
  fontWeight: 'bold',
  text: 'QUOTE CREDIT',

  editable: {
    text: true,
    fill: { options: colors },
  },
}