<script>
</script>

<svelte:head>
	<title>Contact Us | TravelTrek</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
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
			Our <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Contact</span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
			Discover your perfect adventure from our curated collection of world-class treks
		</p>
	</div>
</section>

<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<div class="rounded-2xl bg-white p-8 text-center shadow-lg">
					<div class="mb-6">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
						>
							<i class="fas fa-paper-plane text-2xl text-white"></i>
						</div>
						<h2 class="mb-4 text-2xl font-bold text-gray-900">Send Us a Message</h2>
						<p class="leading-relaxed text-gray-600">
							Have questions about our treks or need custom planning assistance? Fill out our detailed contact form to
							get personalized help from our adventure specialists.
						</p>
					</div>

					<a
						href="https://forms.gle/qpLpbttoUfKMUSPf8"
						class="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fas fa-paper-plane mr-3"></i>
						<span>Complete Our Contact Form</span>
					</a>

					<p class="mt-6 flex items-center justify-center text-sm text-gray-500">
						<i class="fas fa-clock mr-2"></i>
						We typically respond to inquiries within 24-48 hours
					</p>
				</div>
			</div>

			<!-- Contact Information -->
			<div class="space-y-6">
				<div class="rounded-2xl bg-white p-6 shadow-lg">
					<div class="mb-6">
						<div
							class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500"
						>
							<i class="fas fa-info-circle text-lg text-white"></i>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Contact Information</h3>
					</div>

					<div class="space-y-4">
						<div class="flex items-start space-x-3">
							<div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
								<i class="fas fa-phone text-sm text-green-600"></i>
							</div>
							<div>
								<p class="font-semibold text-gray-900">Phone/WhatsApp</p>
								<p class="text-gray-600">+91 94773 95560</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
								<i class="fas fa-envelope text-sm text-blue-600"></i>
							</div>
							<div>
								<p class="font-semibold text-gray-900">Email</p>
								<p class="break-all text-gray-600">theflyingeagleind@gmail.com</p>
							</div>
						</div>

						<a
							target="_blank"
							href="mailto:theflyingeagleind@gmail.com"
							class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
						>
							<i class="fas fa-envelope mr-2"></i>
							<span>Send Email</span>
						</a>

						<div class="flex items-start space-x-3 pt-4">
							<div class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
								<i class="fas fa-clock text-sm text-purple-600"></i>
							</div>
							<div>
								<p class="font-semibold text-gray-900">Hours</p>
								<div class="space-y-1 text-sm text-gray-600">
									<p>Monday - Friday: 9am - 5pm</p>
									<p>Saturday: 10am - 2pm</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-2xl bg-white p-6 shadow-lg">
					<div class="mb-4">
						<div
							class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-red-500"
						>
							<i class="fas fa-heart text-lg text-white"></i>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Follow Us</h3>
					</div>

					<div class="space-y-3">
						<a
							class="group flex items-center justify-between rounded-lg bg-blue-50 p-3 transition-colors duration-300 hover:bg-blue-100"
							href="/"
							rel="noopener noreferrer"
						>
							<div class="flex items-center">
								<i class="fab fa-facebook-f mr-3 text-lg text-blue-600"></i>
								<span class="font-medium text-gray-900">Facebook</span>
							</div>
							<i class="fas fa-external-link-alt text-gray-400 transition-colors group-hover:text-blue-600"></i>
						</a>

						<a
							class="group flex items-center justify-between rounded-lg bg-pink-50 p-3 transition-colors duration-300 hover:bg-pink-100"
							href="https://www.instagram.com/theflyingeagleind?igsh=MXhnOXNramx2bmg5cQ=="
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="flex items-center">
								<i class="fab fa-instagram mr-3 text-lg text-pink-600"></i>
								<span class="font-medium text-gray-900">Instagram</span>
							</div>
							<i class="fas fa-external-link-alt text-gray-400 transition-colors group-hover:text-pink-600"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<div class="space-y-6">
				<div class="rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg">
					<div class="flex items-start space-x-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
							<i class="fas fa-hiking text-blue-600"></i>
						</div>
						<div>
							<h3 class="mb-3 text-lg font-bold text-gray-900">Do I need previous trekking experience?</h3>
							<p class="leading-relaxed text-gray-600">
								It depends on the trek. Beginner treks don't require previous experience, while moderate and advanced
								treks do require some level of trekking fitness and experience.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg">
					<div class="flex items-start space-x-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
							<i class="fas fa-backpack text-green-600"></i>
						</div>
						<div>
							<h3 class="mb-3 text-lg font-bold text-gray-900">What gear do I need to bring?</h3>
							<p class="leading-relaxed text-gray-600">
								We provide a detailed packing list customized for each trek after booking. Generally, you'll need
								appropriate hiking boots, clothing for varying temperatures, a good backpack, and personal items.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="space-y-6">
				<div class="rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg">
					<div class="flex items-start space-x-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
							<i class="fas fa-dumbbell text-purple-600"></i>
						</div>
						<div>
							<h3 class="mb-3 text-lg font-bold text-gray-900">How physically fit do I need to be?</h3>
							<p class="leading-relaxed text-gray-600">
								The required fitness level varies by trek difficulty. For any trek, we recommend regular cardio exercise
								and hill walking for at least 1-2 months before your trip.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg">
					<div class="flex items-start space-x-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
							<i class="fas fa-mountain text-red-600"></i>
						</div>
						<div>
							<h3 class="mb-3 text-lg font-bold text-gray-900">What about altitude sickness?</h3>
							<p class="leading-relaxed text-gray-600">
								Our itineraries include proper acclimatization days to minimize risk. Our guides are trained to
								recognize and respond to altitude sickness. We also recommend consulting your doctor before
								high-altitude treks.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
