import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// アイコンをライブラリに追加
library.add(faInstagram, faFacebook, faBars, faXmark)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
