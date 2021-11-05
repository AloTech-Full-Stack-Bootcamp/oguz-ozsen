const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Post = require("./models/Post");
const methodOverride = require("method-override");
const app = express();
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

//db ye bağlan
mongoose.connect("mongodb+srv://oguz:kTLGhNmbSSNSyDQj@pcat-app-cluster.4u0aa.mongodb.net/pcat-db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Veri tabanına bağlanıldı.");
}).catch(err=>{
  throw err;
})

app.set("view engine", "ejs"); // görüntüleme aracımızı ejs olarak ayarladık

//MIDDLEWARES

app.use(express.static("public")); // public isimli klasörümüzü statik olarak tanımladık
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method",{
  methods:["POST","GET"]
}));

//ROUTES
app.get("/", postController.getAllPosts);

app.get("/post/:id", postController.getPost);
app.get("/post/edit/:id", pageController.editPost);

app.get("/about", pageController.getAboutPage);

app.get("/add_post", pageController.getAddPage);
app.get("/post", (req, res) => {
  res.render("post"); // "/post" pathine düştüğünde post.ejs sayfasını render etmesini istedik
});

app.post("/posts", postController.createPost); //

app.put("/post/:id", postController.editPost);

app.delete("/post/:id", postController.deletePost);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Uygulama ${port} port'unda başlatıldı`);
});
