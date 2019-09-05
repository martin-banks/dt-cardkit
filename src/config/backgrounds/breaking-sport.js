// import colors from '../colors'
import gradientBlack from '../images/gradients/gradient-from-right-black'

const src = {
  'Black': gradientBlack
}

export default {
  type: 'overlayImage',
  name: 'gradienOverlayFromRight',
  label: 'Gradient overlay',
  x: 0,
  y: 0,
  src: src[Object.keys(src)[0]],
  width: '100%',
  height: '100%',
  opacity: 0.5,
  preserveAspectRatio: 'none',
  editable: {
    opacity: true,
    // src,
  },
}