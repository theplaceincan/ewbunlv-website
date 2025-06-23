<script setup>
import { ref } from 'vue';

</script>

<template>
  <div class="headerBg">
    <div class="headerTint flex items-center justify-center">
      <p class="text-4xl font-semibold text-white">Guatemala</p>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">Background</p>
          <div class="text-darkBlue">
            <p class="">
              El Cebollín, Guatemala is an agricultural-based community made up of approximately 22 households. Without a proper schoolhouse, the children of these households had to walk two kilometers through an isolated road to reach the nearest school. The community solved this safety concern by building a one-room wooden schoolhouse, but this temporary structure did not meet the children's needs. The community partnered with EWB-UNLV to build a multi-room schoolhouse, which will provide a larger and more permanent learning space for the children and schoolteachers.  </p>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/guatemalaimgs/9.jpg" />
      </div>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/guatemalaimgs/1.jpg" />
      </div>
      <div class="p-2"></div>
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">Our approach</p>
          <div class="space-y-3 text-darkBlue">
            <p class="">
              To tackle this challenge, EWB-UNLV student members and professional mentors designed three plans for a new schoolhouse, and used a decision matrix to select a two schoolrooms, one office design. With the onset of COVID-19, the EWB-UNLV members also added a handwashing station to improve sanitation among the schoolchildren. The schoolhouse was constructed remotely, and is now fully completed. This schoolhouse provides a more stable space for the children to learn, and the increased space allows more children to attend school in the future. This space is also a gathering area for community activities and festivals.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-6 flex items-center justify-center min-h-[50vh]">
    <div class="flex max-w-[900px] flex-col md:flex-row items-center justify-center p-3">
      <div class="md:w-[40%]">
        <div class="text-center md:text-left">
          <p class="text-darkBlue text-3xl font-bold mb-5">Future prospects</p>
          <div class="text-darkBlue">
            <p class="">
              In the future, the chapter will continue to work with the community to monitor the success of the schoolhouse and ensure its longevity. From this project, UNLV-EWB members learned valuable skills about project design, decision-making, report writing, and the culture of Guatemala.
            </p>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div class="md:w-[60%]">
        <img class="rounded-xl" src="/src/assets/guatemalaimgs/18.jpg" />
      </div>
    </div>
  </div>

  <div class="min-h-[20vh] flex items-center justify-center">
    <a href="/projects/nicaragua">
      <button class="button2">
        <p class="text-xl">See Nicaragua Project</p>
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
  background-image: url("/src/assets/guatemalaimgs/17.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 22%;
}
</style>
