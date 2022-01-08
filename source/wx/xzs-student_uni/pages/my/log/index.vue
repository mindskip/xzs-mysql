<template>
    <view class="user-log-page">
        <view data-item="item" class="i-step-item i-step-process i-step-vertical" style="width: 100%" v-for="(item, index) in logList" :key="item.id">
            <view class="i-step-item-ico">
                <view class="i-step-ico"></view>
                <view class="i-step-line" v-if="index !== len - 1"></view>
            </view>

            <view class="i-step-item-main">
                <view class="i-step-item-title">
                    {{ item.createTime }}
                </view>
                <view class="i-step-item-content">
                    {{ item.content }}
                </view>
            </view>

            <i-spin size="large" fix v-if="spinShow"></i-spin>

            <i-message id="message" />
        </view>
    </view>
</template>

<script>
import iSteps from '@/component/iView/steps/index';
import iStep from '@/component/iView/step/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
import iPanel from '@/component/iView/panel/index';
const app = getApp();
export default {
    components: {
        iSteps,
        iStep,
        iMessage,
        iSpin,
        iPanel
    },
    data() {
        return {
            logList: null,
            len: 0,
            spinShow: false
        };
    },
    onLoad: function (options) {
        this.search();
    },
    methods: {
        search: function () {
            let that = this;
            that.setData({
                spinShow: true
            });
            app.globalData
                .formPost('/api/wx/student/user/log', null)
                .then((res) => {
                    that.setData({
                        spinShow: false
                    });

                    if (res.code === 1) {
                        that.setData({
                            logList: res.response,
                            len: res.response.length
                        });
                    }
                })
                .catch((e) => {
                    that.setData({
                        spinShow: false
                    });
                    app.globalData.message(e, 'error');
                });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
