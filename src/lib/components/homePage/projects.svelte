<script lang="ts">
    import { projectCollection } from '#lib/projectData';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

    const projectConfig = { loop: true, align: 'center' as const };

</script>

<div class="embla">
    <div class="embla__viewport" use:emblaCarouselSvelte={projectConfig}>
        <div class="embla__container">
            {#each projectCollection as project}
                <div class="project-slide ">
                    <article class="previewBubble">
                        <h3><a href="{project.link}"target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                        <p class="post-preview">{project.description}</p>
                    </article>
                </div>
            {/each}
        </div>
    </div>
</div>