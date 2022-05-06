/**
 * @Author: leightonllc 
 * @Description: /main.js manages all components or libraries imported from expernal sourses.
 * @Date: 2022-05-06 19:07:30
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:09:03
 */

import { createApp } from 'vue'
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
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import UpperBar from './components/upperBar/UpperBar'
import ConfirmationService from 'primevue/confirmationservice';
import Dropdown from 'primevue/dropdown';
import ConfirmDialog from 'primevue/confirmdialog';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';

library.add(fas)

const app = createApp(App).use(router).use(PrimeVue).use(VueSidebarMenu)
app.use(router)
app.use(PrimeVue)
app.use(VueSidebarMenu)
app.use(ConfirmationService);
app.use(ToastService);
app.component('fa', FontAwesomeIcon)
app.component('UpperBar', UpperBar)
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
app.component('ConfirmDialog', ConfirmDialog)
app.component('Toast', Toast)
app.component('Tag', Tag)
app.component('Dropdown', Dropdown)
app.component('Dialog', Dialog)

app.mount('#app')
