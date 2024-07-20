<script setup lang="ts">
import PostHeader from "~/components/Blog/PostHeader.vue";
</script>

<template>
  <PageHeader>
    <template #title> Book Cover Deisgn </template>
    <template #content> News Single. </template>
  </PageHeader>

  <!--/ Intro Single End /-->

  <!--/ News Single Star /-->
  <section class="news-single nav-arrow-b">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="news-img-box">
            <img src="/img/slide-3.jpg" alt="" class="img-fluid" />
          </div>
        </div>
        <BlogPostSection />
        <BlogCommentSection />
      </div>
    </div>
  </section>
</template>
