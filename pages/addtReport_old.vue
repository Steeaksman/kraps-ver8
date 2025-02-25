<script setup>
const isLoading = ref(false);
const error = ref(null);

const submitForm = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/t_Reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    const result = await response.json();
    console.log('Success:', result);
    
    await navigateTo('/success-page');
  } catch (error) {
    console.error('Error:', error);
    error.value = 'Failed to submit report. Please try again.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <!-- ... your existing template ... -->
    
    <!-- Error Message -->
    <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
    
    <!-- Submit Button -->
    <div class="text-right">
      <button
        type="submit"
        :disabled="isLoading"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        <span v-if="isLoading">Submitting...</span>
        <span v-else>Submit Your Report</span>
      </button>
    </div>
  </div>
</template>