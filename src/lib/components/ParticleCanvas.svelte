<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		if (!browser) return;

		const ctx = canvas.getContext('2d')!;
		let width: number, height: number;
		let mouse = { x: -1000, y: -1000 };

		const isMobile = window.innerWidth < 768;
		const PARTICLE_COUNT = isMobile ? 60 : 150;
		const CONNECTION_DIST = 120;
		const MOUSE_DIST = 150;

		interface Particle {
			x: number; y: number;
			vx: number; vy: number;
			radius: number; opacity: number;
		}

		let particles: Particle[] = [];

		function resize() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = document.documentElement.scrollHeight;
		}

		function createParticles() {
			particles = [];
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.3,
					vy: (Math.random() - 0.5) * 0.3,
					radius: Math.random() * 1.5 + 0.5,
					opacity: Math.random() * 0.5 + 0.2
				});
			}
		}

		function draw() {
			ctx.clearRect(0, 0, width, height);
			const scrollY = window.scrollY;
			const viewTop = scrollY - height * 0.5;
			const viewBottom = scrollY + window.innerHeight + height * 0.5;

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = width;
				if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				if (p.y > height) p.y = 0;

				const screenY = p.y - scrollY;
				if (p.y < viewTop || p.y > viewBottom) continue;

				ctx.beginPath();
				ctx.arc(p.x, screenY, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
				ctx.fill();

				for (let j = i + 1; j < particles.length; j++) {
					const p2 = particles[j];
					if (p2.y < viewTop || p2.y > viewBottom) continue;
					const dx = p.x - p2.x;
					const dy = p.y - p2.y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < CONNECTION_DIST) {
						ctx.beginPath();
						ctx.moveTo(p.x, screenY);
						ctx.lineTo(p2.x, p2.y - scrollY);
						ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / CONNECTION_DIST)})`;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}

				const dxm = p.x - mouse.x;
				const dym = p.y - (mouse.y + scrollY);
				const distm = Math.sqrt(dxm * dxm + dym * dym);
				if (distm < MOUSE_DIST) {
					ctx.beginPath();
					ctx.moveTo(p.x, screenY);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.strokeStyle = `rgba(124, 58, 237, ${0.3 * (1 - distm / MOUSE_DIST)})`;
					ctx.lineWidth = 0.8;
					ctx.stroke();
				}
			}

			animationId = requestAnimationFrame(draw);
		}

		function onMouseMove(e: MouseEvent) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('resize', () => { resize(); createParticles(); });
		window.addEventListener('mousemove', onMouseMove);

		const resizeObserver = new ResizeObserver(() => resize());
		resizeObserver.observe(document.body);

		resize();
		createParticles();
		draw();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('mousemove', onMouseMove);
			resizeObserver.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="particle-canvas"></canvas>

<style>
	.particle-canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.particle-canvas { display: none; }
	}
</style>
