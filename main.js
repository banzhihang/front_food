import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import axios from './util/request/request.js'


Vue.use(uView);

Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})

Vue.config.productionTip = false


App.mpType = 'app'

Vue.prototype.$http = axios

const app = new Vue({
    ...App
})
app.$mount()
