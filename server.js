const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 8000;

// const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
const DB = 'mongodb+srv://PraveenEcomerce:wlapiLh0BtU2EoLW@cluster1.jaohfnq.mongodb.net/E-commers?retryWrites=true&w=majority/';

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