<template>
    <view :class="'i-class i-progress i-progress-' + status + ' ' + (!hideInfo ? 'i-progress-show-info' : '')">
        <view class="i-progress-outer">
            <view class="i-progress-inner">
                <view class="i-progress-bg" :style="'width: ' + percent + '%;height: ' + strokeWidth + 'px'"></view>
            </view>
        </view>
        <view class="i-progress-text" v-if="!hideInfo">
            <view class="i-progress-text-inner">{{ percent }}%</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        percent: {
            type: Number,
            default: 0
        },
        // normal || active || wrong || success
        status: {
            type: String,
            default: 'normal'
        },
        strokeWidth: {
            type: Number,
            default: 10
        },
        hideInfo: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style>
@import './index.css';
</style>
