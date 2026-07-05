<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { publications } from '$lib/data/publications';
	import { meta } from '$lib/data/meta';
</script>

<section class="section" id="publications">
	<div class="fade-in" use:inview>
		<SectionLabel text="publications" />
		<h2 class="section-heading">Research</h2>
	</div>
	{#each publications as pub}
		<div class="pub-card fade-in" use:inview>
			<h3><a href={pub.url} target="_blank" rel="noopener">{pub.title}</a></h3>
			<div class="pub-authors">{@html pub.authors}</div>
			<div class="pub-venue">{pub.venue}, vol. {pub.volume}, {pub.year}</div>
			<div class="pub-links">
				<a href={pub.url} target="_blank" rel="noopener">read the paper</a>
				<a href={meta.links.scholar} target="_blank" rel="noopener">google scholar</a>
			</div>
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
	.pub-card h3 a {
		color: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
	}
	.pub-card h3 a:hover {
		color: var(--secondary);
	}
	.pub-venue {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--primary);
	}
	.pub-links {
		display: flex;
		gap: 0.75rem;
		margin-top: 1rem;
	}
	.pub-links a {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.35rem 0.75rem;
		border: 1px solid rgba(6, 182, 212, 0.3);
		border-radius: 6px;
		background: rgba(6, 182, 212, 0.05);
		transition: all 0.3s ease;
	}
	.pub-links a:hover {
		border-color: var(--secondary);
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
		background: rgba(6, 182, 212, 0.1);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
