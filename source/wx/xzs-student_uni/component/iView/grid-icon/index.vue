<template>
    <view class="i-class i-grid-icon"><slot></slot></view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    relations: {
        '../grid-item/index': {
            type: 'parent'
        }
    }
};
</script>
<style>
@import './index.css';
</style>
