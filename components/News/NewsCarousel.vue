<script setup>
const newsItems = [
  {
    imageUrl: "/img/post-2.jpg",
    title: "House is coming \nnew",
    date: "18 Sep. 2017",
    type: "House",
  },
  {
    imageUrl: "/img/post-5.jpg",
    title: "Travel is coming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
  {
    imageUrl: "/img/post-7.jpg",
    title: "Park is coming new",
    date: "18 Sep. 2017",
    type: "Park",
  },
  {
    imageUrl: "/img/post-2.jpg",
    title: "House is coming new",
    date: "18 Sep. 2017",
    type: "House",
  },
  {
    imageUrl: "/img/post-5.jpg",
    title: "Travel is coming new",
    date: "18 Sep. 2017",
    type: "Travel",
  },
];
</script>
<template>
  <div id="new-carousel" class="owl-carousel owl-theme">
    <NewsCard v-for="(news, index) in newsItems" :key="index" :news="news" />
  </div>
</template>
