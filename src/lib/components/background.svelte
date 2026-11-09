<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	interface Star {
		x: number;
		y: number;
		size: number;
		speedX: number;
		speedY: number;
		opacity: number;
		fadeSpeed: number;
		isGlowing: boolean;
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let stars: Star[] = [];
		let animationFrameId: number;

		function resizeCanvas() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initStars();
		}

		function initStars() {
			stars = [];
			const starCount = Math.floor((canvas.width * canvas.height) / 9000);
			
			for (let i = 0; i < starCount; i++) {
				const isGlowing = Math.random() > 0.6;
				stars.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * (isGlowing ? 2.5 : 1.2) + 0.5,
					speedX: (Math.random() - 0.5) * 0.15,
					speedY: (Math.random() - 0.5) * 0.15,
					opacity: Math.random() * 0.7 + 0.2,
					fadeSpeed: (Math.random() * 0.01) + 0.003,
					isGlowing
				});
			}
		}

		function draw() {
			ctx!.clearRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				star.x += star.speedX;
				star.y += star.speedY;

				if (star.x < 0) star.x = canvas.width;
				if (star.x > canvas.width) star.x = 0;
				if (star.y < 0) star.y = canvas.height;
				if (star.y > canvas.height) star.y = 0;

				if (star.isGlowing) {
					star.opacity -= star.fadeSpeed;
					if (star.opacity <= 0.1 || star.opacity >= 0.9) {
						star.fadeSpeed = -star.fadeSpeed;
					}
				}

				ctx!.fillStyle = `rgba(218, 191, 255, ${star.opacity})`;
				ctx!.shadowBlur = star.isGlowing ? star.size * 3 : 0;
				ctx!.shadowColor = '#dabfff';

				ctx!.beginPath();
				ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx!.fill();
			});

			ctx!.shadowBlur = 0; 
			animationFrameId = requestAnimationFrame(draw);
		}

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		draw();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		pointer-events: none;
		background: #121213;
	}
</style>