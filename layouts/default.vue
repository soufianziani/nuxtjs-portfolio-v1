<template>
  <div class="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(160%_180%_at_00%_100%,#fff_50%,#000_320%)]"></div>
  <div class="min-h-screen mx-auto flex flex-col justify-center items-center">
    <Navbar class="mx-5" />
    <slot />
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
