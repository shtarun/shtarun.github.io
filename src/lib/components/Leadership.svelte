<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { teaching, campusLeadership, awards } from '$lib/data/leadership';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="teaching & leadership" />
		<h2 class="section-heading">Beyond the code.</h2>
	</div>
	<div class="leadership-grid">
		<div class="card fade-in" use:inview>
			<h3>{teaching.title}</h3>
			<ul>
				{#each teaching.items as item}<li>{item}</li>{/each}
			</ul>
		</div>
		<div class="card fade-in" use:inview={{ delay: 100 }}>
			<h3>{campusLeadership.title}</h3>
			<ul>
				{#each campusLeadership.items as item}<li>{item}</li>{/each}
			</ul>
		</div>
		<div class="card fade-in" use:inview={{ delay: 200 }}>
			<h3>Awards</h3>
			{#each awards as award}
				<div class="award">
					<strong>{award.title}</strong>
					<p>{award.detail}</p>
				</div>
			{/each}
		</div>
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
	.leadership-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	ul { list-style: none; padding: 0; }
	li {
		font-size: 0.85rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}
	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}
	.award { margin-bottom: 1rem; }
	.award strong {
		font-size: 0.9rem;
		display: block;
		margin-bottom: 0.25rem;
	}
	.award p {
		font-size: 0.8rem;
		color: var(--text-secondary);
		line-height: 1.4;
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 768px) {
		.leadership-grid { grid-template-columns: 1fr; }
	}
</style>
