<template>
    <view class="i-class i-steps">
        <slot></slot>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        current: {
            type: Number,
            default: -1
        },
        status: {
            type: String,
            //wait、process、finish、error
            default: ''
        },
        direction: {
            type: String,
            //value has horizontal or vertical
            default: 'horizontal'
        }
    },
    relations: {
        '../step/index': {
            type: 'child',

            linked() {
                this._updateDataChange();
            },

            linkChanged() {
                this._updateDataChange();
            },

            unlinked() {
                this._updateDataChange();
            }
        }
    },
    methods: {
        _updateDataChange() {
            let steps = this.getRelationNodes('../step/index');
            const len = steps.length;

            if (len > 0) {
                steps.forEach((step, index) => {
                    step.updateDataChange({
                        len: len,
                        index: index,
                        current: this.current,
                        direction: this.direction
                    });
                });
            }
        }
    },
    watch: {
        current: {
            handler: function () {
                let steps = this.getRelationNodes('../step/index');
                const len = steps.length;

                if (len > 0) {
                    steps.forEach((step, index) => {
                        step.updateDataChange({
                            len: len,
                            index: index,
                            current: this.current,
                            direction: this.direction
                        });
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
