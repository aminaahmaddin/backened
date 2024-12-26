const express = require('express')
// const productRoutes = require('./routes/productRoutes'); 
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
// const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
const app = express()
const mongodbUrl = 'mongodb://localhost:27017/backend'
app.use(express.json())
app.use(cors())
const port = 3001

app.use('/user' ,userRoutes )
// app.use('/product', productRoutes);
mongoose.connect(mongodbUrl).then(() => {
  console.log("Database is connected")
}).catch((err) => {
  console.log(err)
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})


















// import express from "express"
// // import mongoose = require ('mongoose')
// const user = require('./models/userSchema')
// const app = express()
// const port = 3000

// app.post ('/user', async(req,res)=>{
//     try{
//         const body = req.body
//         const user = new User(body)
//         user.save()
//             res.jason({
//                 message:"user is created",user:user })
//             }
//             catch(err){
//                 res.jason(err)
//             }
// })
// mongoose.connect(mongooseUrl)

// // const app = express()
// app.use(express.json())
// // app.get('/',(req,res)=>{
// //     res.json('hello world')
// // })
// app.get('/', (req, res) => {
//     res.json([
//         {"id": 1, "name": "amin"},
//         {"id": 2, "name": "jiya"}
//     ]);
// });
// const user = []
// app.get('/user', (req, res) =>{
//     res.json(user)
// })
// app.post('/create/user',(req,res)=>{
//     const userData = req.body
//     user.push(userData)
  
// })
// app.listen('3000', ()=>{
//     console.log("server is start");
    
// })


// // restful api method 
// // post -- we can add data
// // get ---we can get data 
// // put/patch --- we can update data
// // delete --- we can deleta data
// //middle layre 
// //firstly middle layre worke and then we get response then we hit

