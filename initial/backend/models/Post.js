const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: ADD POST MODEL PROPERTIES
let postSchema = new Schema({

}, {
    collection: "posts"
});

module.exports = mongoose.model("Post", postSchema);