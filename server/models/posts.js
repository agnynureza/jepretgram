const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const postSchema = new Schema({
    title   : String,
    image   : String,
    caption : String,
    user_id: {
        type:Schema.Types.ObjectId, 
        ref: 'User'
    },
    like : [{
        type:Schema.Types.ObjectId, 
        ref: 'User'
    }]
})

let Post         = mongoose.model('Post', postSchema)
module.exports   = Post