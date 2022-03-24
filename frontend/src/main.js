import { createApp } from 'vue'
import { rtdbPlugin } from 'vuefire';
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Rating from 'primevue/rating';
import Column from 'primevue/column';

library.add(faHatWizard)

const app = createApp(App).use(router).use(PrimeVue)
app.use(router)
app.use(PrimeVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Textarea', Textarea)
app.component('Rating', Rating)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
