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
        '../checkbox/index': {
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
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeCurrent(val = this.current) {
            let items = this.getRelationNodes('../checkbox/index');
            const len = items.length;

            if (len > 0) {
                items.forEach((item) => {
                    item.changeCurrent(val.indexOf(item.data.value) !== -1);
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
                let items = this.getRelationNodes('../checkbox/index');
                const len = items.length;

                if (len > 0) {
                    items.forEach((item) => {
                        item.changeCurrent(val.indexOf(item.data.value) !== -1);
                    });
                }
            },

            immediate: true,
            deep: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
