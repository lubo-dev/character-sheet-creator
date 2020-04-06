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
                    />
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-btn
                            class="white--text"
                            color="success"
                            fab
                            @click="save"
                        >
                            <v-icon>{{ '$save' }}</v-icon><!--Todo: move to sidebar-->
                        </v-btn>
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
import Page from './Page';
import EditorActions from './EditorActions'

export default {
    components: {
        Page,
        EditorActions,
    },
    data: () => ({
        pages: null,
    }),
    mounted() {
        if (localStorage.pages) {
            this.pages = JSON.parse(localStorage?.pages);
        } else {
            this.pages = [new PageData(1)];
        }
    },
    methods: {
        addPage() {
            this.pages.push(new PageData(this.pages.length + 1));
        },
        save() {
            localStorage.pages = JSON.stringify(this.pages);
        }, 
    },
}

class PageData {
    order = undefined;

    constructor(order) {
        this.order = order;
    }
}
</script>
