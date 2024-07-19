<script setup>
const { description } = defineProps(["description"]);
</script>
<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="title-box-d">
        <h3 class="title-d">Property Description</h3>
      </div>
    </div>
  </div>
  <div class="property-description">
    <p class="description color-text-a">
      {{ description }}
    </p>
  </div>
</template>
