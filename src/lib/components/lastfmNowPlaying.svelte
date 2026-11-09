<script lang="ts">
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	const musicOptions = { 
		loop: false, 
		align: 'start' as const,
		watchSlides: true
	};
	const musicAutoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
	const musicConfig = [musicOptions, [musicAutoplay]];

	interface Track {
		title: string;
		artist: string;
		album: string;
		image: string;
		isPlaying: boolean;
		date: string;
	}

	let tracksList = $state<Track[]>([]);
	let loading = $state(true);

	let nowPlayingTrack = $derived(tracksList.find(track => track.isPlaying) || null);
	
	let pastTracks = $derived(tracksList.filter(track => !track.isPlaying));

	async function fetchRecentTracks() {
		try {
			const res = await fetch('/api/now-playing');
			const data = await res.json();
			tracksList = data.tracks || [];
		} catch (err) {
			console.error('Browser failed to parse multi-track data:', err);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchRecentTracks();
		const interval = setInterval(fetchRecentTracks, 30000);
		return () => clearInterval(interval);
	});
</script>

<div class="music-history-container">
	{#if loading}
		<div class="status-indicator">Loading music timeline...</div>
	{:else if tracksList.length === 0}
		<div class="status-indicator">No music activity found.</div>
	{:else}
		{#if nowPlayingTrack}
			<div class="now-playing-spotlight">
				<div class="music-bubble active-playing">
					<img src={nowPlayingTrack.image} alt="Album artwork for {nowPlayingTrack.album}" />
					<div class="track-details">
						<div class="playback-header">
							<span class="status-text">now playing</span>
							<span class="pulse-dot"></span> 
						</div>
						<h3>{nowPlayingTrack.title}</h3>
						<p class="artist-name">{nowPlayingTrack.artist}</p>
					</div>
				</div>
			</div>
		{/if}

		{#if pastTracks.length > 0}
			<div class="embla music-carousel">
				<div class="embla__viewport" use:emblaCarouselSvelte={musicConfig}>
					<div class="embla__container">
						{#each pastTracks as track}
							<div class="embla__slide music-carousel-slide">
								<div class="music-bubble">
									<img src={track.image} alt="Album artwork for {track.album}" />
									<div class="track-details">
										<div class="playback-header">
											<span class="date-text">{track.date}</span>
										</div>
										<h3>{track.title}</h3>
										<p class="artist-name">{track.artist}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style lang="scss">
	@import "$styles/global";
</style>