const Koa = require('koa');
const app = new Koa();
const KoaRouter = require("koa-router");

const router = new KoaRouter();

const port = 5000;

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log("Çalışma zamanı :", ms, "'ms");
    console.log(`Kullanılan metot : ${ctx.method}`);
    console.log(`URL : ${ctx.url}`);
  });
  
  router.get("/", ctx => {
    ctx.body = "ANASAYFA";
  });
  
  router.get("/about", ctx => {
    ctx.body = "HAKKIMIZDA SAYFASI";
  });
  
  router.get("/contact", ctx => {
    ctx.body = "ILETISIM SAYFASI";
  });
  


app.use(router.routes()).use(router.allowedMethods());

app.listen(port);



























// logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });


// x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);