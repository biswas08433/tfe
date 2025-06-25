<script>
  // Sample trek data
  const featuredTreks = [
    {
      id: 1,
      title: "Everest Base Camp",
      category: "advanced",
      image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=400&h=300",
      description: "A classic Himalayan trek to the foot of the world's highest mountain.",
      difficulty: "Advanced",
      duration: "14 days"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      category: "moderate",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=400&h=300",
      description: "One of the most diverse treks offering stunning mountain views and cultural experiences.",
      difficulty: "Moderate",
      duration: "12-20 days"
    },
    {
      id: 3,
      title: "Poon Hill Trek",
      category: "beginners",
      image: "https://images.unsplash.com/photo-1572353656294-dd1499ce4dd3?auto=format&fit=crop&q=80&w=400&h=300",
      description: "A short trek with spectacular sunrise views of the Annapurna and Dhaulagiri ranges.",
      difficulty: "Beginner",
      duration: "4-5 days"
    }
  ];
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

<!-- Featured Treks Section -->
<section class="section">
  <div class="container">
    <h2 class="title is-2 has-text-centered mb-6">Featured Treks</h2>
    
    <div class="columns is-multiline">
      {#each featuredTreks as trek}
        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src={trek.image} alt={trek.title} />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{trek.title}</p>
              <p class="subtitle is-6">
                <span class="tag is-primary">{trek.difficulty}</span>
                <span class="tag is-info ml-2">{trek.duration}</span>
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
    <h2 class="title is-2 has-text-centered mb-6">Trek Categories</h2>
    
    <div class="columns">
      <div class="column">
        <div class="box has-text-centered">
          <h3 class="title is-4">Beginner Treks</h3>
          <p>Perfect for first-time trekkers and families. Low altitude, shorter duration.</p>
          <a href="/treks/beginners" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
      <div class="column">
        <div class="box has-text-centered">
          <h3 class="title is-4">Moderate Treks</h3>
          <p>For those with some trekking experience. Medium altitude, longer duration.</p>
          <a href="/treks/moderate" class="button is-primary mt-4">Explore</a>
        </div>
      </div>
      <div class="column">
        <div class="box has-text-centered">
          <h3 class="title is-4">Advanced Treks</h3>
          <p>Challenging routes for experienced trekkers. Higher altitude, technical terrain.</p>
          <a href="/treks/advanced" class="button is-primary mt-4">Explore</a>
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
</style>
