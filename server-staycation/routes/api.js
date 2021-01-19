const router = require('express').Router()
const apiController = require('../controller/apiController')
//const { upload } = require('../middleware/multer')

router.get('/landing-page', apiController.landingPage)
router.get('/detail-page/:id', apiController.detailPage)
router.get('/booking-page', apiController.bookingPage)
module.exports = router