<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { treks, getTreksByCategory } from '$lib/stores';
  
  // Trek data from store
  let treksList = [];
  let filteredTreks = [];
  
  // Get category from URL parameter
  $: category = $page.params.category;
  
  // Subscribe to the treks store
  onMount(() => {
    const unsubscribe = treks.subscribe(value => {
      treksList = value;
      if (category) {
        filteredTreks = treksList.filter(trek => trek.category === category);
      }
    });
    
    // Unsubscribe when component is destroyed
    return unsubscribe;
  });
  
  // Update filtered treks when category changes
  $: if (category && treksList.length > 0) {
    filteredTreks = treksList.filter(trek => trek.category === category);
  }
      duration: "7-10 days",
      altitude: "1,200m (John Gardner Pass)",
      location: "Chile"
    }
  ];
  
  // Get the category from URL parameter
  $: category = $page.params.category;
  
  // Define the category details for header display
  const categoryDetails = {
    spring: {
      title: "Spring Treks",
      description: "Spring treks offer blooming wildflowers, mild temperatures, and vibrant landscapes. It's an excellent time for many Himalayan treks before the monsoon arrives. Rhododendron forests are particularly spectacular during this season.",
      color: "is-success"
    },
    summer: {
      title: "Summer Treks",
      description: "Summer is perfect for trekking in higher latitudes and altitudes. European Alps, Scotland, and New Zealand's South Island offer ideal summer trekking conditions with long daylight hours and accessible mountain passes.",
      color: "is-info"
    },
    autumn: {
      title: "Autumn Treks",
      description: "Autumn brings clear skies, stable weather, and spectacular visibility in many mountainous regions. It's the prime season for Himalayan treks, with comfortable temperatures and breathtaking fall colors in many regions.",
      color: "is-warning"
    },
    winter: {
      title: "Winter Treks",
      description: "Winter treks offer unique snow-covered landscapes and fewer crowds. It's an excellent time for lower-altitude treks in warmer regions or Southern Hemisphere adventures, as well as specialized snow treks for experienced hikers.",
      color: "is-link"
    }
  };
  
  // Filter treks by category
  $: categoryInfo = categoryDetails[category] || categoryDetails.beginners;
  $: filteredTreks = treks.filter(trek => trek.category === category);
</script>

<svelte:head>
  <title>{categoryInfo.title} | TravelTrek</title>
</svelte:head>

<section class="hero {categoryInfo.color} is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1">{categoryInfo.title}</h1>
      <h2 class="subtitle is-4">{categoryInfo.description}</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
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
                <span class="tag {categoryInfo.color}">{trek.bestSeason}</span>
                <span class="tag is-info ml-2">{trek.duration}</span>
                <span class="tag is-light ml-2">{trek.difficulty}</span>
              </p>
              
              <div class="content">
                <p>{trek.description}</p>
                <div class="is-flex is-justify-content-space-between has-text-grey mt-4">
                  <span>
                    <strong>Max Alt:</strong> {trek.altitude}
                  </span>
                  <span>
                    <strong>Location:</strong> {trek.location}
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href={`/treks/${trek.id}`} class="card-footer-item">Learn More</a>
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
        <a href="/treks" class="button {categoryInfo.color} mt-4">
          View All Treks
        </a>
      </div>
    {/if}
    
    <div class="has-text-centered mt-6">
      <a href="/treks" class="button is-primary is-outlined">Back to All Treks</a>
    </div>
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
