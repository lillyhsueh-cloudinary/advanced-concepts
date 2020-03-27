require('dotenv').config()
const cloudinary = require('cloudinary').v2

const url = cloudinary.url('ul-video.vtt', { resource_type: 'raw' })
console.log(url)
open(url)