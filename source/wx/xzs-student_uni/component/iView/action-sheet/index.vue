<template>
    <view>
        <view :class="'i-as-mask i-class-mask ' + (visible ? 'i-as-mask-show' : '')" @click="handleClickMask"></view>
        <view :class="'i-class i-as ' + (visible ? 'i-as-show' : '')">
            <view class="i-as-header i-class-header"><slot name="header"></slot></view>
            <view class="i-as-actions">
                <view class="i-as-action-item" v-for="(item, index) in actions" :key="item.name">
                    <i-button @click="handleClickItem" :data-index="index" :open-type="item.openType" type="ghost" size="large" long>
                        <view class="i-as-btn-loading" v-if="item.loading"></view>
                        <i-icon v-if="item.icon" :type="item.icon" i-class="i-as-btn-icon"></i-icon>
                        <view class="i-as-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
                    </i-button>
                </view>
            </view>
            <view class="i-as-cancel" v-if="showCancel">
                <i-button i-class="i-as-cancel-btn" type="ghost" size="large" :long="true" @click="handleClickCancel">{{ cancelText }}</i-button>
            </view>
        </view>
    </view>
</template>

<script>
import iButton from '../button/index';
import iIcon from '../icon/index';
export default {
    data() {
        return {};
    },
    components: {
        iButton,
        iIcon
    },
    externalClasses: ['i-class', 'i-class-mask', 'i-class-header'],
    options: {
        multipleSlots: true
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        showCancel: {
            type: Boolean,
            default: false
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        actions: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleClickMask() {
            if (!this.maskClosable) {
                return;
            }

            this.handleClickCancel();
        },

        handleClickItem({ currentTarget = {} }) {
            const dataset = currentTarget.dataset || {};
            const { index } = dataset;
            this.$emit('click', {
                detail: {
                    index
                }
            });
        },

        handleClickCancel() {
            this.$emit('cancel');
        }
    }
};
</script>
<style>
@import './index.css';
</style>
