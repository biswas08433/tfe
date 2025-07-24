<script>
  import { onMount } from "svelte";
  import { treks, seasons, getTreksByCategory } from "$lib/stores";

  let treksList = [];
  let categoriesList = [];
  let selectedCategory = "all";
  let filteredTreks = [];

  // Subscribe to stores
  onMount(() => {
    const treksUnsubscribe = treks.subscribe((value) => {
      treksList = value;
      updateFilteredTreks();
    });

    const seasonsUnsubscribe = seasons.subscribe((value) => {
      categoriesList = value;
    });

    // Unsubscribe when component is destroyed
    return () => {
      treksUnsubscribe();
      seasonsUnsubscribe();
    };
  });

  // Update filtered treks when category changes
  function updateFilteredTreks() {
    filteredTreks = getTreksByCategory(selectedCategory, treksList);
  }

  // Reactive statement to update filtered treks when category changes
  $: if (selectedCategory && treksList.length > 0) {
    updateFilteredTreks();
  }
</script>

<svelte:head>
  <title>Treks | TravelTrek</title>
</svelte:head>

<section class="hero is-info is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-2">Our Treks</h1>
      <h2 class="subtitle">Discover your perfect adventure</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <!-- Category Filter -->
    <div class="block mb-5">
      <div class="tabs is-centered is-boxed">
        <ul>
          {#each categoriesList as category}
            <li class:is-active={selectedCategory === category.id}>
              <a
                href="#{category.id}"
                on:click|preventDefault={() => (selectedCategory = category.id)}
              >
                {category.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Trek Cards -->
    <div class="columns is-multiline">
      {#each filteredTreks as trek}
        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={trek.image} alt={trek.title} />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{trek.title}</p>
              <p class="subtitle is-6">
                <span class="tag is-primary">{trek.bestSeason}</span>
                <span class="tag is-info ml-2">{trek.duration}</span>
                <span class="tag is-success ml-2">{trek.distance}</span>
              </p>

              <div class="content">
                <p>{trek.description}</p>
                <div
                  class="is-flex is-justify-content-space-between has-text-grey mt-4"
                >
                  <span>
                    <strong>Max Alt:</strong>
                    {trek.altitude}
                  </span>
                  <span>
                    <strong>Location:</strong>
                    {trek.location}
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href={`/treks/${trek.id}`} class="card-footer-item"
                >Learn More</a
              >
              <a href="/contact" class="card-footer-item">Book Now</a>
            </footer>
          </div>
        </div>
      {/each}
    </div>

    <!-- Empty State -->
    {#if filteredTreks.length === 0}
      <div class="has-text-centered my-6">
        <p class="is-size-4">No treks found in this category.</p>
        <button
          class="button is-primary mt-4"
          on:click={() => (selectedCategory = "all")}
        >
          Show All Treks
        </button>
      </div>
    {/if}
  </div>
</section>

<style>
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
  }
</style>
