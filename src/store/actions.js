//ToDo: Import vue and name it Vue -- done
import Vue from 'vue'


export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                // ToDo: Create const call stocks that is equal to data.stocks -- done
                // ToDo: Create const call funds that is equal to data.funds -- done
                // ToDo: Create const call stockPortfolio that is equal to data.stockPortfolio -- done
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = { stockPortfolio, funds};


                //ToDo: Create a const called portfolio that is a data object {}
                    //ToDo: Inside portfolio add stockPortfolio and funds -- done?

                //ToDo: using vuex commit method pass 'SET_STOCKS' and stocks -- done?
                //ToDo: using vuex commit method pass 'SET_PORTFOLIO' and portfolio -- done?

                vuex.commit('SET_STOCKS', stocks);
                vuex.commit('SET_PORTFOLIO', portfolio);
            }
        });
};