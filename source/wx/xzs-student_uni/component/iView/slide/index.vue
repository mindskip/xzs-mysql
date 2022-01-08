<template>
    <view class="i-class i-slide" @touchstart.stop.prevent.capture="handleTap2" @touchmove.stop.prevent.capture="handleTap3">1111</view>
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
    externalClasses: ['i-class'],
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods: {
        handleTap2() {
            console.log(event, 1111111);
        },

        handleTap3() {}
    }
};
</script>
<style>
@import './index.css';
</style>
