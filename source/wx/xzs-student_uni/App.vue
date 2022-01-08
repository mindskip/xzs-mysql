<script>
const { $Message } = require('./component/iView/base/index');

const mtjwxsdk = require('./utils/mtj-wx-sdk.js');

export default {
    data() {
        return {};
    },
    globalData: {
        baseAPI: 'http://localhost:8000',
        pageSize: 20,

        message: function (content, type) {
            $Message({
                content: content,
                type: type
            });
        },

        formPost: function (url, data) {
            let that = this;
            return new Promise(function (resolve, reject) {
                uni.showNavigationBarLoading();
                uni.request({
                    url: that.baseAPI + url,
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        token: uni.getStorageSync('token')
                    },
                    method: 'POST',
                    data,

                    success(res) {
                        if (res.statusCode !== 200 || typeof res.data !== 'object') {
                            reject('网络出错');
                            return false;
                        }

                        if (res.data.code === 400) {
                            let token = res.data.response;
                            uni.setStorageSync('token', token);
                            uni.request({
                                url: that.baseAPI + url,
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded',
                                    token: uni.getStorageSync('token')
                                },
                                method: 'POST',
                                data,

                                success(result) {
                                    resolve(result.data);
                                    return true;
                                }
                            });
                        } else {
                            if (res.data.code === 401) {
                                uni.reLaunch({
                                    url: '/pages/user/bind/index'
                                });
                                return false;
                            } else {
                                if (res.data.code === 500) {
                                    reject(res.data.message);
                                    return false;
                                } else {
                                    if (res.data.code === 501) {
                                        reject(res.data.message);
                                        return false;
                                    } else {
                                        resolve(res.data);
                                        return true;
                                    }
                                }
                            }
                        }
                    },

                    fail(res) {
                        reject(res.errMsg);
                        return false;
                    },

                    complete(res) {
                        uni.hideNavigationBarLoading();
                    }
                });
            });
        }
    },
    onLaunch: function () {
        let that = this;
        let token = uni.getStorageSync('token');

        if (null == token || token == '') {
            uni.login({
                success(wxres) {
                    if (wxres.code) {
                        that.globalData
                            .formPost('/api/wx/student/auth/checkBind', {
                                code: wxres.code
                            })
                            .then((res) => {
                                if (res.code == 1) {
                                    uni.setStorageSync('token', res.response);
                                    uni.reLaunch({
                                        url: '/pages/index/index'
                                    });
                                } else {
                                    if (res.code == 2) {
                                        uni.reLaunch({
                                            url: '/pages/user/bind/index'
                                        });
                                    } else {
                                        that.globalData.message(res.message, 'error');
                                    }
                                }
                            })
                            .catch((e) => {
                                that.globalData.message(e, 'error');
                            });
                    } else {
                        that.globalData.message(res.errMsg, 'error');
                    }
                }
            });
        }
    }
};
</script>
<style>
@import './app.css';
</style>
