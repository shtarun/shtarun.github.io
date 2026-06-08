<script lang="ts">
	import { inview } from '$lib/actions/inview';

	let {
		date,
		title,
		company,
		items = [],
		delay = 0
	}: {
		date: string;
		title: string;
		company: string;
		items?: string[];
		delay?: number;
	} = $props();
</script>

<div class="timeline-node fade-in" use:inview={{ delay }}>
	<div class="node-date">{date}</div>
	<h3>{title}</h3>
	<div class="node-company">{company}</div>
	{#if items.length}
		<ul>
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.timeline-node {
		position: relative;
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		transition: all 0.3s ease;
	}
	.timeline-node:hover {
		background: var(--bg-card-hover);
		border-color: var(--border-glow);
	}
	.timeline-node::before {
		content: '';
		position: absolute;
		left: -2.55rem;
		top: 1.75rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--primary);
		box-shadow: 0 0 12px var(--primary-glow), 0 0 24px var(--primary-glow);
		z-index: 1;
	}
	.timeline-node::after {
		content: '';
		position: absolute;
		left: -1.85rem;
		top: 2.05rem;
		width: 22px;
		height: 2px;
		background: linear-gradient(90deg, var(--primary), transparent);
	}
	.node-date {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--secondary);
		margin-bottom: 0.5rem;
	}
	h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}
	.node-company {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
	}
	ul { list-style: none; padding: 0; }
	li {
		font-size: 0.85rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.4rem;
	}
	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
