const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  res.status(200).json(post);
  //   res.send("<h3>All Posts</h3>");
};
const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(200).json(post);
  //   res.send("Post Updated");
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post = await Post.findByIdAndDelete(postId, req.body, { new: true });
  res.status(200).json({ msg: "post deleted." });
  //   res.send("<h3>Post deleted succesfully</h3>");
};

module.exports = {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
};
