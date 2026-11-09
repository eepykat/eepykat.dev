// src/lib/projectData.ts

export interface Project {
	title: string;
	description: string;
	link: string;
}

export const projectCollection: Project[] = [
	{ 
		title: 'Feline.Cloud', 
		description: 'Future Web and Game Hosting Services', 
		link: 'https://feline.cloud' 
	},
	{ 
		title: 'owo.art', 
		description: 'Website to showcase art by PixelCat, my friend. Check it out.', 
		link: 'https://owo.art' 
	},
	{ 
		title: 'Minecraft Server', 
		description: 'Minecraft server network, currently on pause.', 
		link: 'https://tuxedo.network' 
	},
	{ 
		title: 'Homelab', 
		description: 'Servers I host at home, mainly for testing and personal things like Home Assistant view my github or codeberg to see things I have put there publically', 
		link: 'https://codeberg.org/eepykat' 
	}
];