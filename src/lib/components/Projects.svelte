<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import BentoCard from './BentoCard.svelte';
	import { inview } from '$lib/actions/inview';
	import { projects } from '$lib/data/projects';
</script>

<section class="section" id="projects">
	<div class="fade-in" use:inview>
		<SectionLabel text="projects" />
		<h2 class="section-heading">Things I've made.</h2>
		<p class="section-desc">Side projects, apps, and academic work from IIT Kanpur and beyond.</p>
	</div>
	<BentoGrid>
		{#each projects as project, i}
			<BentoCard
				title={project.title}
				meta="{project.date}{project.supervisor ? ` · ${project.supervisor}` : ''}"
				summary={project.summary}
				tags={project.tags}
				badge={project.badge ?? ''}
				details={project.details}
				url={project.url ?? ''}
				gridSize={project.gridSize}
				delay={i * 80}
			/>
		{/each}
	</BentoGrid>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
