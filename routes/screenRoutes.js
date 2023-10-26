const express = require('express')
const Screen = require('../models/screen')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const screens = await Screen.find({});
      res.status(200).json(screens)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })
  
  router.post('/', async (req, res, next) => {
    try{
      const screen = new Screen(req.body)
      await screen.save()
      res.status(201).json(screen)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })

module.exports = router