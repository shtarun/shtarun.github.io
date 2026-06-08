<script lang="ts">
	import { inview } from '$lib/actions/inview';
</script>

<div class="glow-line" use:inview></div>

<style>
	.glow-line {
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
		margin: 0 auto;
		max-width: 1200px;
		opacity: 0;
		transform: scaleX(0);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	.glow-line:global(.in-view) {
		opacity: 0.4;
		transform: scaleX(1);
	}
</style>
