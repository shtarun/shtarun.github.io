<script>
	import '$lib/styles/global.css';
	let { children } = $props();
</script>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		position: relative;
		z-index: 2;
	}
</style>
