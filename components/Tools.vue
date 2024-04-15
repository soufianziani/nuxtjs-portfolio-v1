<template>
  <div class="flex items-center justify-center">
    <div class="rounded-full bg-dark min-w-12 min-h-12 flex justify-center">
      <img src="/assets/icons/Tools.svg" class="w-6" alt="">
    </div>
    <div class="ml-4">
      <h1 class="text-xl">Tools</h1>
      <p class="text-sm">
        <a :class="linkClass" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a>
        •
        <a :class="linkClass" href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer">PhpStorm</a>
        •
        <a :class="linkClass" href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>
        •
        <a :class="linkClass" href="https://getcomposer.org/" target="_blank" rel="noopener noreferrer">Composer</a>
        •
        <a :class="linkClass" href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a>
        •
        <a :class="linkClass" href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">Illustrator</a>
        •
        <a :class="linkClass" href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">Photoshop</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const linkClass = "relative after:absolute after:top-5 cursor-pointer after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";
</script>

<style scoped></style>
