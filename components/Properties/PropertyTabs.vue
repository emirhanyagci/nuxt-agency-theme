<script setup>
const { videoUrl, floorPlanUrl, locationUrl } = defineProps([
  "videoUrl",
  "floorPlanUrl",
  "locationUrl",
]);
</script>
<template>
  <div class="col-md-10 offset-md-1">
    <ul
      class="nav nav-pills-a nav-pills mb-3 section-t3"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-video-tab"
          data-toggle="pill"
          href="#pills-video"
          role="tab"
          aria-controls="pills-video"
          aria-selected="true"
          >Video</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-plans-tab"
          data-toggle="pill"
          href="#pills-plans"
          role="tab"
          aria-controls="pills-plans"
          aria-selected="false"
          >Floor Plans</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-map-tab"
          data-toggle="pill"
          href="#pills-map"
          role="tab"
          aria-controls="pills-map"
          aria-selected="false"
          >Ubication</a
        >
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-video"
        role="tabpanel"
        aria-labelledby="pills-video-tab"
      >
        <iframe
          :src="videoUrl"
          width="100%"
          height="460"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="tab-pane fade"
        id="pills-plans"
        role="tabpanel"
        aria-labelledby="pills-plans-tab"
      >
        <img :src="floorPlanUrl" alt="" class="img-fluid" />
      </div>
      <div
        class="tab-pane fade"
        id="pills-map"
        role="tabpanel"
        aria-labelledby="pills-map-tab"
      >
        <iframe
          :src="locationUrl"
          width="100%"
          height="460"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
