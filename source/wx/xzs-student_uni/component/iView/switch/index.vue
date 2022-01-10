<template>
    <view :class="'i-class i-switch ' + parse.setSize(size) + ' ' + parse.setCurrent(value, disabled)" @click="toggle">
        <input type="text" :name="name" :wx:value="value" class="i-switch-hide-input" />
        <view class="i-switch-inner" v-if="value === true">
            <slot name="open"></slot>
        </view>
        <view class="i-switch-inner" v-else>
            <slot name="close"></slot>
        </view>
    </view>
</template>
<script module="parse" lang="wxs">
var sizes = ['large', 'default'];
var prefixCls = 'i-switch';
module.exports = {
    setSize : function( size ){
        var index = sizes.indexOf( size );
        return prefixCls + ( index > -1 ? ( '-'+size ) : 'default' )
    },
    setCurrent : function( value,disabled ){
        var className = value && !disabled ? prefixCls + '-checked' : '';
        if( disabled ){
            className += ' ' + prefixCls + '-disabled';
        }
        return className;
    }
}
</script>
<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        value: {
            type: Boolean,
            default: false
        },
        //large small default
        size: {
            type: String,
            default: 'default'
        },
        // is or not disable
        disabled: {
            type: Boolean,
            default: false
        },
        // hidden inut name
        name: {
            type: String,
            default: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods: {
        toggle() {
            if (this.disabled) {
                return;
            }

            const data = this;
            const value = data.value ? false : true;
            this.$emit('change', {
                detail: {
                    value: value
                }
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
