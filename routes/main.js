var router = require('express').Router();

router.get('/', function(req,res){
    res.render('main/home'/*,{user:{profile:{name:'nikhil'}}}*/ );
});

module.exports = router;