<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <label v-myOn:click="alertMe" class="btn btn-primary">PRESS ME</label>
                <hr>
                <div 
                    style="width:100px; height:100px; background:green;"
                    v-myOn:mouseenter="mouseEnter"
                    v-myOn:mouseleave="mouseLeave">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives : {
            'myOn' : {
                bind (el, binding, vnode) {
                    el.addEventListener(binding.arg, function()
                    {
                        binding.value();
                    });
                }
            }
        },
        methods: {
            alertMe() {
                alert("AlertMe");
            },
            mouseEnter() {
                console.log("Mouse Entered");
            },
            mouseLeave() {
                console.log("Mouse Left ");
            }
        },
    }
</script>

<style>
</style>
