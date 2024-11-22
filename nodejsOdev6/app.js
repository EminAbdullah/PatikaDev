const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === "/") {
    ctx.status = 200;
    ctx.body = "<h1>Anasayfaya hoş geldiniz</h1>";
  } else if (ctx.path === "/hakkimda") {
    ctx.status = 200;
    ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz</h1>";
  } else if (ctx.path === "/iletisim") {
    ctx.status = 200;
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";
  } else {
    ctx.status = 404;
    ctx.body = "<h1>404 - Sayfa bulunamadı</h1>";
  }
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
