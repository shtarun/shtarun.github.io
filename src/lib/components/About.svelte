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
</script>

<section class="section" id="about">
	<div class="fade-in" use:inview>
		<SectionLabel text="about" />
		<h2 class="section-heading">The intersection is where it gets interesting.</h2>
		<p class="section-desc">{meta.bio}</p>
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
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
		line-height: 1.7;
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
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 600px) {
		.stats { gap: 1.5rem; }
	}
</style>
