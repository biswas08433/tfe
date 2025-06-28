<script>
  import { page } from '$app/stores';
  import { treks, getRelatedTreks } from '$lib/stores';
  import { onMount } from 'svelte';
  
  // Trek data from store
  let allTreks = [];
  let trek = null;
  let relatedTreksList = [];
  
  // Get trek ID from URL
  $: trekId = parseInt($page.params.trekId);
  
  
  // Subscribe to the treks store and get the current trek and related treks
  onMount(() => {    
    const unsubscribe = treks.subscribe(trekList => {
      allTreks = trekList;
      trek = allTreks.find(t => t.id === trekId) || null;

      if (trek) {
        relatedTreksList = getRelatedTreks(trekId, trek.category, allTreks, 2);
      } else {
        relatedTreksList = [];
      }
    });

    // Unsubscribe when component is destroyed
    return unsubscribe;
  });
  
  // Removed duplicated reactive statement to avoid unnecessary updates.
</script>

<svelte:head>
  <title>{trek ? `${trek.title} | TFE` : 'Trek Not Found | TFE'}</title>
</svelte:head>

{#if trek}
<!-- Hero Section -->
<section class="hero is-info is-medium">
  <div class="hero-body" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{trek.image}'); background-size: cover; background-position: center;">
    <div class="container">
      <h1 class="title is-1 has-text-white">{trek.title}</h1>
      <h2 class="subtitle is-3">
        <span class="tag is-primary is-medium mr-2">Best Season: {trek.bestSeason}</span>
        <span class="tag is-white is-medium mr-2">{trek.duration}</span>
        <span class="tag is-success is-medium">{trek.distance}</span>
      </h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="columns">
      <!-- Main Content -->
      <div class="column is-8">
        <div class="content is-large">
          <p>{trek.longDescription || trek.description}</p>
          
          <h3 class="title is-4 mt-6">Trek Highlights</h3>
          <ul>
            {#if trek.highlights}
              {#each trek.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            {:else}
              <li>Spectacular mountain views</li>
              <li>Cultural immersion</li>
              <li>Challenging yet rewarding terrain</li>
            {/if}
          </ul>
          
          {#if trek.itinerary}
            <h3 class="title is-4 mt-6">Detailed Itinerary</h3>
            <div class="timeline">
              {#each trek.itinerary as day}
                <div class="timeline-item">
                  <div class="timeline-marker is-primary"></div>
                  <div class="timeline-content">
                    <p class="heading">Day {day.day}</p>
                    <p class="title is-5">{day.title}</p>
                    
                    <div class="content">
                      <p>{day.description}</p>
                      
                      <div class="tags is-flex is-flex-wrap-wrap mb-2">
                        {#if day.duration}
                          <span class="tag is-light is-medium mr-2 mb-2">
                            <span class="icon"><i class="fas fa-clock"></i></span>
                            <span>{day.duration}</span>
                          </span>
                        {/if}
                        {#if day.distance}
                          <span class="tag is-light is-medium mr-2 mb-2">
                            <span class="icon"><i class="fas fa-route"></i></span>
                            <span>{day.distance}</span>
                          </span>
                        {/if}
                        {#if day.elevation}
                          <span class="tag is-light is-medium mr-2 mb-2">
                            <span class="icon"><i class="fas fa-mountain"></i></span>
                            <span>{day.elevation}</span>
                          </span>
                        {/if}
                      </div>
                      
                      <!-- Location Path -->
                      {#if day.locations}
                        <div class="location-path mt-3 mb-4">
                          {#each day.locations as location, i}
                            <span class="location-badge" style="background-color: {location.color}">
                              <span class="icon"><i class="{location.icon}"></i></span>
                              {location.name}
                            </span>
                            {#if i < day.locations.length - 1}
                              <span class="location-connector">
                                <i class="fas fa-chevron-right"></i>
                              </span>
                            {/if}
                          {/each}
                        </div>
                      {/if}
                      
                      <div class="columns mt-3">
                        {#if day.accommodation}
                          <div class="column is-6">
                            <p>
                              <span class="icon has-text-primary"><i class="fas fa-bed"></i></span>
                              <strong>Accommodation:</strong> {day.accommodation}
                            </p>
                          </div>
                        {/if}
                        
                        {#if day.meals}
                          <div class="column is-6">
                            <p>
                              <span class="icon has-text-primary"><i class="fas fa-utensils"></i></span>
                              <strong>Meals:</strong> {day.meals}
                            </p>
                          </div>
                        {/if}
                      </div>
                      
                      {#if day.highlights}
                        <div class="notification is-primary is-light mt-3">
                          <p>
                            <span class="icon"><i class="fas fa-star"></i></span>
                            <strong>Day Highlights:</strong> {day.highlights}
                          </p>
                        </div>
                      {/if}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
        
        <!-- Call to Action -->
        <div class="box has-background-primary-light has-text-centered p-5 mt-6">
          <h3 class="title is-4">Ready to Experience {trek.title}?</h3>
          <p class="mb-4">Contact our expert guides to plan your adventure</p>
          <a href="/contact" class="button is-primary is-large">Book This Trek</a>
        </div>
      </div>
      
      <!-- Sidebar -->
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Trek Details</h3>
            
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <td><strong>Duration</strong></td>
                  <td>{trek.duration}</td>
                </tr>
                <tr>
                  <td><strong>Distance</strong></td>
                  <td>{trek.distance}</td>
                </tr>
                <tr>
                  <td><strong>Maximum Altitude</strong></td>
                  <td>{trek.altitude}</td>
                </tr>
                <tr>
                  <td><strong>Location</strong></td>
                  <td>{trek.location}</td>
                </tr>
                <tr>
                  <td><strong>Best Season</strong></td>
                  <td><span class="tag is-primary">{trek.bestSeason}</span></td>
                </tr>
                <tr>
                  <td><strong>Season Details</strong></td>
                  <td>{trek.season || "March-May, September-November"}</td>
                </tr>
              </tbody>
            </table>
            
            <div class="has-text-centered mt-5">
              <a href="/contact" class="button is-primary is-fullwidth">Enquire Now</a>
            </div>
          </div>
        </div>
        
        <!-- Related Treks -->
        <div class="box mt-5">
          <h3 class="title is-5">You Might Also Like</h3>
          <div class="related-treks">
            {#if relatedTreksList.length > 0}
              {#each relatedTreksList as relatedTrek}
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src={relatedTrek.image} alt={relatedTrek.title}>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-6">{relatedTrek.title}</p>
                    <p class="subtitle is-7">{relatedTrek.duration} | {relatedTrek.distance}</p>
                    <a href={`/treks/${relatedTrek.id}`} class="is-size-7">View Trek</a>
                  </div>
                </div>
              {/each}
            {:else}
              <p>No related treks found in this season.</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{:else}
<section class="section">
  <div class="container">
    <div class="notification is-danger has-text-centered">
      <h2 class="title is-3">Trek Not Found</h2>
      <p>The trek you are looking for does not exist or the trek ID is invalid.</p>
      <a href="/treks" class="button is-primary mt-4">Back to Treks</a>
    </div>
  </div>
</section>
{/if}

<style>
  .timeline-marker {
    display: inline-block;
    position: absolute;
    background: #3e8ed0;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    left: -36px;
    top: 6px;
  }
  
  .timeline-item {
    padding-bottom: 2em;
    position: relative;
    padding-left: 20px;
  }
  
  .timeline-item:before {
    content: "";
    background-color: #dbdbdb;
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    left: -30px;
    top: 0;
  }
  
  .timeline-item:last-child:before {
    height: 50%;
  }
  
  .timeline {
    margin-left: 30px;
  }
  
  .media {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #f5f5f5;
  }
  
  .media:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  /* Itinerary styling */
  .location-path {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }
  
  .location-badge {
    padding: 5px 10px;
    border-radius: 16px;
    color: white;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  }
  
  .location-connector {
    color: #999;
    margin: 0 5px;
  }
  
  .timeline-content .content {
    padding-bottom: 10px;
  }
  
  .timeline-marker.is-primary {
    background-color: #3e8ed0;
  }
  
  /* Make tags consistent size */
  .tag.is-medium {
    height: auto;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    white-space: normal;
    height: auto;
  }
</style>
