<template>
  <Navbar class="mt-5" />
  <div class="min-h-screen mx-auto flex flex-col   justify-center items-center">
    <slot />
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
