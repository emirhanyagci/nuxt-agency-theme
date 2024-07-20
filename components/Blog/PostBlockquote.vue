<script setup>
const { author, text } = defineProps(["author", "text"]);
</script>
<template>
  <blockquote class="blockquote">
    <p class="mb-4">
      {{ text }}
    </p>
    <footer class="blockquote-footer">
      <strong>{{ author }} </strong>
      <cite title="Source Title"> Author</cite>
    </footer>
  </blockquote>
</template>
