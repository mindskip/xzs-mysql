<template>
    <view :class="'i-class i-spin i-spin-' + size + ' ' + (fix ? 'i-spin-fix' : '') + ' ' + (custom ? 'i-spin-show-text' : '') + ' ' + (fullscreen ? 'i-spin-fullscreen' : '')">
        <div class="i-spin-main">
            <view class="i-spin-dot"></view>
            <div class="i-spin-text"><slot></slot></div>
        </div>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        // small || default || large
        size: {
            type: String,
            default: 'default'
        },
        fix: {
            type: Boolean,
            default: false
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        custom: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style>
@import './index.css';
</style>
