<template>
    <view :class="'i-class i-load-more ' + (loading ? '' : 'i-load-more-line')">
        <view class="i-load-more-loading" v-if="loading"></view>
        <view class="i-load-more-tip">
            <view v-if="tip !== ''">{{ tip }}</view>
            <view v-else-if="tip === '' && loading">正在加载</view>
            <view class="i-load-more-empty" v-else></view>
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
        loading: {
            type: Boolean,
            default: true
        },
        tip: {
            type: String,
            default: ''
        }
    }
};
</script>
<style>
@import './index.css';
</style>
