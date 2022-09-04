const Koa = require('koa');
const PostsRoutes = require('./routes/post.routes');
const bodyParser = require('koa-bodyparser');

require('./dal')

const app = new Koa();
app.use(bodyParser());

app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());


app.listen(3000);
console.log('Application is running on port 3000');
