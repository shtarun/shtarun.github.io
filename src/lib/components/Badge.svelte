<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<span class="badge">{text}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		background: rgba(245, 158, 11, 0.1);
		border: 1px solid rgba(245, 158, 11, 0.3);
		color: var(--accent);
		margin-bottom: 0.75rem;
	}
</style>
