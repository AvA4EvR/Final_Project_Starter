//ToDo: Import vue and name it Vue -- done
import Vue from 'vue'
//ToDo: Import vue-router and name it VueRouter -- done
import VueRouter from 'vue-router'
//ToDo: Import vue-resource and name it VueResource -- done
import VueResource from 'vue-resource'

//ToDo: Import App.vue and name it App -- done
import App from './App.vue'

//ToDo: Import routes.js and use the {} passing routes -- done
import {routes} from './routes.js'

//ToDo: Import store/store.js and name it store -- done
import store from './store/store';

//ToDo Initialize VueRouter using Vue.use() -- done
Vue.use(VueRouter);
//ToDo Initialize VueResource using Vue.use() -- done
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-f1e6b.firebaseio.com/data.json'; //ToDo: Set Equal to your Firebase Database URL -- done

Vue.filter('currency', (value) => {
  //ToDo: Return value.toLocalString(), Add $ sign before the value -- done
    return '$' + value.toLocaleString()
});

const router = new VueRouter({
    //ToDo: Set router mode to history -- done
    mode: 'history',
    //ToDo: Pass routes constant imported from above -- done
    routes

});

new Vue({
  el: '#app',
    //ToDo: Pass the router constant to vue application -- done
    router,
    //ToDo: Pass store constant to vue application -- done
    store,
  render: h => h(App)
})
