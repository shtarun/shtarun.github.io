<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div class="section-label">// {text}</div>

<style>
	.section-label {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.15em;
		text-transform: lowercase;
		color: var(--primary);
		margin-bottom: 2rem;
		padding: 0.25rem 0;
		border-bottom: 1px solid var(--border-glow);
	}
</style>
