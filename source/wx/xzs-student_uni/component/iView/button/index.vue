<template>
    <view>
        <button
            :class="
                'i-class i-btn ' +
                (long ? 'i-btn-long' : '') +
                ' ' +
                ('i-btn-' + size) +
                ' ' +
                ('i-btn-' + type) +
                ' ' +
                ('i-btn-' + shape) +
                ' ' +
                (loading ? 'i-btn-loading' : '') +
                ' ' +
                (disabled ? 'i-btn-disabled' : '') +
                ' ' +
                (inline ? 'i-btn-inline' : '')
            "
            hover-class="i-btn-hover"
            @click="handleTap"
            :open-type="openType"
            :app-parameter="appParameter"
            :hover-stop-propagation="hoverStopPropagation"
            :hover-start-time="hoverStartTime"
            :hover-stay-time="hoverStayTime"
            :session-from="sessionFrom"
            :send-message-title="sendMessageTitle"
            :send-message-path="sendMessagePath"
            :send-message-img="sendMessageImg"
            :show-message-card="showMessageCard"
            @contact="bindcontact"
            @getuserinfo="bindgetuserinfo"
            @getphonenumber="bindgetphonenumber"
            @error="binderror"
            :plain="true"
        >
            <view class="i-btn-loading-inner" v-if="loading"></view>
            <slot></slot>
        </button>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    props: {
        // default, primary, ghost, info, success, warning, error
        type: {
            type: String,
            default: ''
        },
        inline: {
            type: Boolean,
            default: false
        },
        // default, large, small
        size: {
            type: String,
            default: ''
        },
        // circle, square
        shape: {
            type: String,
            default: 'square'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        long: {
            type: Boolean,
            default: false
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            default: 20
        },
        hoverStayTime: {
            type: Number,
            default: 70
        },
        lang: {
            type: String,
            default: 'en'
        },
        sessionFrom: {
            type: String,
            default: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    methods: {
        handleTap() {
            if (this.disabled) {
                return false;
            }

            this.$emit('click');
        },

        bindgetuserinfo({ detail = {} } = {}) {
            this.$emit('getuserinfo', {
                detail: detail
            });
        },

        bindcontact({ detail = {} } = {}) {
            this.$emit('contact', {
                detail: detail
            });
        },

        bindgetphonenumber({ detail = {} } = {}) {
            this.$emit('getphonenumber', {
                detail: detail
            });
        },

        binderror({ detail = {} } = {}) {
            this.$emit('error', {
                detail: detail
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
