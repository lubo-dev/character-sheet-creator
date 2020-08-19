<template>
    <div
        :class="axis.type === 'x' ? 'horizontal-axis' : 'vertical-axis'"
        @click.alt.exact="toggleVisibility"
    >
        <div
            v-if="showSettings"
            :class="axis.type === 'x' ? 'horizontal-axis-input' : 'vertical-axis-input'"
        >
            <v-text-field
                :value="length"
                :placeholder="'Length'"
                :type="'number'"
                dense
                @change="updateAxisLength"
            />
        </div>
    </div>
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

    data: () => ({
        showSettings: false,
        length: 0,
    }),

    mounted() {
        this.axis.initialize(this.$el, this.page.elements);
        this.length = this.axis.length;
    },

    methods: {
        toggleVisibility() {
            this.showSettings = !this.showSettings;
        },

        updateAxisLength(event) {
            if (this.axis.type === 'x') {
                this.axis.node.style.width = `${event}px`;

            } else {
                this.axis.node.style.height = `${event}px`;
            }
            this.showSettings = false;
        },
    },
}
</script>


<style lang="scss" scoped>
    .vertical-axis-input {
        position: relative;
        top: 1px;
        left: 3px;
        width: 65px;
    }

    .horizontal-axis-input {
        position: relative;
        top: 3px;
        left: 1px;
        width: 65px;
    }

    .vertical-axis {
        background-color: orange;
        display: inline-block;
        position: absolute;
        width: 1px;
    }

    .horizontal-axis {
        background-color: orange;
        position: absolute;
        display: inline-block;
        height: 1px;
    }
</style>
