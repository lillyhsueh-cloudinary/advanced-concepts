require('dotenv').config()
const cloudinary = require('cloudinary').v2

const upOptions =
{
  resource_type: 'video',
  eager: [
    { streaming_profile: 'hd', format: 'm3u8' },
    { streaming_profile: 'hd', format: 'mpd' }],
  eager_async: true,
  eager_notification_url: 'https://webhook.site/e2702062-2f32-435d-b997-c245d783ed1b',
  public_id: 'whale',
  invalidate: true
}
cloudinary.uploader.upload('./assets/video/humpbackwhale_singing.webm.360p.vp9.webm', upOptions)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
