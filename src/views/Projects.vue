<script setup>
import { ref } from 'vue';

</script>

<template>
  <div class="headerBg">
    <div class="headerTint flex items-center justify-center">
      <p class="text-4xl font-semibold text-white">Projects</p>
    </div>
  </div>
  <div class="flex md:flex-row flex-col items-center justify-center min-h-[50vh]">
    <a href="/projects/nicaragua">
      <div class="nicaraguaProjectBg">
        <div class="nicaraguaProjectTint">
          <div class="h-80 w-80 flex items-center justify-center">
            <p class="text-3xl text-white">Nicaragua</p>
          </div>
        </div>
      </div>
    </a>
    <a href="/projects/guatemala">
      <div class="guatemalaProjectBg">
        <div class="guatemalaProjectTint">
          <div class="h-80 w-80 flex items-center justify-center">
            <p class="text-3xl text-white">Guatemala</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.guatemalaProjectTint {
  background-color: rgba(0, 81, 148, 0.664);
  transition: background-color 0.2s ease, border 0.2s ease;
  border: 4px solid white;
  overflow: hidden;
  position: relative;
}

.guatemalaProjectTint::before {
  content: "";
  background-image: url("/src/assets/guatemalaimgs/10.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.2s ease;
  z-index: -1;
}

.guatemalaProjectTint:hover {
  border: 4px solid rgb(125, 179, 255);
  background-color: rgba(0, 145, 255, 0.756);
}

.guatemalaProjectTint:hover::before {
  transform: scale(1.1);
}

.nicaraguaProjectTint {
  background-color: rgba(0, 81, 148, 0.664);
  transition: background-color 0.2s ease, border 0.2s ease;
  border: 4px solid white;
  overflow: hidden;
  position: relative;
}

.nicaraguaProjectTint::before {
  content: "";
  background-image: url("/src/assets/nicaraguaimgs/10.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.2s ease;
  z-index: -1;
}

.nicaraguaProjectTint:hover {
  border: 4px solid rgb(125, 179, 255);
  background-color: rgba(0, 145, 255, 0.756);
}

.nicaraguaProjectTint:hover::before {
  transform: scale(1.1);
}


.headerTint {
  height: 204.65px;
  background-color: rgba(0, 0, 0, 0.664);
}

.headerBg {
  background-image: url("/src/assets/unlvimgs/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
