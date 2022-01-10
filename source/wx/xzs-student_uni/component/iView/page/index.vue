<template>
    <view class="i-class i-page">
        <view class="i-page-prev" v-if="mode === 'button'">
            <i-button i-class="i-page-button" type="ghost" @click="handlePrev" :disabled="current === 1"><slot name="prev"></slot></i-button>
        </view>
        <view class="i-page-number" v-if="mode !== 'pointer' && !simple">
            <view class="i-page-number-current">{{ current }}</view>
            /{{ total }}
        </view>
        <view class="i-page-pointer" v-if="mode === 'pointer'">
            <view :class="'i-page-pointer-dot ' + (index + 1 === current ? 'current' : '')" v-for="(item, index) in total" :key="item.index"></view>
        </view>
        <view class="i-page-next" v-if="mode === 'button'">
            <i-button i-class="i-page-button" type="ghost" @click="handleNext" :disabled="current === total"><slot name="next"></slot></i-button>
        </view>
    </view>
</template>

<script>
import iButton from '../button/index';
export default {
    data() {
        return {};
    },
    components: {
        iButton
    },
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    props: {
        // button || number || pointer
        mode: {
            type: String,
            default: 'button'
        },
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        // 是否隐藏数值
        simple: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChange(type) {
            this.$emit('change', {
                detail: {
                    type: type
                }
            });
        },

        handlePrev() {
            this.handleChange('prev');
        },

        handleNext() {
            this.handleChange('next');
        }
    }
};
</script>
<style>
@import './index.css';
</style>
