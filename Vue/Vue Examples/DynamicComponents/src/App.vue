<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent"></component>
                <app-blue>
                    <p slot="blueSlot">This is a static blue slot</p>
                </app-blue>
                <app-green>
                    <p slot="greenSlot">This is a static green slot</p>
                </app-green>
                <app-red>
                    <p slot="redSlot">This is a static red slot</p>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                selectedComponent: 'appBlue'
            }
        },
    }
</script>

<style>
</style>
