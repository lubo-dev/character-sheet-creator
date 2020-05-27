<template>
    <v-navigation-drawer
        clipped
        mini-variant
        permanent
        app
    >
        <v-list>
            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <v-list-item
                        link
                        v-on="on"
                    >
                        <v-icon>{{ '$pdf' }}</v-icon>
                    </v-list-item>
                </template>
                <span>Convert to PDF</span>
            </v-tooltip>
            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <v-list-item
                        link
                        v-on="on"
                        @click="save"
                    >
                        <v-icon>{{ '$save' }}</v-icon>
                    </v-list-item>
                </template>
                <span>Save to localstorage</span>
            </v-tooltip>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import Store from '../data/Store';

export default {
    methods: {
        save() {Store.save()},
    },
}
</script>
