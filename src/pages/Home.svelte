<script>
	import { onMount } from "svelte";

	const dataUrl = '/api/index';
	let items = [];
	const fetchData = async () => {
		const response = await fetch(dataUrl);
		const data = await response.json();

		if ( typeof data["articles"] != 'undefined' )
			items = data["articles"];
	};

	onMount(fetchData);
	
</script>
<div class="container">

{#if items.length > 0}
	{#each items as item}
	<div class="card">
		<img src="{item.urlToImage}">
		<div class="card-body">
			<h3>{item.title}</h3>
			<p> {item.description} </p>
			<a href="{item.url}" target="_blank">Read</a>
		</div>
	</div>
	{/each}
{:else}
<p>Loading news.</p>
{/if}

</div>

<style>
	h1 {
		color: purple;
		font-family: 'kalam';
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
		grid-gap: 15px;
	}
	.container > .card img {
		max-width: 100%;
	}
</style>