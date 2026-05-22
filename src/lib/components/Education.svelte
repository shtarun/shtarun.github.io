<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { education } from '$lib/data/education';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="education" />
		<h2 class="section-heading">Where it started.</h2>
	</div>
	<div class="edu-grid">
		{#each education as entry, i}
			<div class="edu-card fade-in" use:inview={{ delay: i * 100 }}>
				<h3>{entry.institution}</h3>
				<p class="degree">{entry.degree}</p>
				<span class="years">{entry.years}</span>
			</div>
		{/each}
	</div>
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
		margin-bottom: 3rem;
	}
	.edu-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.edu-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.edu-card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.degree {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.years {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--primary);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 600px) {
		.edu-grid { grid-template-columns: 1fr; }
	}
</style>
