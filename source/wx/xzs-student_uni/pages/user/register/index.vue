<template>
    <view>
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
            <i-panel title="年级">
                <picker mode="selector" :range="enumItem.state.user.levelEnum" :range-key="'value'" :value="levelIndex" @change="bindLevelChange">
                    <view class="i-cell i-input exam-pick-input">{{ enumItem.state.user.levelEnum[levelIndex].value }}</view>
                    <i-input :value="enumItem.state.user.levelEnum[levelIndex].key" maxlength="-1" name="userLevel" class="exam-hidden" />
                </picker>
            </i-panel>
            <view>
                <button class="i-btn i-btn- i-btn-primary i-btn-square" form-type="submit">注册</button>
            </view>
            <i-spin size="large" fix v-if="spinShow"></i-spin>
        </form>

        <i-message id="message" />
    </view>
</template>
<script module="enumItem" lang="wxs" src="../../../wxs/enumItem.wxs"></script>
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
            levelIndex: 0,
            spinShow: false,
            userName: '',
            password: '',

            enumItem: {
                state: {
                    user: {
                        levelEnum: {
                            value: '',
                            key: ''
                        }
                    }
                }
            }
        };
    },
    methods: {
        bindLevelChange: function (e) {
            this.setData({
                levelIndex: e.detail.value
            });
        },

        formSubmit: function (e) {
            let that = this;
            let form = e.detail.value;

            if (form.userName == null || form.userName == '') {
                app.globalData.message('用户名不能为空', 'error');
                return;
            }

            if (form.password == null || form.password == '') {
                app.globalData.message('密码不能为空', 'error');
                return;
            }

            if (form.userLevel == null || form.userLevel == '') {
                app.globalData.message('年级不能为空', 'error');
                return;
            }

            that.setData({
                spinShow: true
            });
            app.globalData
                .formPost('/api/wx/student/user/register', form)
                .then((res) => {
                    that.setData({
                        spinShow: false
                    });

                    if (res.code == 1) {
                        uni.reLaunch({
                            url: '/pages/user/bind/index'
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
        }
    }
};
</script>
<style>
@import './index.css';
</style>
