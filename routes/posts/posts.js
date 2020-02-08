const posts = require("express").Router();

const { getPosts, getPost, createPost, deletePost, getAllCommentsByPost } = require("../../queries/posts");

fix_Schema

//http://localhost:3000/posts/comments/1

posts.get("/comments/:id", getAllCommentsByPost)

//http://localhost:3000/posts/home
posts.get("/home", getPosts);

//http://localhost:3000/posts/1
posts.get("/:id", getPost);

posts.post("/", createPost);

posts.delete("/", deletePost)

module.exports = posts;