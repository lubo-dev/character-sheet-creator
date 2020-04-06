<template>
    <v-navigation-drawer
        clipped
        mini-variant
        permanent
        app
    >
        <v-list dense>
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
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    methods: {
    },
}
</script>
