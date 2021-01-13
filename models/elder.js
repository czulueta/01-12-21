const mongoose = require("mongoose")
const Schema = mongoose.Schema

const elderSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Elder", elderSchema)