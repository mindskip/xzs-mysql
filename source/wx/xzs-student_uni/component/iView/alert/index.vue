<template>
    <view :class="'i-class i-alert ' + ('i-alert-' + type) + ' ' + (showIcon ? 'i-alert-with-icon' : '') + ' ' + (desc ? 'i-alert-with-desc' : '')" v-if="!closed">
        <view v-if="showIcon" class="i-alert-icon">
            <i-icon type="prompt" v-if="type === 'info'" :size="desc ? 24 : 16"></i-icon>
            <i-icon type="success" v-if="type === 'success'" :size="desc ? 24 : 16"></i-icon>
            <i-icon type="warning" v-if="type === 'warning'" :size="desc ? 24 : 16"></i-icon>
            <i-icon type="delete" v-if="type === 'error'" :size="desc ? 24 : 16"></i-icon>
        </view>
        <slot></slot>
        <view class="i-alert-desc">
            <slot name="desc"></slot>
        </view>
        <view class="i-alert-close" v-if="closable" @click="handleTap">
            <i-icon type="close"></i-icon>
        </view>
    </view>
</template>

<script>
import iIcon from '../icon/index';
export default {
    components: {
        iIcon
    },
    data() {
        return {
            closed: false
        };
    },
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    props: {
        //info, success, warning, error
        type: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleTap() {
            this.setData({
                closed: !this.closed
            });
            this.$emit('close');
        }
    }
};
</script>
<style>
@import './index.css';
</style>
