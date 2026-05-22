<script lang="ts">
	import type { TagColor } from '$lib/data/experience';
	let { label, color = 'purple' }: { label: string; color?: TagColor } = $props();
</script>

<span class="tag {color}">{label}</span>

<style>
	.tag {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		letter-spacing: 0.03em;
		transition: transform 0.2s ease;
		display: inline-block;
	}
	.tag:hover { transform: scale(1.05); }
	.purple {
		border: 1px solid rgba(124, 58, 237, 0.25);
		color: var(--primary);
		background: rgba(124, 58, 237, 0.08);
	}
	.cyan {
		border: 1px solid rgba(6, 182, 212, 0.25);
		color: var(--secondary);
		background: rgba(6, 182, 212, 0.08);
	}
	.amber {
		border: 1px solid rgba(245, 158, 11, 0.25);
		color: var(--accent);
		background: rgba(245, 158, 11, 0.08);
	}
</style>
