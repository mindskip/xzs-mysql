<template>
    <view class="i-class i-rate" @touchmove="handleTouchMove">
        <input type="text" :name="name" :wx:value="value" class="i-rate-hide-input" />
        <view :class="'i-rate-star ' + parse.getCurrent(value, index)" :data-index="index" @click="handleClick" v-for="(item, index) in count" :key="item">
            <i-icon type="collection_fill" :size="size"></i-icon>
        </view>
        <view class="i-rate-text" v-if="value !== 0"><slot></slot></view>
    </view>
</template>
<script module="parse" lang="wxs">
var prefixCls = 'i-rate';
module.exports = {
    getCurrent : function( value,index ){
        if( index < value  ){
            return prefixCls + '-current'
        }
    }
}
</script>
<script>
import iIcon from '../icon/index';
export default {
    components: {
        iIcon
    },
    data() {
        return {
            touchesStart: {
                pageX: 0
            }
        };
    },
    externalClasses: ['i-class'],
    props: {
        count: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 20
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick(e) {
            const data = this;

            if (data.disabled) {
                return;
            }

            const index = e.currentTarget.dataset.index;
            this.$emit('change', {
                detail: {
                    index: index + 1
                }
            });
        },

        handleTouchMove(e) {
            const data = this;

            if (data.disabled) {
                return;
            }

            if (!e.changedTouches[0]) {
                return;
            }

            const movePageX = e.changedTouches[0].pageX;
            const space = movePageX - data.touchesStart.pageX;

            if (space <= 0) {
                return;
            }

            let setIndex = Math.ceil(space / data.size);

            if (setIndex > data.count) {
                setIndex = data.count;
            } else {
                setIndex = setIndex;
            }

            this.$emit('change', {
                detail: {
                    index: setIndex
                }
            });
        }
    },
    mounted() {
        const className = '.i-rate';
        var query = uni.createSelectorQuery().in(this);
        query
            .select(className)
            .boundingClientRect((res) => {
                this.touchesStart.pageX = res.left || 0;
            })
            .exec();
    }
};
</script>
<style>
@import './index.css';
</style>
