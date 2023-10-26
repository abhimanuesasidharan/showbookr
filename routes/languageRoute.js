const express = require('express')
const Language = require('../models/language')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const languages = await Language.find({});
      res.status(200).json(languages)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })

module.exports = router