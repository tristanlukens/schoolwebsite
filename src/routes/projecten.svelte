<script>
	import Card from "../components/projecten/card.svelte";

	let projects = [
		{
			name: "Deze site",
			date: "11 november 2021",
		},
	];
</script>

<svelte:head>
	<title>Projecten | tristanlukens</title>
	<meta
		name="description"
		content="Welkom bij mijn website! Ik ben Tristan, en dit is het hart van mijn informaticapfofiel: de projecten."
	/>
</svelte:head>

<section
	class="text-center pt-16 w-full px-20 mx-auto sm:px-0 sm:w-1/2 md:w-1/4"
>
	<h1 class="text-4xl font-bold">Projecten</h1>
	<!-- cards for projects -->
	<div class="mt-8 flex flex-col gap-4 items-center text-left pb-16">
		{#each projects as project}
			<Card name={project.name} date={project.date} />
		{/each}
	</div>
</section>
