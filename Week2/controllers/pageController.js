const Post = require("../models/Post")

exports.getAboutPage = (req, res) => {
  res.render("about"); // "/about" pathine düştüğünde about.ejs sayfasını render etmesini istedik
};

exports.getAddPage = (req, res) => {
  res.render("add_post"); // "/add_post" pathine düştüğünde add_post.ejs sayfasını render etmesini istedik
};

exports.editPost = async (req,res) =>{
    const post = await Post.findOne({_id: req.params.id})
    res.render("edit",{
      post
    });
  }