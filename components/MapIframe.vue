<script setup>
const { src } = defineProps(["src"]);
</script>
<template>
  <div class="contact-map box">
    <div id="map" class="contact-map">
      <iframe
        :src
        width="100%"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
