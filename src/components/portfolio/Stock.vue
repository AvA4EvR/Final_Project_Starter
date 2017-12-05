<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--ToDo: Display the stock.name data object done-->
                    <!--ToDo: Inside <small> tags display Price: stock.price | Quantity stock.quantity done-->
                    {{stock.name}}
                    <small>Price: {{stock.price}} | Quantity: {{stock.quantity}}</small>
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
                    <!--ToDo: Inside the button add a click event that calls sellStock done-->
                        <!--ToDo: Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity) done-->
                    <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                        <!--ToDo: Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Sell'-->
                        {{insufficientQuantity ? 'Not Enough' : 'Sell'}}
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
    //ToDo: Import mapActions from vuex -- done
    import { mapActions } from 'vuex'

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
            //ToDo: Create a computed function called insufficientQuantity -- done
                //ToDo: Have insufficientQuantity() return this.quantity > this.stock.quantity -- done
            insufficientQuantity: function() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            //ToDo: Create ...mapActions method -- done
                //ToDo: Call placeSellOrder: 'sellStock' -- done
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),

            sellStock: function(){
                const order = {
                    stockId: stock.id,
                    stockPrice: stock.price,
                    quantity: quantity
                }
                this.placeSellOrder(order)
                quantity = 0
            }

            //ToDo: Create sellStock method -- done
                //ToDo: Create const called order that holds an object -- done
                    //ToDo: Set stockId: to stock.id -- done
                    //ToDo: Set stockPrice: to stock.price -- done
                    //ToDo: Set quantity: to quantity -- done
            //ToDo: Outside the data object pass the data object order to placeSellOrder() -- done
            //ToDo: Reset quantity to 0 -- done
        }
    }
</script>