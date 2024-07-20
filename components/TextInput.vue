<script setup>
const { placeholder, id } = defineProps(["placeholder", "id"]);
</script>
<template>
  <input
    type="text"
    class="form-control form-control-lg form-control-a"
    required
    :placeholder
    :id
  />
</template>
