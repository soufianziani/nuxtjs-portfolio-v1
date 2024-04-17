<template>
  <div class=" flex sm:flex-row flex-col items-start mx-7 mt-10 justify-between gap-x-4 gap-y-12">
    
    <div class="">
      <p class="text-3xl mb-7 font-semibold">Tools</p>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-12 items-start">
          <BackEnd/>
          <FrontEnd/>
          <Tools/>
          <Automation/>
        </div>
      </div>
          <!-- back End -->
        </div>
        
        <div class="  ">
          <p class="text-3xl mb-5 font-semibold">Work Eperience</p>
          <Timeline/>
        </div>
  </div>
</template>

<script setup>
const linkClass = "relative after:absolute after:top-5 cursor-pointer after:left-0 after:h-[1px] after: after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";
</script>

<style lang="scss" scoped></style>
