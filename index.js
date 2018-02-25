let express=require("express");
let app=express();

app.use(express.static("public"))
app.get("/public",function(req,res){
  console.log(req,res);
  // res.send("Hello World")
})
app.listen(3000,function(){
  console.log("listen on 3000")
})
