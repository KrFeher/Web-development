<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
            <div> Normal:  {{ exampleText }} </div>
            <div> Local filter: {{ exampleText | reverseText }} </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

            <div> Global filter: {{ exampleText | addStringLength }}</div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

            <div> Computed local: {{ reverseFirstComputed }}</div>
            <div> Computed local 2 : {{ showNumberWithSecond }}</div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { exampleMixins } from './mixins.js'
    
    export default {
        data() {
            return {
                exampleText: "I'm filtering this text!",
                exampleText2: "Krisztian"
            }
        },
        filters: {
            reverseText: function(value) {
                return value.split("").reverse().join("");
            }
        }, 
        mixins: [exampleMixins]
    }
</script>

<style>
</style>
