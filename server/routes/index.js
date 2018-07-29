var express = require('express');
var router = express.Router();

router.get("/task", function(req,res){
  req.dbs.Task.findOne({id:req.params.id},function (err,task) {
    res.send(task);
  });
});

router.post("/domain/User/:id/:method", function(req, res, next) {
    let [name, captcha] = req.body;
    if(captcha && captcha === req.session.captcha){
      next();
    }else{
      res.send({error:{ captcha : "captcha error!" }});
    }
  })
module.exports = router;
