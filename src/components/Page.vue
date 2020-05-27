<template>
    <div class="page mb-8">
        <div
            ref="draggable"
            class="black-box"
        />
    </div>
</template>

<script>
import PlainDraggable from 'plain-draggable';

export default {
    props: {
        order: {
            type: Number,
            required: true,
        },
    },

    mounted() {
        const a4Width = 793;
        const a4height = 1123;
        const pageBottomMargin = 32;

        new PlainDraggable(this.$refs.draggable, {
            containment: {left: 364, top: 88 + this.order * (a4height + pageBottomMargin), width: a4Width, height: a4height},
            zIndex: 9,
            autoScroll: true,
        });
    },
}
</script>


<style lang="scss" scoped>
    .page {
        box-shadow: 0 0 3px #555555;
        width: 793px;//A4 page width
        height: 1123px;//A4 page height
    }

    .black-box {
        display: inline-block;
        width: 150px;
        height: 100px;
        background-color: black;
    }
</style>
