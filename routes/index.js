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
else
{
	var isNatural= new Date(req.params.time);
	if(!isNaN(isNatural))
	{
		var data = isNatural/1000;
		var finalDate = {unix:data, natural:req.params.time};
		res.json(finalDate);
	}

	else
	{
		res.json({unix:null, natural:null});

	}
}
	
});

module.exports = router;
