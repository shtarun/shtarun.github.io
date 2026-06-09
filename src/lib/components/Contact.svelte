<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { meta } from '$lib/data/meta';
</script>

<section class="section" id="contact">
	<div class="contact-inner fade-in" use:inview>
		<SectionLabel text="let's connect" />
		<blockquote class="quote">
			"{meta.quote.text}"
			<cite>— {meta.quote.author}</cite>
		</blockquote>
		<div class="contact-links">
			<a href={meta.links.email} class="contact-link">email</a>
			<a href={meta.links.linkedin} target="_blank" rel="noopener" class="contact-link">linkedin</a>
			<a href={meta.links.github} target="_blank" rel="noopener" class="contact-link">github</a>
			<a href={meta.links.instagram} target="_blank" rel="noopener" class="contact-link">instagram</a>
			<a href={meta.resumeUrl} target="_blank" rel="noopener" class="contact-link">resume.pdf</a>
		</div>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem 3rem;
	}
	.contact-inner {
		text-align: center;
	}
	.quote {
		font-size: 1.1rem;
		color: var(--text-secondary);
		font-style: italic;
		max-width: 600px;
		margin: 0 auto 2rem;
		line-height: 1.7;
	}
	.quote cite {
		display: block;
		margin-top: 0.75rem;
		font-size: 0.85rem;
		color: var(--text-muted);
		font-style: normal;
	}
	.contact-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}
	.contact-link {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(6, 182, 212, 0.3);
		border-radius: 6px;
		transition: all 0.3s ease;
		background: rgba(6, 182, 212, 0.05);
	}
	.contact-link:hover {
		border-color: var(--secondary);
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
		background: rgba(6, 182, 212, 0.1);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
