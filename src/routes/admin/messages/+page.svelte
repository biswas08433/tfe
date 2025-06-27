<script>
  import { onMount } from 'svelte';
  
  let messages = [];
  let loading = true;
  let error = null;
  let processingIds = new Set(); // Track messages being processed

  async function loadMessages() {
    try {
      const response = await fetch('/api/admin/messages');
      if (response.ok) {
        messages = await response.json();
      } else {
        throw new Error(`Server returned ${response.status}`);
      }
    } catch (err) {
      error = err.message || 'Failed to load messages';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadMessages();
  });
  
  async function markAsHandled(messageId) {
    if (processingIds.has(messageId)) return;
    
    processingIds.add(messageId);
    
    try {
      const response = await fetch('/api/admin/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: messageId })
      });
      
      if (response.ok) {
        // Refresh messages after successful update
        await loadMessages();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to mark message as handled');
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      processingIds.delete(messageId);
    }
  }
</script>

<svelte:head>
  <title>Admin: Messages | TravelTrek</title>
</svelte:head>

<section class="hero is-primary is-small">
  <div class="hero-body">
    <div class="container">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div>
              <h1 class="title is-2">Admin Dashboard</h1>
              <h2 class="subtitle">Contact Messages</h2>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a href="/admin/logout" class="button is-light">
              <span class="icon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {#if loading}
      <div class="has-text-centered">
        <span class="icon is-large">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
        <p>Loading messages...</p>
      </div>
    {:else if error}
      <div class="notification is-danger">
        <p>{error}</p>
      </div>
    {:else if messages.length === 0}
      <div class="notification is-info">
        <p>No messages have been received yet.</p>
      </div>
    {:else}
      <div class="table-container">
        <table class="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Trek Interest</th>
              <th>Message</th>
              <th>Subscribed</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each messages as message}
              <tr class={message.handled ? 'is-handled' : ''}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td><a href="mailto:{message.email}">{message.email}</a></td>
                <td>{message.phone || '-'}</td>
                <td>{message.trek_interest || '-'}</td>
                <td>
                  <div class="message-content">
                    {message.message}
                  </div>
                </td>
                <td>
                  {#if message.subscribe}
                    <span class="icon has-text-success">
                      <i class="fas fa-check-circle"></i>
                    </span>
                  {:else}
                    <span class="icon has-text-grey-light">
                      <i class="fas fa-times-circle"></i>
                    </span>
                  {/if}
                </td>
                <td>
                  {#if message.handled}
                    <span class="tag is-success">Handled</span>
                  {:else}
                    <span class="tag is-warning">Pending</span>
                  {/if}
                </td>
                <td>
                  <div>Created: {new Date(message.created_at).toLocaleString()}</div>
                  {#if message.handled && message.handled_at}
                    <div class="is-size-7">Handled: {new Date(message.handled_at).toLocaleString()}</div>
                  {/if}
                </td>
                <td>
                  {#if !message.handled}
                    <button 
                      class="button is-small is-primary" 
                      on:click={() => markAsHandled(message.id)}
                      disabled={processingIds.has(message.id)}
                    >
                      {#if processingIds.has(message.id)}
                        <span class="icon is-small">
                          <i class="fas fa-spinner fa-spin"></i>
                        </span>
                      {:else}
                        Mark as Handled
                      {/if}
                    </button>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</section>

<style>
  .message-content {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .is-handled {
    background-color: rgba(72, 199, 142, 0.1) !important;
  }
</style>
