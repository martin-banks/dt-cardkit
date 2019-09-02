export default {
  type: 'clip_half_right',
  name: 'rightSideImage',
  label: 'Right side image',
  x: '49%',
  y: 0,
  draggable: true,
  width: 1920,
  opacity: 1,
  get height () {
    return this.width;
  },
  editable: {
    src: true,
    width: {
      max: 4000
    },
  },
  // Default image to display
  // src: '',
}