<template>
    <view>
        <i-cell-group class="i-class">
            <slot></slot>
        </i-cell-group>
    </view>
</template>

<script>
import iCellGroup from '../cell-group/index';
export default {
    data() {
        return {};
    },
    components: {
        iCellGroup
    },
    externalClasses: ['i-class'],
    relations: {
        '../radio/index': {
            type: 'child',

            linked() {
                this.changeCurrent();
            },

            linkChanged() {
                this.changeCurrent();
            },

            unlinked() {
                this.changeCurrent();
            }
        }
    },
    props: {
        current: {
            type: String,
            default: ''
        }
    },
    methods: {
        changeCurrent(val = this.current) {
            let items = this.getRelationNodes('../radio/index');
            const len = items.length;

            if (len > 0) {
                items.forEach((item) => {
                    item.changeCurrent(val === item.data.value);
                });
            }
        },

        emitEvent(current) {
            this.$emit('change', {
                detail: current
            });
        }
    },
    watch: {
        current: {
            handler: function (val = this.current) {
                let items = this.getRelationNodes('../radio/index');
                const len = items.length;

                if (len > 0) {
                    items.forEach((item) => {
                        item.changeCurrent(val === item.data.value);
                    });
                }
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
