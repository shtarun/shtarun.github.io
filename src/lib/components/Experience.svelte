<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import BentoCard from './BentoCard.svelte';
	import { inview } from '$lib/actions/inview';
	import { experience } from '$lib/data/experience';
</script>

<section class="section" id="experience">
	<div class="fade-in" use:inview>
		<SectionLabel text="experience" />
		<h2 class="section-heading">Where I've built things.</h2>
		<p class="section-desc">A career spanning mechanical R&D, automotive software, AI/ML, and deep-tech entrepreneurship.</p>
	</div>
	<BentoGrid>
		{#each experience as entry, i}
			<BentoCard
				title="{entry.role} — {entry.company}"
				meta="{entry.date} · {entry.location}"
				summary={entry.summary}
				tags={entry.tags}
				badge={entry.badge ?? ''}
				details={entry.details}
				url={entry.url ?? ''}
				gridSize={entry.gridSize}
				delay={i * 100}
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
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
