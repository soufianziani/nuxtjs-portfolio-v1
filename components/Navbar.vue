<script setup>


</script>

<template>
  <div class="flex  w-9/12  mx-auto flex-row md:items-center justify-between">
    <div class="flex justify-between items-center">
      <div>
        <nuxt-link to="/">
          <p class="text-black text-[18px]">Soufiane.</p>
        </nuxt-link>
      </div>
      <!-- <div>
              <button type="button" @click="toggleOpenMenu" class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  </svg>
              </button>
          </div> -->
    </div>
    <!-- <div class="flex flex-col md:flex-row md:-mx-4" :class="isOpen ? 'block' : ['hidden' , 'md:block']">
          <nuxt-link to="/" class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0" href="#">About Me</nuxt-link>
          <nuxt-link to="/" class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0" href="#">Projects</nuxt-link>
      </div> -->
    <div class="flex  gap-4">
      <nuxt-link to="/"
        class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0"
        href="#">About Me</nuxt-link>
      <nuxt-link to="/"
        class="relative after:absolute after:top-6 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 md:mx-4 md:my-0"
        href="#">Projects</nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>