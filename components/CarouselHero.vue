<script setup>
const carouselItems = [
  {
    id: 204,
    imageUrl: "img/slide-1.jpg",
    location1: "Doral, Florida",
    location2: "Mount \nOlive Road Two",
    zip: "78345",
    price: 12000,
  },
  {
    id: 204,
    imageUrl: "img/slide-2.jpg",
    location1: "Doral, Florida",
    location2: "Rino \n Venda Road Five ",
    zip: "78345",
    price: 12000,
  },
  {
    id: 204,
    imageUrl: "img/slide-3.jpg",
    location1: "Doral, Florida",
    location2: "Mount \nOlive Road Two",
    zip: "78345",
    price: 12000,
  },
];
</script>

<template>
  <div class="intro intro-carousel">
    <div id="carousel" class="owl-carousel owl-theme">
      <div
        v-for="(item, index) in carouselItems"
        class="carousel-item-a intro-item bg-image"
        :style="{ backgroundImage: `url(${item.imageUrl})` }"
      >
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                    <p class="intro-title-top">
                      {{ item.location1 }} <br />
                      {{ item.zip }}
                    </p>
                    <h1 class="intro-title mb-4">
                      <span class="color-b">{{ item.id }} </span>
                      {{ item.location2 }}
                    </h1>
                    <p class="intro-subtitle intro-price">
                      <a href="#"
                        ><span class="price-a"
                          >rent | $ {{ item.price }}</span
                        ></a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
