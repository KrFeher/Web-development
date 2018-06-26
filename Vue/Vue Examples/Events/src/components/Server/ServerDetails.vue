<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server id : {{ server.id }}</p>
        <p>Server status {{ server.status}}</p>
        <hr>
        <button @click="resetServer">Reset Server Status</button>
    </div>
</template>

<script>
import { serverBus } from '../../main.js';

export default {
    data() {
        return {
            server : {
                id: 0,
                status: "status"
            }
        }
    },
    methods: {
        resetServer() {
            this.server.status = "Normal";
        }
    },
    created() {
        serverBus.$on("serverDetails", (server) => {
            this.server = server;
        })
    }
}

</script>

<style>

</style>
