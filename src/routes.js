import Home from './views/Home.vue';
import Calendar from './views/Calendar.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Students from './views/Students.vue';
import Contact from './views/Contact.vue';
import Nicragua from './viewsprojects/Nicragua.vue';
import Guatemala from './viewsprojects/Guatemala.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/calendar', component: Calendar },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/students', component: Students },
    { path: '/contact-us', component: Contact },
    { path: '/projects/nicaragua', component: Nicragua },
    { path: '/projects/guatemala', component: Guatemala },
];

//meta: { reqAuth: true}

export default routes;
