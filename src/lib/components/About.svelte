<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { inview } from '$lib/actions/inview';
	import SectionLabel from './SectionLabel.svelte';
	import { meta } from '$lib/data/meta';

	let started = $state(false);

	const stat0 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat1 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat2 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat3 = tweened(0, { duration: 2000, easing: cubicOut });

	const parsed = meta.stats.map((s) => ({
		target: parseInt(s.value.replace(/\D/g, ''), 10),
		suffix: s.value.replace(/[0-9]/g, ''),
		label: s.label
	}));

	function startCounters(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started) {
					started = true;
					stat0.set(parsed[0].target);
					stat1.set(parsed[1].target);
					stat2.set(parsed[2].target);
					stat3.set(parsed[3].target);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}

	const logos: { src: string; alt: string; url?: string }[] = [
		{ src: '/images/logos/twinity.png', alt: 'Twinity Labs', url: 'https://twinitylabs.com' },
		{ src: '/images/logos/mks.svg', alt: 'MKS Enterprises' },
		{ src: '/images/logos/jlr.png', alt: 'Jaguar Land Rover' },
		{ src: '/images/logos/iitk.svg', alt: 'IIT Kanpur' },
		{ src: '/images/logos/tata-steel.png', alt: 'Tata Steel' },
		{ src: '/images/logos/eta.png', alt: 'ETA Technology' }
	];
</script>

<section class="section" id="about">
	<div class="fade-in" use:inview>
		<SectionLabel text="about" />
		<h2 class="section-heading">At a glance.</h2>
		<div class="stats" use:startCounters>
			<div class="stat">
				<div class="stat-number">{Math.round($stat0)}{parsed[0].suffix}</div>
				<div class="stat-label">{parsed[0].label}</div>
			</div>
			<div class="stat">
				<div class="stat-number">{Math.round($stat1)}{parsed[1].suffix}</div>
				<div class="stat-label">{parsed[1].label}</div>
			</div>
			<div class="stat">
				<div class="stat-number">{Math.round($stat2)}{parsed[2].suffix}</div>
				<div class="stat-label">{parsed[2].label}</div>
			</div>
			<div class="stat">
				<div class="stat-number">{Math.round($stat3)}{parsed[3].suffix}</div>
				<div class="stat-label">{parsed[3].label}</div>
			</div>
		</div>
	</div>

	<div class="logo-strip fade-in" use:inview>
		<span class="logo-label">Built with & for</span>
		<div class="logo-row">
			{#each logos as logo}
				{#if logo.url}
					<a href={logo.url} target="_blank" rel="noopener" class="logo-item">
						<img src={logo.src} alt={logo.alt} />
					</a>
				{:else}
					<div class="logo-item">
						<img src={logo.src} alt={logo.alt} />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 2rem;
	}
	.stats {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}
	.stat-number {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, var(--primary), var(--secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.stat-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-top: 0.25rem;
	}

	.logo-strip {
		margin-top: 4rem;
		padding-top: 3rem;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}
	.logo-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		display: block;
		margin-bottom: 1.5rem;
	}
	.logo-row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
	.logo-item {
		background: #ffffff;
		border-radius: 10px;
		padding: 0.5rem 1rem;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.85;
		transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
		text-decoration: none;
	}
	.logo-item:hover {
		opacity: 1;
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
	}
	.logo-item img {
		height: 32px;
		width: auto;
		max-width: 120px;
		object-fit: contain;
	}

	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		.logo-row {
			gap: 1rem;
		}
		.logo-item {
			height: 44px;
			padding: 0.4rem 0.75rem;
		}
		.logo-item img {
			height: 26px;
			max-width: 90px;
		}
	}
	@media (max-width: 600px) {
		.stats { gap: 1.5rem; }
	}
</style>
