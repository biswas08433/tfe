<script>
  import { onMount } from 'svelte';
  import { treks, featuredTreks, upcomingTreks } from '$lib/stores';
  
  let featuredTreksList = [];
  let upcomingTreksList = [];
  
  // Subscribe to the stores
  onMount(() => {
    const unsubscribeFeatured = featuredTreks.subscribe(value => {
      featuredTreksList = value;
    });
    
    const unsubscribeUpcoming = upcomingTreks.subscribe(value => {
      upcomingTreksList = value;
    });
    
    // Unsubscribe when component is destroyed
    return () => {
      unsubscribeFeatured();
      unsubscribeUpcoming();
    };
  });
</script>

<svelte:head>
  <title>TravelTrek - Adventure Awaits</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="mb-5">
      <img src="/logo.png" alt="TravelTrek Logo" style="height: 100px;" />
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-7">
          <p class="title is-1">
            Discover Your Next Adventure
          </p>
          <p class="subtitle is-4">
            Explore breathtaking treks and travel destinations around the world
          </p>
          <div class="buttons mt-5">
            <a href="/treks" class="button is-light is-large">
              Explore Treks
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Upcoming Treks Section -->
<section class="section has-background-warning-light">
  <div class="container">
    <h2 class="title is-2 has-text-centered mb-6">Upcoming Treks</h2>
    
    <div class="columns is-multiline">
      {#if upcomingTreksList.length > 0}
        {#each upcomingTreksList as trek}
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src={trek.image} alt={trek.title} />
                  <div class="upcoming-badge">New</div>
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">{trek.title}</p>
                <p class="subtitle is-6">
                  <span class="tag is-warning">{trek.bestSeason}</span>
                  <span class="tag is-info ml-2">{trek.duration}</span>
                  <span class="tag is-success ml-2">{trek.distance}</span>
                </p>
                <div class="content">
                  {trek.description}
                  <br>
                  <a href={`/treks/${trek.id}`}>Learn more</a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <div class="column is-12">
          <div class="notification is-warning has-text-centered">
            No upcoming treks at the moment. Check back soon for new adventures!
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Featured Treks Section -->
<section class="section">
  <div class="container">
    <h2 class="title is-2 has-text-centered mb-6">Featured Treks</h2>
    
    <div class="columns is-multiline">
      {#each featuredTreksList as trek}
        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">                <img src={trek.image} alt={trek.title} />
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
                {trek.description}
                <br>
                <a href={`/treks/${trek.id}`}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Trek Categories Section -->
<section class="section has-background-light">
  <div class="container">
    <h2 class="title is-2 has-text-centered mb-6">Best Seasons for Trekking</h2>
    
    <div class="columns is-multiline">
      <div class="column is-3">
        <div class="box has-text-centered">
          <h3 class="title is-4">Spring Treks</h3>
          <p>Perfect for wildflowers and mild temperatures. Ideal for many Himalayan treks.</p>
          <a href="/treks/categories/spring" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <h3 class="title is-4">Summer Treks</h3>
          <p>Great for European Alps and higher latitude regions with long daylight hours.</p>
          <a href="/treks/categories/summer" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <h3 class="title is-4">Autumn Treks</h3>
          <p>Clear skies and pleasant temperatures in the Himalayas. Beautiful fall colors.</p>
          <a href="/treks/categories/autumn" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <h3 class="title is-4">Winter Treks</h3>
          <p>Ideal for low-altitude treks and Southern Hemisphere adventures. Snow scenery.</p>
          <a href="/treks/categories/winter" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="section">
  <div class="container">
    <div class="box has-text-centered p-6">
      <h2 class="title is-3">Ready to Plan Your Adventure?</h2>
      <p class="subtitle is-5 mb-5">Contact our trek experts for personalized itineraries</p>
      <a href="/contact" class="button is-primary is-large">Contact Us</a>
    </div>
  </div>
</section>

<style>
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070');
    background-size: cover;
    background-position: center;
  }

  .hero-body {
    padding: 5rem 1.5rem;
  }

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
  
  .upcoming-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffdd57;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  }
</style>
