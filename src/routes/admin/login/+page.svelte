<script>
  import { goto } from '$app/navigation';
  
  let password = '';
  let error = '';
  let loading = false;
  
  async function handleLogin() {
    if (!password) {
      error = 'Password is required';
      return;
    }
    
    loading = true;
    error = '';
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      if (response.ok) {
        const result = await response.json();
        
        if (result.authenticated) {
          // Login successful - redirect to admin dashboard
          goto('/admin/messages');
        } else {
          error = 'Invalid password';
        }
      } else {
        error = 'Server error';
      }
    } catch (err) {
      error = 'Network error';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Admin Login | TravelTrek</title>
</svelte:head>

<section class="section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-4">
        <div class="box">
          <h1 class="title has-text-centered">Admin Login</h1>
          
          {#if error}
            <div class="notification is-danger">
              {error}
            </div>
          {/if}
          
          <form on:submit|preventDefault={handleLogin}>
            <div class="field">
              <label class="label" for="password">Password</label>
              <div class="control">
                <input
                  id="password"
                  class="input"
                  type="password"
                  bind:value={password}
                  placeholder="Enter admin password"
                  required
                />
              </div>
            </div>
            
            <div class="field">
              <div class="control">
                <button
                  type="submit"
                  class="button is-primary is-fullwidth"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
