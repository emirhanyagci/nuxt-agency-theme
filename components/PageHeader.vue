<script setup>
const router = useRouter();
const currentRoute = ref(router.currentRoute.value.name);

currentRoute.value =
  currentRoute.value.charAt(0).toUpperCase() + currentRoute.value.slice(1);
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
              <li class="breadcrumb-item active" aria-current="page">
                {{ currentRoute }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
