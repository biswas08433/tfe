<script>
  import { onMount } from 'svelte';
  import { teamMembers } from '$lib/stores';
  
  // Team members data from store
  let teamMembersList = [];
  let teamByCategory = {};
  let categories = [
    "Administration/Founder",
    "Technical Trek Guides and Leaders",
    "Developer and Promotional Team",
    "Other Core Members"
  ];
  
  // Subscribe to the team store and organize by category
  onMount(() => {
    const unsubscribe = teamMembers.subscribe(value => {
      teamMembersList = value;
      
      // Group team members by category
      teamByCategory = {};
      categories.forEach(cat => {
        teamByCategory[cat] = teamMembersList.filter(member => member.category === cat);
      });
    });
    
    // Unsubscribe when component is destroyed
    return unsubscribe;
  });
</script>

<svelte:head>
  <title>Our Team | The Flyin' Eagle</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-1">Meet Our Team</h1>
      <h2 class="subtitle is-3">The passionate experts behind your adventures</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content has-text-centered mb-6">
      <p class="is-size-5 has-text-grey">
        Our team of experienced guides and adventure specialists are dedicated to creating unforgettable trekking experiences.
        With backgrounds ranging from professional mountaineering to environmental conservation, each member brings unique
        expertise to ensure your journey is safe, educational, and transformative.
      </p>
    </div>
    
    {#each categories as category}
      <div class="team-category-section mb-6">
        <h2 class="title is-3 has-text-centered mb-5">{category}</h2>
        
        <div class="columns is-multiline">
          {#each teamByCategory[category] || [] as member}
            <div class="column is-3-desktop is-3-widescreen">
              <div class="card team-card">
                <div class="card-image">
                  <figure class="image">
                    <img src={member.image} alt={member.name} class="team-image">
                  </figure>
                  <div class="social-overlay">
                    <div class="social-icons">
                      {#if member.social.twitter}
                        <a href={member.social.twitter} target="_blank" rel="noopener" aria-label="Twitter" class="icon-link">
                          <span class="icon"><i class="fab fa-twitter"></i></span>
                        </a>
                      {/if}
                      {#if member.social.instagram}
                        <a href={member.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="icon-link">
                          <span class="icon"><i class="fab fa-instagram"></i></span>
                        </a>
                      {/if}
                      {#if member.social.linkedin}
                        <a href={member.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" class="icon-link">
                          <span class="icon"><i class="fab fa-linkedin"></i></span>
                        </a>
                      {/if}
                      {#if member.social.facebook}
                        <a href={member.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" class="icon-link">
                          <span class="icon"><i class="fab fa-facebook"></i></span>
                        </a>
                      {/if}
                      {#if member.social.website}
                        <a href={member.social.website} target="_blank" rel="noopener" aria-label="Website" class="icon-link">
                          <span class="icon"><i class="fas fa-globe"></i></span>
                        </a>
                      {/if}
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <p class="title is-4">{member.name}</p>
                  <p class="subtitle is-6">{member.position}</p>
                  
                  <div class="content">
                    <p>{member.bio}</p>
                    
                    <div class="tags mt-4">
                      {#each member.expertise || [] as skill}
                        <span class="tag is-primary is-light">{skill}</span>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Join Our Team Section -->
<section class="section has-background-primary-light">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <h2 class="title is-2">Join Our Team</h2>
        <p class="subtitle is-5">
          We're always looking for passionate outdoor enthusiasts to join our growing team of trek guides and specialists.
        </p>
        <p class="mb-5">
          If you have experience in adventure tourism, mountaineering, environmental conservation, or related fields, and a passion for creating meaningful experiences for travelers, we'd love to hear from you.
        </p>
        <a href="/contact" class="button is-primary is-medium">Get In Touch</a>
      </div>
      <div class="column is-5">
        <figure class="image" style="">
          <img src="/images/team/team.jpeg" alt="Join our team of adventure guides" class="is-rounded">
        </figure>
      </div>
    </div>
  </div>
</section>

<style>
  .team-category-section {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  
  .team-category-section:not(:first-child) {
    border-top: 1px solid rgba(0,0,0,0.1);
    margin-top: 2rem;
  }
  
  .team-category-section h2.title {
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
  }
  
  .team-category-section h2.title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 3px;
    background-color: var(--primary);
  }
  
  .team-card {
    height: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
  }
  
  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  
  .team-card .card-content {
    padding: 1rem;
  }
  
  .team-card .card-content .title {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
  
  .team-card .card-content .subtitle {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .team-card .card-content .content {
    font-size: 0.9rem;
  }
  
  .team-card .card-content .content p {
    margin-bottom: 0.5rem;
  }
  
  .team-card .tags {
    margin-top: 0.5rem !important;
  }
  
  .team-card .tag {
    font-size: 0.7rem;
    height: 1.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  
  .team-image {
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: all 0.5s ease;
    width: 100%;
    height: 220px;  /* Fixed height for consistency */
    object-position: center 40%;  /* Position focus toward the face */
  }
  
  .card-image {
    position: relative;
    overflow: hidden;
    background-color: #f5f5f5;  /* Light background for image container */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card-image figure.image {
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
  }
  
  .social-overlay {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    padding: 1rem 1rem 0.5rem;
    transition: all 0.3s ease;
    opacity: 0;
    z-index: 2;  /* Ensure it's above the image */
  }
  
  .team-card:hover .social-overlay {
    bottom: 0;
    opacity: 1;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .icon-link {
    color: white;
    font-size: 1.2rem;
    transition: all 0.2s ease;
  }
  
  .icon-link:hover {
    transform: scale(1.2);
    color: var(--primary);
  }
  
  .hero.is-medium .hero-body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/team/team-hero.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .tag.is-primary.is-light {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
</style>
