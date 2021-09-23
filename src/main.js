// alurapic/src/main.js

import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


// importando nosso CSS!
import './assets/css/teste.css';

// // importando o módulo
// import VueResource from 'vue-resource';

// Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
