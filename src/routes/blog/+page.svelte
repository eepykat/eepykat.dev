<script lang="ts">
	import { blogPosts, getSnippet } from '#lib/blogData';
	import StarsBackground from '$components/background.svelte';

</script>
<StarsBackground />
<section id="blogPage">
	<div class="containContent">
		<h1>The Blog</h1>
		<div class="dynamicBlog">
			{#each blogPosts as post}
			<article class="blogPost">
				<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
				<p class="post-preview">{getSnippet(post.content, 35)}</p>
				<a href="/blog/{post.slug}" class="readMore">read more</a>
			</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import "$styles/global";
</style>
