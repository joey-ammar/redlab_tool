/* Create App */
import { createApp } from 'vue'
/* Main Style */
import './style.css'
/* Import App */
import App from './App.vue'
/* Import the translation */
import i18n from '../i18n';
/* Bootstrap */
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
/** Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faFlask } from '@fortawesome/free-solid-svg-icons'

/* variable App  */
const app = createApp(App)
/* Use Boostrap */
app.use(BootstrapVue3)
library.add(faMagnifyingGlass, faFlask)
app.component('font-awesome-icon', FontAwesomeIcon)
/* Use the translation */
app.use(i18n);
/* Mount the App */
app.mount('#app')
