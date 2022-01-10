<template>
    <view v-if="show" class="i-class i-noticebar" :style="'color: ' + color + '; background-color: ' + backgroundcolor">
        <i-icon v-if="icon" :type="icon" :size="24" :color="color" class="i-noticebar-icon"></i-icon>
        <view class="i-noticebar-content-wrap">
            <view :class="'i-noticebar-content ' + (loop ? 'i-noticebar-content-loop' : '')" :animation="animationData">
                <slot></slot>
            </view>
        </view>
        <i-icon v-if="closable" class="i-noticebar-operation" type="close" :size="20" :color="color" @click.native="handleClose"></i-icon>
    </view>
</template>

<script>
import iIcon from '../icon/index';
const VALID_MODE = ['closeable'];
const FONT_COLOR = '#f60';
const BG_COLOR = '#fff7cc';
export default {
    components: {
        iIcon
    },
    data() {
        return {
            show: true,
            wrapWidth: 0,
            width: 0,
            duration: 0,
            animation: null,
            timer: null,
            animationData: {}
        };
    },
    externalClasses: ['i-class'],
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        loop: {
            type: Boolean,
            default: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            default: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            default: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            default: 1000
        }
    },
    destroyed() {
        this.destroyTimer();
    },
    mounted() {
        if (this.loop) {
            this.initAnimation();
        }
    },
    methods: {
        initAnimation() {
            uni.createSelectorQuery()
                .in(this)
                .select('.i-noticebar-content-wrap')
                .boundingClientRect((wrapRect) => {
                    uni.createSelectorQuery()
                        .in(this)
                        .select('.i-noticebar-content')
                        .boundingClientRect((rect) => {
                            const duration = (rect.width / 40) * this.speed;
                            const animation = uni.createAnimation({
                                duration: duration,
                                timingFunction: 'linear'
                            });
                            this.setData(
                                {
                                    wrapWidth: wrapRect.width,
                                    width: rect.width,
                                    duration: duration,
                                    animation: animation
                                },
                                () => {
                                    this.startAnimation();
                                }
                            );
                        })
                        .exec();
                })
                .exec();
        },

        startAnimation() {
            //reset
            if (this.animation.option.transition.duration !== 0) {
                this.animation.option.transition.duration = 0;
                const resetAnimation = this.animation.translateX(this.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }

            this.animation.option.transition.duration = this.duration;
            const animationData = this.animation.translateX(-this.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {
                this.startAnimation();
            }, this.duration);
            this.setData({
                timer
            });
        },

        destroyTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },

        handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
