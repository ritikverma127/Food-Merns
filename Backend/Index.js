require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const server = express();
server.use(express.json());
server.use(cors());

const Schema = new mongoose.Schema({
  name: String,
  username: String,
  password: String
});

const Model = mongoose.model('demo', Schema);

server.post('/demo', async (req, res) => {
  const { name, username, password } = req.body;
  console.log(name, username, password);

  try {
    const newUser = new Model({ name, username, password });
    await newUser.save();
    res.send({ message: 'User saved successfully', newUser });
  } catch (err) {
    res.status(500).send({ message: 'Error saving user', error: err });
  }
});
const mongodb=process.env.Mongodbconnect
mongoose.connect(mongodb)
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

server.listen(8000, () => {
  console.log("Server Started");
});


/////////////////////////////Loginjs////////////////////////
server.post('/login',(req,res)=>{
  const {username,password}=req.body;
  Model.findOne({username:username})
  .then(user=>{
      if(user){
          if(user.password==password){
              res.json("success Password Match")
          }
          else{
              res.json("The password is incorrect ")
          }
  
      }else{
  res.json('No Record Exisiting User')
      }
  })
 
  })