<script lang="ts">
	import '$styles/global.scss';
    import catAvatar from '../lib/assets/images/cat.png';
    import { page } from '$app/state';

    let { children } = $props();
	let currentPath = $derived(page.url.pathname);
</script>

<nav>
    <div id="navLinks">
        <ul>
            <li>
                <a href="/" class:active={currentPath === '/'}>home</a>
            </li>
            <li>
                <a href="/blog" class:active={currentPath === '/blog' || currentPath.startsWith('/blog/')}>blog</a>
            </li>
        </ul>
        <a href="#" class="icon"><i class="fa fa-bars"></i></a>
    </div>
</nav>

{@render children()}

<div class="footer-div">
    <footer>
        <img alt="Image of a cat emoji that is white" src="{catAvatar}" width="64" height="64">
        <h1>cute footer :3</h1>
    </footer>
</div>


<style lang="scss">
	@import "$styles/global";
</style>
