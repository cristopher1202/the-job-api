const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('./user.model')

async function index(_, res) {}

async function create(req, res, next) {
  const user = req.body

  try {
    const newUser = new User(user)
    await newUser.save()
    const token = jwt.sign({ _id: newUser._id }, 'secret', {
      expiresIn: 60 * 60 * 24,
    })

    res.status(201).json({ token })
  } catch (error) {
    console.log(error)
  }
}

async function login(req, res) {
  const { email, password } = req.body

  try {
    const user = User.findOne({ email }).exec()

    if (!user) {
      return res.status(404).end()
    }

    const hash = await bcrypt.compare(password, user.password)
    res.status(200).end
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  login,
  index,
}
