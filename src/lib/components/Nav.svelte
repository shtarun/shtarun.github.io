<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const links = [
		{ label: 'home', href: '#hero' },
		{ label: 'about', href: '#about' },
		{ label: 'experience', href: '#experience' },
		{ label: 'projects', href: '#projects' },
		{ label: 'publications', href: '#publications' },
		{ label: 'contact', href: '#contact' }
	];

	let activeSection = $state('hero');
	let visible = $state(true);
	let menuOpen = $state(false);
	let lastScrollY = 0;

	onMount(() => {
		if (!browser) return;

		const sections = links.map((l) => document.querySelector(l.href));

		function onScroll() {
			const currentY = window.scrollY;
			visible = currentY < lastScrollY || currentY < 100;
			lastScrollY = currentY;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.getBoundingClientRect().top <= 150) {
					activeSection = links[i].label;
					break;
				}
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function handleClick() {
		menuOpen = false;
	}
</script>

<nav class="nav" class:hidden={!visible}>
	<div class="nav-inner">
		{#each links as link}
			<a
				href={link.href}
				class:active={activeSection === link.label}
				onclick={handleClick}
			>
				{link.label}
			</a>
		{/each}
	</div>

	<button class="hamburger" class:open={menuOpen} onclick={() => (menuOpen = !menuOpen)} aria-label="Toggle menu">
		<span></span><span></span><span></span>
	</button>

	{#if menuOpen}
		<div class="mobile-menu">
			{#each links as link}
				<a href={link.href} class:active={activeSection === link.label} onclick={handleClick}>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.nav {
		position: fixed;
		top: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}
	.nav.hidden {
		transform: translateX(-50%) translateY(-100px);
		opacity: 0;
	}
	.nav-inner {
		display: flex;
		gap: 0.25rem;
		padding: 0.5rem 0.75rem;
		background: rgba(10, 10, 15, 0.6);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}
	.nav-inner a {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border-radius: 8px;
		transition: all 0.3s ease;
		letter-spacing: 0.05em;
	}
	.nav-inner a:hover, .nav-inner a.active {
		color: var(--text-primary);
		background: rgba(124, 58, 237, 0.15);
	}
	.hamburger {
		display: none;
		background: rgba(10, 10, 15, 0.6);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 10px;
		padding: 0.6rem;
		cursor: pointer;
		flex-direction: column;
		gap: 4px;
	}
	.hamburger span {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--text-secondary);
		transition: all 0.3s ease;
	}
	.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
	.hamburger.open span:nth-child(2) { opacity: 0; }
	.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }
	.mobile-menu {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
		background: rgba(10, 10, 15, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 160px;
	}
	.mobile-menu a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}
	.mobile-menu a:hover, .mobile-menu a.active {
		color: var(--text-primary);
		background: rgba(124, 58, 237, 0.15);
	}

	@media (max-width: 768px) {
		.nav-inner { display: none; }
		.hamburger { display: flex; }
	}
</style>
