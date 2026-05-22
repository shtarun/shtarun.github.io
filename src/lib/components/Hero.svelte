<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data/meta';

	let typedText = $state('');
	let showCursor = $state(true);

	onMount(() => {
		const fullText = meta.tagline;
		let i = 0;
		const typeInterval = setInterval(() => {
			if (i < fullText.length) {
				typedText = fullText.slice(0, i + 1);
				i++;
			} else {
				clearInterval(typeInterval);
			}
		}, 50);

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 750);

		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
		};
	});
</script>

<section class="hero" id="hero">
	<h1 class="hero-name">{meta.name}</h1>
	<div class="hero-tagline">
		{typedText}<span class="cursor" class:visible={showCursor}>|</span>
	</div>
	<p class="hero-subtitle">{meta.subtitle}</p>
	<div class="hero-links">
		<a href={meta.links.linkedin} target="_blank" rel="noopener" class="hero-link">linkedin</a>
		<a href={meta.links.github} target="_blank" rel="noopener" class="hero-link">github</a>
		<a href={meta.resumeUrl} target="_blank" rel="noopener" class="hero-link">resume.pdf</a>
		<a href={meta.links.email} class="hero-link">email</a>
	</div>
	<div class="scroll-indicator">
		<span>scroll</span>
		<div class="scroll-arrow"></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem;
		position: relative;
	}
	.hero-name {
		font-family: var(--font-heading);
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 50%, var(--secondary) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
		animation: glow-text 3s ease-in-out infinite alternate;
	}
	@keyframes glow-text {
		from { filter: drop-shadow(0 0 20px var(--primary-glow)); }
		to { filter: drop-shadow(0 0 40px var(--secondary-glow)); }
	}
	.hero-tagline {
		font-family: var(--font-mono);
		font-size: clamp(0.9rem, 2vw, 1.1rem);
		color: var(--text-secondary);
		min-height: 1.6em;
	}
	.cursor {
		opacity: 0;
		color: var(--primary);
	}
	.cursor.visible { opacity: 1; }
	.hero-subtitle {
		margin-top: 1.5rem;
		font-size: 1.1rem;
		color: var(--text-muted);
		font-weight: 300;
	}
	.hero-links {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.hero-link {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(6, 182, 212, 0.3);
		border-radius: 6px;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		background: rgba(6, 182, 212, 0.05);
	}
	.hero-link:hover {
		border-color: var(--secondary);
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
		background: rgba(6, 182, 212, 0.1);
	}
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		animation: float 2s ease-in-out infinite;
	}
	.scroll-indicator span {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}
	.scroll-arrow {
		width: 20px;
		height: 20px;
		border-right: 2px solid var(--primary);
		border-bottom: 2px solid var(--primary);
		transform: rotate(45deg);
		opacity: 0.5;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(10px); }
	}
</style>
