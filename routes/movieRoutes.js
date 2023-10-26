const express = require('express')
const Movie = require('../models/movie');
const Cast = require('../models/cast');
const Show = require('../models/show');
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const movies = await Movie.find({});
      res.status(200).json(movies)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })
  
  router.get('/:movieId', async (req,res,) =>{
    try{
      const movie = await Movie.findById(req.params.movieId);
      res.status(200).json(movie)
    }
    catch(error){
      res.status(404).send("Movie of given ID not found")
    }
  })

  router.get('/:movieId/shows', async (req,res,) =>{
    try{
      const shows = await Show.find({movie: req.params.movieId}).populate('screen');
      res.status(200).json(shows)
    }
    catch(error){
      res.status(404).send("Movie of given ID not found")
    }
  })

  router.get('/:movieId/cast', async (req,res,) =>{
    try{
      const casts = await Cast.find({movie: req.params.movieId}).populate('person')
      res.status(200).json(casts)
    }
    catch(error){
      res.status(404).send("Movie of given ID not found")
    }
  })

  router.post('/', async (req, res, next) => {
    try{
      const movie = new Movie(req.body)
      await movie.save()
      res.status(201).json(movie)
    }
    catch(error){
      res.status(500).send("Error occured")
    }
  })

module.exports = router