<script>
	let dropdown;

	function handleClick() {
		dropdown.classList.toggle("hidden");
	}
</script>

<header
	class="sticky top-0 right-0 left-0 shadow-lg h-10 flex items-center justify-center"
>
	<!-- logo -->
	<img class="h-1/2" src="/img/logo.png" alt="logo" />
	<!-- hamburger -->
	<div
		on:click={handleClick}
		class="hover:cursor-pointer scale-75 absolute top-0 bottom-0 right-0 flex flex-col justify-center mr-2 gap-1 h-full"
	>
		<div class="h-1 w-7 bg-mainblue rounded" />
		<div class="h-1 w-7 bg-mainblue rounded" />
		<div class="h-1 w-7 bg-mainblue rounded" />
	</div>
</header>

<!-- dropdown -->
<section
	bind:this={dropdown}
	class="hidden sticky top-0 right-0 left-0 px-5 py-3 bg-lightgrey"
>
	<nav>
		<ul class="flex justify-around font-bold text-sm">
			<li
				on:click={handleClick}
				class="relative after:nav-after active:after:scale-x-100"
			>
				<a href="/">Home</a>
			</li>
			<li
				on:click={handleClick}
				class="relative after:nav-after active:after:scale-x-100"
			>
				<a href="/projecten">Projecten</a>
			</li>
			<li
				on:click={handleClick}
				class="relative after:nav-after active:after:scale-x-100"
			>
				<a href="/overmij">Over Mij</a>
			</li>
			<!-- make this page and host the website somewhere else, because this would make the site dynameic (and it won't work with gh pages) -->
			<!-- <li class="relative after:nav-after active:after:scale-x-100">
				<a href="/contact">Contact</a>
			</li> -->
		</ul>
	</nav>
</section>
