<template>
    <div>
        <!--ToDo: Load app-stock component done-->
            <!--ToDo: Loop through stock in stocks using v-for done-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for done-->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    //ToDo: Import mapGetters from vuex -- done
    //ToDo: Import Stock from ./Stock.vue -- done
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        computed: {
            //ToDo: Create ...mapGetters method -- done
                //ToDo: Call stocks: 'stockPortfolio' -- done
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },

        //ToDo: Initialize Stock component and name it appStock -- done
        components: {
            appStock: Stock
        }
    }
</script>