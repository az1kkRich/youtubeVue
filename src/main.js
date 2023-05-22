import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(VuePlyr)