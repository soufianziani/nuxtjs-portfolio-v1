<template>
  <div class="flex flex-col max-w-[516px] text-center gap-y-5 items-center">
    <div class="  hover:scale-100 relative scale-90  cursor-pointer duration-500 group ">
      <div class="group-hover:drop-shadow-2xl">
        <img src="/assets/images/Soufiane-profile.png"  class=" w-40 h-40 " alt="">
      </div>
      <div
        class="absolute px-1  py-1 bottom-0 text-sm hidden group-hover:block drop-shadow-none bg-white rounded-full w-full border rounded-ss-none text-center left-32 sm:left-36">
        Whatssap Me <br> 0631-563-092</div>
    </div>
    <p class="text text-center">Hi! I’m Soufiane ZIANI ✌🏻</p>
    <p class="text-center  mt-2.5  text-3xl">Junior Full Stack Developer and Graphic Designer</p>
    <p class="text-center mt-2.5 text-sm max-w-[400px] text-secondary">
      As a Junior Full Stack Developer and Web Designer, I specialize in <a href="https://laravel.com" class="underline"
        target="_blank" rel="noopener noreferrer">Laravel</a> and <a href="https://vuejs.org" class="underline"
        target="_blank" rel="noopener noreferrer">Vue.js</a>, crafting seamless digital experiences. With expertise in
      <a href="https://www.figma.com" class="underline" target="_blank" rel="noopener noreferrer">Figma</a>, I merge
      functionality with aesthetics, creating intuitive interfaces that captivate users.
    </p>
    <div class=" relative">
      <button
        class="group  mx-5   inline-flex   text-white animate-background-shine items-center justify-center px-10 py-4   rounded-full bg-[linear-gradient(110deg,#0C0C0C,45%,#222222,55%,#0C0C0C)] bg-[length:200%_100%]  font-medium  transition-colors  "><span
          class="relative inline-flex overflow-hidden">
          <div
            class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            Hire Me</div>
          <div
            class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            Hire Me</div>

        </span></button>
      
      
      <a href="/soufiane_resume.pdf" target="_blank" >
        <button class="group relative inline-flex py-4 hover:shadow-xl duration-500 focus:shadow-inner rounded-full items-center justify-center overflow-hidden  text-dark border px-6 font-medium "><span><p>Download CV</p></span><div class="w-0 translate-x-[100%]  pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
          <img src="/assets/icons/Download.svg" class="w-5 " alt="">
        </div>
      </button></a>
      <div>

      </div>
      <!-- <div class="flex items-center gap-2"><p>Download CV</p><img src="/assets/icons/Download.svg" class="w-6 icon" alt=""></div> -->
    </div>
  </div>
  </template>

<script setup>

</script>

<style scoped>
img {
  -webkit-mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, .2) 50%, #000 75%);
  mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, .2) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
}

img:hover {
  transition: mask-position 2s ease, -webkit-mask-position 2s ease;
  -webkit-mask-position: 120%;
  mask-position: 120%;
  opacity: 1;
}
</style>
