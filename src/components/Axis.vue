<template>
    <div
        :class="axis.type === 'x' ? 'horizontal-axis' : 'vertical-axis'"
        @click.alt.exact="toggleSettingsVisibility"
    >
        <div
            v-if="showSettings"
            :class="axis.type === 'x' ? 'horizontal-axis-input' : 'vertical-axis-input'"
        >
            <v-text-field
                :value="axis.length"
                :placeholder="'Length'"
                :type="'number'"
                dense
                :error-messages="err"
                @change="updateAxisLength"
                @keyup.esc.exact="toggleSettingsVisibility"
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
        err: '',
    }),

    mounted() {
        this.axis.initialize(this.$el, this.page.elements);
        this.length = this.axis.length;
    },

    methods: {
        toggleSettingsVisibility() {
            this.err = ''
            this.showSettings = !this.showSettings;
        },

        updateAxisLength(event) {
            if (this.axis.type === 'x' && event <= 793 && event > 0) {
                this.axis.node.style.width = `${event}px`;
                this.axis.length = event;
                this.toggleSettingsVisibility();
            } else if (this.axis.type === 'y' && event <= 1123 && event > 0) {
                this.axis.node.style.height = `${event}px`;
                this.axis.length = event;
                this.toggleSettingsVisibility();
            } else {
                this.err = 'Too high'
            }
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
