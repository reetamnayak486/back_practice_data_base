var express = require('express');
var router = express.Router();
const userModel= require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/create", async (req, res)=>{
//   const entry_1=await userModel.create({
//     username: "reetam",
//     id: "b122090",
//     age: "22"
//   })

//   res.send(entry_1);
// })

router.get("/retrive",async(req,res)=>{
  const res_user=await userModel.findOne({username:"reetam"});
  res.send(res_user); 
})

// router.get("/delete",async(req,res)=>{
//   const del_user=await userModel.findOneAndDelete({username:"reetam"});
//   res.send(del_user); 
// })

module.exports = router;
