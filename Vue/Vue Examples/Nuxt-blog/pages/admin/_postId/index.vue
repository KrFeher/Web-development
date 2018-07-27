<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

  export default {
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