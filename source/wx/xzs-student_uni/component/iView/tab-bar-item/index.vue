<template>
    <view class="i-class i-tab-bar-item">
        <i-badge :dot="dot" :count="dot ? 0 : count">
            <view>
                <i-icon
                    v-if="icon || currentIcon"
                    :i-class="'i-tab-bar-item-icon ' + (current ? 'item-index--i-tab-bar-item-icon-current' : '')"
                    :color="current ? currentColor : ''"
                    :type="current ? currentIcon : icon"
                    :size="22"
                ></i-icon>
                <image v-else class="i-tab-bar-item-img" :src="current ? currentImg : img"></image>
                <view :class="'i-tab-bar-item-title ' + (current ? 'i-tab-bar-item-title-current' : '')" v-if="current && currentColor" :style="'color: ' + currentColor">
                    {{ title }}
                </view>
                <view :class="'i-tab-bar-item-title ' + (current ? 'i-tab-bar-item-title-current' : '')" v-else>{{ title }}</view>
            </view>
        </i-badge>
    </view>
</template>

<script>
import iBadge from '../badge/index';
import iIcon from '../icon/index';
export default {
    components: {
        iBadge,
        iIcon
    },
    data() {
        return {
            current: false,
            currentColor: {}
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../tab-bar/index': {
            type: 'parent'
        }
    },
    props: {
        icon: {
            type: String,
            default: ''
        },
        currentIcon: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        currentImg: {
            type: String,
            default: ''
        },
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

        handleClickItem() {
            const parent = this.getRelationNodes('../tab-bar/index')[0];
            parent.emitEvent(this.key);
        }
    }
};
</script>
<style>
@import './index.css';
</style>
