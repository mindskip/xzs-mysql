<template>
    <view>
        <view :class="'i-modal-mask i-class-mask ' + (visible ? 'i-modal-mask-show' : '')"></view>
        <view :class="'i-class i-modal ' + (visible ? 'i-modal-show' : '')">
            <view class="i-modal-main">
                <view class="i-modal-content">
                    <view class="i-modal-title" v-if="title">{{ title }}</view>
                    <view class="i-modal-body"><slot></slot></view>
                    <view class="i-modal-actions" v-if="actions.length">
                        <block v-if="actionMode === 'horizontal'">
                            <i-grid i-class="i-modal-grid">
                                <i-grid-item
                                    :i-class="actions.length === index + 1 ? 'i-modal-grid-item-last' : 'i-modal-grid-item'"
                                    v-for="(item, index) in actions"
                                    :key="item.name"
                                >
                                    <!-- parse <template is="button" :data="item, index"></template> -->
                                    <block name="button">
                                        <i-button long type="ghost" :data-index="index" @click="handleClickItem">
                                            <view class="i-modal-btn-loading" v-if="item.loading"></view>
                                            <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                                            <view class="i-modal-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
                                        </i-button>
                                    </block>
                                </i-grid-item>
                            </i-grid>
                        </block>
                        <block v-else>
                            <view class="i-modal-action-vertical" v-for="(item, index) in actions" :key="item.name">
                                <!-- parse <template is="button" :data="item, index"></template> -->
                                <block name="button">
                                    <i-button long type="ghost" :data-index="index" @click="handleClickItem">
                                        <view class="i-modal-btn-loading" v-if="item.loading"></view>
                                        <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                                        <view class="i-modal-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
                                    </i-button>
                                </block>
                            </view>
                        </block>
                    </view>
                    <view class="i-modal-actions" v-else>
                        <i-grid i-class="i-modal-grid" v-if="showOk || showCancel">
                            <i-grid-item i-class="i-modal-grid-item" v-if="showCancel">
                                <i-button i-class="i-modal-btn-cancel" long type="ghost" @click="handleClickCancel">{{ cancelText }}</i-button>
                            </i-grid-item>
                            <i-grid-item i-class="i-modal-grid-item-last" v-if="showOk">
                                <i-button i-class="i-modal-btn-ok" long type="ghost" @click="handleClickOk">{{ okText }}</i-button>
                            </i-grid-item>
                        </i-grid>
                    </view>
                </view>
            </view>
        </view>
        <block name="button">
            <i-button long type="ghost" :data-index="index" @click="handleClickItem">
                <view class="i-modal-btn-loading" v-if="item.loading"></view>
                <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                <view class="i-modal-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
            </i-button>
        </block>
    </view>
</template>

<script>
import iGrid from '../grid/index';
import iGridItem from '../grid-item/index';
import iButton from '../button/index';
import iIcon from '../icon/index';
export default {
    data() {
        return {};
    },
    components: {
        iGrid,
        iGridItem,
        iButton,
        iIcon
    },
    externalClasses: ['i-class', 'i-class-mask'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        showOk: {
            type: Boolean,
            default: true
        },
        showCancel: {
            type: Boolean,
            default: true
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        // 按钮组，有此值时，不显示 ok 和 cancel 按钮
        actions: {
            type: Array,
            default: () => []
        },
        // horizontal || vertical
        actionMode: {
            type: String,
            default: 'horizontal'
        }
    },
    methods: {
        handleClickItem({ currentTarget = {} }) {
            const dataset = currentTarget.dataset || {};
            const { index } = dataset;
            this.$emit('click', {
                detail: {
                    index
                }
            });
        },

        handleClickOk() {
            this.$emit('ok');
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
