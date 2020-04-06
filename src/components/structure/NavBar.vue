<template>
    <div>
        <v-app-bar
            app
            color="red darken-3"
            clipped-left
            dark
        >
            <v-app-bar-nav-icon @click.stop="$refs.SideBar.toggleSideBar()">
                <v-icon>{{ '$menu' }}</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>Character Sheet Creator</v-toolbar-title>
        </v-app-bar>

        <side-bar ref="SideBar" />
    </div>
</template>

<script>
import SideBar from "./SideBar";

export default {
    components: {
        SideBar,
    },
}
</script>
