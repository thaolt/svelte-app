<script>
    import { onMount } from "svelte";

    export let params;

    const getID = async () => {
        console.log(params.id);
    };
    onMount(getID());
	
</script>

<article>
	{params.id}
</article>