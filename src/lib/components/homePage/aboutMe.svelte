<script lang="ts">
import { onMount } from 'svelte';

const BIRTH_DATE = new Date('1999-10-11T00:00:00').getTime();
let exactAge = $state('0.000000000');

function calculateAge() {
    const now = Date.now();
    const ageInMilliseconds = now - BIRTH_DATE;
    const ageInYears = ageInMilliseconds / 31556952000;
    exactAge = ageInYears.toFixed(9);
}

onMount(() => {
    calculateAge();
    const interval = setInterval(calculateAge, 50);
    return () => clearInterval(interval);
});

</script>

<section>
    <article>
        <div id="name"><h1>Katarina</h1></div>
        <img alt="Image of kat" height="256" width="256" src="https://avatars.githubusercontent.com/u/168898505?v=4">
        <div class="about-me-info-section" id="pronouns"><p class="title">pronouns</p><p class="bottom-text">she/her 🏳️‍⚧️</p></div>
        <div class="about-me-info-section" id="age"><p class="title">age</p><p class="bottom-text">{exactAge}</p></div>
        <div class="about-me-info-section" id="origin"><p class="title">origin</p><p class="bottom-text">California</p></div>
        <div class="about-me-info-section" id="living-in"><p class="title">living in</p><p class="bottom-text">🇱🇹 Lithuania</p></div>

    </article>
    <article>
        <p id="about-me-bio">
        Hi I'm Kat, welcome to my personal website.<br><br>
        I have a lot of content to add here, so for now....<br><br>
        meow meow meow meow meow meow meow meow meow meow meowwwwww! :3
        </p>
    </article>
</section>