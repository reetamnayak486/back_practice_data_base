var express = require('express');
var router = express.Router();
const userModel= require("./users");
const { route } = require('../app');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/create", async (req, res)=>{
//   const entry_1=await userModel.create({
//     username: "reetam",
//     id: "b122090",
//     age: "22"
//   })

//   res.send(entry_1);
// })

// router.get("/retrive",async(req,res)=>{
//   const res_user=await userModel.findOne({username:"reetam"});
//   res.send(res_user); 
// })

// router.get("/delete",async(req,res)=>{
//   const del_user=await userModel.findOneAndDelete({username:"reetam"});
//   res.send(del_user); 
// })

// router.get("/", (req,res)=>{
 
//   req.session.ban= true;
//   res.send("banning in process")

// })

// router.get("/check_banned", (req,res)=>{
//   // console.log(req.session);
//   if(req.session.ban===true){ res.send("u are banned")}
//   res.send(".")
// })

router.get("/", (req, res)=>{
  res.cookie("age", 25);
  res.send("hello")
})

router.get("/read", (req, res)=>{
  console.log(req.cookies);
  res.send("read")
})

router.get("/delete", (req,res)=>{
  res.clearCookie("age");
  res.send("deleted")
})

module.exports = router;

