const Ads = require('../models/ads')

const adDetail = async (req, res) => {
  const id = req.params.id

  try {
    data = await Ads.findById(id)
    res.json(data)
  } catch (err) {
    console.log(err)
  }
}

const adDelete = async (req, res) => {
  const id = req.params.id

  try {
    await Ads.findByIdAndDelete(id)
    res.json({ redirect: '/' })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  adDetail,
  adDelete
}
