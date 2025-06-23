<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import pb from "../composables/usePocketbase";
import Map from "../components/Map.vue";

let newsLetters = ref([])

const model = computed(() => pb.authStore.model);
const route = useRoute();
const router = useRouter();

async function getData() {
  const newsLetterRecords = await pb.collection('newsletters').getFullList({
    sort: '-created',
  });
  newsLetters.value = newsLetterRecords;
}

onMounted(async () => {
  getData();
});
</script>

<template>
  <div class="h-[100vh]">
    <div class="landingbg1 h-[100%]">
      <div class="landingbgtint1 p-1 flex items-center justify-center h-[100%]">
        <div class="text-center text-white">
          <p class="text-5xl sm:text-6xl">
            Engineering a <span class="font-bold">Better World</span>
          </p>
          <p class="mt-4 text-xl sm:text-xl">One community at a time</p>
          <a href="/about">
            <button class="button1 mt-5">
              <p class="text-xl">About</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="h-[100vh]">
    <div class="landingbg2 h-[100%]">
      <div class="landingbgtint2 p-1 flex items-center justify-center h-[100%]">
        <div class="text-center text-white">
          <p class="text-5xl sm:text-6xl">Our Mission</p>
          <p class="mt-4 text-xl sm:text-xl">
            "Serving communities around the world to help meet their basic human
            needs"
          </p>
          <a href="/projects">
            <button class="button1 mt-5">
              <p class="text-xl">See Projects</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="h-[100vh]">
    <div class="landingbg3 h-[100%]">
      <div class="landingbgtint3 p-1 flex items-center justify-center h-[100%]">
        <div class="text-center text-white">
          <p class="text-5xl sm:text-6xl">Projects</p>
          <div class="mt-5">
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="h-[100vh]">
    <div class="landingbg4 h-[100%]">
      <div class="landingbgtint4 p-1 flex items-center justify-center h-[100%]">
        <div class="text-center text-white">
          <p class="text-5xl sm:text-6xl">Newsletter</p>
          <div class="mt-5 flex">
            <div class="w-60 bg-transparent border border-white text-white rounded-xl p-2 text-left" v-for="news in newsLetters">
              <p class="text-lg font-semibold">{{ news.title }}</p>
              <p class="line-clamp-3">{{ news.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.landingbgtint4 {
  background-color: rgba(0, 0, 0, 0.4);
}
.landingbg4 {
  background-image: url("/src/assets/nicaraguaimgs/22.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
}

.landingbgtint3 {
  background-color: rgba(0, 0, 0, 0.4);
}
.landingbg3 {
  background-image: url("/src/assets/guatemalaimgs/13.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
}

.landingbgtint2 {
  background-color: rgba(0, 0, 0, 0.4);
}
.landingbg2 {
  background-image: url("/src/assets/guatemalaimgs/18.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
}

.landingbgtint1 {
  background-color: rgba(0, 0, 0, 0.4);
}
.landingbg1 {
  background-image: url("/src/assets/guatemalaimgs/3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
}
</style>
