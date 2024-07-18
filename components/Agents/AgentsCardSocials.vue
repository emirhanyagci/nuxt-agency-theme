<script setup>
const { socials } = defineProps(["socials"]);
</script>
<template>
  <ul class="list-inline">
    <li v-for="social in socials" class="list-inline-item">
      <a :href="social.to" class="link-one">
        <i :class="`fa ${social.icon}`" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>
