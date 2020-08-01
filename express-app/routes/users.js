var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//echo get example.

router.get('/echo/:id/name/:name', function(req, res, next) {
  var response = {id: req.params.id};
  response.name= req.params.name;
  console.log("query in request:",req.query);
  for(var queryParam in req.query){
    response[queryParam] = req.query[queryParam];
  }
  res.send(response);
});





//echo post example

router.post('/echo', function(req, res, next) {
  var response = req.body;
  res.send(response);
});

module.exports = router;
