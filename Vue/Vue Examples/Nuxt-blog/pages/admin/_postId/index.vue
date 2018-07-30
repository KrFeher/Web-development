<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: 'Krisztian Feher',
          title: 'Hello Blog',
          thumbnailLink: 'https://picsum.photos/500/300/?random',
          content: 'This is the first blog post'
        }
      }
    },
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>