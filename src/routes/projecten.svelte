<script>
	import Card from "../components/projecten/card.svelte";

	let projects = [
		{
			name: "Deze site",
			date: "11 november 2021",
			link: "/projecten/deze-site",
		},
	];
</script>

<section class="text-center pt-16">
	<h1 class="text-4xl font-bold">Projecten</h1>
	<!-- cards for projects -->
	<div class="mt-8 flex flex-col gap-10 items-center text-left">
		{#each projects as project}
			<Card name={project.name} date={project.date} link={project.link} />
		{/each}
	</div>
</section>
