var express = require('express');
var route = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/', newsController.index);

module.exports = router;