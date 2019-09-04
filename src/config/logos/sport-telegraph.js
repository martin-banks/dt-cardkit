import dtSport from '../images/logos/daily-telegraph-sport'
import stSport from '../images/logos/sunday-telegraph-sport'

export default {
  type: 'image',
  name: 'logo-sport-telegraph',
  label: 'Logo',
  x: 0,
  y: 0,
  src: dtSport,
  width: '30%',
  // height: '100%',
  opacity: 1,
  editable: {
    src: {
      'DT sport': dtSport,
      'ST sport': stSport,
    },
  },
}