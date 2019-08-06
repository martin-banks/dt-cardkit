import colors from '../colors'

export default {
  draggable: true,
  type: 'text',
  name: 'Kicker',
  x: 540,
  y: 90,
  // y: '62%',
  fontSize: 48,
  textAnchor: 'middle',
  get lineHeight () {
    return this.fontSize * 1
  },
  fontFamily: 'RobotoCond',
  fill: '#333',
  fontWeight: 'bold',
  text: 'Kicker text',
  editable: {
    text: true,
    fill: { options: colors },

  },
}