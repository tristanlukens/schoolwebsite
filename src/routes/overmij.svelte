<script>
	import Project from "../components/projecten/project.svelte";
</script>

<svelte:head>
	<title>Over mij | tristanlukens</title>
	<meta
		name="description"
		content="Welkom bij mijn website! Ik ben Tristan, en op deze pagina kun je wat lezen over mij."
	/>
</svelte:head>

<Project
	name="Over mij | tristanlukens"
	content={`
# Over mij

Ik ben Tristan, 15 jaar en houd van drummen en programmeren.

Maar dat is wel heel kort samengevat.

---

## Over mijzelf

Op 8 juni 2006 werd ik in Stadskanaal geboren, en ik woon al mijn hele leven in Gasselternijveen. Ik ga naar school in Stadskanaal, naar het [Ubbo Emmius](https://ubboemmius.nl), aan de Stationslaan. Ik doe daar HAVO met een NT-profiel, met informatica (zoals waarschijnlijk wel duidelijk is) en muziek.

## Programmeren

Ik doe voornamelijk web development, meestal met [Svelte(Kit)](https://kit.svelte.dev) en [TailwindCSS](https://tailwindcss.com). Omdat ik goed ben in de [UNIX-terminal (zsh, lijkt veel op bash)](https://en.wikipedia.org/wiki/Z_shell), initialiseer ik mijn project als volgt.

\`\`\`
mkdir project
cd project
npm init svelte@next
npx svelte-add@latest tailwindcss
npm install
\`\`\`

Dit gaat zeker veranderen, maar dit is zo op het moment van schrijven (11 november 2021).

Ik vind de syntax van [React](https://reactjs.org) en [Vue](https://vuejs.org) nogal vervelend, en ik vind [Svelte](https://svelte.dev) gewoon ontzettend fijn om mee te werken. Blokjes HTML, CSS en JS (of eigenlijk HTML, TailwindCSS en [TS](https://www.typescriptlang.org)) vind ik veel logischer dan gewoon. React en Vue zijn ook goede frameworks, echter zijn ze wat ingewikkelder. Ook zijn ze wat langzamer (door de [virtual DOM](https://reactjs.org/docs/faq-internals.html)) dan Svelte (een compiler).

Ik doe ook nog weleens wat met [go](https://golang.org), maar meer web dev. Ik probeer nu TS echt goed onder de knie te krijgen.

## Drummen (en muziek in het algemeen)

Ik houd van drummen. Het is, naast programmeren het leukste wat ik kan doen. Ik drum het meest rock en metal, waar ik ook het meest naar luister. Ik heb een [Roland TD-9 KX (niet mijn foto)](https://medias.audiofanzine.com/images/normal/roland-td-9kx-2342385.jpeg); ik drum elektronisch.

Op het moment luister ik veel naar de volgende bands.

- Muse
- The Blue Stones
- The Black Keys
- Mutemath
- Foo Fighters
- To Whom It May

Zoals je kunt zien zit ik weer een rockfase. Ik denk dat dit deel van deze pagina veel gaat veranderen als ik de moeite ervoor wil nemen.

Ik luister nog meer! Ik vind vooral hip hop ook tof, maar niet veel Nederlandse hip hop.

- Wu-Tang Clan
- Biggie
- Eminem
- Nas
- A Tribe Called Quest

Just to name a few.

## Sport

Ik doe niet echt aan sport. Ik fiets natuurlijk wel iedere weekdag van huis naar school en weer terug, wat (enkele reis) ongeveer [8 kilometer](https://www.google.com/maps/dir/Gasselternijveen/Stadskanaal/@52.9935044,6.8603821,13z/data=!4m14!4m13!1m5!1m1!1s0x47b7d987123eec0d:0xa7c028d88dd4a336!2m2!1d6.8460424!2d52.9863205!1m5!1m1!1s0x47c83bb57e3000c9:0xb8497bdac29f4022!2m2!1d6.9462217!2d52.9919853!3e1) is. Ik heb een tijd [freerunning](https://en.wikipedia.org/wiki/Freerunning) gedaan, maar na een jaar of drie (volgens mij) gestopt omdat mijn trainer ermee stopte.

---

Ik denk dat ik nu wel genoeg heb verteld.

Doe vooral de groetjes.

_**Tristan**_
`}
/>
