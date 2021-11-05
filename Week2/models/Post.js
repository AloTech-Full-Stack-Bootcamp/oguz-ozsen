const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//şema oluşturduk
const PostSchema = new Schema({// hangi verileri tutacağının şemasını oluşturduk
  title: String,
  description: String,
  dateCreated: {
    type:Date,
    default:Date.now
  }
});

//collectionumuzu oluşturduk
const Post = mongoose.model("Post", PostSchema);//collection oluşturarak kullanılacak şema bilgisini verdik 

module.exports = Post;//oluşturulan collectionu başka yerlerde kullanmak için export ettik

