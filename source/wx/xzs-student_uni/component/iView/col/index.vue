<template>
    <view :class="'i-class i-col ' + (span ? 'i-col-span-' + span : '') + ' ' + (offset ? 'i-col-offset-' + offset : '')"><slot></slot></view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    relations: {
        '../row/index': {
            type: 'parent'
        }
    },
    props: {
        span: {
            default: 0,
            type: Number
        },
        offset: {
            default: 0,
            type: Number
        }
    }
};
</script>
<style>
@import './index.css';
</style>
