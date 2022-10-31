import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* Bootstrap */
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
/** Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faFlask } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
app.use(BootstrapVue3)
library.add(faMagnifyingGlass, faFlask)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
