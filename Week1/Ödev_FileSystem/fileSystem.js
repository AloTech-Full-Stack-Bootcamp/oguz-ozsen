const fs = require("fs");

//DOSYA OKUMA
fs.readFile("pass.txt", "utf8", async (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  console.log("Dosya başarılı bir şekilde okundu...");

  //dosya oluşturup içine yazma

  fs.writeFile("example.json", '{"name":"Baran","old":13,"gender":"male"},', "utf-8", (err) => {
    if (err) {
      console.log("Bir hata oluştu.");
    }
    console.log("JSON Dosyası başarılı bir şekilde oluşturuldu.");
  });

  //dosyaya veri ekleme

  fs.appendFile("example.json", '{"name":"Oğuz","old":21,"gender":"male"}', "utf-8", (err) => {
    if (err) {
      console.log("Bir hata oluştu.");
    }
    console.log("JSON Dosyasına başarılı bir şekilde bilgi girişi sağlandı.");
  });

  //dosya silme

  fs.unlink("example.json",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Dosya başarılı bir şekilde silindi.");
  })
});

// KLASÖR OLUŞTURMA 

fs.mkdir("odev/fileSystem",{recursive:true},(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Klasörler başarılı bir şekilde oluşturuldu.");
});

// KLASÖR SİLME

fs.rmdir("odev",{recursive:true},(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Klasörler başarılı bir şekilde silindi.");
    });

