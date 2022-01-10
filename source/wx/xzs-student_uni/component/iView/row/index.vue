<template>
    <view class="i-class i-row"><slot></slot></view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    relations: {
        '../col/index': {
            type: 'child'
        }
    }
};
</script>
<style>
@import './index.css';
</style>
