<script>
	import '$lib/styles/global.css';
	import ParticleCanvas from '$lib/components/ParticleCanvas.svelte';
	let { children } = $props();
</script>

<ParticleCanvas />

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		position: relative;
		z-index: 2;
	}
</style>
