<script setup>
const personSocial = [
  { icon: "fa-facebook", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-pinterest-p", to: "#" },
  { icon: "fa-dribbble", to: "#" },
];
</script>
<template>
  <ul class="list-inline socials">
    <li v-for="social in personSocial" class="list-inline-item">
      <a :href="social.to">
        <i :class="`fa ${social.icon}`" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>
