import { createApp } from 'vue'
import { rtdbPlugin } from 'vuefire';
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App).use(router)

app.component('fa', FontAwesomeIcon)


app.mount('#app')
