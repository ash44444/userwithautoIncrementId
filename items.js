
router.get('/:id', (ctx, next) => {
	let getCurrentItem = items.filter(function(item) {
		if (item.id == ctx.params.id) {
			return true;
		}
	});

	if (getCurrentItem.length) {
		ctx.body = getCurrentItem[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Item Not Found';
	}
	next();
});
