<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
  import axios from 'axios';

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
      onSubmitted(postData) {
        axios.post('https://nuxt-blog-72afc.firebaseio.com/posts.json', {...postData, updatedDate : new Date()})
        .then(result => console.log(result))
        .catch(error => console.log(error)); 
      }
    },
  }
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>