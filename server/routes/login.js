var express = require("express");
var router = express.Router();

router.get("/login", function(req, res, next){
    res.send("login route");
});
module.exports=router;