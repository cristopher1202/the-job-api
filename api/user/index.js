const Router = require('express').Router

const controller = require('./user.controller')
const { validateParamId } = require('../../middlewares')

const router = new Router()

router.post('/', controller.create)
router.post('/login', controller.login)

module.exports = router
