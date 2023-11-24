import './assets/main.css'
import 'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'

import { DropdownMenu, DropdownItem } from 'vant';


const app = createApp(App)

app.mount('#app')

app.use(DropdownMenu);
app.use(DropdownItem);