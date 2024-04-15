<template>
<div class=" min-h-screen flex items-center justify-center ">
  <div class="relative w-full ">
    <div class="absolute top-0 -left-4 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="relative space-y-4">
     
  <div class="  w-full flex flex-col items-center justify-center">
  <Header/>
</div>
  <Marquee class=" transform -rotate-3"/>
<div class="min-h-screen flex justify-center items-center">
  <Experience/>  
</div>
  <Marquee class="transform rotate-3"/>
<div class="min-h-screen flex justify-center items-center">
  <Education/>  
</div>
</div>
    </div>
  </div>


</template>

<script setup>
// No script needed for now
</script>

