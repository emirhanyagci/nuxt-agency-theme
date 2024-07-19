<script setup>
const { amenities } = defineProps(["amenities"]);
</script>
<template>
  <div class="row section-t3">
    <div class="col-sm-12">
      <div class="title-box-d">
        <h3 class="title-d">Amenities</h3>
      </div>
    </div>
  </div>
  <div class="amenities-list color-text-a">
    <ul class="list-a no-margin">
      <li v-for="(amenitie, index) in amenities" :key="index">
        {{ amenitie }}
      </li>
    </ul>
  </div>
</template>
