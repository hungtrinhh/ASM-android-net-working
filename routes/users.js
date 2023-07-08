var express = require('express');
var router = express.Router();
var controller = require("../Controller/user");
/* GET users listing. */
router.get('/', controller.home);


router.use("/", controller.redirectTohome)

module.exports = router;
