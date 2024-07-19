<script setup>
const { property } = defineProps(["property"]);
const {
  price,
  summary,
  description,
  amenities,
  videoUrl,
  floorPlanUrl,
  locationUrl,
} = property;
</script>
<template>
  <div class="row justify-content-between">
    <div class="col-md-5 col-lg-4">
      <div class="property-price d-flex justify-content-center foo">
        <div class="card-header-c d-flex">
          <div class="card-box-ico">
            <span class="ion-money">$</span>
          </div>
          <div class="card-title-c align-self-center">
            <h5 class="title-c">{{ price }}</h5>
          </div>
        </div>
      </div>
      <PropertiesPropertySummary :summary />
    </div>
    <div class="col-md-7 col-lg-7 section-md-t3">
      <PropertiesPropertyDescription :description />
      <PropertiesPropertyAmenities :amenities />
    </div>
  </div>
  <PropertiesPropertyTabs :videoUrl :floorPlanUrl :locationUrl />
</template>
