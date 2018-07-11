<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <ul v-for="user in users"> 
      <li>{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
data() {
  return {
    users: []
  }
},

  created() {
  Axios.get('/users.json') 
        .then(result => {
          const data = result.data;
          for (let key in data) {
            const user = data[key];
            user.id = key;
            this.users.push(user);
          }
        })
        .catch(error => console.log(error));
  }
}

</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>