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
	<div class="hero-main">
		<div class="hero-photo">
			<div class="photo-frame">
				<img src="/images/tarunsharma.jpeg" alt="Tarun Sharma" />
			</div>
		</div>
		<div class="hero-text">
			<h1 class="hero-name">{meta.name}</h1>
			<div class="hero-tagline">
				{typedText}<span class="cursor" class:visible={showCursor}>|</span>
			</div>
			<p class="hero-subtitle">{meta.subtitle}</p>
			<p class="hero-bio">{meta.bio}</p>
			<div class="hero-links">
				<a href={meta.links.linkedin} target="_blank" rel="noopener" class="hero-link">linkedin</a>
				<a href={meta.links.github} target="_blank" rel="noopener" class="hero-link">github</a>
				<a href="https://twinitylabs.com" target="_blank" rel="noopener" class="hero-link">twinitylabs.com</a>
				<a href={meta.resumeUrl} target="_blank" rel="noopener" class="hero-link">resume.pdf</a>
				<a href={meta.links.email} class="hero-link">email</a>
			</div>
		</div>
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
		padding: 2rem;
		position: relative;
	}
	.hero-main {
		display: flex;
		align-items: center;
		gap: 4rem;
		max-width: 1100px;
	}
	.hero-photo {
		flex-shrink: 0;
	}
	.photo-frame {
		width: 220px;
		height: 220px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid rgba(124, 58, 237, 0.4);
		box-shadow: 0 0 50px rgba(124, 58, 237, 0.2), 0 0 100px rgba(6, 182, 212, 0.1);
		animation: photo-glow 4s ease-in-out infinite alternate;
	}
	@keyframes photo-glow {
		from { box-shadow: 0 0 40px rgba(124, 58, 237, 0.2), 0 0 80px rgba(6, 182, 212, 0.08); }
		to { box-shadow: 0 0 60px rgba(124, 58, 237, 0.3), 0 0 120px rgba(6, 182, 212, 0.15); }
	}
	.photo-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.hero-text {
		text-align: left;
	}
	.hero-name {
		font-family: var(--font-heading);
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 50%, var(--secondary) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
		animation: glow-text 3s ease-in-out infinite alternate;
	}
	@keyframes glow-text {
		from { filter: drop-shadow(0 0 20px var(--primary-glow)); }
		to { filter: drop-shadow(0 0 40px var(--secondary-glow)); }
	}
	.hero-tagline {
		font-family: var(--font-mono);
		font-size: clamp(0.85rem, 1.5vw, 1.05rem);
		color: var(--text-secondary);
		min-height: 1.6em;
	}
	.cursor {
		opacity: 0;
		color: var(--primary);
	}
	.cursor.visible { opacity: 1; }
	.hero-subtitle {
		margin-top: 1rem;
		font-size: 1rem;
		color: var(--text-muted);
		font-weight: 300;
	}
	.hero-bio {
		margin-top: 1.25rem;
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.7;
		max-width: 580px;
	}
	.hero-links {
		display: flex;
		gap: 0.75rem;
		margin-top: 1.75rem;
		flex-wrap: wrap;
	}
	.hero-link {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.45rem 0.9rem;
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

	@media (max-width: 768px) {
		.hero-main {
			flex-direction: column;
			gap: 2rem;
			text-align: center;
		}
		.hero-text {
			text-align: center;
		}
		.hero-bio {
			max-width: 100%;
		}
		.hero-links {
			justify-content: center;
		}
		.photo-frame {
			width: 160px;
			height: 160px;
		}
	}
</style>
