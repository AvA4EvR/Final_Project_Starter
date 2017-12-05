<template>
    <div>
        <!--ToDo: Load app-stock component done -->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
            <!--ToDo: Loop through stock in stocks using v-for done-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for done-->
    </div>
</template>

<script>
    //ToDo: Import Stock from ./Stock.vue -- done
    import Stock from './Stock.vue'

    export default {
        //ToDo: Initialize Stock component and name it appStock -- done
        components: {
            appStock: Stock
        },

        computed: {
            //ToDo: Create stocks computed method -- done
            stocks: function() {
                return this.$store.getters.stocks
            }
                // ToDo: Return $store.getters.stocks -- done
        }
    }
</script>