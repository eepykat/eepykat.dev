// src/lib/blogData.ts

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	content: string;
	image?: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'my-first-post',
		title: 'First Post',
		date: '2026-11-08',
		content: '<p>I have a lot of content to add to this website.. ;w;</p>'
	},
	{
		slug: 'meow',
		title: 'Test Post Meow',
		date: '2026-11-08',
		content: '<p>meow meow meow meow meow meow!!!! :3</p>'
	}
];

export function getSnippet(htmlContent: string, maxLength: number = 40): string {
	const plainText = htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
	
	if (plainText.length <= maxLength) return plainText;
	return plainText.substring(0, maxLength).trim() + '...';
}