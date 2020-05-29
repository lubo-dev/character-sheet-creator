<template>
    <black-box-element
        v-if="element instanceof BlackBoxElementData"
        :element="element"
        :target="target"
    />
</template>

<script>
import Vue from 'vue';
import BlackBoxElement from "./elements/blackbox/BlackBoxElement";
import BlackBoxElementData from "./elements/blackbox/BlackBoxElementData";

export default {
    components: {BlackBoxElement},
    props: {
        element: {
            type: Object,
            required: true,
        },
        target: {
            type: HTMLElement,
            required: true,
        },
    },
}

Vue.prototype.BlackBoxElementData = BlackBoxElementData;
</script>
