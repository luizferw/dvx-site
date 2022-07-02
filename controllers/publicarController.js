const Ads = require('../models/ads')

const publicarPost = async (req, res) => {
  const newAds = new Ads(req.body)

  try {
    await newAds.save()
    res.status(201).end()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  publicarPost
}
