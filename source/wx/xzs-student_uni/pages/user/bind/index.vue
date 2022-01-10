<template>
    <view>
        <!--pages/user/bind/index.wxml-->
        <view class="card-image-container">
            <image src="@/static/assets/logo2.png" style="width: 175px; height: 147px"></image>
        </view>

        <form @submit="formSubmit">
            <i-panel title="用户名">
                <i-input :value="userName" name="userName" maxlength="-1" />
            </i-panel>

            <i-panel title="密码">
                <i-input :value="password" name="password" maxlength="-1" />
            </i-panel>

            <view>
                <button class="i-btn i-btn- i-btn-primary i-btn-square" form-type="submit">登录</button>
            </view>
            <view style="padding:font-size: 26rpx;color: #606266;padding: 20rpx 50rpx;">
                学之思是一款学校考试系统，仅供学校内部学生使用，需要提供账号密码。没有账号?
                <text @click="register" style="color: #4399fc">马上注册</text>
            </view>
            <i-spin size="large" fix v-if="spinShow"></i-spin>
        </form>

        <i-message id="message" />
    </view>
</template>

<script>
import iButton from '@/component/iView/button/index';
import iPanel from '@/component/iView/panel/index';
import iInput from '@/component/iView/input/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
const app = getApp();
export default {
    components: {
        iButton,
        iPanel,
        iInput,
        iMessage,
        iSpin
    },
    data() {
        return {
            spinShow: false,
            userName: {},
            password: {}
        };
    },
    methods: {
        formSubmit: function (e) {
            let that = this;
            that.setData({
                spinShow: true
            });
            uni.login({
                success(wxres) {
                    if (wxres.code) {
                        e.detail.value.code = wxres.code;
                        app.globalData
                            .formPost('/api/wx/student/auth/bind', e.detail.value)
                            .then((res) => {
                                that.setData({
                                    spinShow: false
                                });

                                if (res.code == 1) {
                                    uni.setStorageSync('token', res.response);
                                    uni.reLaunch({
                                        url: '/pages/index/index'
                                    });
                                } else {
                                    app.globalData.message(res.message, 'error');
                                }
                            })
                            .catch((e) => {
                                that.setData({
                                    spinShow: false
                                });
                                app.globalData.message(e, 'error');
                            });
                    } else {
                        app.globalData.message(res.errMsg, 'error');
                    }
                }
            });
        },

        register: function (e) {
            uni.navigateTo({
                url: '../register/index'
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
