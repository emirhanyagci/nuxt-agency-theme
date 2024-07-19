<script setup>
const postItems = [
  {
    id: 1,
    imageUrl: "/img/post-1.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    id: 2,
    imageUrl: "/img/post-2.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    id: 3,
    imageUrl: "/img/post-3.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    id: 4,
    imageUrl: "/img/post-4.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    id: 5,
    imageUrl: "/img/post-5.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    id: 6,
    imageUrl: "/img/post-6.jpg",
    title: "Travel is comming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
];
</script>
<template>
  <PageHeader>
    <template #title>Our Amazing Posts</template>
    <template #content>Grid News</template>
  </PageHeader>

  <section class="news-grid grid">
    <div class="container">
      <div class="row">
        <div v-for="post in postItems" :key="post.id" class="col-md-4">
          <NewsCard :news="post" />
        </div>
      </div>
      <Pagination />
    </div>
  </section>
</template>
