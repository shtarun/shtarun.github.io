<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import TimelineNode from './TimelineNode.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="career pathway" />
		<h2 class="section-heading">The Neural Path</h2>
		<p class="section-desc">A chronological journey through the chapters.</p>
	</div>
	<div class="timeline">
		<div class="timeline-line"></div>
		<TimelineNode
			date="sept 2025 — present"
			title="Founder & CEO"
			company="Twinity Labs"
			items={['Applied Digital Twin solutions venture', 'Product vision, GTM, industrial partnerships']}
			delay={0}
		/>
		<TimelineNode
			date="sept 2020 — aug 2025"
			title="Graduate Trainee → Senior SWE"
			company="Jaguar Land Rover"
			items={['Software-Defined Vehicles platform', 'Global Testing Platform', 'Innovation Champion — Open Innovation Hub', 'Predictive maintenance research (LSTM, patent pending)']}
			delay={150}
		/>
		<TimelineNode
			date="jul 2015 — jun 2020"
			title="B.Tech-M.Tech Dual Degree"
			company="IIT Kanpur — Mechanical Engineering"
			items={['Railway bogie redesign adopted by Indian Railways', 'Electromagnetic actuator development', 'President, Association of Mechanical Engineers']}
			delay={300}
		/>
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
	}
	.timeline {
		position: relative;
		padding-left: 3rem;
	}
	.timeline-line {
		position: absolute;
		left: 0.75rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(180deg, var(--primary), var(--secondary), var(--primary-glow), transparent);
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
</style>
