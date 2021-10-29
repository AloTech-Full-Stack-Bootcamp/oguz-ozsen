const fs = require("fs");
//DOSYAYI OLUŞTURMA
fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}',"utf-8",(err)=>{
    if(err) {
        throw err;
    }
    console.log("Dosya başarılı bir şekilde oluşturuldu.");
    //dosyayı okuma
    fs.readFile("employees.json","utf-8",(err,data)=>{
        if(err){
            throw err;
        }
        console.log(data);
        console.log("Dosya başarılı bir şekilde okundu.");
        //DOSYA İÇİNE VERİ EKLEME
        fs.appendFile("employees.json",'{"name": "Employee 2 Name", "salary": 2500}',"utf-8",(err)=>{
            if (err){
                throw err;
            }
            console.log("Yeni veri başarıyla eklendi.");
        })
        //DOSYAYI SİLME
        fs.unlink("employees.json",(err)=>{
            if(err){
                throw err;
            }
            console.log("Dosya başarıyla silindi...");
        });
    });
});
