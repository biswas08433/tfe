<script>
  import { onMount } from "svelte";
  import { experiences } from "$lib/stores";

  // Experience data from store
  let experiencesList = [];

  // Active experience and gallery index
  let activeExperienceIndex = 0;
  let activeGalleryIndex = 0;
  let gallerySwiper;
  let experienceSwiper;
  let isFullscreen = false;
  let fullscreenImage = null;

  function showFullscreen(image) {
    fullscreenImage = image;
    isFullscreen = true;
  }

  function closeFullscreen() {
    isFullscreen = false;
    setTimeout(() => {
      fullscreenImage = null;
    }, 300);
  }

  // Initialize Swiper and subscribe to experiences store on mount
  onMount(() => {
    // Subscribe to the experiences store
    const unsubscribe = experiences.subscribe((value) => {
      experiencesList = value;
    });

    // We would normally initialize Swiper here
    // This is a placeholder for the actual initialization that would happen with Swiper.js
    // In a real project, you would import and initialize Swiper here

    // Unsubscribe when component is destroyed
    return unsubscribe;
  });
</script>

<svelte:head>
  <title>Trek Experiences | The Flyin' Eagle</title>
  <!-- Add Swiper CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
  />
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
  ></script>
</svelte:head>

<!-- Hero Section -->
<section class="hero is-primary is-medium">
  <div class="hero-body experience-hero">
    <div class="container has-text-centered">
      <h1 class="title is-1">Our Trek Experiences</h1>
      <h2 class="subtitle is-3">
        Unforgettable journeys and breathtaking moments
      </h2>
    </div>
  </div>
</section>

<!-- Experience Showcase -->
<section class="section">
  <div class="container">
    <div class="content has-text-centered mb-6">
      <p class="is-size-5 has-text-grey">
        Explore our collection of completed treks and adventures. Each
        experience represents countless memories, challenges overcome, and the
        magic of exploring our world's most beautiful landscapes.
      </p>
    </div>

    <!-- Experience Tabs -->
    <div class="tabs is-centered is-medium experience-tabs mb-5">
      <ul>
        {#each experiencesList as experience, index}
          <li class={activeExperienceIndex === index ? "is-active" : ""}>
            <a
              href="#{experience.id}"
              on:click|preventDefault={() => (activeExperienceIndex = index)}
            >
              <span>{experience.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Experience Content -->
    <div class="experience-content">
      {#each experiencesList as experience, expIndex}
        <div
          class="experience-item"
          class:is-active={activeExperienceIndex === expIndex}
        >
          <div class="columns is-vcentered mb-5">
            <div class="column is-8">
              <h3 class="title is-3">{experience.title}</h3>
              <p class="subtitle is-5 has-text-primary">
                <span>{experience.date}</span> •
                <span>{experience.location}</span>
              </p>
              <p class="mb-5">{experience.description}</p>
            </div>
            <div class="column is-4">
              <div class="box testimonial">
                <div class="content">
                  <blockquote>
                    "{experience.testimonial.quote}"
                  </blockquote>
                  <p class="has-text-right">
                    <strong>— {experience.testimonial.author}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery -->
          <div class="gallery-container mb-6">
            <h4 class="title is-4 has-text-centered mb-4">Journey Gallery</h4>

            <!-- Main Gallery -->
            <div class="swiper-container gallery-main">
              <div class="gallery-main-wrapper">
                {#each experience.gallery as image, index}
                  <div
                    class="gallery-slide"
                    class:is-active={activeGalleryIndex === index &&
                      activeExperienceIndex === expIndex}
                    role="button"
                    tabindex="0"
                    on:click={() => showFullscreen(image)}
                    on:keydown={(e) =>
                      e.key === "Enter" && showFullscreen(image)}
                  >
                    <figure class="image" style="aspect-ratio: 16 / 9;">
                      <img
                        src={image.src}
                        alt={image.caption}
                        class="gallery-image"
                        style="object-fit: cover; width: 100%; height: 100%;"
                      />
                      <div class="caption-overlay">
                        <span class="icon"><i class="fas fa-expand"></i></span>
                      </div>
                    </figure>
                    <p class="has-text-centered mt-2">{image.caption}</p>
                  </div>
                {/each}
              </div>

              <!-- Navigation buttons -->
              <button
                class="gallery-button prev"
                aria-label="Previous image"
                on:click={() => {
                  activeGalleryIndex =
                    (activeGalleryIndex - 1 + experience.gallery.length) %
                    experience.gallery.length;
                }}
              >
                <span class="icon is-large">
                  <i class="fas fa-chevron-left"></i>
                </span>
              </button>
              <button
                class="gallery-button next"
                aria-label="Next image"
                on:click={() => {
                  activeGalleryIndex =
                    (activeGalleryIndex + 1) % experience.gallery.length;
                }}
              >
                <span class="icon is-large">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>

            <!-- Thumbnails -->
            <div class="gallery-thumbs mt-4">
              {#each experience.gallery as image, index}
                <button
                  class="thumb"
                  class:is-active={activeGalleryIndex === index &&
                    activeExperienceIndex === expIndex}
                  on:click={() => (activeGalleryIndex = index)}
                  aria-label={`View image: ${image.caption}`}
                >
                  <img src={image.src} alt="Thumbnail" />
                </button>
              {/each}
            </div>
          </div>

          <!-- Trek Again CTA -->
          <div class="has-text-centered mt-6">
            <a href="/treks" class="button is-primary is-large">
              <span>Experience This Trek</span>
              <span class="icon">
                <i class="fas fa-hiking"></i>
              </span>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Fullscreen Image Modal -->
{#if isFullscreen}
  <div
    class="fullscreen-modal"
    class:is-active={isFullscreen}
    on:click={closeFullscreen}
    on:keydown={(e) => e.key === "Escape" && closeFullscreen()}
    role="dialog"
    aria-modal="true"
    aria-label="Image preview"
    tabindex="0"
  >
    <div class="fullscreen-background"></div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeFullscreen}
    ></button>
    {#if fullscreenImage}
      <div
        class="fullscreen-content"
        on:click|stopPropagation={() => {}}
        role="presentation"
      >
        <figure class="image">
          <img src={fullscreenImage.src} alt={fullscreenImage.caption} />
        </figure>
        <p class="caption">{fullscreenImage.caption}</p>
      </div>
    {/if}
  </div>
{/if}

<!-- Join Future Treks Section -->
<section class="section has-background-primary-light">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-6 has-text-centered-mobile">
        <h2 class="title is-2">Create Your Own Trek Story</h2>
        <p class="subtitle is-5 mb-4">
          Join our upcoming expeditions and add your adventure to our gallery of
          experiences.
        </p>
        <div class="buttons is-centered-mobile">
          <a href="/treks" class="button is-primary is-medium">
            <span>Browse Upcoming Treks</span>
          </a>
          <a href="/contact" class="button is-light is-medium">
            <span>Custom Trek Inquiry</span>
          </a>
        </div>
      </div>
      <div class="column is-6">
        <div class="photo-collage">
          <div class="collage-item item-1">
            <img src="/images/experiences/collage/1.jpeg" alt="Trek memories" />
          </div>
          <div class="collage-item item-2">
            <img src="/images/experiences/collage/2.jpeg" alt="Trek memories" />
          </div>
          <div class="collage-item item-3">
            <img src="/images/experiences/collage/3.jpeg" alt="Trek memories" />
          </div>
          <div class="collage-item item-4">
            <img src="/images/experiences/collage/4.jpeg" alt="Trek memories" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Swiper JS and Font Awesome are imported in the svelte:head at the top -->

<style>
  /* Hero styling */
  .experience-hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/images/experiences/collage/2.jpeg");
    background-size: cover;
    background-position: center;
  }

  /* Experience tabs styling */
  .experience-tabs li.is-active a {
    border-bottom-color: var(--primary);
    color: var(--primary);
  }

  .experience-tabs a {
    transition: all 0.3s ease;
  }

  /* Experience content styling */
  .experience-content {
    position: relative;
    min-height: 400px;
  }

  .experience-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.5s ease,
      visibility 0.5s ease;
  }

  .experience-item.is-active {
    opacity: 1;
    visibility: visible;
    position: relative;
  }

  /* Testimonial styling */
  .testimonial {
    border-left: 4px solid var(--primary);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .testimonial:hover {
    transform: translateY(-5px);
  }

  .testimonial blockquote {
    font-style: italic;
    position: relative;
    padding-left: 1.5rem;
  }

  .testimonial blockquote::before {
    content: '"';
    font-size: 3rem;
    position: absolute;
    left: -0.5rem;
    top: -1rem;
    color: var(--primary-light);
    opacity: 0.7;
  }

  /* Gallery styling */
  .gallery-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .gallery-main-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gallery-slide {
    display: none;
    width: 100%;
  }

  .gallery-slide.is-active {
    display: block;
    animation: fadeIn 0.5s;
  }

  .gallery-image {
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .caption-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }

  .caption-overlay .icon {
    color: white;
    font-size: 2rem;
  }

  .gallery-slide:hover .caption-overlay {
    opacity: 1;
  }

  .gallery-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
  }

  .gallery-button:hover {
    background: var(--primary);
    color: white;
  }

  .gallery-button.prev {
    left: -20px;
  }

  .gallery-button.next {
    right: -20px;
  }

  .gallery-thumbs {
    display: flex;
    justify-content: center;
    gap: 10px;
    overflow-x: auto;
    padding: 10px 0;
  }

  .thumb {
    width: 80px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumb.is-active {
    opacity: 1;
    border-color: var(--primary);
  }

  .thumb:hover {
    opacity: 1;
  }

  /* Fullscreen modal */
  .fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .fullscreen-modal.is-active {
    opacity: 1;
    visibility: visible;
  }

  .fullscreen-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .fullscreen-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    z-index: 51;
  }

  .fullscreen-content img {
    max-height: 85vh;
    width: auto;
    object-fit: contain;
  }

  .fullscreen-content .caption {
    color: white;
    text-align: center;
    padding: 1rem 0;
  }

  /* Photo collage styling */
  .photo-collage {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    height: 400px;
  }

  .collage-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .collage-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .collage-item:hover img {
    transform: scale(1.05);
  }

  .item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  .item-2 {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }

  .item-3 {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
  }

  .item-4 {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
  }

  /* Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .gallery-button {
      width: 30px;
      height: 30px;
    }

    .gallery-button.prev {
      left: -10px;
    }

    .gallery-button.next {
      right: -10px;
    }

    .photo-collage {
      height: 300px;
    }
  }
</style>
