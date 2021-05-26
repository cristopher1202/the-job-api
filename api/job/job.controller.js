/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/jobs              ->  index
 * POST    /api/jobs              ->  create
 * GET     /api/jobs/:id          ->  show
 * PUT     /api/jobs/:id          ->  update
 * DELETE  /api/jobs/:id          ->  destroy
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */
const Job = require('./job.model')

/**
 * Get list of job
 */
async function index(_, res) {
  try {
    const jobs = await Job.find().exec()
    console.log('ahsjkhfkjashf')
    return res.status(200).json(jobs)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Creates a new job
 */
async function create(req, res, next) {
  const job = req.body
  try {
    const newJob = new Job(job)
    await newJob.save()
    res.status(201).json(newJob)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Get a single job
 */
async function show(req, res, next) {
  const { id } = req.params

  try {
    const job = await Post.findById(id).exec()

    res.status(200).json(job)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Deletes a job
 */
async function destroy(req, res, next) {
  const { id } = req.params
  try {
    const job = await Post.findByIdAndDelete(id).exec()

    res.status(200).json(job)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a job
 */
async function update(req, res, next) {
  const { id } = req.params
  const job = req.body
  try {
    const job = await Post.findByIdAndUpdate({ _id: id }, job, {
      new: true,
    }).exec()

    res.status(200).json(job)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  create,
  destroy,
  index,
  show,
  update,
}
