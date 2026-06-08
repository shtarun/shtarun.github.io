<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	let { open = $bindable(false), children } = $props();

	function close() {
		open = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="overlay" transition:fade={{ duration: 200 }} onclick={close} onkeydown={handleKeydown}>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="modal" transition:scale={{ duration: 300, start: 0.95 }} onclick={(e) => e.stopPropagation()} onkeydown={handleKeydown}>
			<button class="close-btn" onclick={close} aria-label="Close">✕</button>
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 200;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	.modal {
		background: #111118;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 2rem;
		max-width: 700px;
		width: 100%;
		max-height: 80vh;
		overflow-y: auto;
		position: relative;
	}
	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: var(--text-muted);
		font-size: 1.2rem;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		transition: color 0.2s ease;
	}
	.close-btn:hover { color: var(--text-primary); }
</style>
