const Ads = require('../models/ads')

const indexGet = async (req, res) => {
  try {
    const data = await Ads.find().sort({ createdAt: -1 })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
}

module.exports = indexGet
