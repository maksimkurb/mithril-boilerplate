"use strict";

let app = require('koa')(),
    config = require('../../config'),
    router = require('koa-router')();
    //publicDir = path.resolve(path.join('build','public'));

//console.log(`Express serving public directory '${publicDir}'.`);
//app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));
//  app.use(express.static(publicDir, { maxAge:24*60*60*1000 }));

app.use(function *(next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});



app
  .use(router.routes())
  .use(router.allowedMethods());

var server = app.listen(config.PORT);
