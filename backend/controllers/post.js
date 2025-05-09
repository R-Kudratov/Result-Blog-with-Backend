const Post = require("../models/Post");

// add

async function addPost(data) {
    const newPost = await Post.create(data);

    await newPost.populate({
        path: "comments",
        populate: "author",
    });

    return newPost;
}

// edit

async function editPost(id, data) {
    const editedPost = await Post.findOneAndUpdate({ _id: id }, data, {
        returnDocument: "after",
    });

    await editedPost.populate({
        path: "comments",
        populate: "author",
    });

    return editedPost;
}

// delete

function deletePost(id) {
    return Post.deleteOne({ _id: id });
}

// get list with search and pagination

async function getPosts(search = "", limit = 9, page = 1) {
    const [posts, count] = await Promise.all([
        Post.find({
            title: { $regex: search, $options: "i" },
        })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 }),
        Post.countDocuments({
            title: { $regex: search, $options: "i" },
        }),
    ]);

    return {
        posts,
        lastPage: Math.ceil(count / limit),
    };
}

// get item

async function getPost(id) {
    const post = await Post.findById(id);

    await post.populate({
        path: "comments",
        populate: "author",
    });

    return post;
}

module.exports = {
    addPost,
    editPost,
    deletePost,
    getPosts,
    getPost,
};
