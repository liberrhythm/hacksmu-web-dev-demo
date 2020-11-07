var express = require('express');
var router = express.Router();

let postSchema = require("../models/Post");

/* TODO: GET (READ) posts route */
router.get('/', function(req, res, next) {

});

/* TODO: GET (READ) one post route */
router.get('/:id', function(req, res, next) {

});

/* TODO: POST (CREATE) one post route */
router.post('/create', function(req, res, next) {
  postSchema.create(req.body, (error, data) => {

  }) 
});

module.exports = router;
