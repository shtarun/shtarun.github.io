<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { publications } from '$lib/data/publications';
</script>

<section class="section" id="publications">
	<div class="fade-in" use:inview>
		<SectionLabel text="publications" />
		<h2 class="section-heading">Research</h2>
	</div>
	{#each publications as pub}
		<div class="pub-card fade-in" use:inview>
			<h3>{pub.title}</h3>
			<div class="pub-authors">{@html pub.authors}</div>
			<div class="pub-venue">{pub.venue}, vol. 138, {pub.year}</div>
		</div>
	{/each}
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
		margin-bottom: 2rem;
	}
	.pub-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}
	.pub-card::after {
		content: '';
		position: absolute;
		top: 0; left: 0;
		width: 4px; height: 100%;
		background: linear-gradient(180deg, var(--primary), var(--secondary));
		border-radius: 4px 0 0 4px;
	}
	.pub-card h3 {
		font-family: var(--font-heading);
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}
	.pub-authors {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin-bottom: 0.25rem;
	}
	.pub-venue {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--primary);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
