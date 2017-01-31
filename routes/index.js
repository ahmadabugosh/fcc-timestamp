var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res) {

	var data= {time:req.params.time};
  res.json(data);
});

module.exports = router;
