<template>
  <div class="min-h-screen  flex flex-col px-2 sm:justify-center">
    <Navbar class="" />
    <slot />
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
