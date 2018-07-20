<template>
    <div>
        <h1>Users Page</h1>
        <h2>Select a user:</h2>
        <input type="text" v-model="userId"> <button @click="goToPage">Go</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userId: ''
            }
        },
        methods: {
            goToPage() {
                this.$router.push("/users/" + this.userId)
            }
        }
    }
</script>
