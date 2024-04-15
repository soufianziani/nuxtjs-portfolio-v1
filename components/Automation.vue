<template>
  <div class="flex items-center justify-center">
    <div class="rounded-full bg-dark min-w-12 min-h-12 flex justify-center">
      <img src="/assets/icons/Automation.svg"  class="w-6" alt="">
    </div>
    <div class="ml-4">
      <h1 class="text-xl">Automated Workflow</h1>
      <p class="text-sm">
        <a :class="linkClass" href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">Gitlab</a>
        •
        <a :class="linkClass" href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        •
        <a :class="linkClass" href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a>
        •
        <a :class="linkClass" href="https://slack.com/" target="_blank" rel="noopener noreferrer">Slack</a>
        •
        <a :class="linkClass" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const linkClass = "relative after:absolute after:top-5 cursor-pointer after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";
</script>

<style scoped></style>
