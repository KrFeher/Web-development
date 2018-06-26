<template>
  <li class="list-group-item"
      style="cursor: pointer"
      @click="showServerDetails">
      Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    props : ['server'],

    methods : {
      showServerDetails() {
        serverBus.$emit("serverDetails", this.server)
      }
    }
  }
</script>

<style>

</style>
