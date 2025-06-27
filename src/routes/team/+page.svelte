<script>
  import { onMount } from 'svelte';
  import { teamMembers } from '$lib/stores';
  
  // Team members data from store
  let teamMembersList = [];
  
  // Subscribe to the team store
  onMount(() => {
    const unsubscribe = teamMembers.subscribe(value => {
      teamMembersList = value;
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
    
    <div class="columns is-multiline">
      {#each teamMembersList as member}
        <div class="column is-6 is-4-widescreen">
          <div class="card team-card">
            <div class="card-image">
              <figure class="image is-2by3">
                <img src={member.image} alt={member.name} class="team-image">
              </figure>
              <div class="social-overlay">
                <div class="social-icons">
                  <a href={member.social.twitter} aria-label="Twitter" class="icon-link">
                    <span class="icon"><i class="fab fa-twitter"></i></span>
                  </a>
                  <a href={member.social.instagram} aria-label="Instagram" class="icon-link">
                    <span class="icon"><i class="fab fa-instagram"></i></span>
                  </a>
                  <a href={member.social.linkedin} aria-label="LinkedIn" class="icon-link">
                    <span class="icon"><i class="fab fa-linkedin"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-content">
              <p class="title is-4">{member.name}</p>
              <p class="subtitle is-6">{member.position}</p>
              
              <div class="content">
                <p>{member.bio}</p>
                
                <div class="tags mt-4">
                  {#each member.expertise as skill}
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
        <figure class="image">
          <img src="/images/team/join-team.jpg" alt="Join our team of adventure guides" class="is-rounded">
        </figure>
      </div>
    </div>
  </div>
</section>

<style>
  .team-card {
    height: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  
  .team-image {
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: all 0.5s ease;
  }
  
  .card-image {
    position: relative;
    overflow: hidden;
  }
  
  .social-overlay {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    padding: 1.5rem 1rem 0.5rem;
    transition: all 0.3s ease;
    opacity: 0;
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
