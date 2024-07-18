<script setup>
const { title } = defineProps(["title"]);
</script>
<template>
  <div class="col-sm-12 col-md-4">
    <div class="widget-a">
      <div class="w-header-a">
        <h3 class="w-title-a text-brand">{{ title }}</h3>
      </div>
      <div class="w-body-a">
        <slot name="body" />
      </div>
      <div v-if="$slots.footer" class="w-footer-a">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
