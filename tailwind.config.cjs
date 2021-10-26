const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				lightgrey: "#D6E1E0",
				darkgrey: "#2B2B2B",
				mainred: "#FD5F40",
				mainblue: "#1B6585",
			},
		},
	},

	plugins: [],
};

module.exports = config;
