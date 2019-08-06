export default {
  type: 'image',
  name: 'Display image',
  x: 0,
  y: 500,
  draggable: true,
  width: 1080,
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