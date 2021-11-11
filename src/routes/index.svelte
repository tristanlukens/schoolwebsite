<svelte:head>
	<title>home | tristanlukens</title>
	<meta
		name="description"
		content="Welkom bij mijn website! Ik ben Tristan, en dit is mijn informaticapfofiel."
	/>
</svelte:head>

<!-- not a component; it is never repeated -->
<main
	class="text-center flex flex-col justify-evenly items-center px-10 h-calc sm:flex-row"
>
	<div class="sm:flex-1">
		<p class="text-gray-500 text-lg">Hi!</p>
		<h1 class="font-extralight text-4xl mt-4">
			Ik ben <span
				class="font-bold relative after:absolute after:top-2/3 after:bottom-0 after:-right-2 after:-left-2 after:bg-gray-200 after:z-[-10]"
				>Tristan</span
			>
		</h1>
	</div>
	<div class="sm:flex-1">
		<!-- leading-loose is important for the font size adjustments override it -->
		<p
			class="!leading-loose sm:text-right sm:text-lg sm:tracking-wide max-w-xs sm:mx-auto"
		>
			Ik zit op het Ubbo Emmius, aan de Stationslaan, Stadskanaal. Dit is
			mijn informaticaportfolio.
		</p>
	</div>
</main>
