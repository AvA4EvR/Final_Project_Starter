<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--ToDo: Display the stock.name data object done-->
                    {{stock.name}}
                    <small>Price: {{stock.price}}</small>
                    <!--ToDo: Inside <small> tags display Price: stock.price done-->
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--ToDo: Inside input use v-model.number and pass quantity done-->
                        <!--ToDo: Bind to class using : and pass object called danger that takes in insufficientQuantity done-->
                    <input v-model.number="quantity"
                            type="number"
                            class="form-control"
                            :class="{danger: insufficientQuantity}"
                            placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <!--ToDo: Inside the button add a click event that calls buyStock done-->
                    <!--ToDo: Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity) done-->
                    <button @click="buyStock" class="btn btn-success" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                        <!--ToDo: Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Buy' done-->
                        {{insufficientQuantity ? 'Not Enough' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        //ToDo: Set props equal to stock using array syntax -- done
        props: ['stock'],

        data() {
            return {
                //ToDo: Create data object called quantity and set it to 0 -- done
                quantity: 0
            }
        },
        computed: {
            //ToDo: Create a computed function called funds -- done
                //ToDo: Have funds() return $store.getters.funds -- done
            funds: function() {
                return this.$store.getters.funds
            },

            insufficientFunds: function() {
                return this.quantity * this.stock.price > this.funds
            }
            //ToDo: Create a computed function called insufficientFunds -- done
                //ToDo: Have insufficientFunds() return this.quantity * this.stock.price > this.funds -- done
        },
        methods: {
            buyStock: function() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
            //ToDo: Create buyStock method -- done
                //ToDo: Create const called order that holds an object -- done
                    //ToDo: Set stockId: to stock.id -- done
                    //ToDo: Set stockPrice: to stock.price -- done
                    //ToDo: Set quantity: to quantity -- done
            //ToDo: Outside the data object $store.dispatch() passing 'buyStock' and order -- done
            //ToDo: Reset quantity to 0 -- done
        }
    }
</script>