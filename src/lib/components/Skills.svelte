<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import Tag from './Tag.svelte';
	import { inview } from '$lib/actions/inview';
	import { skills } from '$lib/data/skills';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="skills & domains" />
		<h2 class="section-heading">What I work with.</h2>
	</div>
	<BentoGrid>
		{#each skills as category, i}
			<div class="skill-card bento-wide fade-in" use:inview={{ delay: i * 100 }}>
				<h3>{category.title}</h3>
				<div class="tags">
					{#each category.tags as tag}
						<Tag label={tag.label} color={tag.color} />
					{/each}
				</div>
			</div>
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
		margin-bottom: 3rem;
	}
	.skill-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.skill-card h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.bento-wide { grid-column: span 2; }
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 600px) {
		.bento-wide { grid-column: span 1; }
	}
</style>
