<template>
    <div :class="axis.type === 'x' ? 'horizontal-axis' : 'vertical-axis'" />
</template>

<script>
import AxisData from "./data/AxisData";
import PageData from "./page/PageData";

export default {
    props: {
        axis: {
            type: AxisData,
            required: true,
        },
        page: {
            type: PageData,
            required: true,
        },
    },

    mounted() {
        this.axis.initialize(this.$el, this.page.elements);
    },
}
</script>


<style lang="scss" scoped>
    .vertical-axis {
        background-color: orange;
        display: inline-block;
        position: absolute;
        width: 1px;
        height: 300px;
    }

    .horizontal-axis {
        background-color: orange;
        position: absolute;
        display: inline-block;
        height: 1px;
        width: 300px;
    }
</style>
