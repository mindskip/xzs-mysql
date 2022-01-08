<template>
    <view class="i-class i-panel">
        <view v-if="title" :class="'i-panel-title ' + (hideTop ? 'i-panel-title-hide-top' : '')">{{ title }}</view>
        <view :class="'i-panel-content ' + (hideBorder ? 'i-panel-without-border' : '')"><slot></slot></view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        title: {
            type: String,
            default: ''
        },
        // 标题顶部距离
        hideTop: {
            type: Boolean,
            default: false
        },
        hideBorder: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style>
@import './index.css';
</style>
