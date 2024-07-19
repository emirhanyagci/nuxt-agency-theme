<script setup>
const { imageUrls } = defineProps(["imageUrls"]);
console.log(imageUrls);
</script>
<template>
  <div
    id="property-single-carousel"
    class="owl-carousel owl-arrow gallery-property"
  >
    <div v-for="(url, index) in imageUrls" :key="index" class="carousel-item-b">
      <img :src="url" alt="" />
    </div>
  </div>
</template>
