<script>
	export let name;
	export let date;
</script>

<a
	class="shadow-md rounded px-8 py-4 bg-mainblue text-white hover:-translate-y-1 transition min-w-full"
	href="/projecten/{name.split(' ').join('-').toLowerCase()}"
>
	<h2 class="font-bold text-lg">{name}</h2>
	<p class="text-sm italic mt-1 leading-relaxed">{date}</p>
</a>
