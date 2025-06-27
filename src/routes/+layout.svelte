<script>
  import 'bulma/css/bulma.min.css';
  
  // Toggle burger menu on mobile
  let navbarActive = false;
  function toggleNavbar() {
    navbarActive = !navbarActive;
  }
</script>

<!-- Import custom CSS with variable overrides -->
<svelte:head>
  <link rel="stylesheet" href="/css/custom-bulma.css">
</svelte:head>

<nav class="navbar is-primary" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/logo.png" alt="The Flyin' Eagle Logo" style="max-height: 3rem;">
    </a>
    <a class="navbar-item" href="/">
      <strong>The Flyin' Eagle</strong>
    </a>

    <button class="navbar-burger" aria-label="menu" aria-expanded="{navbarActive}" 
            on:click={toggleNavbar}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbarBasic" class="navbar-menu" class:is-active={navbarActive}>
    <div class="navbar-start">
      <a class="navbar-item" href="/treks">
        Treks
      </a>
      
      <a class="navbar-item" href="/experiences">
        Experiences
      </a>
      
      <a class="navbar-item" href="/team">
        Our Team
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/treks/seasons">
          Trek Seasons
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="/treks/seasons/spring">
            Spring Treks
          </a>
          <a class="navbar-item" href="/treks/seasons/summer">
            Summer Treks
          </a>
          <a class="navbar-item" href="/treks/seasons/autumn">
            Autumn Treks
          </a>
          <a class="navbar-item" href="/treks/seasons/winter">
            Winter Treks
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light" href="/contact">
            <strong>Contact Us</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<section class="section">
  <div class="container">
    <slot />
  </div>
</section>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>The Flyin' Eagle</strong>. Copyright &copy; 2023. All rights reserved.
    </p>
  </div>
</footer>
