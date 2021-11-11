import { publish } from "gh-pages";

publish(
	"build",
	{
		branch: "gh-pages",
		repo: "https://github.com/ubbotristan/schoolwebsite",
		user: {
			name: "Tristan Lukens",
			email: "311161@ubboemmius.net",
		},
		dotfiles: true,
	},
	() => {
		console.log("Deploy Complete!");
	}
);
