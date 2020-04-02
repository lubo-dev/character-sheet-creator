<template>
  <v-app id="inspire">
    <nav-bar />

    <document />

    <c-footer />
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Document from "./components/Document"
  import CFooter from "./components/Footer";

  export default {
    components: {
      NavBar,
      Document,
      CFooter
    }
  }
</script>
