const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true, uppercase: true },
    image: {
      type: String,
      default: '/img/logo-google.jpg',
      trim: true,
      lowercase: true,
    },
    about: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    type: { type: String, required: true, uppercase: true },
    location: { type: String, required: true, uppercase: true },
    salary: { type: String, required: true, lowercase: true },
    certificate: { type: String, required: true, uppercase: true },
    experience: { type: String, required: true, lowercase: true },
    hours: { type: String, required: true, lowercase: true },
    responsibilities: [{ type: String, required: true, uppercase: true }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', jobSchema)
