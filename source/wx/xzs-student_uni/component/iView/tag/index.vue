<template>
    <view :class="'i-class i-tag ' + parse.getClass(color, type, checked, checkable) + ' ' + (checkable ? '' : 'i-tag-disable')" @click="tapTag">
        <slot></slot>
    </view>
</template>
<script module="parse" lang="wxs">
module.exports = {
    getClass : function(color,type,checked,checkable) {
        var initColorList = ['blue', 'green', 'red', 'yellow', 'default'];
        var theme = '';
        var className = 'i-tag-';
        if( initColorList.indexOf( color ) > -1 ){
            theme = className + color;
        }
        if( type === 'border' ){
            theme = className+color+'-border';
        }
        if( checkable && checked ){
            theme = className+color+'-checked';
        }else if( checkable && !checked ){
            theme =  ( type === 'border' ? className + color +'-border' : className+'none' );
        }

        return theme;
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
        //slot name
        name: {
            type: String,
            default: ''
        },
        //can click or not click
        checkable: {
            type: Boolean,
            default: false
        },
        //is current choose
        checked: {
            type: Boolean,
            default: true
        },
        //background and color setting
        color: {
            type: String,
            default: 'default'
        },
        //control fill or not
        type: {
            type: String,
            default: 'dot'
        }
    },
    methods: {
        tapTag() {
            const data = this;

            if (data.checkable) {
                const checked = data.checked ? false : true;
                this.$emit('change', {
                    detail: {
                        name: data.name || '',
                        checked: checked
                    }
                });
            }
        }
    }
};
</script>
<style>
@import './index.css';
</style>
