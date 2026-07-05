<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import SectionLabel from './SectionLabel.svelte';

	const shipped: { domain: string; body: string }[] = [
		{ domain: 'product', body: 'Shipped <strong>SetMind</strong>, an AI-powered fitness app, end-to-end' },
		{ domain: 'mechanical', body: 'Railway suspension redesign <strong>adopted by Indian Railways</strong>' },
		{
			domain: 'automotive safety',
			body: 'Drove <strong>ASIL-B safety-certified Linux</strong> for <strong>Software-Defined Vehicles</strong> at JLR'
		},
		{ domain: 'research', body: 'Peer-reviewed paper in <strong>Engineering Failure Analysis</strong>' },
		{
			domain: 'machine learning',
			body: 'LSTM-based <strong>predictive maintenance research</strong> with spectrograms at JLR'
		},
		{
			domain: 'leadership',
			body: 'Presented platform progress to the <strong>Boards of JLR and Tata Motors</strong>'
		}
	];

	const logos: { src: string; alt: string; url?: string }[] = [
		{ src: '/images/logos/twinity.png', alt: 'Twinity Labs', url: 'https://twinitylabs.com' },
		{ src: '/images/logos/mks.png', alt: 'MKS Enterprises' },
		{ src: '/images/logos/jlr.png', alt: 'Jaguar Land Rover', url: 'https://www.jaguarlandrover.com' },
		{ src: '/images/logos/iitk.svg', alt: 'IIT Kanpur', url: 'https://www.iitk.ac.in' },
		{ src: '/images/logos/tata-steel.png', alt: 'Tata Steel', url: 'https://www.tatasteel.com' },
		{ src: '/images/logos/eta.png', alt: 'ETA Technology', url: 'https://etatechnology.in/' }
	];
</script>

<section class="section" id="about">
	<div class="fade-in" use:inview>
		<SectionLabel text="about" />
		<h2 class="section-heading">At a glance.</h2>
		<div class="shipped">
			{#each shipped as item}
				<div class="shipped-item">
					<span class="shipped-domain">{item.domain}</span>
					<p class="shipped-body">{@html item.body}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="personal fade-in" use:inview>
		<span class="personal-label">Off the clock</span>
		<p class="personal-text">
			I like to think a few decades ahead. I'm drawn to <strong>spacetech and energy</strong>, the fields I believe will define what humanity becomes next, and I see <strong>robotics and AI</strong> as the fastest path up the <strong>Kardashev scale</strong> toward a Type&nbsp;I civilization. That same curiosity spills into <strong>philosophy and social dynamics</strong>, and how they rhyme with the laws that govern everything else. I'm just as drawn to <strong>business</strong>, the most powerful lever I know for turning these ideas into <strong>maximal social impact</strong> at scale. Closer to home, I'm fascinated by the <strong>human mind and fitness</strong>. There's a quiet joy in <strong>lifting weights</strong> and watching effort compound over time. When I step away from all that, my weekends lean toward <strong>football, badminton, and swimming</strong>, with <strong>tennis, shooting, horse riding, and surfing</strong> waiting patiently on the bucket list. And to unwind, you'll find me <strong>cooking something new</strong> or wandering off into the <strong>countryside</strong> for the quiet.
		</p>
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
	.shipped {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 1.25rem;
	}
	.shipped-item {
		padding: 1.25rem 1.4rem;
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.02);
		transition: border-color 0.3s ease, transform 0.3s ease;
	}
	.shipped-item:hover {
		border-color: rgba(6, 182, 212, 0.35);
		transform: translateY(-2px);
	}
	.shipped-domain {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--secondary);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		display: block;
		margin-bottom: 0.6rem;
	}
	.shipped-body {
		color: var(--text-secondary);
		font-size: 0.92rem;
		line-height: 1.6;
		margin: 0;
	}
	.shipped-body :global(strong) {
		color: var(--text-primary);
		font-weight: 600;
	}
	.personal {
		margin-top: 4rem;
	}
	.personal-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		display: block;
		margin-bottom: 1.25rem;
	}
	.personal-text {
		color: var(--text-secondary);
		font-size: 1.05rem;
		line-height: 1.7;
		max-width: 760px;
	}
	.personal-text strong {
		color: var(--text-primary);
		font-weight: 600;
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
</style>
