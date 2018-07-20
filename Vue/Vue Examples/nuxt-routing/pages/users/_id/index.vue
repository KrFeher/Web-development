<template>
    <div>
        <h1>A single user with ID : {{$route.params.id}} </h1>
    </div>
</template>

<script>
export default {
    validate(data) {
        return !isNaN(data.params.id);
    }
}
</script>



