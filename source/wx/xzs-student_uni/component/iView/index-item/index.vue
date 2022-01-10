<template>
    <view class="i-index-item i-class">
        <view class="i-index-item-header">{{ name }}</view>
        <view class="i-index-item-content">
            <slot></slot>
        </view>
    </view>
</template>
<script module="parse" lang="wxs">
module.exports = {

}
</script>
<script>
export default {
    data() {
        return {
            top: 0,
            height: 0,
            currentName: ''
        };
    },
    externalClasses: ['i-class'],
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    relations: {
        '../index/index': {
            type: 'parent'
        }
    },
    methods: {
        updateDataChange() {
            const className = '.i-index-item';
            const query = uni.createSelectorQuery().in(this);
            query
                .select(className)
                .boundingClientRect((res) => {
                    this.setData({
                        top: res.top,
                        height: res.height,
                        currentName: this.name
                    });
                })
                .exec();
        }
    }
};
</script>
<style>
@import './index.css';
</style>
