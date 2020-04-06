<template>
    <v-app id="inspire">
        <nav-bar />

        <editor />

        <c-footer />
    </v-app>
</template>

<script>
import NavBar from "./components/structure/NavBar";
import Editor from "./components/Editor"
import CFooter from "./components/structure/Footer";

export default {
    components: {
        NavBar,
        Editor,
        CFooter
    }
}
</script>
