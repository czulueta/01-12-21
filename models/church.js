const mongoose = require("mongoose")
const Schema = mongoose.Schema

const churchSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    elder: {
        type: Schema.Types.ObjectId,
        ref: "Elder",
        required: true
    }
})
module.exports = mongoose.model("Church", churchSchema)