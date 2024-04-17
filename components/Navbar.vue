<template>
  <div class="sm:mx-auto   sm:w-9/12 w-full   ">
    <div class="  text-black md:bg-none bg-gray-200 bg-opacity-5 backdrop-blur-lg    p-4 flex justify-between items-center  w-full ">
      <div class="flex items-center ">
        <!-- Replace with your logo or text -->
        <span class="">Soufiane.</span>
      </div>
      <!-- Button to toggle menu on mobile -->
      <button @click="toggleMenu" class="md:hidden text-sm ">
        <svg v-if="showMenu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- Navigation links for larger screens -->
      <div class="hidden md:flex gap-11">
        <nuxt-link to="/" :class="[$route.path === '/' ? 'border-b border-dark' : 'relative after:absolute  after:top-6  after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']" >About Me</nuxt-link>
        <nuxt-link to="/projects" :class="[$route.path === '/projects' ? 'border-b border-dark' : 'relative after:absolute  after:top-6  after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']" >Projects</nuxt-link>
      </div>
    </div>
    <!-- Dropdown menu for mobile -->
 <div class="  relative ">
     <div v-if="showMenu" class="md:hidden text-center  bg-gray-200 bg-opacity-5 backdrop-blur-lg border-b shadow-b-md   py-2  rounded-b-lg flex flex-col justify-center items-center  absolute w-full z-20 ">
      <nuxt-link to="/" class="block  text-sm py-4 px-4">About Me</nuxt-link>
      <nuxt-link to="/projects" class="block  text-sm pb-10  pt-4  px-4">Projects</nuxt-link>
    </div>
 </div>
    <div class="mb-10"></div> <!-- Placeholder for fixed header -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
