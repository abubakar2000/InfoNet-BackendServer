var express = require('express');
var router = express.Router();
var sha = require('sha256');

var adminUser = "admin"
var adminPass = sha("admin").toString();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/adminCred', function (req, res, next) {
  res.send({
    u: adminUser,
    p: adminPass
  });
});

router.post('/chngAdminCred', (req, res) => {
  adminUser = req.body.u;
  adminPass = sha(req.body.p).toString();
  res.sendStatus(200)
})

module.exports = router;
