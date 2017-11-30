//ToDo: Import Home Component -- done
//ToDo: Import portfolio/Portfolio Component -- done
//ToDo: Import stocks/Stocks Component -- done
import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
    //ToDo: Create Route for Home Component with root (/) path -- done
    //ToDo: Create Route for Portfolio Component -- done
    //ToDo: Create Route for Stocks Component -- done
    { path: '/', name: 'home', components: {
        default: Home
    }},
    { path: '/portfolio', name: 'portfolio', components: {
        default: Portfolio
    }},
    { path: '/stocks', name: 'stocks', components: {
        default: Stocks
    }}
];