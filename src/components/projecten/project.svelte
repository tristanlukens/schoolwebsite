<script>
	import SvelteMarkdown from "svelte-markdown";

	export let content;
	export let name;
	export let desc;
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={desc} />
</svelte:head>

<section class="prose prose-blue mt-8 p-10 mx-auto">
	<SvelteMarkdown source={content} />
</section>
