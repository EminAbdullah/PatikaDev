const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h2>Anasayfaya hoş geldiniz</h2>");
  } else if (req.url === "/hakkimda") {
    res.statusCode = 200;
    res.end("<h2>Hakkımda sayfasına hoş geldiniz</h2>");
  } else if (req.url === "/iletisim") {
    res.statusCode = 200;
    res.end("<h2>İletişim sayfasına hoş geldiniz</h2>");
  } else {
    res.statusCode = 404;
    res.end("<h2>404 - Sayfa bulunamadı</h2>");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
