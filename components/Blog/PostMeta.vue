<script setup>
const metaItem = [
  { label: "Author", value: "Morgan Jiemenez" },
  { label: "Category", value: "Travel" },
  { label: "Date", value: "19 Apr. 2017" },
];
</script>
<template>
  <div class="post-information">
    <ul class="list-inline text-center color-a">
      <li
        v-for="(meta, index) in metaItem"
        :key="index"
        class="list-inline-item mr-2"
      >
        <strong>{{ meta.label }}: </strong>
        <span class="color-text-a">{{ meta.value }}</span>
      </li>
    </ul>
  </div>
</template>
