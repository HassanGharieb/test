<template>
  <div class="our-blog">
    <h1>{{ pagName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              v-bind:key="post.id"
              :views="post.views"
              :title="post.title"
              :data="post.data"
              :content="post.content"
              :auther="post.auther"
              :category="post.category"

            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import jsonposts from "../json/log-posts.json";
export default {
  data: function () {
    return {
      pagName: "blog",
      pageDescription: "This is blog Page",
      posts: jsonposts,
    };
  },
  name: "blog",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>