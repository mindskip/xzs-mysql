<template>
    <view>
        <form  @submit="formSubmit">
            <i-panel title="真实姓名">
                <input v-model="userInfo.realName" name="realName" maxlength="-1" />
            </i-panel>
            <i-panel title="年龄">
                <input v-model="userInfo.age" name="age" maxlength="-1" />
            </i-panel>
            <i-panel title="性别">
                <radio-group class="radio-group my-info-sex" name="sex">
                    <label class="radio my-info-sex-item" v-for="(radioItem, index) in enumItem.state.user.sexEnum" :key="item.key">
                        <radio color="#2d8cf0" :value="radioItem.key" :checked="radioItem.key === userInfo.sex" />

                        <text>{{ radioItem.value }}</text>
                    </label>
                </radio-group>
            </i-panel>
            <i-panel title="出生日期">
                <picker class="weui-btn" mode="date" v-model="userInfo.birthDay" @change="bindDateChange">
                    <view class="i-cell input exam-pick-input">{{ userInfo.birthDay }}</view>
                    <input v-model="userInfo.birthDay" class="exam-hidden" name="birthDay" maxlength="-1" />
                </picker>
            </i-panel>
            <i-panel title="手机">
                <input v-model="userInfo.phone" name="phone" maxlength="-1" />
            </i-panel>
            <i-panel title="年级">
                <picker mode="selector" :range="enumItem.state.user.levelEnum" :range-key="'value'" :value="levelIndex" @change="bindLevelChange">
                    <view class="i-cell input exam-pick-input">{{ enumItem.state.user.levelEnum[levelIndex].value }}</view>
                    <input v-model="enumItem.state.user.levelEnum[levelIndex].key" maxlength="-1" name="userLevel" class="exam-hidden" />
                </picker>
            </i-panel>
            <view>
                <button class="i-btn i-btn- i-btn-primary i-btn-square" form-type="submit">保存</button>
            </view>
        </form>

        <i-spin size="large" fix v-if="spinShow"></i-spin>
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
import iRadioGroup from '@/component/iView/radio-group/index';
import iRadio from '@/component/iView/radio/index';
// pages/user/info/index.js
const app = getApp();
export default {
    components: {
        iButton,
        iPanel,
        iInput,
        iMessage,
        iSpin,
        iRadioGroup,
        iRadio
    },
    data() {
        return {
            userInfo: {
				phone:"123",
				age:0,
				realName:"123",
				
			},
            spinShow: false,
            levelIndex: 0,

            enumItem: {
                state: {
                    user: {
                        sexEnum: [],

                        levelEnum: {
                            value: '',
                            key: ''
                        }
                    }
                }
            },

            radioItem: {
                key: '',
                value: ''
            }
        };
    },
    onLoad: function (options) {
        this.loadUserInfo();
    },
    methods: {
        loadUserInfo() {
            let _this = this;

            _this.setData({
                spinShow: true
            });

            app.globalData
                .formPost('/api/wx/student/user/current', null)
                .then((res) => {
                    if (res.code == 1) {
                        _this.setData({
                            userInfo: res.response,
                            levelIndex: res.response.userLevel - 1
                        });
                    }

                    _this.setData({
                        spinShow: false
                    });
                })
                .catch((e) => {
                    _this.setData({
                        spinShow: false
                    });

                    app.globalData.message(e, 'error');
                });
        },

        bindLevelChange: function (e) {
            this.setData({
                levelIndex: e.detail.value
            });
        },

        bindDateChange(e) {
            let { value } = e.detail;
            this.setData({
                'userInfo.birthDay': value
            });
        },

        formSubmit: function (e) {
            let that = this;
            uni.showLoading({
                title: '提交中',
                mask: true
            });
            app.globalData
                .formPost('/api/wx/student/user/update', e.detail.value)
                .then((res) => {
                    if (res.code == 1) {
                        uni.reLaunch({
                            url: '/pages/my/index/index'
                        });
                    } else {
                        app.globalData.message(res.message, 'error');
                    }

                    uni.hideLoading();
                })
                .catch((e) => {
                    app.globalData.message(e, 'error');
                    uni.hideLoading();
                });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
