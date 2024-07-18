<script setup>
const { to } = defineProps(["to"]);
</script>
<template>
  <li class="nav-item">
    <NuxtLink :to class="nav-link active"><slot /></NuxtLink>
  </li>
</template>
