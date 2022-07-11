const User = require('../models/user')

const registerUser = async (req, res) => {
  const newUser = new User(req.body)

  try {
    await newUser.save()
    res.status(201).end()
  } catch (err) {
    console.log(err)
  }
}

const usersAll = async (req, res) => {
  try {
    const data = await User.find()
    res.json(data)
  } catch (e) {
    console.log(e)
  }
}

const getUser = async (req, res) => {
  const id = req.params.id

  try {
    const data = await User.findById(id)
    res.json(data)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  registerUser,
  usersAll,
  getUser
}
