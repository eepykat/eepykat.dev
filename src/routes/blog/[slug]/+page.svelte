<script lang="ts">
	import { page } from '$app/state';
	import { blogPosts } from '#lib/blogData';
	import StarsBackground from '$components/background.svelte';

	const currentSlug = page.params.slug;
	const post = blogPosts.find((p) => p.slug === currentSlug);
</script>
<StarsBackground />
<div class="containContent">
	<div id=postPage>
		{#if post}
			<article class="postContent">
				<a class="backButton" href="/blog">Back</a>
				<h1 class="postTitle">{post.title}</h1>
				<p class="postDate">{post.date}</p>
				
				{#if post.image}
					<img src={post.image} alt="Header artwork for {post.title}" />
				{/if}
				
				<div class="postContentBody">
					{@html post.content}
				</div>
			</article>
		{:else}
			<div class="postContent">
				<h1>404 - Post Not Found</h1>
				<p>nothing here ;w;</p>
				<a href="/blog" class="active">Back to the blog</a>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import "$styles/global";
</style>
