<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedpost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">{{loadedpost.updatedDate}}</div>
        <div class="post-detail">{{loadedpost.author}}</div>
      </div>
      <p class="post-content">{{loadedpost.content}}</p>
      <section class="post-feedback">
        <p>Let me know what you think about the post, send a mail to
          <a href="mailto:abc@d.com">abc@d.com</a>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    asyncData(context) {
      return axios.get('https://nuxt-blog-72afc.firebaseio.com/posts/' + context.params.id + '.json')
        .then(result => {
          return {
            loadedpost: result.data
            }
          })
        .catch(error => context.error(error));
    }
  };
</script>


<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>