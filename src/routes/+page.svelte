<script lang="ts">
	import { featuredTreks, upcomingTreks } from '$lib/stores';
</script>

<!-- Hero Section -->
<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0 bg-black/10"></div>
	<div
		class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
		style="background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070')"
	></div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
		<div class="mb-8">
			<img src="/logo.png" alt="TravelTrek Logo" class="mx-auto h-24 w-auto drop-shadow-lg" />
		</div>

		<div
			class="relative z-10 mx-auto max-w-7xl rounded-2xl bg-indigo-950 p-8 px-16 pb-3 text-center text-white drop-shadow-2xl"
		>
			<h1 class="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
				Discover Your Next
				<span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Adventure </span>
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
				Explore breathtaking treks and travel destinations around the world
			</p>
		</div>
		<div class="mt-10">
			<a
				href="/treks"
				class="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl"
			>
				<span>Explore Treks</span>
				<i class="fas fa-arrow-right ml-2"></i>
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-white">
		<i class="fas fa-chevron-down text-2xl"></i>
	</div>
</section>

<!-- Upcoming Treks Section -->
<section class="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Upcoming Treks</h2>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if upcomingTreks.length > 0}
				{#each upcomingTreks as trek}
					<div
						class="group transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div class="relative">
							<img
								src={trek.image}
								alt={trek.title}
								class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div
								class="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-yellow-900 shadow-md"
							>
								New
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-xl font-bold text-gray-900">{trek.title}</h3>
							<div class="mb-4 flex flex-wrap gap-2">
								<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
									>{trek.bestSeason}</span
								>
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">{trek.duration}</span
								>
								<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
									>{trek.distance}</span
								>
							</div>
							<p class="mb-4 line-clamp-3 text-gray-600">{trek.description}</p>
							<a
								href={`/treks/${trek.id}`}
								class="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
							>
								Learn more
								<i class="fas fa-chevron-right ml-1"></i>
							</a>
						</div>
					</div>
				{/each}
			{:else}
				<div class="col-span-full">
					<div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-100 p-6 text-center">
						<div class="mb-4 flex items-center justify-center">
							<i class="fas fa-exclamation-circle text-6xl text-yellow-500"></i>
						</div>
						<p class="text-lg font-medium text-yellow-800">
							No upcoming treks at the moment. Check back soon for new adventures!
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Featured Treks Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Featured Treks</h2>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredTreks as trek}
				<div
					class="group transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="relative">
						<img
							src={trek.image}
							alt={trek.title}
							class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
					<div class="p-6">
						<h3 class="mb-3 text-xl font-bold text-gray-900">{trek.title}</h3>
						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">{trek.bestSeason}</span
							>
							<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>{trek.duration}</span
							>
							<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{trek.distance}</span
							>
						</div>
						<p class="mb-4 line-clamp-3 text-gray-600">{trek.description}</p>
						<a
							href={`/treks/${trek.id}`}
							class="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
						>
							Learn more
							<i class="fas fa-chevron-right ml-1"></i>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Trek Categories Section -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Best Seasons for Trekking</h2>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div
				class="group transform rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-red-500 transition-transform group-hover:scale-110"
				>
					<i class="fas fa-seedling text-2xl text-white"></i>
				</div>
				<h3 class="mb-3 text-xl font-bold text-gray-900">Spring Treks</h3>
				<p class="mb-6 text-gray-600">Perfect for wildflowers and mild temperatures. Ideal for many Himalayan treks.</p>
				<a
					href="/treks/categories/spring"
					class="inline-block transform rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-red-600"
				>
					Explore
				</a>
			</div>

			<div
				class="group transform rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 transition-transform group-hover:scale-110"
				>
					<i class="fas fa-sun text-2xl text-white"></i>
				</div>
				<h3 class="mb-3 text-xl font-bold text-gray-900">Summer Treks</h3>
				<p class="mb-6 text-gray-600">Great for European Alps and higher latitude regions with long daylight hours.</p>
				<a
					href="/treks/categories/summer"
					class="inline-block transform rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-orange-600"
				>
					Explore
				</a>
			</div>

			<div
				class="group transform rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 transition-transform group-hover:scale-110"
				>
					<i class="fas fa-leaf text-2xl text-white"></i>
				</div>
				<h3 class="mb-3 text-xl font-bold text-gray-900">Autumn Treks</h3>
				<p class="mb-6 text-gray-600">Clear skies and pleasant temperatures in the Himalayas. Beautiful fall colors.</p>
				<a
					href="/treks/categories/autumn"
					class="inline-block transform rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600"
				>
					Explore
				</a>
			</div>

			<div
				class="group transform rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 transition-transform group-hover:scale-110"
				>
					<i class="fas fa-snowflake text-2xl text-white"></i>
				</div>
				<h3 class="mb-3 text-xl font-bold text-gray-900">Winter Treks</h3>
				<p class="mb-6 text-gray-600">Ideal for low-altitude treks and Southern Hemisphere adventures. Snow scenery.</p>
				<a
					href="/treks/categories/winter"
					class="inline-block transform rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-600"
				>
					Explore
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-black/10"></div>
	<div class="absolute top-0 left-0 h-64 w-64 -translate-x-32 -translate-y-32 rounded-full bg-white/10"></div>
	<div class="absolute right-0 bottom-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-white/10"></div>

	<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Plan Your Adventure?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl text-blue-100">Contact our trek experts for personalized itineraries</p>
		<a
			href="/contact"
			class="inline-flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl"
		>
			<span>Contact Us</span>
			<i class="fas fa-comments ml-2"></i>
		</a>
	</div>
</section>
