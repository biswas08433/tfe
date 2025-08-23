<script lang="ts">
	import { teamMembers, Designation } from '$lib/stores';

	const designations = Object.values(Designation);
	const teamByDesignation: Record<string, typeof teamMembers> = {};

	for (const member of teamMembers) {
		const designation = member.designation;
		if (!teamByDesignation[designation]) {
			teamByDesignation[designation] = [];
		}
		teamByDesignation[designation].push(member);
	}

	// Define colors for each designation category
	const designationColors: Record<string, string> = {
		[Designation.Administration_Founder]: 'from-blue-500 to-purple-600',
		[Designation.Technical_Trek_Guides_and_Leaders]: 'from-green-500 to-blue-500',
		[Designation.Developer_and_Promotional_Team]: 'from-yellow-500 to-orange-500',
		[Designation.Other_Core_Members]: 'from-purple-500 to-indigo-600'
	};

	function getDesignationColor(designation: string) {
		return designationColors[designation] || 'from-gray-500 to-gray-600';
	}
</script>

<svelte:head>
	<title>Our Team | TravelTrek</title>
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
			Our <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Team</span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
			Discover your perfect adventure from our curated collection of world-class treks
		</p>
	</div>
</section>

<!-- Team Introduction -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<p class="text-lg leading-relaxed text-gray-700">
				Our team of experienced guides and adventure specialists are dedicated to creating unforgettable trekking
				experiences. With backgrounds ranging from professional mountaineering to environmental conservation, each
				member brings unique expertise to ensure your journey is safe, educational, and transformative.
			</p>
		</div>
	</div>
</section>

<!-- Team Members by Designation -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#each designations as designation}
			{#if teamByDesignation[designation] && teamByDesignation[designation].length > 0}
				<div class="mb-20 last:mb-0">
					<!-- Category Header -->
					<div class="mb-12 text-center">
						<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{designation}</h2>
						<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r {getDesignationColor(designation)}"></div>
					</div>

					<!-- Team Members Grid -->
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{#each teamByDesignation[designation] as member}
							<div
								class="group transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
							>
								<!-- Member Image -->
								<div class="relative overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>

									<!-- Social Overlay -->
									<div
										class="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									>
										<div class="flex space-x-4">
											{#if member.social.twitter}
												<a
													href={member.social.twitter}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Twitter"
													class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
												>
													<i class="fab fa-twitter"></i>
												</a>
											{/if}
											{#if member.social.instagram}
												<a
													href={member.social.instagram}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Instagram"
													class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-pink-500"
												>
													<i class="fab fa-instagram"></i>
												</a>
											{/if}
											{#if member.social.linkedin}
												<a
													href={member.social.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="LinkedIn"
													class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-600"
												>
													<i class="fab fa-linkedin"></i>
												</a>
											{/if}
											{#if member.social.facebook}
												<a
													href={member.social.facebook}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Facebook"
													class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-700"
												>
													<i class="fab fa-facebook"></i>
												</a>
											{/if}
											{#if member.social.website}
												<a
													href={member.social.website}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Website"
													class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-600"
												>
													<i class="fas fa-globe"></i>
												</a>
											{/if}
										</div>
									</div>
								</div>

								<!-- Member Info -->
								<div class="p-6">
									<h3 class="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
									<p class="mb-4 text-sm font-semibold text-blue-600">{member.position}</p>
									<p class="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
										{member.bio}
									</p>

									<!-- Expertise Tags -->
									{#if member.expertise && member.expertise.length > 0}
										<div class="flex flex-wrap gap-2">
											{#each member.expertise as skill}
												<span
													class="rounded-full bg-gradient-to-r {getDesignationColor(
														designation
													)} px-3 py-1 text-xs font-medium text-white"
												>
													{skill}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<!-- Join Our Team Section -->
<section class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-black/10"></div>
	<div class="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-white/10"></div>
	<div class="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-white/10"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Join Our Team</h2>
				<p class="mb-6 text-xl text-blue-100">
					We're always looking for passionate outdoor enthusiasts to join our growing team of trek guides and
					specialists.
				</p>
				<p class="mb-8 text-blue-200">
					If you have experience in adventure tourism, mountaineering, environmental conservation, or related fields,
					and a passion for creating meaningful experiences for travelers, we'd love to hear from you.
				</p>
				<a
					href="/contact"
					class="inline-flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl"
				>
					<span>Get In Touch</span>
					<i class="fas fa-arrow-right ml-2"></i>
				</a>
			</div>
			<div class="relative">
				<!-- Team Photo Collage -->
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-4">
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500&h=300"
								alt="Team collaboration"
								class="h-48 w-full object-cover"
							/>
						</div>
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img
								src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=500&h=200"
								alt="Adventure guides"
								class="h-32 w-full object-cover"
							/>
						</div>
					</div>
					<div class="space-y-4 pt-8">
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img
								src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=500&h=200"
								alt="Team training"
								class="h-32 w-full object-cover"
							/>
						</div>
						<div
							class="transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
						>
							<img
								src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=500&h=300"
								alt="Team meeting"
								class="h-48 w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Team Statistics/Info Cards (Optional Enhancement) -->
<section class="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Our Team</h2>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
				>
					<i class="fas fa-medal text-2xl text-white"></i>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gray-900">Certified Experts</h3>
				<p class="text-gray-600">All our guides are professionally certified and trained in mountain safety</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-500"
				>
					<i class="fas fa-mountain text-2xl text-white"></i>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gray-900">Local Knowledge</h3>
				<p class="text-gray-600">Deep understanding of regional terrain, weather, and cultural insights</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500"
				>
					<i class="fas fa-first-aid text-2xl text-white"></i>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gray-900">Safety First</h3>
				<p class="text-gray-600">Wilderness first aid certified with emergency response training</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"
				>
					<i class="fas fa-heart text-2xl text-white"></i>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gray-900">Passionate</h3>
				<p class="text-gray-600">Genuine love for the outdoors and sharing adventures with others</p>
			</div>
		</div>
	</div>
</section>
