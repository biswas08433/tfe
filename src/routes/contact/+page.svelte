<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    trekInterest: '',
    message: '',
    subscribe: false
  };
  
  let formSubmitted = false;
  let formError = false;
  
  let submitting = false;
  let errorMessage = '';
  
  async function handleSubmit() {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      formError = true;
      errorMessage = 'Please fill out all required fields.';
      return;
    }
    
    submitting = true;
    formError = false;
    
    try {
      // Send data to the API endpoint
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Check if the response is successful
      if (response.ok) {
        const result = await response.json();
        
        if (result.result === 'success') {
          // Form submitted successfully
          console.log('Form submitted successfully', formData);
          formSubmitted = true;
          
          // Reset form
          formData = {
            name: '',
            email: '',
            phone: '',
            trekInterest: '',
            message: '',
            subscribe: false
          };
        } else {
          // Server returned an error
          formError = true;
          errorMessage = result.message || 'There was a problem submitting your form. Please try again.';
          console.error('Server error:', result);
        }
      } else {
        // HTTP error
        formError = true;
        errorMessage = 'Server error: ' + response.status;
        console.error('HTTP error:', response.status);
      }
    } catch (error) {
      // Network or other error
      formError = true;
      errorMessage = 'Connection error. Please check your internet connection and try again.';
      console.error('Error submitting form:', error);
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact Us | TravelTrek</title>
</svelte:head>

<section class="hero is-primary is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-2">Contact Us</h1>
      <h2 class="subtitle">Get in touch to plan your adventure</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="columns">
      <!-- Contact Form -->
      <div class="column is-8">
        {#if formSubmitted}
          <div class="notification is-success">
            <p class="is-size-4 has-text-centered mb-4">Thank you for contacting us!</p>
            <p class="has-text-centered">We've received your message and will get back to you shortly.</p>
          </div>
          <div class="has-text-centered mt-5">
            <button class="button is-primary" on:click={() => formSubmitted = false}>Send Another Message</button>
          </div>
        {:else}
          <h3 class="title is-4 mb-5">Send Us a Message</h3>
          
          {#if formError}
            <div class="notification is-danger">
              <button class="delete" aria-label="Close notification" on:click={() => formError = false}></button>
              {errorMessage || 'Please fill out all required fields.'}
            </div>
          {/if}
          
          <form on:submit|preventDefault={handleSubmit}>
            <div class="field">
              <label class="label" for="name">Name*</label>
              <div class="control">
                <input id="name" class="input" type="text" bind:value={formData.name} required placeholder="Your name">
              </div>
            </div>
            
            <div class="field">
              <label class="label" for="email">Email*</label>
              <div class="control">
                <input id="email" class="input" type="email" bind:value={formData.email} required placeholder="Your email">
              </div>
            </div>
            
            <div class="field">
              <label class="label" for="phone">Phone</label>
              <div class="control">
                <input id="phone" class="input" type="tel" bind:value={formData.phone} placeholder="Your phone number">
              </div>
            </div>
            
            <div class="field">
              <label class="label" for="trekInterest">Interested In</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select id="trekInterest" bind:value={formData.trekInterest}>
                    <option value="">Select a trek (optional)</option>
                    <option value="everest">Everest Base Camp</option>
                    <option value="annapurna">Annapurna Circuit</option>
                    <option value="poonhill">Poon Hill Trek</option>
                    <option value="inca">Inca Trail to Machu Picchu</option>
                    <option value="montblanc">Tour du Mont Blanc</option>
                    <option value="kilimanjaro">Kilimanjaro Summit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div class="field">
              <label class="label" for="message">Message*</label>
              <div class="control">
                <textarea id="message" class="textarea" bind:value={formData.message} required placeholder="Your message"></textarea>
              </div>
            </div>
            
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" bind:checked={formData.subscribe}>
                  Subscribe to our newsletter
                </label>
              </div>
            </div>
            
            <div class="field">
              <div class="control">
                <button class="button is-primary is-medium is-fullwidth" disabled={submitting}>
                  {#if submitting}
                    <span class="icon is-small">
                      <i class="fas fa-spinner fa-spin"></i>
                    </span>
                    <span>Submitting...</span>
                  {:else}
                    Submit
                  {/if}
                </button>
              </div>
            </div>
          </form>
        {/if}
      </div>
      
      <!-- Contact Information -->
      <div class="column is-4">
        <div class="box">
          <h4 class="title is-5">Contact Information</h4>
          
          <div class="content">
            <p><strong>Address:</strong><br>
            123 Adventure Street<br>
            Trekking Heights<br>
            Himalaya Valley, 10001</p>
            
            <p><strong>Phone:</strong><br>
            +1 (555) 123-4567</p>
            
            <p><strong>Email:</strong><br>
            info@traveltrek.com</p>
            
            <p><strong>Hours:</strong><br>
            Monday - Friday: 9am - 5pm<br>
            Saturday: 10am - 2pm<br>
            Sunday: Closed</p>
          </div>
          
          <h4 class="title is-5 mt-5">Follow Us</h4>
          <div class="buttons">
            <button class="button is-info">
              <span class="icon">
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>Facebook</span>
            </button>
            <button class="button is-info">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </button>
            <button class="button is-danger">
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              <span>Instagram</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section has-background-light">
  <div class="container">
    <h3 class="title is-3 has-text-centered mb-6">Frequently Asked Questions</h3>
    
    <div class="columns">
      <div class="column is-6">
        <div class="box mb-5">
          <h4 class="title is-5">Do I need previous trekking experience?</h4>
          <p>It depends on the trek. Beginner treks don't require previous experience, while moderate and advanced treks do require some level of trekking fitness and experience.</p>
        </div>
        
        <div class="box">
          <h4 class="title is-5">What gear do I need to bring?</h4>
          <p>We provide a detailed packing list customized for each trek after booking. Generally, you'll need appropriate hiking boots, clothing for varying temperatures, a good backpack, and personal items.</p>
        </div>
      </div>
      
      <div class="column is-6">
        <div class="box mb-5">
          <h4 class="title is-5">How physically fit do I need to be?</h4>
          <p>The required fitness level varies by trek difficulty. For any trek, we recommend regular cardio exercise and hill walking for at least 1-2 months before your trip.</p>
        </div>
        
        <div class="box">
          <h4 class="title is-5">What about altitude sickness?</h4>
          <p>Our itineraries include proper acclimatization days to minimize risk. Our guides are trained to recognize and respond to altitude sickness. We also recommend consulting your doctor before high-altitude treks.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Add custom styles here if needed */
</style>
