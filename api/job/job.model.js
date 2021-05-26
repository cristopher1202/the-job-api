const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobTypes = ['part time', 'full time', 'freelance', 'internship', 'remote']

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true, uppercase: true },
    image: {
      type: String,
      default: '/img/logo-default.jpg',
      trim: true,
    },
    about: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    type: { enum: jobTypes, type: String, required: true, lowercase: true },
    location: { type: String, required: true, uppercase: true },
    salary: { type: String, required: true, lowercase: true },
    certificate: { type: String, required: true, uppercase: true },
    experience: { type: String, required: true, lowercase: true },
    hours: { type: String, required: true, lowercase: true },
    responsibilities: [{ type: String, required: true, uppercase: true }],
    minimumQualifications: [{ type: String, trim: true, required: true }],
    preferredQualifications: [{ type: String, trim: true, required: true }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', jobSchema)
