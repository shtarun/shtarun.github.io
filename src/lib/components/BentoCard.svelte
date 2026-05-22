<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import Tag from './Tag.svelte';
	import Badge from './Badge.svelte';
	import Modal from './Modal.svelte';
	import type { TagColor } from '$lib/data/experience';

	let {
		title,
		meta: metaText = '',
		summary = '',
		tags = [],
		badge = '',
		details = [],
		gridSize = 'standard',
		delay = 0
	}: {
		title: string;
		meta?: string;
		summary?: string;
		tags?: { label: string; color: TagColor }[];
		badge?: string;
		details?: string[];
		gridSize?: 'standard' | 'wide' | 'tall';
		delay?: number;
	} = $props();

	let modalOpen = $state(false);

	const sizeClass = gridSize === 'wide' ? 'bento-wide' : gridSize === 'tall' ? 'bento-tall' : '';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="bento-card {sizeClass} fade-in"
	use:inview={{ delay }}
	onclick={() => { if (details.length) modalOpen = true; }}
	onkeydown={(e) => { if (e.key === 'Enter' && details.length) modalOpen = true; }}
	role={details.length ? 'button' : undefined}
	tabindex={details.length ? 0 : undefined}
>
	{#if badge}<Badge text={badge} />{/if}
	<h3>{title}</h3>
	{#if metaText}<div class="card-meta">{metaText}</div>{/if}
	{#if summary}<p>{summary}</p>{/if}
	{#if tags.length}
		<div class="tags">
			{#each tags as tag}
				<Tag label={tag.label} color={tag.color} />
			{/each}
		</div>
	{/if}
</div>

<Modal bind:open={modalOpen}>
	{#if badge}<Badge text={badge} />{/if}
	<h3 class="modal-title">{title}</h3>
	{#if metaText}<div class="modal-meta">{metaText}</div>{/if}
	<ul class="modal-details">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
	{#if tags.length}
		<div class="tags" style="margin-top: 1.5rem;">
			{#each tags as tag}
				<Tag label={tag.label} color={tag.color} />
			{/each}
		</div>
	{/if}
</Modal>

<style>
	.bento-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.bento-card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 16px;
		padding: 1px;
		background: linear-gradient(135deg, var(--border-glow), transparent, var(--border-glow));
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0;
		transition: opacity 0.4s ease;
		pointer-events: none;
	}
	.bento-card:hover {
		background: var(--bg-card-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 40px rgba(124, 58, 237, 0.1);
		cursor: pointer;
	}
	.bento-card:hover::before { opacity: 1; }
	.bento-wide { grid-column: span 2; }
	.bento-tall { grid-row: span 2; }
	h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.card-meta {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--primary);
		margin-bottom: 0.75rem;
		letter-spacing: 0.05em;
	}
	p {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
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

	.modal-title {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
	.modal-meta {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--primary);
		margin-bottom: 1rem;
	}
	.modal-details {
		list-style: none;
		padding: 0;
	}
	.modal-details li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.6rem;
		line-height: 1.5;
	}
	.modal-details li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.bento-wide, .bento-tall { grid-column: span 2; grid-row: span 1; }
	}
	@media (max-width: 600px) {
		.bento-wide, .bento-tall { grid-column: span 1; }
	}
</style>
