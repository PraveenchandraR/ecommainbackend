const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 8000;

// const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
// const DB = 'mongodb://127.0.0.1:27017/E-commers';

mongoose.connect(DB,{
    useNewUrlParser:true
  }).then(()=>{
    console.log("DB connected successfully");
  }).catch((error)=>{
    console.log("DB connection failed", error);
  });


app.get('/homi', (req, res) => {
    res.send("homiconnected")
  })


app.listen(PORT,()=>{
    console.log(`Server Started at port: ${PORT}`);
});