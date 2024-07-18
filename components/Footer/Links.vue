<script setup>
const navItems = [
  { name: "Home", to: "#" },
  { name: "About", to: "#" },
  { name: "Property", to: "#" },
  { name: "Blog", to: "#" },
  { name: "Contact", to: "#" },
];
const socialItems = [
  { icon: "fa-facebook", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-pinterest-p", to: "#" },
  { icon: "fa-dribbble", to: "#" },
];
</script>
<template>
  <nav class="nav-footer">
    <ul class="list-inline">
      <li v-for="item in navItems" :key="item.name" class="list-inline-item">
        <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
  <div class="socials-a">
    <ul class="list-inline">
      <li v-for="item in socialItems" class="list-inline-item">
        <NuxtLink :href="item.to">
          <i :class="`fa ${item.icon}`" aria-hidden="true"></i>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
