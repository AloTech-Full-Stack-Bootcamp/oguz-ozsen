const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Index Sayfamiz</h1>", "utf8");
  }
  else if(url === "/about"){
    res.writeHead(200,{ "Content-type": "text/html" });
    res.write("<h1>Hakkimizda Sayfasi.</h1>", "utf8");
  }
  else if(url === "/contact"){
    res.writeHead(200,{ "Content-type": "text/html" });
    res.write("<h1>Iletisim Sayfasi.</h1>", "utf8");
  }
  else{
      res.writeHead(404,{ "Content-type": "text/html" });
      res.write("<h1>404 Sayfa Bulunamadi.</h1>", "utf8");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
