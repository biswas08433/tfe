<script>
  import { page } from '$app/stores';
  
  // Trek data - in a real app, this would be fetched from a database or API
  const treks = [
    {
      id: 1,
      title: "Everest Base Camp",
      category: "advanced",
      image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=1200",
      description: "A classic Himalayan trek to the foot of the world's highest mountain.",
      difficulty: "Advanced",
      duration: "14 days",
      altitude: "5,364m",
      location: "Nepal",
      season: "March-May, September-November",
      longDescription: "The Everest Base Camp trek is one of the most popular trekking routes in Nepal and the world. This incredible journey takes you through the heart of the Khumbu region to the base of Mount Everest, the world's highest peak. Along the way, you'll experience breathtaking mountain scenery, unique Sherpa culture, and visit ancient monasteries. The trek is challenging due to the high altitude and sometimes harsh weather conditions, but the spectacular views and sense of achievement make it all worthwhile.",
      highlights: [
        "Standing at Everest Base Camp (5,364m)",
        "Panoramic views from Kala Patthar (5,545m)",
        "Experiencing Sherpa culture and hospitality",
        "Visiting the famous Tengboche Monastery",
        "Traversing the Khumbu Glacier"
      ],
      itinerary: [
        { day: 1, title: "Fly from Kathmandu to Lukla, trek to Phakding (2,610m)", description: "Begin your journey with a scenic flight to Lukla. After lunch, a gentle trek along the Dudh Kosi River to Phakding." },
        { day: 2, title: "Trek to Namche Bazaar (3,440m)", description: "A challenging day crossing suspension bridges and climbing to the Sherpa capital of Namche Bazaar." },
        { day: 3, title: "Acclimatization day in Namche Bazaar", description: "Rest day with an optional hike to Everest View Hotel for your first glimpse of Mount Everest." },
        { day: 4, title: "Trek to Tengboche (3,860m)", description: "Trek through rhododendron forests to Tengboche Monastery with stunning views of Everest, Lhotse, and Ama Dablam." },
        { day: 5, title: "Trek to Dingboche (4,410m)", description: "Continue into the Imja Valley with spectacular views of the Himalayan peaks." },
        { day: 6, title: "Acclimatization day in Dingboche", description: "Another rest day with an optional hike to Nangkartshang Peak for panoramic views." },
        { day: 7, title: "Trek to Lobuche (4,940m)", description: "A shorter but challenging day as you gain significant altitude." },
        { day: 8, title: "Trek to Gorak Shep (5,170m), visit Everest Base Camp (5,364m)", description: "Early start for the challenging trek to Gorak Shep, then continue to Everest Base Camp." },
        { day: 9, title: "Hike to Kala Patthar (5,545m), trek to Pheriche (4,280m)", description: "Pre-dawn hike for sunrise views from Kala Patthar, then descend to Pheriche." },
        { day: 10, title: "Trek to Namche Bazaar (3,440m)", description: "Begin your descent back through familiar territory." },
        { day: 11, title: "Trek to Lukla (2,860m)", description: "Final day of trekking back to Lukla." },
        { day: 12, title: "Fly from Lukla to Kathmandu", description: "Morning flight back to Kathmandu, concluding your trek." }
      ]
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      category: "moderate",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200",
      description: "One of the most diverse treks offering stunning mountain views and cultural experiences.",
      difficulty: "Moderate",
      duration: "12-20 days",
      altitude: "5,416m (Thorong La Pass)",
      location: "Nepal",
      season: "March-May, September-November",
      longDescription: "The Annapurna Circuit is one of the world's classic treks, offering incredible diversity in terms of climate, culture, and landscapes. Starting in lush subtropical forests and climbing to the high-altitude desert of the Thorong La Pass, this trek circles the magnificent Annapurna massif. You'll pass through traditional Hindu villages in the lower regions and Tibetan Buddhist communities in the higher areas, providing a rich cultural experience alongside the natural beauty.",
      highlights: [
        "Crossing the challenging Thorong La Pass (5,416m)",
        "Natural hot springs at Tatopani",
        "Sunrise views from Poon Hill",
        "Apple orchards of Marpha",
        "Scenic flight through Kali Gandaki (world's deepest gorge)"
      ],
      itinerary: [
        { day: 1, title: "Drive from Kathmandu to Besisahar to Khudi", description: "Begin your journey with a scenic drive and short walk to Khudi." },
        { day: 2, title: "Trek to Bahundanda", description: "Hike through terraced rice fields and villages." },
        { day: 3, title: "Trek to Chamje", description: "Descend to the Marsyangdi River and climb to Chamje." },
        { day: 4, title: "Trek to Dharapani", description: "Enter the Manang district with Buddhist influence." },
        { day: 5, title: "Trek to Chame", description: "Walk through pine forests with views of Annapurna II." },
        { day: 6, title: "Trek to Upper Pisang", description: "Dramatic landscape changes with mountain views." },
        { day: 7, title: "Trek to Manang", description: "Choose between the northern or southern route to Manang." },
        { day: 8, title: "Acclimatization day in Manang", description: "Rest day with optional hikes." },
        { day: 9, title: "Trek to Yak Kharka", description: "Gradual ascent to help with acclimatization." },
        { day: 10, title: "Trek to Thorong Phedi", description: "Short but challenging day to the base of the pass." },
        { day: 11, title: "Cross Thorong La Pass, trek to Muktinath", description: "Early start for the challenging crossing, then descend to Muktinath." },
        { day: 12, title: "Trek to Marpha", description: "Descend into the Kali Gandaki valley to the apple growing region." },
        { day: 13, title: "Trek to Tatopani", description: "Continue down the valley to the hot springs." },
        { day: 14, title: "Trek to Ghorepani", description: "Climb to Ghorepani for stunning mountain views." },
        { day: 15, title: "Hike to Poon Hill, trek to Nayapul, drive to Pokhara", description: "Early morning hike for sunrise, then final descent and drive to Pokhara." }
      ]
    }
  ];
  
  // Get trek ID from URL
  $: trekId = parseInt($page.params.trekId);
  $: trek = treks.find(t => t.id === trekId) || treks[0];
</script>

<svelte:head>
  <title>{trek.title} | TravelTrek</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero is-info is-medium">
  <div class="hero-body" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{trek.image}'); background-size: cover; background-position: center;">
    <div class="container">
      <h1 class="title is-1">{trek.title}</h1>
      <h2 class="subtitle is-3">
        <span class="tag is-primary is-medium mr-2">{trek.difficulty}</span>
        <span class="tag is-white is-medium">{trek.duration}</span>
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
            <h3 class="title is-4 mt-6">Itinerary</h3>
            <div class="timeline">
              {#each trek.itinerary as day}
                <div class="timeline-item">
                  <div class="timeline-marker is-primary"></div>
                  <div class="timeline-content">
                    <p class="heading">Day {day.day}</p>
                    <p class="title is-5">{day.title}</p>
                    <p>{day.description}</p>
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
                  <td><strong>Difficulty</strong></td>
                  <td>{trek.difficulty}</td>
                </tr>
                <tr>
                  <td><strong>Duration</strong></td>
                  <td>{trek.duration}</td>
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
                  <td>{trek.season || "Spring and Autumn"}</td>
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
            {#each treks.filter(t => t.id !== trek.id && t.category === trek.category).slice(0, 2) as relatedTrek}
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img src={relatedTrek.image} alt={relatedTrek.title}>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-6">{relatedTrek.title}</p>
                  <p class="subtitle is-7">{relatedTrek.duration} | {relatedTrek.difficulty}</p>
                  <a href={`/treks/${relatedTrek.id}`} class="is-size-7">View Trek</a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
</style>
