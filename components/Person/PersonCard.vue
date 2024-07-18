<script setup>
const { person } = defineProps(["person"]);
const { name, imageUrl, content, phone, email, to } = person;
const personSocial = [
  { icon: "fa-facebook", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-pinterest-p", to: "#" },
  { icon: "fa-dribbble", to: "#" },
];
</script>

<template>
  <div class="col-md-4">
    <div class="card-box-d">
      <div class="card-img-d">
        <img :src="imageUrl" alt="" class="img-d img-fluid" />
      </div>
      <div class="card-overlay card-overlay-hover">
        <div class="card-header-d">
          <div class="card-title-d align-self-center">
            <h3 class="title-d">
              <NuxtLink :to class="link-two">{{ name }}</NuxtLink>
            </h3>
          </div>
        </div>
        <div class="card-body-d">
          <p class="content-d color-text-a">
            {{ content }}
          </p>
          <div class="info-agents color-a">
            <p><strong>Phone: </strong> {{ phone }}</p>
            <p><strong>Email: </strong> {{ email }}</p>
          </div>
        </div>
        <div class="card-footer-d">
          <div class="socials-footer d-flex justify-content-center">
            <PersonCardSocials :socials="personSocial" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
