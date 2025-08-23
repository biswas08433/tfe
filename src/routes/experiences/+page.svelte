<script lang="ts">
	import { experiences } from '$lib/stores';
	import { fade } from 'svelte/transition';

	// Active experience and gallery index
	let activeExperienceIndex = $state(0);
	let activeGalleryIndex = $state(0);
	let isFullscreen = $state(false);
	let fullscreenImage: { src: string; caption: string } | null = $state(null);

	function showFullscreen() {
		fullscreenImage = experiences[activeExperienceIndex].gallery[activeGalleryIndex];
		isFullscreen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeFullscreen() {
		isFullscreen = false;
		document.body.style.overflow = 'auto';
		setTimeout(() => {
			fullscreenImage = null;
		}, 300);
	}
</script>

<svelte:head>
	<title>Trek Experiences | TravelTrek</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-[30vh] items-center justify-center sm:min-h-[70vh]">
	<!-- Background Image -->
	<div
		class="absolute inset-0 z-0 rounded-2xl border-2 border-slate-800 bg-cover bg-center bg-no-repeat sm:rounded-none"
		style="background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070')"
	></div>
	<!-- Top to Bottom Gradient Overlay -->
	<div
		class="absolute inset-0 z-0 rounded-2xl sm:rounded-none"
		style="background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7));"
	></div>

	<!-- Content -->
	<div
		class="relative z-10 mx-auto max-w-7xl rounded-2xl px-4 py-4 text-center text-white drop-shadow-2xl
		   sm:mx-6 sm:max-w-2xl
		   lg:max-w-7xl lg:px-8"
	>
		<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
			Our <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Experiences</span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
			Discover your perfect adventure from our curated collection of world-class treks
		</p>
	</div>
</section>

<!-- Experience Showcase -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<p class="text-lg text-gray-600">
				Explore our collection of completed treks and adventures. Each experience represents countless memories,
				challenges overcome, and the magic of exploring our world's most beautiful landscapes.
			</p>
		</div>

		<!-- Experience Tabs -->
		<div class="mb-12">
			<nav class="flex justify-center">
				<div class="flex flex-wrap gap-2 rounded-xl bg-white p-2 shadow-lg">
					{#each experiences as experience, index}
						<button
							class="rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 {activeExperienceIndex ===
							index
								? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
								: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
							onclick={() => (activeExperienceIndex = index)}
						>
							{experience.title}
						</button>
					{/each}
				</div>
			</nav>
		</div>

		<!-- Experience Content -->
		<div class="relative">
			{#each experiences as experience, expIndex}
				<div
					class="experience-item {activeExperienceIndex === expIndex
						? 'opacity-100'
						: 'pointer-events-none absolute inset-0 opacity-0'} transition-opacity duration-500"
				>
					<div class="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
						<div class="lg:col-span-2">
							<h3 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
								{experience.title}
							</h3>
							<div class="mb-4 flex flex-wrap gap-4 text-blue-600">
								<div class="flex items-center">
									<i class="fas fa-calendar-alt mr-2"></i>
									<span class="font-semibold">{experience.date}</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-map-marker-alt mr-2"></i>
									<span class="font-semibold">{experience.location}</span>
								</div>
							</div>
							<p class="text-lg leading-relaxed text-gray-700">{experience.description}</p>
						</div>
						<div class="lg:col-span-1">
							<div class="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105">
								<div class="mb-4 text-center">
									<i class="fas fa-quote-left text-3xl text-blue-500"></i>
								</div>
								<blockquote class="mb-4 text-center text-gray-700 italic">
									"{experience.testimonial.quote}"
								</blockquote>
								<p class="text-center font-bold text-gray-900">
									— {experience.testimonial.author}
								</p>
							</div>
						</div>
					</div>

					<!-- Gallery -->
					<div class="mb-12">
						<h4 class="mb-8 text-center text-3xl font-bold text-gray-900">Journey Gallery</h4>

						<!-- Main Gallery -->
						<div class="relative mx-auto max-w-4xl">
							<div class="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
								{#each experience.gallery as image, index}
									<div
										class="absolute inset-0 transition-opacity duration-500 {activeGalleryIndex === index &&
										activeExperienceIndex === expIndex
											? 'opacity-100'
											: 'opacity-0'}"
										onclick={() => showFullscreen()}
										role="button"
										onkeydown={(e) => e.key === 'Enter' && showFullscreen()}
										tabindex="0"
									>
										<img src={image.src} alt={image.caption} class="h-full w-full cursor-pointer object-cover" />
										<div
											class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100"
										>
											<i class="fas fa-expand text-4xl text-white"></i>
										</div>
									</div>
								{/each}

								<!-- Navigation buttons -->
								<button
									class="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
									onclick={() => {
										activeGalleryIndex =
											(activeGalleryIndex - 1 + experience.gallery.length) % experience.gallery.length;
									}}
									aria-label="Previous image"
								>
									<i class="fas fa-chevron-left"></i>
								</button>
								<button
									class="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
									onclick={() => {
										activeGalleryIndex = (activeGalleryIndex + 1) % experience.gallery.length;
									}}
									aria-label="Next image"
								>
									<i class="fas fa-chevron-right"></i>
								</button>
							</div>

							<!-- Image Caption -->
							<div class="mt-4 text-center">
								<p class="text-lg text-gray-700">
									{experience.gallery[activeGalleryIndex]?.caption || ''}
								</p>
							</div>
						</div>

						<!-- Thumbnails -->
						<div class="mt-8 flex justify-center gap-4 overflow-x-auto pb-4">
							{#each experience.gallery as image, index}
								<button
									class="flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 {activeGalleryIndex ===
										index && activeExperienceIndex === expIndex
										? 'ring-4 ring-blue-500 ring-offset-2'
										: 'opacity-70 hover:opacity-100'}"
									onclick={() => (activeGalleryIndex = index)}
									aria-label={`View image: ${image.caption}`}
								>
									<img src={image.src} alt="Thumbnail" class="h-16 w-20 object-cover" />
								</button>
							{/each}
						</div>
					</div>

					<!-- Trek Again CTA -->
					<div class="text-center">
						<a
							href="/treks"
							class="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl"
						>
							<span>Experience This Trek</span>
							<i class="fas fa-hiking ml-2"></i>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Fullscreen Image Modal -->
{#if isFullscreen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-all duration-300 {isFullscreen
			? 'visible opacity-100'
			: 'invisible opacity-0'}"
		onclick={closeFullscreen}
		onkeydown={(e) => e.key === 'Escape' && closeFullscreen()}
		role="dialog"
		aria-modal="true"
		aria-label="Image preview"
		tabindex="-1"
		transition:fade={{ duration: 300 }}
	>
		<button
			class="absolute top-4 right-4 z-60 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
			aria-label="Close fullscreen image"
			onclick={closeFullscreen}
		>
			<i class="fas fa-times text-xl"></i>
		</button>

		{#if fullscreenImage}
			<div
				class="relative z-50 flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center"
				role="img"
				aria-label={fullscreenImage.caption}
			>
				<img
					src={fullscreenImage.src}
					alt={fullscreenImage.caption}
					class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
				/>
				{#if fullscreenImage.caption}
					<p class="mt-4 max-w-2xl text-center text-lg text-white opacity-90">
						{fullscreenImage.caption}
					</p>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<!-- Join Future Treks Section -->
<section class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-black/10"></div>
	<div class="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-white/10"></div>
	<div class="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-white/10"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Create Your Own Trek Story</h2>
				<p class="mb-8 text-xl text-blue-100">
					Join our upcoming expeditions and add your adventure to our gallery of experiences.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
					<a
						href="/treks"
						class="inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl"
					>
						Browse Upcoming Treks
					</a>
					<a
						href="/contact"
						class="inline-flex transform items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 hover:shadow-2xl"
					>
						Custom Trek Inquiry
					</a>
				</div>
			</div>
			<div class="relative">
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-4">
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img src="images/experiences/collage/1.jpeg" alt="Trek memories" class="h-48 w-full object-cover" />
						</div>
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img src="images/experiences/collage/2.jpeg" alt="Trek memories" class="h-32 w-full object-cover" />
						</div>
					</div>
					<div class="space-y-4 pt-8">
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img src="images/experiences/collage/3.jpeg" alt="Trek memories" class="h-32 w-full object-cover" />
						</div>
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img src="images/experiences/collage/4.jpeg" alt="Trek memories" class="h-48 w-full object-cover" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
