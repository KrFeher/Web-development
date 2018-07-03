<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotesProp" @click.native="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import App from '../App.vue';
    import Quote from "./Quote.vue";
    
    export default {
        props: ['quotesProp'],
        components: {
            appQuote : Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index)
            }
        }
    }
</script>

<style>

</style>