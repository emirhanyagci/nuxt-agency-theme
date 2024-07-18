<script setup>
const { news } = defineProps(["news"]);
const { imageUrl, title, date, type } = news;
</script>
<template>
  <div class="carousel-item-c">
    <div class="card-box-b card-shadow news-box">
      <div class="img-box-b">
        <img :src="imageUrl" alt="" class="img-b img-fluid" />
      </div>
      <div class="card-overlay">
        <div class="card-header-b">
          <div class="card-category-b">
            <a href="#" class="category-b">{{ type }}</a>
          </div>
          <div class="card-title-b">
            <h2 class="title-2">
              <a href="#">{{ title }}</a>
            </h2>
          </div>
          <div class="card-date">
            <span class="date-b">{{ date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
