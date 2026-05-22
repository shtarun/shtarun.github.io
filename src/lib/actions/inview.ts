export function inview(node: HTMLElement, params: { threshold?: number; delay?: number } = {}) {
	const { threshold = 0.1, delay = 0 } = params;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						node.classList.add('in-view');
					}, delay);
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
