<script lang="ts">
	let { children } = $props();
</script>

<div class="bento-grid">
	{@render children()}
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(180px, auto);
		gap: 1rem;
	}
	@media (max-width: 900px) {
		.bento-grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 600px) {
		.bento-grid { grid-template-columns: 1fr; }
	}
</style>
