var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res) {

	function toUnix(data)
	{
		var date = new Date(data *1000);
		var monthsLookup =['January', 'February','March','April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
		
		var month=monthsLookup[date.getMonth()];
		var day= date.getDate();
		var year=date.getFullYear();

		var finalDate=month + ' ' + day + ', ' + year;
		return finalDate;

	}

if(!isNaN(req.params.time))
{
	var result= toUnix(req.params.time);
	var data= {unix:req.params.time, natural:result};
  res.json(data);

}
	
});

module.exports = router;
