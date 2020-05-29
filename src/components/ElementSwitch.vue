<template>
    <black-box-element
        v-if="element instanceof BlackBoxElementData"
        :element="element"
        :containment="containment"
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
        containment: {
            type: Object,
            required: true,
        },
    },
}

Vue.prototype.BlackBoxElementData = BlackBoxElementData;
</script>
