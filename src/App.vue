<template>
  <v-app id="inspire">
    <nav-bar />

    <document />

    <v-footer
      color="red darken-3"
      app
    >
      <a
        href="https://github.com/L-Bolz/character-sheet-creator"
        class="white--text"
      >About</a>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Document from "./components/Document"

  export default {
    components: {
      NavBar,
      Document
    }
  }
</script>

<style lang="scss" scoped>
  footer a {
    margin-right: 10px;
  }
</style>
