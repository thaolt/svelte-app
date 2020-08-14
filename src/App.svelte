<script>
	import router from "page";
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let page;
	let params;

	router('/', () => page = Home);
	router('/about', () => page = About);
	router('/article/:id', 
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => page = Article
	)

	router.start();
</script>

<main>
	<nav>
		<a href="/">home</a>
		<a href="/about">about</a>
	</nav>

	<h1>
		Daily News
	</h1>

	<svelte:component this={page} />
</main>

<style>
	
</style>