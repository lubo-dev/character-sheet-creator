<template>
  <v-app id="inspire">
    <nav-bar />

    <editor />

    <c-footer />
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Editor from "./components/Editor"
  import CFooter from "./components/Footer";

  export default {
    components: {
      NavBar,
      Editor,
      CFooter
    }
  }
</script>
