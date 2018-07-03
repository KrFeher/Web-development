<template>
    <div class="container">
        <app-header :quote-count="quotes.length" :max-quotes="10"></app-header>
        <app-new-quote @newQuoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotesProp = quotes @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from "./components/QuoteGrid.vue";
    import NewQuote from "./components/NewQuote.vue";
    import Header from "./components/Header.vue";
    
    export default {
        data() {
            return {
                quotes: ['An example quote', 'Another Example Quote']
            }
        },
        components : {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote,
            appHeader : Header
        },
        methods: {
            newQuote(theQuote) {
                if (this.quotes.length<10) {
                    this.quotes.push(theQuote);
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
    }
</script>

<style>
</style>
