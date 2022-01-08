<template>
    <view :class="'i-class i-avatar i-avatar-' + shape + ' i-avatar-' + size + ' ' + (src ? 'i-avatar-image' : '')">
        <image :src="src" v-if="src !== ''"></image>
        <view class="i-avatar-string" v-else><slot></slot></view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        // circle || square
        shape: {
            type: String,
            default: 'circle'
        },
        // small || large || default
        size: {
            type: String,
            default: 'default'
        },
        src: {
            type: String,
            default: ''
        }
    }
};
</script>
<style>
@import './index.css';
</style>
