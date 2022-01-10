<template>
    <view :class="'i-class i-tabs-tab ' + (scroll ? 'i-tabs-tab-scroll' : '') + ' ' + (current ? 'i-tabs-tab-current' : '')">
        <i-badge :dot="dot" :count="dot ? 0 : count">
            <view @click="handleClickItem">
                <view :class="'i-tabs-tab-title ' + (current ? 'i-tabs-tab-title-current' : '')" v-if="current && currentColor" :style="'color: ' + currentColor">{{ title }}</view>
                <view :class="'i-tabs-tab-title ' + (current ? 'i-tabs-tab-title-current' : '')" v-else>{{ title }}</view>
            </view>
        </i-badge>
        <view class="i-tabs-tab-bar" v-if="current" :style="'background: ' + currentColor"></view>
    </view>
</template>

<script>
import iBadge from '../badge/index';
export default {
    components: {
        iBadge
    },
    data() {
        return {
            current: false,
            currentColor: {},
            scroll: false
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },
    props: {
        key: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        dot: {
            type: Boolean,
            default: false
        },
        count: {
            type: Number,
            default: 0
        }
    },
    methods: {
        changeCurrent(current) {
            this.setData({
                current
            });
        },

        changeCurrentColor(currentColor) {
            this.setData({
                currentColor
            });
        },

        changeScroll(scroll) {
            this.setData({
                scroll
            });
        },

        handleClickItem() {
            const parent = this.getRelationNodes('../tabs/index')[0];
            parent.emitEvent(this.key);
        }
    }
};
</script>
<style>
@import './index.css';
</style>
