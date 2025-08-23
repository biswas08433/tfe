<script lang="ts">
	import '../app.css';

	let { children } = $props();

	// Toggle burger menu on mobile
	let navbarActive: boolean = $state(false);

	function toggleNavbar() {
		navbarActive = !navbarActive;
	}
</script>

<!-- Navigation -->
<nav class="bg-slate-800 shadow-lg" aria-label="main navigation">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Brand Section -->
			<div class="flex items-center space-x-4">
				<a href="/" class="flex items-center space-x-2 text-white transition-colors hover:text-indigo-100">
					<img src="/logo.png" alt="The Flyin' Eagle Logo" class="h-12 w-auto" />
					<span class="hidden text-xl font-bold sm:block">The Flyin' Eagle</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/treks"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Treks
				</a>
				<a
					href="/experiences"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Experiences
				</a>
				<a
					href="/team"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Our Team
				</a>
				<a
					href="/contact"
					class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
				>
					Contact Us
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleNavbar}
					class="rounded-md p-2 text-white transition-colors hover:bg-blue-500 hover:text-blue-100"
					aria-label="menu"
					aria-expanded={navbarActive}
				>
					<i class="fas fa-bars h-6 w-6"></i>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation Menu -->
		<div class="md:hidden {navbarActive ? 'block' : 'hidden'}">
			<div class="mt-2 space-y-1 px-2 pt-2 pb-3">
				<a
					href="/treks"
					class="block rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Treks
				</a>
				<a
					href="/experiences"
					class="block rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Experiences
				</a>
				<a
					href="/team"
					class="block rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-100 hover:text-slate-800"
				>
					Our Team
				</a>
				<a
					href="/contact"
					class="block rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
				>
					Contact Us
				</a>
			</div>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="min-h-screen bg-gray-50">
	<div class="mx-auto max-w-full px-4 py-8 sm:p-0 lg:p-0">
		{@render children()}
	</div>
</main>

<!-- Footer -->
<footer class="bg-slate-800 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-gray-300">
				<span class="font-semibold">The Flying Eagle</span>. Copyright &copy; 2023. All rights reserved.
			</p>
		</div>
	</div>
</footer>
