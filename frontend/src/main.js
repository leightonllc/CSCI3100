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
import DataTable from 'primevue/datatable';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Rating from 'primevue/rating';
import Column from 'primevue/column';
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import TabMenu from 'primevue/tabmenu';

library.add(fas)

const app = createApp(App).use(router).use(PrimeVue)
app.use(router)
app.use(PrimeVue)
app.component('fa', FontAwesomeIcon)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Textarea', Textarea)
app.component('Rating', Rating)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('FileUpload', FileUpload)
app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('TabMenu', TabMenu)

app.mount('#app')
