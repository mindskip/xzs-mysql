<template>
    <view class="i-divider i-class" :style="parse.getStyle(color, size, height)">
        <view class="i-divider-content" v-if="content !== ''">
            {{ content }}
        </view>
        <view class="i-divider-content" v-else>
            <slot></slot>
        </view>
        <view class="i-divider-line" :style="'background:' + lineColor"></view>
    </view>
</template>
<script module="parse" lang="wxs">
module.exports = {
    getStyle : function(color,size,height){
        var color = 'color:' + color +';';
        var size = 'font-size:' + size + 'px;';
        var height = 'height:' + height+'px;'
        return color + size + height;
    }
}
</script>
<script>
export default {
    data() {
        return {
            parse: {
                getStyle: ''
            }
        };
    },
    externalClasses: ['i-class'],
    props: {
        content: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: 48
        },
        color: {
            type: String,
            default: '#80848f'
        },
        lineColor: {
            type: String,
            default: '#e9eaec'
        },
        size: {
            type: String,
            default: 12
        }
    }
};
</script>
<style>
@import './index.css';
</style>
