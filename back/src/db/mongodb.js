const mongoose =require("mongoose") ;
const dotenv =require("dotenv");
dotenv.config();

 async function connectDB() {
  try {
    await mongoose.connect(process.env.URL_CONECTION_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
        console.log("======DB connection successful======")
    })

    mongoose.connection.onOpen('open', () => {
    })
  
  } catch (e) {
    console.log('Algo como error',e);
  }
}
module.exports = connectDB