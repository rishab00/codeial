const express = require('express');

const router = express.Router(); //Router is a module in express 

const homeController = require('../controllers/home_controller');
console.log('Router loaded');
router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
//for any more routes, access here
//router.use('/routerName', require('./routerFile'));

module.exports = router;