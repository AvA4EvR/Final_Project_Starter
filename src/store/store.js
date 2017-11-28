//ToDo: Import vue and name it Vue -- done
import Vue from 'vue'
//ToDo: Import vuex and name it Vuex -- done
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

//ToDo Initialize Vuex using Vue.use() -- done
Vue.use(Vuex);


export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});