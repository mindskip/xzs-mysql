<template>
    <view class="msg-page">
        <view class="msg-title">
            <h1>{{ message.title }}</h1>
        </view>
        <view>
            <view class="msg-content">
                <h1>发送人：{{ message.sendUserName }}</h1>
            </view>
            <view class="msg-content">
                <h1>发送时间：{{ message.createTime }}</h1>
            </view>
            <view class="msg-content">
                <h1>发送内容：{{ message.content }}</h1>
            </view>

            <i-spin size="large" fix v-if="spinShow"></i-spin>
            <i-message id="message" />
        </view>
    </view>
</template>

<script>
import iPanel from '@/component/iView/panel/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
const app = getApp();
export default {
    components: {
        iPanel,
        iMessage,
        iSpin
    },
    data() {
        return {
            message: null,
            spinShow: false
        };
    },
    onLoad: function (options) {
        let msgId = options.id;
        let that = this;
        that.setData({
            spinShow: true
        });
        app.globalData
            .formPost('/api/wx/student/user/message/detail/' + msgId, null)
            .then((res) => {
                that.setData({
                    spinShow: false
                });

                if (res.code === 1) {
                    that.setData({
                        message: res.response
                    });
                    app.globalData.formPost('/api/wx/student/user/message/read/' + msgId, null);
                }
            })
            .catch((e) => {
                that.setData({
                    spinShow: false
                });
                app.globalData.message(e, 'error');
            });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    methods: {}
};
</script>
<style>
@import './index.css';
</style>
