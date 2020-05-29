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
        target: {
            type: HTMLElement,
            required: true,
        },
    },

    mounted() {
        this.element.build(this.$el, this.target);
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
