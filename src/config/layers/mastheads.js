// import colors from '../colors'
import st from '../images/logos/st-white-shadow'
import dt from '../images/logos/dt-white-shadow'

export default {
  type: 'image',
  name: 'mastheads',
  label: 'Masthead',
  x: 0,
  y: 0,
  height: 150,
  opacity: 1,
  draggable: false,

  src: '',
  editable: {
    src: {
      'None': '',
      'Daily Telegraph': dt,
      'Sunday Telegraph': st,
    }
  },
}