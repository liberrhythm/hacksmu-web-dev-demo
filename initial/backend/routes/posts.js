var express = require('express');
var router = express.Router();

let postSchema = require("../models/Post");

/* GET (READ) posts */
router.get('/', function(req, res, next) {
  postSchema.find((error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.json(data);
    }
  }) 
});

/* GET (READ) one post */
router.get('/:id', function(req, res, next) {
  postSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.json(data);
    }
  }) 
});

/* POST (CREATE) one post */
router.post('/create', function(req, res, next) {
  console.log("post");
  postSchema.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    else {
      console.log("Created post successfully!");
      res.json(data);
    }
  }) 
});

/* PUT (UPDATE) one post */
router.put('/:id', function(req, res, next) {
  postSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    else {
      console.log("Updated post successfully!");
      res.json(data);
    }
  }) 
});

/* DELETE posts */
router.delete('/:id', function(req, res, next) {
  postSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    else {
      console.log("Deleted post successfully!");
      res.json(data);
    }
  }) 
});

module.exports = router;
