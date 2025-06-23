<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="map-container">
    <img src="/src/assets/map.png" class="map">
    <div class="dot-container" style="top: 28%; left: 12%;">
      <a href="/projects/guatemala" class="dot-link">
        <button class="dot">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
          </svg>
        </button>
        <p class="dotText">Guatemala</p>
      </a>
    </div>
    <div class="dot-container" style="top: 45%; left: 38%;">
      <a href="/projects/nicaragua" class="dot-link">
        <button class="dot">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
          </svg>
        </button>
        <p class="dotText">Nicaragua</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes radiate {
  0% {
    box-shadow: 0 0 0 0px rgb(171, 206, 255);
  }
  100% {
    box-shadow: 0 0 0 16px rgba(87, 179, 241, 0);
  }
}

.map-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.map {
  width: 100%;
  height: auto;
}

.dot-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dot-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.dot {
  width: 40px;
  height: 40px;
  background-color: rgb(66, 154, 255);
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 12px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: radiate 2s ease-in-out infinite;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  position: relative;
  transition: background-color 0.2s ease;
}

.dot:hover {
  background-color: rgb(21, 59, 90);
}

.dot:hover + .dotText {
  opacity: 1;
  visibility: visible;
}

.dotText {
  position: absolute;
  top: -30px;
  color: rgb(255, 255, 255);
  background-color: rgb(21, 59, 90);
  font-weight: 600;
  padding: 3px;
  padding-left: 9px;
  padding-right: 9px;
  border-radius: 5px;
  font-size: 16px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.dot-link:hover .dotText {
  opacity: 1;
  visibility: visible;
}
</style>
