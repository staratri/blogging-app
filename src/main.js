import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
import header from './components/header.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes,
  mode : 'history'
})
// Directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = '#' + Math.random().toString().slice(2,8);
//   }
// }),
Vue.component('nav-bar', header)
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = '1200px';
    }else if(binding.value === 'narrow')
      el.style.maxWidth = '600px;'
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

//Filters

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase() //global filter function
})
// Vue.filter('short-content', function(value){
//   return value.slice(0,100) + '...'
// })

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
