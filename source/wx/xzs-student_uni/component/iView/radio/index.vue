<template>
    <view class="i-class i-radio" @click.stop.prevent="radioChange">
        <i-cell i-class="i-radio-cell">
            <label>
                <radio :value="value" :checked="checkedClone" :color="checkedClone ? color : ''" :disabled="disabled" :class="'i-radio-radio ' + positionCls" />
                <view class="i-radio-title">{{ value }}</view>
            </label>
        </i-cell>
    </view>
</template>

<script>
import iCell from '../cell/index';
const prefixCls = 'i-radio';
export default {
    components: {
        iCell
    },
    data() {
        return {
            checkedClone: true,
            positionCls: `${prefixCls}-radio-left`,
            checkedClone: false
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../radio-group/index': {
            type: 'parent'
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#2d8cf0'
        },
        position: {
            type: String,
            default: 'left'
        }
    },
    beforeMount() {
        this.setPosition();
    },
    methods: {
        changeCurrent(current) {
            this.setData({
                checkedClone: current
            });
        },

        radioChange() {
            if (this.disabled) {
                return;
            }

            const item = {
                current: !this.checked,
                value: this.value
            };
            const parent = this.getRelationNodes('../radio-group/index')[0];

            if (parent) {
                parent.emitEvent(item);
            } else {
                this.$emit('change', {
                    detail: item
                });
            }
        },

        setPosition() {
            this.setData({
                positionCls: this.position.indexOf('left') !== -1 ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`
            });
        }
    },
    watch: {
        position: {
            handler: function () {
                this.setData({
                    positionCls: this.position.indexOf('left') !== -1 ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`
                });
            },

            immediate: true
        },

        checked: {
            handler: function (newVal, oldVal) {
                this.checkedClone = newVal;
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
