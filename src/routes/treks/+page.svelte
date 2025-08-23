<script lang="ts">
	import { treks, seasons, getTreksBySeason, type Trek, Season } from '$lib/stores';
	import { onMount } from 'svelte';

	let selectedSeason: Season = $state(Season.ALL);
	let filteredTreks: Trek[] = $state([]);

	// Update filtered treks when category changes
	function updateFilteredTreks() {
		filteredTreks = getTreksBySeason(selectedSeason, treks);
	}

	onMount(() => {
		updateFilteredTreks();
	});
</script>

<svelte:head>
	<title>Treks | TravelTrek</title>
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
			Our <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Treks</span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
			Discover your perfect adventure from our curated collection of world-class treks
		</p>
	</div>
</section>

<!-- Filter Section -->
<section class="bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 text-center">
			<h2 class="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Filter by Season</h2>
			<div class="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
		</div>

		<!-- Season Filter Tabs -->
		<div class="flex flex-wrap justify-center gap-2 md:gap-4">
			{#each seasons as season}
				<button
					class="transform rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none {selectedSeason ===
					season
						? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
						: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
					onclick={() => ((selectedSeason = season), updateFilteredTreks())}
				>
					{season}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Treks Grid Section -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if filteredTreks.length > 0}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredTreks as trek}
					<div
						class="group flex transform flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<!-- Trek Image -->
						<div class="relative">
							<img
								src={trek.image}
								alt={trek.title}
								class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>

						<!-- Trek Content -->
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-3 text-xl font-bold text-gray-900">{trek.title}</h3>

							<!-- Tags -->
							<div class="mb-4 flex flex-wrap gap-2">
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
									{trek.bestSeason}
								</span>
								<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
									{trek.duration}
								</span>
								<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
									{trek.distance}
								</span>
							</div>

							<!-- Description -->
							<p class="mb-4 line-clamp-3 flex-1 text-gray-600">{trek.description}</p>

							<!-- Trek Details -->
							<div class="mb-6 grid grid-cols-2 gap-4 text-sm text-gray-500">
								<div class="flex items-center">
									<i class="fas fa-mountain mr-2 text-gray-400"></i>
									<span><strong>Max Alt:</strong> {trek.altitude}</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-map-marker-alt mr-2 text-gray-400"></i>
									<span><strong>Location:</strong> {trek.location}</span>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="flex gap-3">
								<a
									href={`/treks/${trek.id}`}
									class="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
								>
									Learn More
								</a>
								<a
									href="/contact"
									class="flex-1 transform rounded-lg border-2 border-blue-600 px-4 py-2 text-center font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
								>
									Book Now
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Empty State -->
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
					<i class="fas fa-search text-4xl text-gray-400"></i>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">No treks found</h3>
				<p class="mb-6 text-lg text-gray-600">No treks match the selected season. Try a different filter.</p>
				<button
					class="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
					onclick={() => ((selectedSeason = Season.ALL), updateFilteredTreks())}
				>
					Show All Treks
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- Call to Action -->
<section
	class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 py-20 sm:rounded-none"
>
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-black/10"></div>
	<div class="absolute top-0 left-0 h-64 w-64 -translate-x-32 -translate-y-32 rounded-full bg-white/10"></div>
	<div class="absolute right-0 bottom-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-white/10"></div>

	<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Can't Find Your Perfect Trek?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
			Our trek experts can help you find or customize the perfect adventure for your needs
		</p>
		<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
			<a
				href="/contact"
				class="inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl"
			>
				<span>Contact Us</span>
				<i class="fas fa-comments ml-2"></i>
			</a>
			<a
				href="/custom-treks"
				class="inline-flex transform items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600"
			>
				<span>Custom Treks</span>
				<i class="fas fa-route ml-2"></i>
			</a>
		</div>
	</div>
</section>
