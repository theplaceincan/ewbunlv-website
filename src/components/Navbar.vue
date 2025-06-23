<script setup>
import { ref } from 'vue';

// Define a reactive variable to control the mobile nav drawer
let openMobileNavDrawer = ref(false);

// Toggle function to switch the state of openMobileNavDrawer
function mobileNavDrawerToggle() {
  openMobileNavDrawer.value = !openMobileNavDrawer.value;
}
</script>

<template>
  <div class="z-50 flex flex-col mainNavBar" :class="{'bg-white' : openMobileNavDrawer}">
    <div class="transition ease-in-out flex justify-between px-6 items-center p-1">
      <div v-if="!openMobileNavDrawer">
        <a href="/">
          <img class="isPC w-80" src="/src/assets/logos/ewblogotextdark.png">
          <img class="isMobile w-20" src="/src/assets/logos/squarelogo.webp">
        </a>
      </div>
      <div v-else>
        <a href="/">
          <img class="isPC w-80" src="/src/assets/logos/ewblogotextblue.png">
          <img class="isMobile w-20" src="/src/assets/logos/squarelogoblue.png">
        </a>
      </div>
      <div class="p-5"></div>
      <div class="isPC flex navContainer">
        <div class="relative nav-item">
          <a href="/about"><button class="navButtons">About</button></a>
          <div class="dropdown font-semibold">
            <a href="/about#whoweare">Our Team</a>
            <a href="/about#mission">Mission</a>
            <a href="/about#vision">Vision</a>
            <a href="/about#officerboard">Officer Board</a>
            <a href="/about#facultyandprofessionals">Faculty and Professionals</a>
            <a href="/about#donate">Donate</a>
          </div>
        </div>
        <div class="relative nav-item">
          <a href="/projects"><button class="navButtons">Projects</button></a>
          <div class="dropdown font-semibold">
            <a href="/projects/nicaragua">Nicaragua</a>
            <a href="/projects/guatemala">Guatemala</a>
          </div>
        </div>
        <div class="relative nav-item">
          <a href="/students"><button class="navButtons">Students</button></a>
          <div class="dropdown font-semibold">
            <a href="/students#whyjoinus">Why Join Us</a>
            <a target="_blank" href="https://discord.gg/av9ns4K33B">Discord</a>
            <a target="_blank" href="https://involvementcenter.unlv.edu/organization/ewb">Involvement Center</a>
            <!-- <a href="/students#faq">FAQ</a> -->
          </div>
        </div>
        <div class="relative nav-item">
          <a href="/calendar"><button class="navButtons">Calendar</button></a>
        </div>
        <div class="relative nav-item">
          <a href="/contact-us"><button class="navButtons">Contact Us</button></a>
          <div class="dropdown font-semibold">
            <a target="_blank" href="https://discord.gg/av9ns4K33B">Discord</a>
            <a target="_blank" href="https://involvementcenter.unlv.edu/organization/ewb">Involvement Center</a>
            <a target="_blank" href="https://www.linkedin.com/in/ewbunlv/">LinkedIn</a>
            <a target="_blank" href="https://www.instagram.com/ewbunlv/">Instagram</a>
            </div>
        </div>
      </div>
      <div class="isMobile flex items-center">
        <button :class="{ 'text-darkBlue': openMobileNavDrawer, 'text-white': !openMobileNavDrawer }" class="transition ease-in-out" @click="mobileNavDrawerToggle">
          <svg class="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="openMobileNavDrawer" class="text-xl bg-white items-center justify-center p-3">
      <a href="/about"><button class="navButtonsmobile">About</button></a>
      <a href="/projects"><button class="navButtonsmobile">Projects</button></a>
      <a href="/students"><button class="navButtonsmobile">Students</button></a>
      <a href="/calendar"><button class="navButtonsmobile">Calendar</button></a>
      <a href="/contact-us"><button class="navButtonsmobile">Contact Us</button></a>
      <a href="/support.ewb-usa.org/give/84226/#!/donation/checkout"><button class="navButtonsmobile">Donate</button></a>
    </div>
  </div>
</template>
<style scoped>
.navButtonsmobile {
  color: rgb(21, 59, 90);
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 20px;
  border: 2px solid rgba(221, 221, 221, 0);
  transition: border 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.navButtonsmobile:active {
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(0, 92, 188);
  color: white;
}

.mainNavBar {
  position: absolute;
  z-index: 9999;
  width: 100%;
  top: 0;
}

.navButtons {
  margin: 0 10px;
  font-weight: 600;
  color: white;
  transition: color 0.2s ease;
}

.navButtons:hover {
  color: white;
}

.navContainer:hover .navButtons {
  color: rgb(199, 199, 199);
}

.navContainer .navButtons:hover {
  color: white;
}

.relative {
  position: relative;
}

.dropdown {
  border-radius: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgb(41, 41, 41);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
}

.nav-item:hover .navButtons {
  color: white;
}

.dropdown a {
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: rgb(53, 53, 53);
  border-radius: 5px;
}
</style>
