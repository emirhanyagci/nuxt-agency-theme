<script setup>
const route = useRoute();

const currentRoutes = route.name.split("-");
const parentRoutes = currentRoutes.slice(0, currentRoutes.length - 1);
const lastRoute = parentRoutes.length
  ? route.params.id
  : currentRoutes[currentRoutes.length - 1];
</script>
<template>
  <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">
              <slot name="title" />
            </h1>
            <span v-if="$slots.content" class="color-text-a"
              ><slot name="content"
            /></span>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav
            aria-label="breadcrumb"
            class="breadcrumb-box d-flex justify-content-lg-end"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li
                v-for="(route, index) in parentRoutes"
                :key="index"
                class="breadcrumb-item"
              >
                <a href="#">{{ route }}</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ lastRoute }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
