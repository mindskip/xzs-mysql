<template>
    <view>
        <view class="i-toast-mask" v-if="visible && mask" @click="handleHide"></view>
        <view class="i-class i-toast" v-if="visible">
            <block v-if="type !== 'default'">
                <view class="i-toast-type">
                    <i-icon i-class="i-toast-icon" type="success" v-if="type === 'success'"></i-icon>
                    <i-icon i-class="i-toast-icon" type="prompt" v-else-if="type === 'warning'"></i-icon>
                    <i-icon i-class="i-toast-icon" type="delete" v-else-if="type === 'error'"></i-icon>
                    <view class="i-toast-icon i-toast-loading" v-else-if="type === 'loading'"></view>
                </view>
            </block>
            <block v-else>
                <i-icon i-class="i-toast-icon" :type="icon" v-if="icon"></i-icon>
                <image class="i-toast-image" :src="image" v-if="image" mode="aspectFit"></image>
            </block>
            <view class="i-toast-content" v-if="content">{{ content }}</view>
        </view>
    </view>
</template>

<script>
import iIcon from '../icon/index';
const default_data = {
    visible: false,
    content: '',
    icon: '',
    image: '',
    duration: 2,
    mask: true,
    type: 'default' // default || success || warning || error || loading
};
let timmer = null;
export default {
    components: {
        iIcon
    },
    data() {
        return {
            ...default_data,
            type: {},
            duration: '',
            visible: false,
            mask: '',
            icon: '',
            image: '',
            content: ''
        };
    },
    externalClasses: ['i-class'],
    methods: {
        handleShow(options) {
            const { type = 'default', duration = 2 } = options;
            this.setData({ ...options, type, duration, visible: true });
            const d = this.duration * 1000;

            if (timmer) {
                clearTimeout(timmer);
            }

            if (d !== 0) {
                timmer = setTimeout(() => {
                    this.handleHide();
                    timmer = null;
                }, d);
            }
        },

        handleHide() {
            this.setData({ ...default_data });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
