// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  app: {
    head: {
      script: [
        { src: "/lib/jquery/jquery.min.js" },
        { src: "/lib/jquery/jquery-migrate.min.js" },
        { src: "/lib/popper/popper.min.js" },
        { src: "/lib/bootstrap/js/bootstrap.min.js" },
        { src: "/lib/easing/easing.min.js" },
        { src: "/lib/owlcarousel/owl.carousel.min.js" },
        { src: "/lib/scrollreveal/scrollreveal.min.js" },
      ],
      link: [
        { rel: "stylesheet", href: "/lib/bootstrap/css/bootstrap.min.css" },
        {
          rel: "stylesheet",
          href: "/lib/font-awesome/css/font-awesome.min.css",
        },
        { rel: "stylesheet", href: "/lib/animate/animate.min.css" },
        { rel: "stylesheet", href: "/lib/ionicons/css/ionicons.min.css" },
        {
          rel: "stylesheet",
          href: "/lib/owlcarousel/assets/owl.carousel.min.css",
        },
      ],
    },
  },
});
