export default {
  type: 'image',
  name: 'displayImage',
  label: 'Display image',
  x: 0,
  y: 0,
  draggable: true,
  width: 1920,
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