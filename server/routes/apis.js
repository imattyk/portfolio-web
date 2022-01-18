const express = require('express'),
router = express.Router(),
hello = require('../controllers/hello')

//First test API, 'Hello from Server'
router.get('/', hello.hello)

module.exports = router