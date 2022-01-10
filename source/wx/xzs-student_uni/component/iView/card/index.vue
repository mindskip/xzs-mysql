<template>
    <view :class="'i-class i-card ' + (full ? 'i-card-full' : '')">
        <view class="i-class i-card-header">
            <view class="i-card-header-content">
                <image class="i-card-header-thumb" :src="thumb" mode="aspectFit" v-if="thumb" />
                {{ title }}
            </view>
            <view class="i-card-header-extra" v-if="extra">{{ extra }}</view>
        </view>
        <view class="i-class i-card-body"><slot name="content"></slot></view>
        <view class="i-class i-card-footer"><slot name="footer"></slot></view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    props: {
        full: {
            type: Boolean,
            default: false
        },
        thumb: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        extra: {
            type: String,
            default: ''
        }
    }
};
</script>
<style>
@import './index.css';
</style>
