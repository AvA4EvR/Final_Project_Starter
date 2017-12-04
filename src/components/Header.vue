<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <!--ToDo: Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text-->
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <!--ToDo: Create router-link that goes to '/portfolio'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Portfolio text-->

                    <!--ToDo: Create router-link that goes to '/stocks'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Stocks text-->
                </ul>
                <strong class="navbar-text navbar-right">Funds:
                    <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js-->
                </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <!--ToDo: Add click event to <a> that calls endDay method-->
                        <a href="#" >End Day</a>
                    </li>

                    <!--ToDo: Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
                        <!--ToDo: Add click event that toggles isDropdownOpen to true and false-->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <!--ToDo: Add click event that calls the saveData method-->
                            <li><a href="#">Save Data</a></li>
                            <!--ToDo: Add click event that calls the loadData method-->
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    //ToDo: Import mapActions from vuex

    import { mapActions } from 'vuex'

    export default {
        data() {
          return {
              //ToDo: Create data object called isDropdownOpen and set it to false -- done
              isDropdownOpen: false
          }
        },
        computed: {
            funds: function() {
                return this.$store.getters.funds;
            }
        //ToDo: Create a computed function called funds -- done
            //ToDo: Have funds() return this.$store.getters.funds -- done
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            //ToDo: Create ...mapActions method -- done
                //ToDo: Call randomizeStocks: 'randomizeStocks' -- done
                //ToDo: Call fetchData: 'loadData' -- done

            endDay: function() {
                'randomizeStocks'
            },
            //ToDo: Create endDay method -- need to ask
                //ToDo: Call randomizeStocks() -- need to ask

            SaveData: function() {
              const data = {
                  funds: $store.getters.funds,
                  stockPortfolio: $store.getters.stockPortfolio,
                  stocks: $store.getters.stocks
              }
              this.$http.put('data.json', data);
            },

            loadData: function() {
                'fetchData'
            }
            //ToDo: Create SaveData method -- done
                //ToDo: Create const called data that holds an object -- done
                    //ToDo: Set funds: to the $store getters funds -- done?
                    //ToDo: Set stockPortfolio: to the $store getters stockPortfolio -- done?
                    //ToDo: Set stocks: to the $store getters stocks -- done?
                //ToDo: Outside the data object use $http, using .put pass 'data.json' and the data object -- done?

            //ToDo: Create loadData method
                //ToDo: Call fetchData()
        }
    }
</script>