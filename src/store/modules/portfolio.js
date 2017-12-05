//ToDo: Create const called state that is a data object{} -- done
    //ToDo: Create funds and set it to 10000 -- done
    //ToDo: Create an array called stocks and leave it empty -- done
const state = {
    funds: 10000,
    stocks: []
}
    const mutations = {
        'BUY_STOCK': (state, {stockId, quantity, stockPrice}) => {
            const record = state.stocks.find(element => element.id == stockId)
            if (record) {
                record.quantity += quantity
            }
            else {
                state.stocks.push({id: stockId, quantity: quantity})
            }
            state.funds -= stockPrice * quantity
        },
        'SELL_STOCK': (state, {stockId, quantity, stockPrice}) => {
            const record = state.stocks.find(element => element.id == stockId)
            if (record.quantity > quantity) {
                record.quantity -= quantity
            }
            else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        },
        'SET_PORTFOLIO': (state, portfolio) => {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    }

const actions = {
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order)
}
}
const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
},
    funds: (state) => {
        return state.funds
    }
}
//ToDo: Create const called mutations that is a data object{} -- done
    //ToDo: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice} -- done
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId) -- done
        //ToDo: If (record) then set record.quantity += quantity -- done
        //ToDo: Else push id: stockId and quantity: quantity to state.stocks -- done
        //ToDo: Set state.funds -= stockPrice * quantity -- done

    //ToDo: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice} -- done
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId) -- done
        //ToDo: If (record.quantity > quantity) then set record.quantity -= quantity -- done
        //ToDo: Else set state.stocks.splice(state.stocks.indexOf(record, 1)) -- done
        //ToDo: Set state.funds += stockPrice * quantity -- done

    //ToDo: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio} -- done
        //ToDo: Set state.funds equal t portfolio.funds -- done
        //ToDo: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :) -- done


//ToDo: Create const called actions that is a data object() -- done
    //ToDo: Create sellStock that passes ({commit}, order) -- done
    //  ToDo: Use the commit method passing 'SELL_STOCK' and order -- done


//ToDo: Create const called getters that is a data object{} -- done
    //ToDo: Inside getters object create stockPortfolio method that takes two parameters (state, getters) -- done
        //ToDo: return state.stocks.map() that is a pointer function that passes stock -- done
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId) -- done
        //ToDo: Return an object -- done
            //ToDo: Set id to stock.id -- done
            //ToDo: Set quantity to stock.quantity -- done
            //ToDo: Set name to record.name -- done
            //ToDo: Set price to record.price -- done
    //ToDo: Create funds method that passes state -- done
        //ToDo: Return state.funds -- done

export default {
    //ToDo: Export the const state, mutations, actions, and getters -- done
    state,
    mutations,
    actions,
    getters
}