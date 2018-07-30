<template>
    <section class="post-list">
      <PostPreview
      id="1"
      title="Hello!"
      previewText="I'm a preview text"
      thumbnail="https://picsum.photos/500/300/?random"
      :is-admin="isAdmin" />
      <PostPreview
      id="2"
      title="Hello2!"
      previewText="I'm a preview text2"
      thumbnail="https://picsum.photos/500/300/?random"
      :is-admin="isAdmin"/>
      <PostPreview
      id="3"
      title="Hello3!"
      previewText="I'm a preview text3"
      thumbnail="https://picsum.photos/500/300/?random"
      :is-admin="isAdmin"/>
    </section>
</template>

<script>
    import PostPreview from '@/components/Posts/PostPreview.vue';

    export default {
        components : {
            PostPreview
        },
        props: {
            isAdmin: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>