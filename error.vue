<template>
  <div class="min-h-screen mx-2 flex flex-col justify-center">
    <div class="flex justify-center items-center mt-4">
      <img src="/assets/icons/Logo.svg" class="w-9" alt="Logo" />
      <span class="text-2xl">Soufiane.</span>
    </div>
    <div class="mydiv flex flex-col gap-7 justify-center items-center grow">
      <h1 class="text-5xl text-center font-[600]">
        Oops, you found our {{ error.statusCode }} page
      </h1>
      <h2 class="text-xl max-w-4xl text-center">
        This <span class="font-semibold">{{ error.url }}</span> is not a fault, just an accident that was not
        intentional. However, we doubt that this is the page you're looking for
        and we apologize profusely for it.
      </h2>
      <nuxt-link to="/">
        <button
          class="group mx-5 inline-flex text-white animate-background-shine items-center justify-center px-10 py-4 rounded-full bg-[linear-gradient(110deg,#0C0C0C,45%,#222222,55%,#0C0C0C)] bg-[length:200%_100%] font-medium transition-colors"
        >
          <span class="relative inline-flex overflow-hidden">
            <div
              class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12"
            >
              Go Home
            </div>
            <div
              class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
            >
              Go Home
            </div>
          </span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>
