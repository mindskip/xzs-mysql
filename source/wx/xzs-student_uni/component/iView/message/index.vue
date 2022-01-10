<template>
    <view :class="'i-class i-message i-message-' + type + ' ' + (visible ? 'i-message-show' : '')">
        {{ content }}
    </view>
</template>

<script>
const default_data = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default' // default || success || warning || error
};
let timmer = null;
export default {
    data() {
        return {
            ...default_data,
            type: {},
            duration: '',
            visible: false,
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
