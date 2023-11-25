import './assets/main.css'
import 'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'
import { DropdownMenu, DropdownItem, SwipeCell, Button,Icon    } from 'vant';
import 'vant/lib/index.css';
import routes from './routes/index.js'
import {createRouter,createWebHashHistory} from 'vue-router'


const router = createRouter({

    history: createWebHashHistory(),
    routes,
  })


const app = createApp(App)


app.use(SwipeCell);
app.use(DropdownMenu);
app.use(DropdownItem);

app.use(Button);
app.use(Icon);

app.use(router)
app.mount('#app')