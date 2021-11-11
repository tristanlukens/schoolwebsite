<script>
	import Nav from "./nav.svelte";
	import { navShown } from "../stores";
</script>

<header class="shadow-lg p-2 h-10">
	<div class="h-full w-full flex items-center justify-evenly relative">
		<a class="h-[inherit]" href="/">
			<img
				class="max-h-full"
				src="/img/logo.png"
				alt="het logo door logoispum dat ik gebruik"
			/>
		</a>
		<button
			on:click={() => {
				$navShown = !$navShown;
			}}
			class="absolute top-0 right-2 h-full sm:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-menu"
				><line x1="3" y1="12" x2="21" y2="12" /><line
					x1="3"
					y1="6"
					x2="21"
					y2="6"
				/><line x1="3" y1="18" x2="21" y2="18" /></svg
			>
		</button>
		<div class="hidden sm:block">
			<Nav />
		</div>
	</div>
	<!-- dropdown for nav for small screens -->
	<div class={$navShown ? "!block" : "!hidden"}>
		<div
			class="flex justify-center items-center text-white absolute top-0 bottom-3/4 left-0 right-0 bg-mainred"
		>
			<button
				on:click={() => {
					$navShown = !$navShown;
				}}
				class="absolute top-0 right-0 m-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-x"
					><line x1="18" y1="6" x2="6" y2="18" /><line
						x1="6"
						y1="6"
						x2="18"
						y2="18"
					/></svg
				>
			</button>
			<Nav />
		</div>
	</div>
</header>
