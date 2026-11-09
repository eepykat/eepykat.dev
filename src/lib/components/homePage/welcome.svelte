<script lang="ts">
import catAudio from '$assets/audio/meow.mp3';
import neoCat from '$assets/images/cat.png';

let showMeow = $state(false);
let audioEl: HTMLAudioElement;

function handleCatClick() {
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play().catch(err => console.error("Audio playback blocked by browser:", err));
    }
    showMeow = true;
    setTimeout(() => {
        showMeow = false;
    }, 1000);
}

</script>
	<div class="welcome-display">
		<h1>
			<span class="welcome-text-medium">hi i'm Katarina</span><br>
			<span class="purple-small">or just kat</span>
		</h1>
		<audio bind:this={audioEl} src="{catAudio}" preload="auto"></audio>
		<div class="cat-avatar-wrapper">
			{#if showMeow}
				<div class="meow-popup">meow!</div>
			{/if}
			<button class="cat-avatar-btn" onclick={handleCatClick} aria-label="Make the cat meow">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img alt="Image of a cat from the artist Volpeon" src="{neoCat}" width="230" height="230">
			</button>
		</div>
	</div>
	<section class="button-box">
		<div class="cta-click">
			<a href="#aboutMe" class="cat-buttons">about me</a>
		</div>
	</section>