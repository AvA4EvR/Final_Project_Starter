import stocks from '../../data/stocks';

//ToDo: Create const called state that is a data object{} -- done
const state = {
    stocks: []
};
    //ToDo: Create an array called stocks inside the state object -- done


//ToDo: Create const called mutations that is a data object{} -- done
    //ToDo: Inside mutations object create a vuex method called 'SET_STOCKS' that takes two parameters (state, stocks) -- done
        //ToDo: Inside 'SET_STOCKS' set state.stocks equal to stocks -- done
const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },


    //ToDo: Inside mutations object create a vuex method called 'RND_STOCKS' that takes one parameter (state) -- done
    //ToDo: Inside 'RND_STOCKS' your will create a state.stocks.forEach that is a point function that passes stock -- done
    //ToDo: Set stock.price equal to Math.round() passing stock.price * (1 + Math.random() - 0.5) -- done? check math
    'RND_STOCKS': (state) => {
      state.stocks.forEach(stock => {
          stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        });

    }
}
const actions = {

    // Note: Use buyStock as reference for the comments below within actions
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },

    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    //ToDo: Create initStocks that is a pointer function that passes {commit} -- done
        //ToDo: Use the commit method passing 'SET_STOCKS'  and stocks -- done?

    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
    //ToDo: Create randomizeStocks that is a pointer function that passes {commit} -- done
        //ToDo: Use the commit method passing 'RND_STOCKS' -- done
};

const getters = {
    stocks: (state) => {
        return state.stocks;
    }
};
//ToDo: Create const called getters that is a data object{} -- done
    //ToDo: Inside getters object create stocks that is a pointer function that passes the state -- done
        //ToDo: Return state.stocks -- done

export default {
    //ToDo: Export the const state, mutations, actions, and getters -- done
    state,
    mutations,
    actions,
    getters
};