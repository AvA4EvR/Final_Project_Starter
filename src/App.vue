<template>
    <div class="container">
        <!--ToDo: Load app-header done-->
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view done-->
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    //ToDo: Import Header Component done
    import Header from './components/Header.vue'

    export default {
        //ToDo: Initialize Header component and name it appHeader done
        components: {
            appHeader: Header
        },

        methods: {

        },
        created() {
            this.$store.dispatch('initStocks')
        }
        //ToDo: On page creation dispatch 'initStocks' to the vuex $store -- done
    }
</script>

<style>
    body {
        padding: 30px;
    }

    /*ToDo: Create slide-in effect for enter-active done*/
    .slide-enter-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity .5s;
    }
    /*ToDo: Create slide-in effect for enter-leave done*/
    .slide-leave-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    /*ToDo: Create Keyframes for slide-in, remember to include from and to done*/
        /*You can use any settings*/
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    /*ToDo: Create Keyframes for slide-out, remember to include from and to done*/
        /*You can use any settings*/
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

</style>

