<script setup>
const testimonialItems = [
  {
    name: "Albert & Erika",
    imageUrl: "/img/testimonial-1.jpg",
    miniImageUrl: "/img/mini-testimonial-1.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.",
  },
  {
    name: "Pablo & Emma",
    imageUrl: "/img/testimonial-2.jpg",
    miniImageUrl: "/img/mini-testimonial-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.",
  },
];
</script>
<template>
  <div id="testimonial-carousel" class="owl-carousel owl-arrow">
    <TestimonialsItem
      v-for="(testimonial, index) in testimonialItems"
      :key="index"
      :testimonial
    />
  </div>
</template>
