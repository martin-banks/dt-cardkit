// Base configuration object 
import colors from './config/colors'

import RobotoCond from './config/fonts/roboto-cond-bold'
import RobotoCondReg from './config/fonts/roboto-cond-reg'
import RobotoLight from './config/fonts/roboto-light'
import RobotoMed from './config/fonts/roboto-medium'
import RobotoBlack from './config/fonts/roboto-black'
import RobotoCondBoldItalic from './config/fonts/roboto-cond-bold-italic'

// import decoration_freeStory from './config/decorations/free-story'

import themes from './config/themes'
import layers from './config/layers'
import layouts from './config/layouts'
import templates from './config/templates'

window.activeCardWidth = 1080

var configuration = {
  card: {
    width: 1080,
    height: 1920,
    fill: '#fff'
  },
  fonts: {
    RobotoCond,
    RobotoCondBoldItalic,
    RobotoCondReg,
    RobotoLight,
    RobotoMed,
    RobotoBlack,
  },
  layers,
}



// window.configuration = configuration
// window.templates = templates
// window.themes = themes
// window.layouts = layouts

// comment for use live ?
export default {
  configuration,
  templates, // Set which layers are visible in different templates
  // themes,
  layouts,
}
