<script setup>
const { id, options, placeholder } = defineProps([
  "id",
  "options",
  "placeholder",
]);
console.log(options);
</script>
<template>
  <select class="form-control form-control-lg form-control-a" :id>
    <option v-for="(opt, index) in options" :key="index" :value="opt.value">
      {{ opt.text }}
    </option>
  </select>
</template>
