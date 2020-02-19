<template>

  <div id="app">
    <!-- This is a traditional source-set, and it requires three image variants of different sizes -->
    <!--
    <img srcset="./assets/logo-100px.png,
             ./assets/logo-150px.png 1.5x,
             ./assets/logo.png 2x"
     src="./assets/logo.png" alt="Vue logo">
    -->

    <!-- This is an Image CDN source-set, and it requires only one "static" image -->
    <img srcset="./assets/logo.png?imgeng=/w_100,
             ./assets/logo.png?imgeng=/w_150 1.5x,
             ./assets/logo.png?imgeng=/w_200 2x"
     src="./assets/logo.png?imgeng=/w_200" alt="Vue logo" class="example">

     <!-- More info on srcset: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

body {
    /* /w_auto,1920 => Tell the CDN to try to auto-resize this image to the device width, and use 1920px wide otherwise */
    /* /meta_true => Tell the CDN to retain the EXIF data on this image because I am the photographer */
  background-image: url(./assets/background.jpg?imgeng=/w_auto,1920/meta_true);
  background-size: cover;
  background-attachment: fixed;
}

@media only screen and (max-width: 480px) {
  body {
    /* For smaller devices, I want to serve a much lighter variant of the imaage */
    background-image: url(./assets/background.jpg?imgeng=/w_auto,480/meta_true);

    /* Traditionally this required a new image variant to be made (and re-made whenver you change your breakpoint): */
    /* background-image: url(./assets/background-480px.jpg?imgeng=/w_auto,480/meta_true); */
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: auto;
}
</style>
