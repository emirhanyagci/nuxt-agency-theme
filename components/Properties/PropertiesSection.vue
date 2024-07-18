<script setup></script>
<template>
  <section class="section-property section-t8">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">Latest Properties</h2>
            </div>
            <div class="title-link">
              <NuxtLink to="/property"
                >All Property
                <span class="ion-ios-arrow-forward"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <PropertiesCarousel />
    </div>
  </section>
</template>
