<template>
    <div>
        <input type="text" v-model="userId"> 
        <button @click="goToPage">Go</button>
        <nuxt-child />
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
