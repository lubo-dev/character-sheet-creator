<template>
  <v-app id="inspire">
    <nav-bar />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <p>Work in progress</p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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

  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
  footer a {
    margin-right: 10px;
  }
</style>
