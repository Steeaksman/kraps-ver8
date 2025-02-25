<!-- pages/success-page.vue -->
<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg
            class="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
  
        <!-- Success Message -->
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully!</h2>
        <p class="text-gray-600 mb-8">
          Thank you for your contribution. Your table report has been successfully submitted.
        </p>
  
        <!-- Action Buttons -->
        <div class="space-y-4">
          <NuxtLink
            to="/addtreport"
            class="block w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Another Report
          </NuxtLink>
  
          <NuxtLink
            to="/showallreports"
            class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Reports
          </NuxtLink>
  
          <NuxtLink
            to="/"
            class="block w-full px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Return to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ["auth"]
  });
  </script>