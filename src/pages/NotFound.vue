<script setup lang="ts">
import LogoLight from '@/components/ui/Logo-Light.vue';
</script>
<template>
  <div class="rounded-lg bg-white px-5 py-12 shadow sm:px-6">
    <div class="flex min-h-screen flex-col bg-white pb-12 pt-16">
      <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div class="flex flex-shrink-0 justify-center">
          <a href="/" class="inline-flex">
            <span class="sr-only">Workflow</span>
            <logo-light />
          </a>
        </div>
        <div class="py-16">
          <div class="text-center">
            <p class="text-sm font-semibold uppercase tracking-wide text-indigo-600">404 error</p>
            <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
            <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="mt-6">
              <a href="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >Go back home<span aria-hidden="true"> &rarr;</span></a
              >
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
