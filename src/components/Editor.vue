<template>
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
          <editor-actions />
        </v-col>
        <v-col>
          <page />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import Page from './Page';
  import EditorActions from './EditorActions'

  export default {
    components: {
      Page,
      EditorActions
    }
  }
</script>
