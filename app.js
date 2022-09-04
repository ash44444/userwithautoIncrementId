const app = new Koa();
const router = new Router();

// Response to the World to the GET requests
router.get('/', async (ctx) => {
  ctx.body = 'Hello, World!\n';
});

// Response by name to the GET requests, :name is URL fragment/argument
router.get('/:name', async (ctx) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

// Development logging
app.use(Logger());
// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

// Listen the port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
