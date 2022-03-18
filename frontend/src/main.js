import { createApp } from 'vue'
import { rtdbPlugin } from 'vuefire';
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Rating from 'primevue/rating';

library.add(fas)

const app = createApp(App).use(router).use(PrimeVue)
app.use(router)
app.use(PrimeVue)
app.component('fa', FontAwesomeIcon)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Textarea', Textarea)
app.component('Rating', Rating)

app.mount('#app')
