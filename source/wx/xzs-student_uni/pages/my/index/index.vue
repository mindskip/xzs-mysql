<template>
    <view>
        <view class="userinfo">
            <block>
                <image class="userinfo-avatar" :src="info.imagePath"></image>
                <text class="userinfo-nickname">{{ info.userName }}</text>
            </block>
        </view>
        <view>
            <i-cell-group i-class="my-group-margin">
                <i-cell title="个人资料" is-link url="/pages/my/info/index">
                    <i-icon type="mine_fill" slot="icon" :size="20" />
                </i-cell>
                <i-cell title="个人动态" is-link url="/pages/my/log/index">
                    <i-icon type="collection_fill" slot="icon" :size="20" />
                </i-cell>
                <i-cell title="消息" is-link url="/pages/my/message/list/index">
                    <i-icon type="message_fill" slot="icon" :size="20" />
                </i-cell>
            </i-cell-group>
        </view>

        <view>
            <i-cell-group i-class="my-group-margin">
                <i-cell title="设置" is-link url="/pages/dashboard/index">
                    <i-icon type="setup_fill" slot="icon" :size="20" />
                </i-cell>
                <i-cell title="反馈" is-link url="/pages/dashboard/index">
                    <i-icon type="praise_fill" slot="icon" :size="20" />
                </i-cell>
                <i-cell title="关于" is-link url="/pages/dashboard/index">
                    <i-icon type="prompt_fill" slot="icon" :size="20" />
                </i-cell>
            </i-cell-group>
        </view>

        <view>
            <i-cell-group i-class="my-group-margin">
                <i-cell title="退出账号" @click="logOut">
                    <i-icon type="flashlight_fill" slot="icon" :size="20" />
                </i-cell>
            </i-cell-group>
        </view>

        <view class="copyright">武汉思维跳跃科技有限公司 提供技术支持</view>

        <i-spin size="large" fix v-if="spinShow"></i-spin>
        <i-message id="message" />
    </view>
</template>

<script>
import iCellGroup from '@/component/iView/cell-group/index';
import iCell from '@/component/iView/cell/index';
import iIcon from '@/component/iView/icon/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
const app = getApp();
export default {
    components: {
        iCellGroup,
        iCell,
        iIcon,
        iMessage,
        iSpin
    },
    data() {
        return {
            spinShow: false,
            info: {
                imagePath: '',
                userName: ''
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
                            info: res.response
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

        logOut() {
            let _this = this;

            _this.setData({
                spinShow: true
            });

            app.globalData
                .formPost('/api/wx/student/auth/unBind', null)
                .then((res) => {
                    if (res.code == 1) {
                        uni.setStorageSync('token', '');
                        uni.reLaunch({
                            url: '/pages/user/bind/index'
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
        }
    }
};
</script>
<style>
@import './index.css';
</style>
