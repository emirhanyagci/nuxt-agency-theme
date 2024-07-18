<script setup>
const { testimonial } = defineProps(["testimonial"]);
const { imageUrl, miniImageUrl, name, content } = testimonial;
</script>
<template>
  <div class="carousel-item-a">
    <div class="testimonials-box">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="testimonial-img">
            <img :src="imageUrl" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="testimonial-ico">
            <span class="ion-ios-quote"></span>
          </div>
          <div class="testimonials-content">
            <p class="testimonial-text">
              {{ content }}
            </p>
          </div>
          <div class="testimonial-author-box">
            <img :src="miniImageUrl" alt="" class="testimonial-avatar" />
            <h5 class="testimonial-author">{{ name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
