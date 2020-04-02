<template>
  <v-navigation-drawer
    v-model="isOpen"
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
</template>

<script>
    export default {
        data: () => ({
            isOpen: false,
        }),
        methods: {
            toggleSideBar() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>
