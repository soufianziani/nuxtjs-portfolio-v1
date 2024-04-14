<template>
  <div class="flex flex-col max-w-[516px] text-center gap-y-5 items-center">
    <div class="hover:scale-100 relative scale-90 hover:drop-shadow-2xl cursor-pointer duration-200 group ">
      <img src="/assets/images/Soufiane-profile.png"  class="  h-40 " alt="">
      <div  class="absolute sm:top-40 sm:bottom-0 bottom-64 z-10  sm:left-60 w-full rounded-full hidden group-hover:block sm:rounded-ss-none group-hover:duration-200 bg-white p-3 text  text-dark border  transition-opacity duration-300      ">
      <p>Whatsapp <br> Me : +212 631 563-092</p>
</div>
    </div>
    <p class="text text-center">Hi! I’m Soufiane ZIANI ✌🏻</p>
    <p class="text-center  mt-2.5  text-3xl">Junior Full Stack Developer and Graphic Designer</p>
    <p class="text-center mt-2.5 text-sm max-w-[450px] text-secondary">
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
        <button  class="  rounded-full after:absolute relative w-fit after:buttom-0 after:left-0 text after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-dark after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
          <a href="/soufiane_resume.pdf" target="_blank" class="flex items-center gap-2"><p>Download CV</p><img src="/assets/icons/Download.svg" class="w-6 " alt=""></a>
        </button>
    
        
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
    -webkit-mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%);
    -webkit-mask-size: 800%;
    mask-size: 800%;
    -webkit-mask-position: 0;
    mask-position: 0;
}

img:hover {
    transition: mask-position 2s ease,-webkit-mask-position 2s ease;
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
}




</style>
