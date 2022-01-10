<template>
    <view class="i-class i-checkbox" @click.stop.prevent="checkboxChange">
        <i-cell i-class="i-checkbox-cell">
            <label>
                <radio :value="value" :checked="checkedClone" :color="checkedClone ? color : ''" :disabled="disabled" :class="'i-checkbox-radio ' + positionCls" />
                <view class="i-checkbox-title">{{ value }}</view>
            </label>
        </i-cell>
    </view>
</template>

<script>
import iCell from '../cell/index';
const prefixCls = 'i-checkbox';
export default {
    components: {
        iCell
    },
    data() {
        return {
            checkedClone: true,
            positionCls: `${prefixCls}-checkbox-left`,
            checkedClone: false
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../checkbox-group/index': {
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

        checkboxChange() {
            if (this.disabled) {
                return;
            }

            const item = {
                current: !this.checked,
                value: this.value
            };
            const parent = this.getRelationNodes('../checkbox-group/index')[0];

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
                positionCls: this.position.indexOf('left') !== -1 ? `${prefixCls}-checkbox-left` : `${prefixCls}-checkbox-right`
            });
        }
    },
    watch: {
        position: {
            handler: function () {
                this.setData({
                    positionCls: this.position.indexOf('left') !== -1 ? `${prefixCls}-checkbox-left` : `${prefixCls}-checkbox-right`
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
