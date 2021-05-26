const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const roles = ['admin', 'manager', 'candidate']

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, uppercase: true },
    role: { type: String, default: 'candidate', enum: roles },
    password: { type: String },
  },
  { timestamps: true }
)

//Pre save hook

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)

  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

module.exports = mongoose.model('User', UserSchema)
