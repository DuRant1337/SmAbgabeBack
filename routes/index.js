var express = require('express');
var router = express.Router();
const client = require('./connection.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
client.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/content',async (req,res)=>{

  client.query(`SELECT * FROM public."Hello"
ORDER BY id ASC `,(err,result)=>{

    if(!err){
      res.send(result.rows);
    }else{  throw err;}
  });
  client.end
})

module.exports = router;
