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
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedpost: {
          id: "1",
          title: "Hello! The id of this post is: " + context.route.params.id,
          previewText: "I'm a preview text for the first post",
          thumbnail: "https://picsum.photos/500/300/?random",
          author: "Krisztian",
          updatedDate: new Date(),
          content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae, nisi ipsam ad sint, voluptas cupiditate consectetur dolore deserunt, voluptates earum provident molestiae. Doloribus nihil fugit quisquam illo possimus ipsa!"
        }
      });
    }, 1000);
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