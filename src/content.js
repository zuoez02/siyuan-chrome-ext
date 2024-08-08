import { createApp } from 'vue'
import Dialog from './components/Dialog.vue'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

createApp(Dialog).mount('#crx-root')