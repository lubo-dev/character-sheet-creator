<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon v-text="'$pdf'" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Convert to PDF</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="red darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon v-text="'$menu'" />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

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
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
  }
</script>
