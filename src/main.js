import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './routes'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faSearch,faUser,faCartShopping,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch,faUser,faCartShopping,faArrowLeft)

createApp(App).component('fa',FontAwesomeIcon).use(router).mount('#app')
