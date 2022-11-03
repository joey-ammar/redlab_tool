
import { createApp } from 'vue'

import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import i18n from '../i18n';

import router from './router/index'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// import CSS resources
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import Dropdown from 'primevue/dropdown';
import SelectButton from 'primevue/selectbutton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faFlask , faBars, faX} from '@fortawesome/free-solid-svg-icons'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(PrimeVue);
app.use(pinia)
app.use(BootstrapVue3)
app.use(router)
library.add(faMagnifyingGlass, faFlask, faBars, faX)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Dropdown', Dropdown)
app.component('SelectButton', SelectButton)
app.use(i18n);
app.mount('#app')
