<template>
  <div class="sm:mx-auto   sm:w-9/12 w-full   ">
  <div v-if="showMenu" @click="toggleMenu" class="fixed md:hidden backdrop-blur-sm bg-opacity-5 w-full left-0  z-10 min-h-screen"></div>
    <div class="  text-black md:bg-none bg-gray-200 bg-opacity-5 backdrop-blur-lg    p-4 flex justify-between items-center  w-full ">
      <div class="flex items-center ">
        <img src="/assets/icons/Logo.svg" class="w-6" alt="">
        <span class="text-xl">Soufiane.</span>
      </div>
      <!-- Button to toggle menu on mobile -->
      <button @click="toggleMenu" class="md:hidden text-sm ">
       <div class="flex items-center gap-1">
        <p>Menu</p>
        <img src="/assets/icons/Arrow_Down.svg" class="w-4" alt="">
       </div>
      </button>
      <!-- Navigation links for larger screens -->
      <div class="hidden md:flex gap-11">
        <nuxt-link to="/" :class="[$route.path === '/' ? 'border-b border-dark' : 'relative after:absolute  after:top-6  after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']" >About Me</nuxt-link>
        <!-- <nuxt-link to="/projects" :class="[$route.path === '/projects' ? 'border-b border-dark' : 'relative after:absolute  after:top-6  after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:after:origin-bottom-left hover:after:scale-x-100']" ></nuxt-link> -->
        <p class="select-none">Projects <span class="rounded-full text-white text-sm px-2 bg-dark p-1">soon</span></p>
      </div>
    </div>
    <!-- Dropdown menu for mobile -->
 <div class="  w-full max-w-lg fixed  z-20  ">
     <div class="relative mx-2">
       <div v-if="showMenu" class="md:hidden bg-zinc-900 text-white  shadow-b-md mt-2 rounded-xl flex flex-col px-4 pt-4 absolute w-full z-20 ">
        <div class="flex justify-between mb-2">
          <p class="text-sm tracking-wider text-zinc-600"> Navigation </p>
          <button @click="toggleMenu">
            <img src="/assets/icons/Close.svg" class=" w-4" alt="">
          </button>
        </div>
        <nuxt-link @click="toggleMenu" to="/" :class="$route.path === '/' ? 'font-semibold ':'text-white opacity-55' " class="block  text-sm py-4 ">About Me</nuxt-link><hr class="opacity-20">
        <!-- <nuxt-link @click="toggleMenu"  to="/projects" :class="$route.path === '/projects' ? 'font-semibold ':'text-white opacity-55' " class="block  text-sm py-4    "></nuxt-link> -->
        <p class="text-white opacity-55 select-none text-sm py-4">Projects <span class="text-dark  bg-white rounded-full text-sm px-2 p-1">soon</span></p>
           </div>
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
