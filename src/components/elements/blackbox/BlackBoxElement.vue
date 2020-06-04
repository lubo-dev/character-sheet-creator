<template>
    <div class="black-box" />
</template>

<script>
import BlackBoxElementData from "./BlackBoxElementData";

export default {
    props: {
        element: {
            type: BlackBoxElementData,
            required: true,
        },
        container: {
            type: HTMLElement,
            required: true,
        },
    },

    mounted() {
        this.element.initialize(this.$el, this.container);
    },
}
</script>


<style lang="scss" scoped>
    .black-box {
        display: inline-block;
        width: 150px;
        height: 100px;
        background-color: black;
    }
</style>
