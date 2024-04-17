<template>
  <div class="min-h-screen  flex flex-col  sm:justify-center">
    <Navbar  />
    <slot />
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
