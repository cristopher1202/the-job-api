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
    return jobs
  } catch (error) {
    console.log(error)
  }
}

/**
 * Creates a new job
 */
async function create(req, res, post) {
  try {
    const post = new Post(post)
    await post.save()
    return post
  } catch (error) {
    console.log(error)
  }
}

/**
 * Get a single job
 */
async function show(req, res, id) {
  const { id: jobId } = req.params

  try {
    const post = await Post.findById(id).exec()

    return post
  } catch (error) {
    console.log(error)
  }
}

/**
 * Deletes a job
 */
async function destroy(req, res, id) {
  const { id: jobId } = req.params
  try {
    const post = await Post.findByIdAndDelete(id).exec()

    return post
  } catch (error) {
    console.log(error)
  }
}

/**
 * Updates a job
 */
async function update(req, res, post) {
  const { id: jobId } = req.params

  try {
    const post = await Post.findByIdAndUpdate({ _id: id }, post, {
      new: true,
    }).exec()

    return post
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  destroy,
  index,
  show,
  update,
}
