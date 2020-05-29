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
                    <page
                        v-for="page in pages"
                        :key="page.order"
                        :page="page"
                    />
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-btn
                            class="white--text"
                            color="red darken-3"
                            fab
                            @click="addPage"
                        >
                            <v-icon>{{ '$plus' }}</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import Page from './page/Page';
import EditorActions from './EditorActions'
import Store from './data/Store';

export default {
    components: {
        Page,
        EditorActions,
    },
    data: () => ({
        pages: Store.state.pages,
    }),
    methods: {
        addPage() {Store.addPage()},
    },
}
</script>
