<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import pb from '../composables/usePocketbase';

let loadingTeams = ref(true);
let loadingProfessionals = ref(true);
let professionals = ref([]);
let teams = ref([]);

async function getData() {
    const teamsrecord = await pb.collection('team').getFullList({
        sort: '-created',
    });
    teams.value = teamsrecord
    loadingTeams.value = false

    const professionalsrecord = await pb.collection('professionals').getFullList({
        sort: '-created',
    });
    professionals.value = professionalsrecord
    loadingProfessionals.value = false
}

onMounted(async () => {
    getData();
});

</script>

<template>
    <div class="headerBg">
        <div class="headerTint flex items-center justify-center">
            <p class="text-4xl font-semibold text-white">About</p>
        </div>
    </div>
    <div id="whoarewe" style="background-color: rgb(231, 247, 255)"
        class="py-6 flex items-center justify-center min-h-[60vh]">
        <div class="flex max-w-[700px] flex-col md:flex-row items-center justify-center p-3">
            <div class="md:w-[40%]">
                <div class="text-center md:text-left text-darkBlue">
                    <p class="text-3xl font-bold mb-5">Who are we?</p>
                    <p class="">
                        We are a student organization at UNLV that operates UNLV's branch of
                        the nation-wide Engineers Without Borders USA initiaitve. Engineers
                        Without Borders USA cooperates with the Engineers Without Borders
                        International community with a common goal:<strong> develop underserved
                            communities around the world</strong>.
                    </p>
                </div>
            </div>
            <div class="p-2"></div>
            <div class="md:w-[60%]">
                <img class="rounded-xl" src="/src/assets/guatemalaimgs/2.jpg" />
                <p class="text-sm text-zinc-500 italic text-center">Schoolhouse project</p>
            </div>
        </div>
    </div>

    <div class="missionBg">
        <div id="mission" class="p-2 missionTint flex items-center justify-center h-[100vh]">
            <div class="space-y-6">
                <div class="text-white text-center h-[30vh] flex flex-col justify-center">
                    <p class="text-4xl mb-4 font-bold">Mission</p>
                    <p class="text-lg max-w-[700px]">
                        Support community-driven development programs worldwide by
                        collaborating with local partners to design and implement sustainable
                        engineering projects, while creating transformative experiences and
                        responsible leaders.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="visionBg">
        <div id="vision" class="p-2 visionTint flex items-center justify-center h-[100vh]">
            <div class="space-y-6">
                <div class="text-white text-center h-[30vh] flex flex-col justify-center">
                    <p class="text-4xl mb-4 font-bold">Vision</p>
                    <p class="text-lg max-w-[700px]">
                        Our vision is a world in which the communities we serve have the capacity to sustainably meet
                        their basic human needs, and that our members have enriched global perspectives through the
                        innovative professional educational opportunities that the EWB-USA program provides at UNLV.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="officerboard" style="background-color: rgb(231, 247, 255)">
        <div class="flex py-7 flex-col items-center justify-center min-h-[80vh]">
            <p class="text-3xl font-bold mb-5 text-darkBlue">Officer Board</p>
            <div class="flex max-w-[900px] flex-wrap items-center justify-center">
                <div class="w-[150px] h-[270px] flex flex-col items-center justify-start rounded-xl m-2 p-2"
                    v-for="team in teams">
                    <div class="flex justify-center">
                        <img v-if="team.image" class="w-32 h-32 rounded-full bg-zinc-100 object-cover"
                            :src="`https://ewbunlv.pockethost.io/api/files/${team.collectionId}/${team.id}/${team.image}?token=`">
                        <img v-else class="w-32 h-32 rounded-full bg-white object-cover"
                            src="/src/assets/logos/squarelogoblue.png">
                    </div>
                    <div class="p-1"></div>
                    <div class="text-center h-full">
                        <p class="text-sm font-semibold text-zinc-600">{{ team.name }}</p>
                        <p class="text-zinc-600">{{ team.position }}</p>
                        <p class="text-xs italic text-zinc-600">{{ team.major }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div id="facultyandprofessionals" style="background-color: rgb(231, 247, 255)">
        <div class="flex py-7 flex-col items-center justify-center min-h-[80vh]">
            <p class="text-3xl font-bold mb-5 text-darkBlue">Faculty & Professionals</p>
            <div class="flex max-w-[900px] flex-wrap items-center justify-center">
                <div class="border w-[150px] h-[270px] flex flex-col items-center justify-center rounded-xl m-2 p-2 bg-white" v-for="prof in professionals">
                    <div class="flex justify-center">
                        <img v-if="prof.image" class="w-32 h-32 rounded-full bg-zinc-100 object-cover"
                            :src="`https://ewbunlv.pockethost.io/api/files/${prof.collectionId}/${prof.id}/${prof.image}?token=`">
                        <img v-else class="w-32 h-32 rounded-full bg-zinc-100 object-cover"
                            src="/src/assets/logos/squarelogoblue.png">
                    </div>
                    <div class="p-1"></div>
                    <div class="text-center">
                        <p class="text-sm font-semibold text-zinc-600">{{ prof.name }}</p>
                        <p class="text-zinc-600">{{ prof.position }}</p>
                        <p class="text-xs italic text-zinc-600">{{ prof.major }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <div id="donate" style="background-color: rgb(231, 247, 255)"
        class="py-6 flex items-center justify-center min-h-[100vh]">
        <div class="flex max-w-[700px] flex-col items-center justify-center p-3">
            <p class="text-3xl font-bold mb-5 text-darkBlue">Donate</p>
            <div>
                <a target="_blank" href="https://support.ewb-usa.org/give/84226/#!/donation/checkout">
                    <button class="button2 text-lg">Donate here!</button>
                </a>
            </div>
            <div class="p-2"></div>
            <div>
                <img class="rounded-xl" src="/src/assets/nicaraguaimgs/6.jpg" />
            </div>
        </div>
    </div>
    <div class="p-3" style="background-color: rgb(231, 247, 255)"></div>
</template>

<style scoped>
.visionTint {
    background-color: rgba(0, 125, 192, 0.869);
}

.visionBg {
    background-image: url("/src/assets/guatemalaimgs/8.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* background-attachment: fixed; */
}

.missionTint {
    background-color: rgba(0, 125, 192, 0.869);
}

.missionBg {
    background-image: url("/src/assets/guatemalaimgs/9.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* background-attachment: fixed; */
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
