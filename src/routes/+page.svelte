<script lang="ts">
	import LastfmNowPlaying from '$components/lastfmNowPlaying.svelte';
	import StarsBackground from '$components/background.svelte';
	import AboutME from '$components/homePage/aboutMe.svelte';
	import Welcome from '$components/homePage/welcome.svelte';
	import SocialLinks from '$components/homePage/social-links.svelte';
	import Projects from '$components/homePage/projects.svelte';
</script>

<StarsBackground />

<section id="top">
<Welcome />
</section>

<section id="aboutMe">
    <div class="containContent">
	<h2>about me</h2>
	<AboutME />
    </div>
</section>

<section id="musicListening">
	<div class="containContent">
		<h2>recent music</h2>
	</div>
	<LastfmNowPlaying />
</section>

<section id="projectPreview">
	<div class="containContent">
		<h2>projects</h2>
		<Projects />
	</div>
</section>

<section id="links">
	<div class="containContent">
		<h2>links</h2>
		<SocialLinks />
	</div>
</section>