<script setup>
const { property } = defineProps(["property"]);
const { id, imageUrl, location, price, area, beds, baths, garages } = property;
</script>
<template>
  <div class="carousel-item-b">
    <div class="card-box-a card-shadow">
      <div class="img-box-a">
        <img :src="imageUrl" alt="" class="img-a img-fluid" />
      </div>
      <div class="card-overlay">
        <div class="card-overlay-a-content">
          <div class="card-header-a">
            <h2 class="card-title-a">
              <a href="property-single.html">{{ id }} {{ location }}</a>
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">rent | $ {{ price }}</span>
            </div>
            <a href="property-single.html" class="link-a"
              >Click here to view
              <span class="ion-ios-arrow-forward"></span>
            </a>
          </div>
          <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
              <li>
                <h4 class="card-info-title">Area</h4>
                <span
                  >{{ area }}m
                  <sup>2</sup>
                </span>
              </li>
              <li>
                <h4 class="card-info-title">Beds</h4>
                <span>{{ beds }}</span>
              </li>
              <li>
                <h4 class="card-info-title">Baths</h4>
                <span>{{ baths }}</span>
              </li>
              <li>
                <h4 class="card-info-title">Garages</h4>
                <span>{{ garages }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
