const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    content: {
        type: String,
        // required: true,
        // trim: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },

}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)