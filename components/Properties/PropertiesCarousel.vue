<script setup>
const carouselItems = [
  {
    id: 206,
    imageUrl: "/img/property-6.jpg",
    location: "Mount \nOlive Road Two",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 157,
    imageUrl: "/img/property-3.jpg",
    location: "Azabu \nNishi Park let",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 245,
    imageUrl: "/img/property-10.jpg",
    location: "West \nCentral Park",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 245,
    imageUrl: "/img/property-7.jpg",
    location: "West \nCentral Park",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
];
</script>
<template>
  <div id="property-carousel" class="owl-carousel owl-theme">
    <PropertiesCard v-for="property in carouselItems" :property="property" />
  </div>
</template>
