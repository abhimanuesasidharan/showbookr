const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router()


  
  router.post('/signup', async (req, res, next) => {
    try{
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const user = new User({
          ...req.body,
          password: hash
        })
        await user.save()
        res.status(201).json(user)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })

  router.post('/login', async (req, res, next) => {
    try{
      const user = await User.find({email: req.body.email})
      if(user.length === 0){
        res.status(404).send("User with given Username not found")
      }
     const result = bcrypt.compareSync(req.body.password, user[0].password);
     const token  = jwt.sign({email: user.email},process.env.JWT_SECRET)
     res.cookie('token', token)
     res.status(200).json(token,{
      httpOnly: true,
     })
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })

module.exports = router