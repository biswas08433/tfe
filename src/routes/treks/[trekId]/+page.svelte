<script lang="ts">
	import { page } from '$app/state';
	import type { Trek } from '$lib/stores';
	import { treks, getRelatedTreks, Season } from '$lib/stores';

	let trekId = parseInt(page.params.trekId);
	let trek: Trek | null = treks.find((t) => t.id === trekId) || null;
	let relatedTreksList: Trek[] = getRelatedTreks(trekId, trek?.bestSeason || Season.ALL, treks);
</script>

<svelte:head>
	<title>{trek ? `${trek.title} | TravelTrek` : 'Trek Not Found | TravelTrek'}</title>
</svelte:head>

{#if trek}
	<!-- Hero Section -->
	<section
		class="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-32"
	>
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0 bg-black/60"></div>
		<div
			class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
			style="background-image: url('{trek.image}')"
		></div>

		<!-- Content -->
		<div class="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
			<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
				{trek.title}
			</h1>
			<div class="mb-8 flex flex-wrap justify-center gap-3">
				<span
					class="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
				>
					Best Season: {trek.bestSeason}
				</span>
				<span class="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
					{trek.duration}
				</span>
				<span
					class="rounded-full bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
				>
					{trek.distance}
				</span>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-white">
			<i class="fas fa-chevron-down text-2xl"></i>
		</div>
	</section>

	<!-- Main Content Section -->
	<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
				<!-- Main Content -->
				<div class="lg:col-span-2">
					<!-- Description -->
					<div class="mb-12 rounded-2xl bg-white p-8 shadow-lg">
						<h2 class="mb-6 text-3xl font-bold text-gray-900">About This Trek</h2>
						<div class="prose prose-lg max-w-none text-gray-600">
							<p class="mb-6 text-lg leading-relaxed">
								{trek.longDescription || trek.description}
							</p>
						</div>
					</div>

					<!-- Trek Highlights -->
					<div class="mb-12 rounded-2xl bg-white p-8 shadow-lg">
						<h3 class="mb-6 text-2xl font-bold text-gray-900">
							<i class="fas fa-star mr-2 text-yellow-500"></i>Trek Highlights
						</h3>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							{#if trek.highlights}
								{#each trek.highlights as highlight}
									<div class="flex items-start">
										<div
											class="mt-1 mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
										>
											<i class="fas fa-check text-xs text-white"></i>
										</div>
										<p class="text-gray-700">{highlight}</p>
									</div>
								{/each}
							{:else}
								<div class="col-span-2 flex items-start">
									<div
										class="mt-1 mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
									>
										<i class="fas fa-check text-xs text-white"></i>
									</div>
									<p class="text-gray-700">
										Spectacular mountain views, cultural immersion, and challenging yet rewarding terrain
									</p>
								</div>
							{/if}
						</div>
					</div>

					<!-- Detailed Itinerary -->
					{#if trek.itinerary}
						<div class="mb-12 rounded-2xl bg-white p-8 shadow-lg">
							<h3 class="mb-8 text-2xl font-bold text-gray-900">
								<i class="fas fa-route mr-2 text-blue-600"></i>Detailed Itinerary
							</h3>
							<div class="space-y-8">
								{#each trek.itinerary as day, index}
									<div class="group relative">
										<!-- Timeline line (except for last item) -->
										{#if index < trek.itinerary.length - 1}
											<div
												class="absolute top-12 left-6 h-full w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"
											></div>
										{/if}

										<!-- Timeline marker -->
										<div
											class="absolute top-4 left-4 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
										>
											<div class="h-2 w-2 rounded-full bg-white"></div>
										</div>

										<!-- Content -->
										<div
											class="ml-16 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 p-6 transition-all duration-300 group-hover:shadow-md"
										>
											<div class="mb-3 flex items-center gap-3">
												<span
													class="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-sm font-bold text-white"
												>
													Day {day.day}
												</span>
											</div>

											<h4 class="mb-4 text-xl font-bold text-gray-900">{day.title}</h4>
											<p class="mb-4 text-gray-700">{day.description}</p>

											<!-- Day Stats -->
											<div class="mb-4 flex flex-wrap gap-2">
												{#if day.duration}
													<span
														class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
													>
														<i class="fas fa-clock mr-2"></i>{day.duration}
													</span>
												{/if}
												{#if day.distance}
													<span
														class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
													>
														<i class="fas fa-route mr-2"></i>{day.distance}
													</span>
												{/if}
												{#if day.elevation}
													<span
														class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
													>
														<i class="fas fa-mountain mr-2"></i>{day.elevation}
													</span>
												{/if}
											</div>

											<!-- Location Path -->
											{#if day.locations}
												<div class="mb-4 flex flex-wrap items-center gap-2">
													{#each day.locations as location, i}
														<span
															class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white shadow-sm"
															style="background-color: {location.color}"
														>
															<i class="{location.icon} mr-2"></i>
															{location.name}
														</span>
														{#if i < day.locations.length - 1}
															<i class="fas fa-chevron-right text-gray-400"></i>
														{/if}
													{/each}
												</div>
											{/if}

											<!-- Accommodation & Meals -->
											<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
												{#if day.accommodation}
													<div class="flex items-center text-gray-600">
														<i class="fas fa-bed mr-2 text-blue-600"></i>
														<span><strong>Stay:</strong> {day.accommodation}</span>
													</div>
												{/if}
												{#if day.meals}
													<div class="flex items-center text-gray-600">
														<i class="fas fa-utensils mr-2 text-green-600"></i>
														<span><strong>Meals:</strong> {day.meals}</span>
													</div>
												{/if}
											</div>

											<!-- Day Highlights -->
											{#if day.highlights}
												<div
													class="mt-4 rounded-lg border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 p-4"
												>
													<div class="flex items-start">
														<i class="fas fa-star mt-1 mr-2 text-yellow-600"></i>
														<div>
															<p class="font-semibold text-yellow-800">Day Highlights:</p>
															<p class="text-yellow-700">{day.highlights}</p>
														</div>
													</div>
												</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Call to Action -->
					<div
						class="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-center text-white shadow-xl"
					>
						<h3 class="mb-4 text-2xl font-bold">Ready to Experience {trek.title}?</h3>
						<p class="mb-6 text-blue-100">Contact our expert guides to plan your adventure</p>
						<a
							href="/contact"
							class="inline-flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50"
						>
							<span>Book This Trek</span>
							<i class="fas fa-arrow-right ml-2"></i>
						</a>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="lg:col-span-1">
					<!-- Trek Details Card -->
					<div class="sticky top-8 mb-8 rounded-2xl bg-white p-6 shadow-lg">
						<h3 class="mb-6 text-xl font-bold text-gray-900">
							<i class="fas fa-info-circle mr-2 text-blue-600"></i>Trek Details
						</h3>

						<div class="space-y-4">
							<div class="flex items-center justify-between border-b border-gray-100 pb-3">
								<span class="font-medium text-gray-600">Duration</span>
								<span class="font-bold text-gray-900">{trek.duration}</span>
							</div>
							<div class="flex items-center justify-between border-b border-gray-100 pb-3">
								<span class="font-medium text-gray-600">Distance</span>
								<span class="font-bold text-gray-900">{trek.distance}</span>
							</div>
							<div class="flex items-center justify-between border-b border-gray-100 pb-3">
								<span class="font-medium text-gray-600">Max Altitude</span>
								<span class="font-bold text-gray-900">{trek.altitude}</span>
							</div>
							<div class="flex items-center justify-between border-b border-gray-100 pb-3">
								<span class="font-medium text-gray-600">Location</span>
								<span class="font-bold text-gray-900">{trek.location}</span>
							</div>
							<div class="flex items-center justify-between border-b border-gray-100 pb-3">
								<span class="font-medium text-gray-600">Best Season</span>
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">{trek.bestSeason}</span
								>
							</div>
						</div>

						<div class="mt-6">
							<a
								href="/contact"
								class="block w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
							>
								Enquire Now
							</a>
						</div>
					</div>

					<!-- Key Details Card (if available) -->
					{#if trek && trek.showKeyDetails}
						<div class="mb-8 rounded-2xl bg-white p-6 shadow-lg">
							<h3 class="mb-6 text-xl font-bold text-gray-900">
								<i class="fas fa-key mr-2 text-green-600"></i>Key Details
							</h3>

							<!-- Dates -->
							{#if trek.dates && trek.dates.length > 0}
								<div class="mb-6">
									<h4 class="mb-3 flex items-center text-sm font-semibold text-gray-700">
										<i class="fas fa-calendar-alt mr-2 text-blue-500"></i>Trek Dates
									</h4>
									{#if trek.dates.length >= 2}
										<div class="flex items-center justify-center gap-2">
											<span class="rounded-lg bg-blue-100 px-3 py-2 text-sm font-bold text-blue-800"
												>{trek.dates[0]}</span
											>
											<span class="text-gray-400">to</span>
											<span class="rounded-lg bg-blue-100 px-3 py-2 text-sm font-bold text-blue-800"
												>{trek.dates[trek.dates.length - 1]}</span
											>
										</div>
									{:else}
										<span class="rounded-lg bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">{trek.dates[0]}</span
										>
									{/if}
								</div>
							{/if}

							<!-- Financial Details -->
							<div class="space-y-4">
								{#if trek.budget}
									<div class="flex items-center">
										<i class="fas fa-money-bill-wave mr-3 text-green-500"></i>
										<div>
											<p class="text-sm text-gray-600">Budget</p>
											<p class="font-bold text-gray-900">{trek.budget}</p>
										</div>
									</div>
								{/if}

								{#if trek.advancePayment}
									<div class="flex items-center">
										<i class="fas fa-credit-card mr-3 text-blue-500"></i>
										<div>
											<p class="text-sm text-gray-600">Advance Payment</p>
											<p class="font-bold text-gray-900">{trek.advancePayment}</p>
										</div>
									</div>
								{/if}

								{#if trek.groupSize}
									<div class="flex items-center">
										<i class="fas fa-users mr-3 text-purple-500"></i>
										<div>
											<p class="text-sm text-gray-600">Group Size</p>
											<p class="font-bold text-gray-900">{trek.groupSize}</p>
										</div>
									</div>
								{/if}
							</div>

							<div class="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
								<div class="flex items-start">
									<i class="fas fa-info-circle mt-0.5 mr-2 text-yellow-600"></i>
									<p class="text-sm text-yellow-800">
										Prices may vary based on group size and specific requirements. Contact us for custom pricing.
									</p>
								</div>
							</div>
						</div>
					{/if}

					<!-- Related Treks -->
					{#if relatedTreksList.length > 0}
						<div class="rounded-2xl bg-white p-6 shadow-lg">
							<h3 class="mb-6 text-xl font-bold text-gray-900">
								<i class="fas fa-hiking mr-2 text-orange-500"></i>You Might Also Like
							</h3>
							<div class="space-y-4">
								{#each relatedTreksList as relatedTrek}
									<div
										class="group rounded-lg border border-gray-100 p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
									>
										<div class="flex items-center space-x-4">
											<div class="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
												<img
													src={relatedTrek.image}
													alt={relatedTrek.title}
													class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
												/>
											</div>
											<div class="flex-1">
												<h4 class="font-semibold text-gray-900 group-hover:text-blue-600">{relatedTrek.title}</h4>
												<p class="text-sm text-gray-500">{relatedTrek.duration} | {relatedTrek.distance}</p>
												<a
													href={`/treks/${relatedTrek.id}`}
													class="mt-1 text-sm font-medium text-blue-600 hover:text-blue-800"
												>
													View Trek →
												</a>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Trek Not Found -->
	<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-32">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<div class="rounded-2xl bg-white p-12 shadow-xl">
				<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
					<i class="fas fa-exclamation-triangle text-4xl text-red-500"></i>
				</div>
				<h2 class="mb-4 text-3xl font-bold text-gray-900">Trek Not Found</h2>
				<p class="mb-8 text-lg text-gray-600">The trek you are looking for does not exist or the trek ID is invalid.</p>
				<a
					href="/treks"
					class="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
				>
					<i class="fas fa-arrow-left mr-2"></i>
					<span>Back to Treks</span>
				</a>
			</div>
		</div>
	</section>
{/if}
