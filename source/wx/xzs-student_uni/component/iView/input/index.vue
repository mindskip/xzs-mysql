<template>
    <view :class="'i-class i-cell i-input ' + (error ? 'i-input-error' : '') + ' ' + (mode === 'wrapped' ? 'i-input-wrapped' : '')">
        <view v-if="title" class="i-cell-hd i-input-title">{{ title }}</view>
        <textarea
            v-if="type === 'textarea'"
            auto-height
            :disabled="disabled"
            :focus="autofocus"
            v-model="_value"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :class="'i-input-input i-cell-bd ' + (right ? 'i-input-input-right' : '')"
            placeholder-class="i-input-placeholder"
			
        ></textarea>
        <input
            v-else
            :type="type"
            :disabled="disabled"
            :focus="autofocus"
            v-model="_value"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :class="'i-input-input i-cell-bd ' + (right ? 'i-input-input-right' : '')"
            placeholder-class="i-input-placeholder"
            
        />
    </view>
</template>

<script>
export default {
   computed:{
	   _value:{
		   get:function(){
			   return this.value;
		   },
		   set:function(v){
			   this.value=v;
		   }
	   }
   },
	data() {
        return {
           
        };
    },
    mixins: ['uni://form-field'],
    externalClasses: ['i-class'],
    props: {
		value:{
			type:Object,
			default:""
		},
        title: {
            type: String
        },
        // text || textarea || password || number
        type: {
            type: String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: 'normal'
        },
        right: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: Number
        }
    },
    methods: {
        handleInputChange(event) {
            const { detail = {} } = event;
            const { value = '' } = detail;
            this.setData({
                value
            });
            this.$emit('change', {
                detail: event
            });
        },

        handleInputFocus(event) {
            this.$emit('focus', {
                detail: event
            });
        },

        handleInputBlur(event) {
            this.$emit('blur', {
                detail: event
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
