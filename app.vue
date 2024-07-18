<script setup>
import executeJs from "./public/js/main";

const route = useRoute();

onMounted(() => {
  executeJs();
});

watch(
  () => route.path,
  () => {
    executeJs();
  }
);
</script>
<template></template>
