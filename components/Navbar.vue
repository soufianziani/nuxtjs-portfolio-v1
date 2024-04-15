<template>
  <div class="flex py-5 sm:px-0 sm:w-9/12 px-5 mb-36 mt-9 sm:mt-0 sm:mb-4 sm:mx-auto w-full flex-row md:items-center justify-between">
    <div class="flex justify-between items-center">
      <div>
        <nuxt-link to="/">
          <p class="text-black text-[18px]">Soufiane.</p>
        </nuxt-link>
      </div>
      <!-- This part is commented out, but I'm leaving it here in case you want to use it later -->
      <!-- <div>
        <button type="button" @click="toggleOpenMenu" class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div> -->
    </div>
    <!-- This part is commented out, but I'm leaving it here in case you want to use it later -->
    <!-- <div class="flex flex-col md:flex-row md:-mx-4" :class="isOpen ? 'block' : ['hidden' , 'md:block']">
      <nuxt-link to="/" class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0" href="#">About Me</nuxt-link>
      <nuxt-link to="/" class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0" href="#">Projects</nuxt-link>
    </div> -->
    <div class="flex gap-4">
      <nuxt-link
  to="/"
  :class="[$route.path === '/' ? 'border-b border-dark' : 'relative after:absolute  after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']"
>
  About Me
</nuxt-link>
      <nuxt-link
  to="/"
  :class="[$route.path === '/projetcs' ? 'border-b border-dark' : 'relative after:absolute  after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']"
>
  Projetcs
</nuxt-link>
    </div>
  </div>
</template>

<script setup>
// You can put your script setup here if needed
</script>

<style scoped>
/* You can add your scoped styles here if needed */
</style>
