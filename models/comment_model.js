const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        content: {
            required: true,
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;