const b64 = require('base64-img')
const fs = require('fs')
const path = require('path')

const imgSrc = path.join(__dirname, '../image-b64/src')
const imgOut = path.join(__dirname, '../image-b64/out')

const imageTypes = [
  'jpg',
  'jpeg',
  'png',
]

async function init () {
  try {
    const fileList = await fs.readdirSync(imgSrc, err => {
      if (err) throw err
    })
      .filter(file => imageTypes.find(type => file.includes(type)))

    for (const file of fileList) {
      console.log('Starting for: ', file)
      const data = b64.base64Sync(`${imgSrc}/${file}`)
      const contentToWrite = `export default '${data}'`
      const cleanedFileName = file
        .split('.')
        .slice(0, -1)
        .join('.')
        .toLowerCase()
        .replace(/\s|\.+/gi, '-')
      await fs.writeFileSync(`${imgOut}/${cleanedFileName}.js`, contentToWrite, err => {
        if (err) throw err
      })
      fs.renameSync(`${imgSrc}/${file}`, `${imgSrc}/_done/${file}`, err => {
        if (err) throw err
      })
      console.log('Complete for: ', file)
    }
  } catch (err) {
    console.log('\n--- ERROR ---\n', err, '\n-------------\n')
  }
}  

init()
