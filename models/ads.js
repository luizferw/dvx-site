const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adsSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    hidePhone: {
      type: Boolean,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    address: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Ads = mongoose.model('Ads', adsSchema)

module.exports = Ads
