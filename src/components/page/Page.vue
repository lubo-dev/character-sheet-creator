<template>
    <div class="page mb-8">
        <element-switch
            v-for="(element, key) in page.elements"
            :key="key"
            :element="element"
            :target="$el"
        />
    </div>
</template>

<script>
import PageData from "./PageData";
import ElementSwitch from "../ElementSwitch";

export default {
    components: {ElementSwitch},
    props: {
        page: {
            type: PageData,
            required: true,
        },
    },

    data: () => ({
        a4Width: 793,
        a4Height: 1123,
        pageBottomMargin: 32,
    }),

    mounted() {
        if (this.page.elements.length === 0) {
            this.addElement();
        }
    },

    methods: {
        addElement() {this.page.addElement('blackbox')},
    },
}
</script>


<style lang="scss" scoped>
    .page {
        box-shadow: 0 0 3px #555555;
        width: 793px;//A4 page width
        height: 1123px;//A4 page height
    }
</style>
