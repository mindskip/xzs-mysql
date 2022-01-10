<template>
    <view class="i-class i-collapse" @collapse="clickfn">
        <slot></slot>
    </view>
</template>

<script>
export default {
    data() {
        return {
            showContent: {}
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    props: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn(e) {
            const params = e.detail;
            const allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach((item) => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'i-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
