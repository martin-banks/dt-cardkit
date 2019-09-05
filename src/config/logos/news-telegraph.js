import dt from '../images/logos/daily-telegraph-news'
import st from '../images/logos/sunday-telegraph-news'

export default {
  type: 'image',
  name: 'logo-news-telegraph',
  label: 'Logo',
  x: 0,
  y: 0,
  src: dt,
  width: '30%',
  // height: '100%',
  opacity: 1,
  editable: {
    src: {
      'DT news': dt,
      'ST news': st,
    },
  },
}