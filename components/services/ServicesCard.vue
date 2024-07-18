<script setup>
const { icon, header, text, to } = defineProps([
  "icon",
  "header",
  "text",
  "to",
]);
</script>

<template>
  <div class="col-md-4">
    <div class="card-box-c foo">
      <div class="card-header-c d-flex">
        <div class="card-box-ico">
          <span :class="`fa ${icon}`"></span>
        </div>
        <div class="card-title-c align-self-center">
          <h2 class="title-c">{{ header }}</h2>
        </div>
      </div>
      <div class="card-body-c">
        <p class="content-c">
          {{ text }}
        </p>
      </div>
      <div class="card-footer-c">
        <a :href="to" class="link-c link-icon"
          >Read more
          <span class="ion-ios-arrow-forward"></span>
        </a>
      </div>
    </div>
  </div>
</template>
