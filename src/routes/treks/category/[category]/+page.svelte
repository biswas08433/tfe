<script>
  import { page } from '$app/stores';
  
  // Trek data - same data from the main treks page
  const treks = [
    {
      id: 1,
      title: "Everest Base Camp",
      category: "advanced",
      image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=400&h=300",
      description: "A classic Himalayan trek to the foot of the world's highest mountain.",
      difficulty: "Advanced",
      duration: "14 days",
      altitude: "5,364m",
      location: "Nepal"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      category: "moderate",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=400&h=300",
      description: "One of the most diverse treks offering stunning mountain views and cultural experiences.",
      difficulty: "Moderate",
      duration: "12-20 days",
      altitude: "5,416m (Thorong La Pass)",
      location: "Nepal"
    },
    {
      id: 3,
      title: "Poon Hill Trek",
      category: "beginners",
      image: "https://images.unsplash.com/photo-1572353656294-dd1499ce4dd3?auto=format&fit=crop&q=80&w=400&h=300",
      description: "A short trek with spectacular sunrise views of the Annapurna and Dhaulagiri ranges.",
      difficulty: "Beginner",
      duration: "4-5 days",
      altitude: "3,210m",
      location: "Nepal"
    },
    {
      id: 4,
      title: "Inca Trail to Machu Picchu",
      category: "moderate",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=400&h=300",
      description: "Follow in the footsteps of the Incas on this historic trail to the lost city of Machu Picchu.",
      difficulty: "Moderate",
      duration: "4 days",
      altitude: "4,215m (Dead Woman's Pass)",
      location: "Peru"
    },
    {
      id: 5,
      title: "Tour du Mont Blanc",
      category: "moderate",
      image: "https://images.unsplash.com/photo-1596097000511-d538d4782c29?auto=format&fit=crop&q=80&w=400&h=300",
      description: "A classic European trek circling Mont Blanc through France, Italy, and Switzerland.",
      difficulty: "Moderate",
      duration: "7-11 days",
      altitude: "2,665m (Fenêtre d'Arpette)",
      location: "France, Italy, Switzerland"
    },
    {
      id: 6,
      title: "Kilimanjaro Summit",
      category: "advanced",
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&q=80&w=400&h=300",
      description: "Climb to the roof of Africa on this challenging high-altitude trek.",
      difficulty: "Advanced",
      duration: "5-9 days",
      altitude: "5,895m",
      location: "Tanzania"
    },
    {
      id: 7,
      title: "Milford Track",
      category: "beginners",
      image: "https://images.unsplash.com/photo-1578787489973-fb52d104e112?auto=format&fit=crop&q=80&w=400&h=300",
      description: "Known as the 'finest walk in the world' through New Zealand's stunning fjordlands.",
      difficulty: "Beginner",
      duration: "4 days",
      altitude: "1,154m (Mackinnon Pass)",
      location: "New Zealand"
    },
    {
      id: 8,
      title: "West Highland Way",
      category: "beginners",
      image: "https://images.unsplash.com/photo-1564938455650-354cbe6748b7?auto=format&fit=crop&q=80&w=400&h=300",
      description: "Scotland's premier long distance route through the stunning Highlands.",
      difficulty: "Beginner",
      duration: "5-8 days",
      altitude: "548m (Devil's Staircase)",
      location: "Scotland"
    },
    {
      id: 9,
      title: "Torres del Paine Circuit",
      category: "advanced",
      image: "https://images.unsplash.com/photo-1518475766613-1ef7ad648d9f?auto=format&fit=crop&q=80&w=400&h=300",
      description: "Experience the stunning landscapes of Patagonia on this challenging trek.",
      difficulty: "Advanced",
      duration: "7-10 days",
      altitude: "1,200m (John Gardner Pass)",
      location: "Chile"
    }
  ];
  
  // Get the category from URL parameter
  $: category = $page.params.category;
  
  // Define the category details for header display
  const categoryDetails = {
    beginners: {
      title: "Beginner Treks",
      description: "Perfect for first-time trekkers and families. These treks feature lower altitude, shorter duration, and less challenging terrain. Ideal for those new to hiking or looking for a more relaxed experience.",
      color: "is-success"
    },
    moderate: {
      title: "Moderate Treks",
      description: "For trekkers with some hiking experience. These routes have medium altitude, longer duration, and more varied terrain. A good balance of challenge and accessibility.",
      color: "is-info"
    },
    advanced: {
      title: "Advanced Treks",
      description: "Challenging routes for experienced trekkers. These expeditions feature high altitude, technical terrain, and demanding conditions. Requires previous trekking experience and excellent physical fitness.",
      color: "is-danger"
    },
    family: {
      title: "Family-friendly Treks",
      description: "Specially designed treks suitable for families with children. These routes offer easier terrain, plenty of rest stops, and interesting sights to keep young adventurers engaged.",
      color: "is-warning"
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
                <span class="tag {categoryInfo.color}">{trek.difficulty}</span>
                <span class="tag is-info ml-2">{trek.duration}</span>
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
