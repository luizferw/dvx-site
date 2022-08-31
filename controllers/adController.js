const Ads = require('../models/ads')

const adAll = async (req, res) => {
  try {
    const data = await Ads.find().sort({ createdAt: -1 })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
}

const adSearch = async (req, res) => {
  const query = req.params.query

  try {
    const filterData = await Ads.find({ title: query })
    res.json(filterData)
  } catch (err) {
    console.log(err)
  }
}

const adFilterByCategory = async (req, res) => {
  const category = req.params.query

  try {
    const filterData = await Ads.find({ sub_category: category })

    res.json(filterData)
  } catch (err) {
    console.log(err)
  }
}

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

const adPublish = async (req, res) => {
  const newAds = new Ads(req.body.data)

  try {
    await newAds.save()
    res.status(201).end()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  adDetail,
  adDelete,
  adPublish,
  adFilterByCategory,
  adSearch,
  adAll
}
