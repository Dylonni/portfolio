import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { useStore } from "@/stores/lang"

import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import Lang from './components/Lang.vue'
import AOS from 'aos'
import FR from './locale/fr.json'
import EN from './locale/en.json'
import 'aos/dist/aos.css'



const app = createApp(App)

app.component('Lang', Lang)
app.use(createPinia())

const store = useStore()
const i18n = createI18n({
	locale: store.locale,
	messages: {
		FR: FR,
		EN: EN,
	}
})

app.use(bootstrap)
app.use(router)
app.use(AOS)
app.use(i18n)
app.mount('#app')
