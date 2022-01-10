<template>
    <view class="i-class i-grid-item" :style="'width: ' + width"><slot></slot></view>
</template>

<script>
export default {
    data() {
        return {
            width: {}
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../grid/index': {
            type: 'parent'
        },
        '../grid-icon/index': {
            type: 'child'
        }
    }
};
</script>
<style>
@import './index.css';
</style>
