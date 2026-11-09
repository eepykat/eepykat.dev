<script lang="ts">
import { onMount } from 'svelte';

interface SocialLink {
    name: string;
    url: string;
    offsetX: number;
    offsetY: number;
    colorStyle: string;
}
let socialLinks = $state<SocialLink[]>([
    { name: 'GitHub', url: 'https://github.com/eepykat', offsetX: 0, offsetY: 0, colorStyle: '' },
    { name: 'Codeberg', url: 'https://codeberg.org/eepykat', offsetX: 0, offsetY: 0, colorStyle: '' },
    { name: 'Last.fm', url: 'https://www.last.fm/user/lastcatofmars', offsetX: 0, offsetY: 0, colorStyle: '' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/catplushy/', offsetX: 0, offsetY: 0, colorStyle: '' },
]);

const randomColors = ['#DABFFF', '#5BCEFA', '#F5A6B8', '#55efc4', '#ffeaa7', '#ff7675', '#a29bfe', '#fd79a8'];

onMount(() => {
    socialLinks = socialLinks.map((link) => {
        const isTransPride = Math.random() < 0.33;
        let colorStyle = '';

        if (isTransPride) {
            colorStyle = 'background-image: linear-gradient(#262627, #262627), linear-gradient(to right, #5BCEFA, #F5A6B8, #FFFFFF, #F5A6B8, #5BCEFA); background-origin: border-box; background-clip: padding-box, border-box; border: 3px solid transparent; --btn-shadow: rgba(245, 166, 184, 0.35); color: #FFF;';
        } else {
            const pickedColor = randomColors[Math.floor(Math.random() * randomColors.length)];
            colorStyle = `border: 2px solid ${pickedColor}; color: ${pickedColor}; --btn-shadow: ${pickedColor}44;`;
        }

        return {
            ...link,
            offsetX: 0,
            offsetY: 0,
            colorStyle
        };
    });
});
</script>

<div id="link-collection">
    {#each socialLinks as link}
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="randomButton"
            style={link.colorStyle}
        >
            <p>{link.name}</p>
        </a>
    {/each}
</div>