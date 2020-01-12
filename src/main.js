// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'view-design'
import 'view-design/dist/styles/iview.css'

var moment = require('moment');
moment().format();
var moment = require('moment-timezone');
moment().tz("America/Los_Angeles").format();
Vue.config.productionTip = false;
Vue.use(iview, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
