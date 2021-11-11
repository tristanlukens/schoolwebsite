<script>
	import { navShown } from "../stores.js";
</script>

<nav>
	<ul class="flex justify-evenly items-center gap-10 font-bold text-sm">
		<li
			on:click={() => {
				$navShown = false;
			}}
			class="relative after:nav-after hover:after:scale-x-100"
		>
			<a href="/">Home</a>
		</li>
		<li
			on:click={() => {
				$navShown = false;
			}}
			class="relative after:nav-after hover:after:scale-x-100"
		>
			<a href="/projecten">Projecten</a>
		</li>
		<li
			on:click={() => {
				$navShown = false;
			}}
			class="relative after:nav-after hover:after:scale-x-100"
		>
			<a href="/overmij">Over Mij</a>
		</li>
		<!-- make this page and host the website somewhere else, because this would make the site dynamic (and it won't work with gh pages) -->
		<!-- <li class="relative hover:nav-after active:after:scale-x-100">
			<a href="/contact">Contact</a>
		</li> -->
	</ul>
</nav>
