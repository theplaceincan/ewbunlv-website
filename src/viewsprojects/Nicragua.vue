<script setup>
import { ref } from 'vue';

</script>

<template>
  <div class="headerBg">
    <div class="headerTint flex items-center justify-center">
      <p class="text-4xl font-semibold text-white">Nicaragua</p>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">What happened?</p>
          <div class="text-darkBlue">
            <p class="">
              In 2010 and 2011, devastating floods swept through the Nicaraguan communities in San Francisco Libre,
              causing mass destruction and displacing over <strong>300 families</strong>. These families were relocated
              to
              higher grounds, but lacked access to essential infrastructure, including sanitation.
            </p>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/nicaraguaimgs/flood.jpg" />
      </div>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/nicaraguaimgs/11.jpg" />
      </div>
      <div class="p-2"></div>
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">What happened next?</p>
          <div class="space-y-3 text-darkBlue">
            <p class="">
              In 2013, the UNLV chapter of Engineers Without Borders partnered with the San Francisco Libre community to
              construct 41 two-pit composting latrines.</p>
            <p class="">These reusable latrines serve the dual purpose of eliminating open defecation while also
              providing compost
              to nourish crops.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">Current progress</p>
          <div class="text-darkBlue">
            <p class="">
              Over the course of four implementation trips spanning four years, a total of 41 latrines were constructed.
              Now the chapter is conducting a remote monitoring and evaluation trip in April 2024 to examine the
              latrines and ensure the safety and longevity of the project.
            </p>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/nicaraguaimgs/26.jpg" />
      </div>
    </div>
  </div>

  <div class="min-h-[20vh] flex items-center justify-center">
    <a href="/projects/guatemala">
      <button class="button2">
        <p class="text-xl">See Guatemala Project</p>
      </button>
    </a>
  </div>
</template>

<style scoped>
.headerTint {
  height: 204.65px;
  background-color: rgba(0, 0, 0, 0.664);
}

.headerBg {
  background-image: url("/src/assets/nicaraguaimgs/10.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
