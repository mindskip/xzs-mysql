<template>
    <view class="i-sticky-item">
        <view :class="'i-sticky-item-header i-class ' + (isFixed === true ? 'i-sticky-fixed' : '')">
            <view class="i-sticky-title">
                <slot name="title"></slot>
            </view>
        </view>
        <view class="i-index-item-content">
            <slot name="content"></slot>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            top: 0,
            height: 0,
            isFixed: false,
            index: -1
        };
    },
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    relations: {
        '../sticky/index': {
            type: 'parent'
        }
    },
    methods: {
        updateScrollTopChange(scrollTop) {
            const data = this;
            const top = data.top;
            const height = data.height;
            this.setData({
                isFixed: scrollTop >= top && scrollTop < top + height ? true : false
            });
        },

        updateDataChange(index) {
            const className = '.i-sticky-item';
            const query = uni.createSelectorQuery().in(this);
            query
                .select(className)
                .boundingClientRect((res) => {
                    if (res) {
                        this.setData({
                            top: res.top,
                            height: res.height,
                            index: index
                        });
                    }
                })
                .exec();
        }
    }
};
</script>
<style>
@import './index.css';
</style>
