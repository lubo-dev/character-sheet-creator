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
        containment: {
            type: Object,
            required: true,
        },
    },

    mounted() {
        this.element.build(this.$el, this.containment);
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
