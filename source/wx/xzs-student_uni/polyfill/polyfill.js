/*
 * @Author: zhang peng
 * @Date: 2021-08-03 10:57:51
 * @LastEditTime: 2021-10-15 20:24:24
 * @LastEditors: zhang peng
 * @Description:
 * @FilePath: \miniprogram-to-uniapp2\src\project\template\polyfill\polyfill.js
 *
 * Api polyfill
 * 2021-03-06
 * 因小程序转换到uniapp，再运行到各平台时，总有这样那样的api，没法支持，
 * 现根据uniapp文档对各平台的支持度，或实现，或调用success来抹平各平台的差异，
 * 让代码能正常运行，下一步再解决这些api的兼容问题。
 *
 * Author: 375890534@qq.com
 */
const base64Binary = require("./base64Binary")

/**
 * 获取guid
 */
function guid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

/**
 * 检查api是否未实现，没实现返回true
 * @param {Object} api
 */
function isApiNotImplemented (api) {
    return uni[api] === undefined || [api] && uni[api].toString().indexOf("is not yet implemented") > -1
}

/**
 * 条件编译
 */
function platformPolyfill () {
    // #ifdef APP-PLUS
    uni.showNavigationBarLoading = function () {
        console.warn("api: uni.showNavigationBarLoading 在App平台会在屏幕中间悬浮loading，不如直接去掉")
    }
    // #endif
}


/**
 * 登录相关api polyfill
 */
function loginPolyfill () {
    if (isApiNotImplemented("login")) {
        uni.login = function (options) {
            console.warn("api: uni.login 登录 在当前平台不支持，【关键流程函数】 回调成功")
            options.success && options.success({
                code: guid(),
                errMsg: "login:ok"
            })
        }
    }

    if (isApiNotImplemented("checkSession")) {
        uni.checkSession = function (options) {
            console.warn("api: uni.checkSession 检查登录状态是否过期 在当前平台不支持，【关键流程函数】 回调成功")
            options.success && options.success()
        }
    }

    if (isApiNotImplemented("getUserInfo")) {
        uni.getUserInfo = function (options) {
            console.warn("api: uni.getUserInfo 获取用户信息 在当前平台不支持，【关键流程函数】回调成功")
            options.success && options.success({
                userInfo: ""
            })
        }
    }
    if (isApiNotImplemented("getUserProfile")) {
        uni.getUserProfile = function (options) {
            console.warn("api: uni.getUserProfile 获取用户授权信息 在当前平台不支持，【关键流程函数】回调成功")
            options.success && options.success({
                userInfo: ""
            })
        }
    }
}

/**
 * 地图相关
 */
function mapPolyfill () {
    if (isApiNotImplemented("chooseLocation")) {
        uni.chooseLocation = function (options) {
            console.warn("api: uni.chooseLocation 打开地图选择位置 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("openLocation")) {
        uni.openLocation = function (object) {
            console.warn("api: uni.openLocation 使用应用内置地图查看位置 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("createMapContext")) {
        uni.createMapContext = function (mapId) {
            console.warn("api: uni.createMapContext 创建并返回 map 上下文 mapContext 对象 在当前平台不支持，返回空")
            return {
                $getAppMap: null,
                getCenterLocation: function (options) {
                    options.fail && options.fail()
                },
                moveToLocation: function (options) {
                    options.fail && options.fail()
                },
                translateMarker: function (options) {
                    options.fail && options.fail()
                },
                includePoints: function (options) { },
                getRegion: function (options) {
                    options.fail && options.fail()
                },
                getScale: function (options) {
                    options.fail && options.fail()
                },
            }
        }
    }
}

/**
 * 字符编码
 */
function base64Polyfill () {
    //将 Base64 字符串转成 ArrayBuffer 对象
    if (isApiNotImplemented("base64ToArrayBuffer")) {
        uni.base64ToArrayBuffer = function (base64) {
            return base64Binary.base64ToArrayBuffer(base64)
        }
    }

    //将 ArrayBuffer 对象转成 Base64 字符串
    if (isApiNotImplemented("arrayBufferToBase64")) {
        uni.arrayBufferToBase64 = function (buffer) {
            return base64Binary.arrayBufferToBase64(buffer)
        }
    }
}


/**
 * 媒体相关
 */
function mediaPolyfill () {
    if (isApiNotImplemented("saveImageToPhotosAlbum")) {
        uni.saveImageToPhotosAlbum = function (options) {
            console.warn("api: uni.saveImageToPhotosAlbum 保存图片到系统相册 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("compressImage")) {
        uni.compressImage = function (object) {
            console.warn("api: uni.compressImage 压缩图片接口 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("chooseMessageFile")) {
        //从微信聊天会话中选择文件。
        uni.chooseMessageFile = function (object) {
            console.warn("api: uni.chooseMessageFile 从微信聊天会话中选择文件。 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("getRecorderManager")) {
        //获取全局唯一的录音管理器 recorderManager
        uni.getRecorderManager = function (object) {
            console.warn("api: uni.getRecorderManager 获取全局唯一的录音管理器 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("getBackgroundAudioManager")) {
        //获取全局唯一的背景音频管理器 backgroundAudioManager
        uni.getBackgroundAudioManager = function (object) {
            console.warn("api: uni.getBackgroundAudioManager 获取全局唯一的背景音频管理器 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("chooseMedia")) {
        // 拍摄或从手机相册中选择图片或视频
        uni.chooseMedia = function (object) {
            console.warn("api: uni.chooseMedia 拍摄或从手机相册中选择图片或视频 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("saveVideoToPhotosAlbum")) {
        // 保存视频到系统相册
        uni.saveVideoToPhotosAlbum = function (object) {
            console.warn("api: uni.saveVideoToPhotosAlbum 保存视频到系统相册 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("getVideoInfo")) {
        // 获取视频详细信息
        uni.getVideoInfo = function (object) {
            console.warn("api: uni.getVideoInfo 获取视频详细信息 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("compressVideo")) {
        // 压缩视频接口
        uni.compressVideo = function (object) {
            console.warn("api: uni.compressVideo 压缩视频接口 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }


    if (isApiNotImplemented("openVideoEditor")) {
        // 打开视频编辑器
        uni.openVideoEditor = function (object) {
            console.warn("api: uni.openVideoEditor 打开视频编辑器 在当前平台不支持，回调失败")
            options.fail && options.fail()
        }
    }
}

/**
 * 设备
 */
function devicePolyfill () {
    if (isApiNotImplemented("canIUse")) {
        // 判断应用的 API，回调，参数，组件等是否在当前版本可用。
        // h5时，恒返回true
        uni.canIUse = function (object) {
            console.warn("api: uni.canIUse 判断API在当前平台是否可用 返回true")
            return true
        }
    }

    //微信小程序
    if (isApiNotImplemented("startDeviceMotionListening")) {
        // 开始监听设备方向的变化
        uni.startDeviceMotionListening = function (options) {
            console.warn("api: uni.startDeviceMotionListening 开始监听设备方向的变化 在当前平台不支持")
            options.success && options.success()
        }
    }

    if (isApiNotImplemented("onMemoryWarning")) {
        // 监听内存不足告警事件。
        uni.onMemoryWarning = function (callback) {
            console.warn("监听内存不足告警事件，仅支持微信小程序、支付宝小程序、百度小程序、QQ小程序，当前平台不支持，已注释")
        }
    }

    if (isApiNotImplemented("offNetworkStatusChange")) {
        // 取消监听网络状态变化
        uni.offNetworkStatusChange = function (callback) { }
    }
    if (isApiNotImplemented("offAccelerometerChange")) {
        // 取消监听加速度数据。
        uni.offAccelerometerChange = function (callback) { }
    }
    if (isApiNotImplemented("startAccelerometer")) {
        // 开始监听加速度数据。
        uni.startAccelerometer = function (callback) {
            console.warn("api: uni.startAccelerometer 开始监听加速度数据 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("offCompassChange")) {
        // 取消监听罗盘数据
        uni.offCompassChange = function (callback) {
            console.warn("api: uni.offCompassChange 取消监听罗盘数据 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("startCompass")) {
        // 开始监听罗盘数据
        uni.startCompass = function (callback) {
            console.warn("api: uni.startCompass 开始监听罗盘数据 在当前平台不支持")
        }
    }


    if (isApiNotImplemented("onGyroscopeChange")) {
        // 监听陀螺仪数据变化事件
        uni.onGyroscopeChange = function (callback) {
            console.warn("api: uni.onGyroscopeChange 监听陀螺仪数据变化事件 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("startGyroscope")) {
        // 开始监听陀螺仪数据
        uni.startGyroscope = function (callback) {
            console.warn("api: uni.startGyroscope 监听陀螺仪数据变化事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("stopGyroscope")) {
        // 停止监听陀螺仪数据
        uni.stopGyroscope = function (callback) {
            console.warn("api: uni.stopGyroscope 停止监听陀螺仪数据 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("scanCode")) {
        // 调起客户端扫码界面，扫码成功后返回对应的结果
        uni.scanCode = function (callback) {
            console.warn("api: uni.scanCode 扫描二维码 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("setClipboardData")) {
        // 设置系统剪贴板的内容
        uni.setClipboardData = function (callback) {
            console.warn("api: uni.setClipboardData 设置系统剪贴板的内容 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getClipboardData")) {
        // 获取系统剪贴板内容
        uni.getClipboardData = function (callback) {
            console.warn("api: uni.getClipboardData 获取系统剪贴板内容 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("setScreenBrightness")) {
        // 设置屏幕亮度
        uni.setScreenBrightness = function (callback) {
            console.warn("api: uni.setScreenBrightness 设置屏幕亮度 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getScreenBrightness")) {
        // 获取屏幕亮度
        uni.getScreenBrightness = function (callback) {
            console.warn("api: uni.getScreenBrightness 获取屏幕亮度 在当前平台不支持")
        }
    }

    if (isApiNotImplemented("setKeepScreenOn")) {
        // 设置是否保持常亮状态
        uni.setKeepScreenOn = function (callback) {
            console.warn("api: uni.setKeepScreenOn 设置是否保持常亮状态 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("onUserCaptureScreen")) {
        // 监听用户主动截屏事件
        uni.onUserCaptureScreen = function (callback) {
            console.warn("api: uni.onUserCaptureScreen 监听用户主动截屏事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("addPhoneContact")) {
        // 添加联系人
        uni.addPhoneContact = function (callback) {
            console.warn("api: uni.addPhoneContact 添加联系人 在当前平台不支持")
        }
    }
}

/**
 * 界面相关
 */
function uiPolyfill () {
    if (isApiNotImplemented("hideNavigationBarLoading")) {
        // 在当前页面隐藏导航条加载动画
        uni.hideNavigationBarLoading = function (options) {
            console.warn("api: uni.hideNavigationBarLoading 在当前页面隐藏导航条加载动画 在当前平台不支持，回调成功")
            options.success && options.success()
        }
    }
    if (isApiNotImplemented("hideHomeButton")) {
        // 隐藏返回首页按钮
        uni.hideHomeButton = function (options) {
            console.warn("api: uni.hideHomeButton 隐藏返回首页按钮 在当前平台不支持，回调成功")
            options.success && options.success()
        }
    }

    if (isApiNotImplemented("setTabBarItem")) {
        // 动态设置 tabBar 某一项的内容
        uni.setTabBarItem = function (options) {
            console.warn("api: uni.setTabBarItem 动态设置 tabBar 某一项的内容 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("setTabBarStyle")) {
        // 动态设置 tabBar 的整体样式
        uni.setTabBarStyle = function (options) {
            console.warn("api: uni.setTabBarStyle 动态设置 tabBar 的整体样式 在当前平台不支持，回调成功")
            options.success && options.success()
        }
    }

    if (isApiNotImplemented("hideTabBar")) {
        // 隐藏 tabBar
        uni.hideTabBar = function (options) {
            console.warn("api: uni.hideTabBar 隐藏 tabBar 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }


    if (isApiNotImplemented("showTabBar")) {
        // 显示 tabBar
        uni.showTabBar = function (options) {
            console.warn("api: uni.showTabBar 显示 tabBar 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("setTabBarBadge")) {
        // 为 tabBar 某一项的右上角添加文本
        uni.setTabBarBadge = function (options) {
            console.warn("api: uni.setTabBarBadge 为 tabBar 某一项的右上角添加文本 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("removeTabBarBadge")) {
        // 移除 tabBar 某一项右上角的文本
        uni.removeTabBarBadge = function (options) {
            console.warn("api: uni.removeTabBarBadge 移除 tabBar 某一项右上角的文本 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("showTabBarRedDot")) {
        // 显示 tabBar 某一项的右上角的红点
        uni.showTabBarRedDot = function (options) {
            console.warn("api: uni.showTabBarRedDot 显示 tabBar 某一项的右上角的红点 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("hideTabBarRedDot")) {
        // 隐藏 tabBar 某一项的右上角的红点
        uni.hideTabBarRedDot = function (options) {
            console.warn("api: uni.hideTabBarRedDot 隐藏 tabBar 某一项的右上角的红点 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    ///////////////////////////////
    if (isApiNotImplemented("setBackgroundColor")) {
        // 动态设置窗口的背景色
        uni.setBackgroundColor = function (options) {
            console.warn("api: uni.setBackgroundColor 动态设置窗口的背景色 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("setBackgroundTextStyle")) {
        // 动态设置下拉背景字体、loading 图的样式
        uni.setBackgroundTextStyle = function (options) {
            console.warn("api: uni.setBackgroundTextStyle 动态设置下拉背景字体、loading 图的样式 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("onWindowResize")) {
        // 监听窗口尺寸变化事件
        uni.onWindowResize = function (callback) {
            console.warn("api: uni.onWindowResize 监听窗口尺寸变化事件 在当前平台不支持，执行失败")
            callback && callback()
        }
    }
    if (isApiNotImplemented("offWindowResize")) {
        // 取消监听窗口尺寸变化事件
        uni.offWindowResize = function (callback) {
            console.warn("api: uni.offWindowResize 取消监听窗口尺寸变化事件 在当前平台不支持，执行失败")
            callback && callback()
        }
    }
    if (isApiNotImplemented("loadFontFace")) {
        // 动态加载网络字体
        uni.loadFontFace = function (options) {
            console.warn("api: uni.loadFontFace 动态加载网络字体 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getMenuButtonBoundingClientRect")) {
        // 微信胶囊按钮布局信息
        uni.getMenuButtonBoundingClientRect = function () {
            console.warn("api: uni.getMenuButtonBoundingClientRect 微信胶囊按钮布局信息 在当前平台不支持，执行失败")
        }
    }
}
/**
 * file
 */
function filePolyfill () {
    if (isApiNotImplemented("saveFile")) {
        // 保存文件到本地
        uni.saveFile = function (options) {
            console.warn("api: uni.saveFile 保存文件到本地 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getSavedFileList")) {
        // 获取本地已保存的文件列表
        uni.getSavedFileList = function (options) {
            console.warn("api: uni.getSavedFileList 获取本地已保存的文件列表 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getSavedFileInfo")) {
        // 获取本地文件的文件信息
        uni.getSavedFileInfo = function (options) {
            console.warn("api: uni.getSavedFileInfo 获取本地文件的文件信息 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("removeSavedFile")) {
        // 删除本地存储的文件
        uni.removeSavedFile = function (options) {
            console.warn("api: uni.removeSavedFile 删除本地存储的文件 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getFileInfo")) {
        // 获取文件信息
        uni.getFileInfo = function (options) {
            console.warn("api: uni.getFileInfo 获取文件信息 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("openDocument")) {
        // 新开页面打开文档
        uni.openDocument = function (options) {
            console.warn("api: uni.openDocument 新开页面打开文档 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getFileSystemManager")) {
        // 获取全局唯一的文件管理器
        uni.getFileSystemManager = function () {
            console.warn("api: uni.getFileSystemManager 获取全局唯一的文件管理器 在当前平台不支持，执行失败")
        }
    }
}

/**
 * canvas
 */
function canvasPolyfill () {
    if (isApiNotImplemented("createOffscreenCanvas")) {
        // 创建离屏 canvas 实例
        uni.createOffscreenCanvas = function () {
            console.warn("api: uni.createOffscreenCanvas 创建离屏 canvas 实例 在当前平台不支持，执行失败")
        }
    }

    if (isApiNotImplemented("canvasToTempFilePath")) {
        // 把当前画布指定区域的内容导出生成指定大小的图片
        uni.canvasToTempFilePath = function () {
            console.warn("api: uni.canvasToTempFilePath 把当前画布指定区域的内容导出生成指定大小的图片 在当前平台不支持，执行失败")
        }
    }
}

/**
 * Ad广告
 */
function adPolyfill () {
    if (isApiNotImplemented("createRewardedVideoAd")) {
        // 激励视频广告
        uni.createRewardedVideoAd = function () {
            console.warn("api: uni.createRewardedVideoAd 激励视频广告 在当前平台不支持，执行失败")
            return {
                show () { },
                onLoad () { },
                offLoad () { },
                load () { },
                onError () { },
                offError () { },
                onClose () { },
                offClose () { },
            }
        }
    }
    if (isApiNotImplemented("createInterstitialAd")) {
        // 插屏广告组件
        uni.createInterstitialAd = function () {
            console.warn("api: uni.createInterstitialAd 插屏广告组件 在当前平台不支持，执行失败")
        }
    }
}

/**
 * 第三方
 */
function pluginsPolyfill () {
    if (isApiNotImplemented("getProvider")) {
        // 获取服务供应商
        uni.getProvider = function (options) {
            console.warn("api: uni.getProvider 获取服务供应商 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("showShareMenu")) {
        // 小程序的原生菜单中显示分享按钮
        uni.showShareMenu = function (options) {
            console.warn("api: uni.showShareMenu 小程序的原生菜单中显示分享按钮 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("hideShareMenu")) {
        // 小程序的原生菜单中显示分享按钮
        uni.hideShareMenu = function (options) {
            console.warn("api: uni.hideShareMenu 小程序的原生菜单中隐藏分享按钮 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("requestPayment")) {
        // 支付
        uni.requestPayment = function (options) {
            console.error("api: uni.requestPayment 支付 在当前平台不支持(需自行参考文档封装)，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("createWorker")) {
        // 创建一个 Worker 线程
        uni.createWorker = function () {
            console.error("api: uni.createWorker 创建一个 Worker 线程 在当前平台不支持，执行失败")
        }
    }
}

/**
 * 其他
 */
function otherPolyfill () {
    if (isApiNotImplemented("authorize")) {
        // 提前向用户发起授权请求
        uni.authorize = function (options) {
            console.warn("api: uni.authorize 提前向用户发起授权请求 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("openSetting")) {
        // 调起客户端小程序设置界面
        uni.openSetting = function (options) {
            console.warn("api: uni.openSetting 调起客户端小程序设置界面 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("getSetting")) {
        // 获取用户的当前设置
        uni.getSetting = function (options) {
            console.warn("api: uni.getSetting 获取用户的当前设置 在当前平台不支持，【关键流程函数】回调成功")
            options.success && options.success({
                authSetting: {
                    scope: {
                        userInfo: false
                    }
                }
            })
        }
    }

    if (isApiNotImplemented("chooseAddress")) {
        // 获取用户收货地址
        uni.chooseAddress = function (options) {
            console.warn("api: uni.chooseAddress 获取用户收货地址 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("chooseInvoiceTitle")) {
        // 选择用户的发票抬头
        uni.chooseInvoiceTitle = function (options) {
            console.warn("api: uni.chooseInvoiceTitle 选择用户的发票抬头 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("navigateToMiniProgram")) {
        // 打开另一个小程序
        uni.navigateToMiniProgram = function (options) {
            console.warn("api: uni.navigateToMiniProgram 打开另一个小程序 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("navigateBackMiniProgram")) {
        // 跳转回上一个小程序
        uni.navigateBackMiniProgram = function (options) {
            console.warn("api: uni.navigateBackMiniProgram 跳转回上一个小程序 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getAccountInfoSync")) {
        // 获取当前帐号信息
        uni.getAccountInfoSync = function (options) {
            console.warn("api: uni.getAccountInfoSync 获取当前帐号信息 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }

    if (isApiNotImplemented("requestSubscribeMessage")) {
        // 订阅消息
        uni.requestSubscribeMessage = function (options) {
            console.warn("api: uni.requestSubscribeMessage 订阅消息 在当前平台不支持，执行失败")
            options.fail && options.fail()
        }
    }
    if (isApiNotImplemented("getUpdateManager")) {
        // 管理小程序更新
        uni.getUpdateManager = function (options) {
            console.error("api: uni.getUpdateManager 管理小程序更新 在当前平台不支持，执行失败")
        }
    }
    if (isApiNotImplemented("setEnableDebug")) {
        // 设置是否打开调试开关
        uni.setEnableDebug = function (options) {
            console.error("api: uni.setEnableDebug 设置是否打开调试开关 在当前平台不支持，执行失败")
        }
    }
    if (isApiNotImplemented("getExtConfig")) {
        // 获取第三方平台自定义的数据字段
        uni.getExtConfig = function (options) {
            console.error("api: uni.getExtConfig 获取第三方平台自定义的数据字段 在当前平台不支持，执行失败")
        }
    }
    if (isApiNotImplemented("getExtConfigSync")) {
        // uni.getExtConfig 的同步版本
        uni.getExtConfigSync = function (options) {
            console.error("api: uni.getExtConfigSync uni.getExtConfig 的同步版本 在当前平台不支持，执行失败")
        }
    }
}

/**
 * 认证
 */
function soterAuthPolyfill () {
    if (isApiNotImplemented("startSoterAuthentication")) {
        // 开始 SOTER 生物认证
        uni.startSoterAuthentication = function (options) {
            console.warn("api: uni.startSoterAuthentication 开始 SOTER 生物认证 在当前平台不支持")
            options.success && options.success()
        }
    }
    if (isApiNotImplemented("checkIsSupportSoterAuthentication")) {
        // 获取本机支持的 SOTER 生物认证方式
        uni.checkIsSupportSoterAuthentication = function (options) {
            console.warn("api: uni.checkIsSupportSoterAuthentication 开获取本机支持的 SOTER 生物认证方式 在当前平台不支持")
            options.success && options.success()
        }
    }
    if (isApiNotImplemented("checkIsSoterEnrolledInDevice")) {
        // 获取设备内是否录入如指纹等生物信息的接口
        uni.checkIsSoterEnrolledInDevice = function (options) {
            console.warn("api: uni.checkIsSoterEnrolledInDevice 获取设备内是否录入如指纹等生物信息的接口 在当前平台不支持")
            options.success && options.success()
        }
    }
}

/**
 * nfc
 */
function nfcPolyfill () {
    //微信小程序
    if (isApiNotImplemented("startHCE")) {
        // 初始化 NFC 模块
        uni.startHCE = function (options) {
            console.warn("api: uni.startHCE 初始化 NFC 模块 在当前平台不支持")
            options.success && options.success()
        }
    }
}

/**
 * 电量
 */
function batteryPolyfill () {
    //微信小程序
    if (isApiNotImplemented("getBatteryInfo")) {
        // 获取设备电量
        uni.getBatteryInfo = function (options) {
            console.warn("api: uni.getBatteryInfo 获取设备电量 在当前平台不支持")
            options.success && options.success()
        }
    }
    //微信小程序
    if (isApiNotImplemented("getBatteryInfoSync")) {
        // 同步获取设备电量
        uni.getBatteryInfoSync = function (options) {
            console.warn("api: uni.getBatteryInfoSync 同步获取设备电量 在当前平台不支持")
        }
    }
}

/**
 * wifi
 */
function wifiPolyfill () {
    //微信小程序
    if (isApiNotImplemented("startWifi")) {
        // 初始化 Wi-Fi 模块
        uni.startWifi = function (options) {
            console.warn("api: uni.startWifi 初始化 Wi-Fi 模块 在当前平台不支持")
            options.success && options.success()
        }
    }
    //字节跳动
    if (isApiNotImplemented("getConnectedWifi")) {
        // 获取设备当前所连的 WiFi 信息
        uni.getConnectedWifi = function (options) {
            console.warn("api: uni.getConnectedWifi 初获取设备当前所连的 WiFi 信息 在当前平台不支持")
            options.success && options.success()
        }
    }
}

/**
 * 蓝牙
 */
function bluetoothPolyfill () {
    //蓝牙
    if (isApiNotImplemented("openBluetoothAdapter")) {
        // 初始化蓝牙模块
        uni.openBluetoothAdapter = function (object) {
            console.warn("api: uni.openBluetoothAdapter 初始化蓝牙模块 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("startBluetoothDevicesDiscovery")) {
        // 开始搜寻附近的蓝牙外围设备
        uni.startBluetoothDevicesDiscovery = function (callback) {
            console.warn("api: uni.startBluetoothDevicesDiscovery 开始搜寻附近的蓝牙外围设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("onBluetoothDeviceFound")) {
        // 监听寻找到新设备的事件
        uni.onBluetoothDeviceFound = function (callback) {
            console.warn("api: uni.onBluetoothDeviceFound 监听寻找到新设备的事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("stopBluetoothDevicesDiscovery")) {
        // 停止搜寻附近的蓝牙外围设备
        uni.stopBluetoothDevicesDiscovery = function (callback) {
            console.warn("api: uni.stopBluetoothDevicesDiscovery 停止搜寻附近的蓝牙外围设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("onBluetoothAdapterStateChange")) {
        // 监听蓝牙适配器状态变化事件
        uni.onBluetoothAdapterStateChange = function (callback) {
            console.warn("api: uni.onBluetoothAdapterStateChange 监听蓝牙适配器状态变化事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getConnectedBluetoothDevices")) {
        // 根据 uuid 获取处于已连接状态的设备
        uni.getConnectedBluetoothDevices = function (callback) {
            console.warn("api: uni.getConnectedBluetoothDevices 根据 uuid 获取处于已连接状态的设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getBluetoothDevices")) {
        // 获取在蓝牙模块生效期间所有已发现的蓝牙设备
        uni.getBluetoothDevices = function (callback) {
            console.warn("api: uni.getBluetoothDevices 获取在蓝牙模块生效期间所有已发现的蓝牙设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getBluetoothAdapterState")) {
        // 获取本机蓝牙适配器状态
        uni.getBluetoothAdapterState = function (callback) {
            console.warn("api: uni.getBluetoothAdapterState 获取本机蓝牙适配器状态 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("closeBluetoothAdapter")) {
        // 关闭蓝牙模块
        uni.closeBluetoothAdapter = function (callback) {
            console.warn("api: uni.closeBluetoothAdapter 关闭蓝牙模块 在当前平台不支持")
        }
    }
}

/**
 * 低功耗蓝牙
 */
function blePolyfill () {
    if (isApiNotImplemented("setBLEMTU")) {
        // 设置蓝牙最大传输单元
        uni.setBLEMTU = function (callback) {
            console.warn("api: uni.setBLEMTU 设置蓝牙最大传输单元 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("readBLECharacteristicValue")) {
        // 读取低功耗蓝牙设备的特征值的二进制数据值
        uni.readBLECharacteristicValue = function (callback) {
            console.warn("api: uni.readBLECharacteristicValue 读取低功耗蓝牙设备的特征值的二进制数据值 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("onBLEConnectionStateChange")) {
        // 关闭蓝牙模块
        uni.onBLEConnectionStateChange = function (callback) {
            console.warn("api: uni.onBLEConnectionStateChange 监听低功耗蓝牙连接状态的改变事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("notifyBLECharacteristicValueChange")) {
        // 启用低功耗蓝牙设备特征值变化时的 notify 功能
        uni.notifyBLECharacteristicValueChange = function (callback) {
            console.warn("api: uni.notifyBLECharacteristicValueChange 启用低功耗蓝牙设备特征值变化时的 notify 功能 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getBLEDeviceServices")) {
        // 获取蓝牙设备所有服务
        uni.getBLEDeviceServices = function (callback) {
            console.warn("api: uni.getBLEDeviceServices 获取蓝牙设备所有服务 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getBLEDeviceRSSI")) {
        // 获取蓝牙设备的信号强度
        uni.getBLEDeviceRSSI = function (callback) {
            console.warn("api: uni.getBLEDeviceRSSI 获取蓝牙设备的信号强度 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("createBLEConnection")) {
        // 连接低功耗蓝牙设备
        uni.createBLEConnection = function (callback) {
            console.warn("api: uni.createBLEConnection 连接低功耗蓝牙设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("closeBLEConnection")) {
        // 断开与低功耗蓝牙设备的连接
        uni.closeBLEConnection = function (callback) {
            console.warn("api: uni.closeBLEConnection 断开与低功耗蓝牙设备的连接 在当前平台不支持")
        }
    }
}

/**
 * iBeacon
 */
function iBeaconPolyfill () {
    if (isApiNotImplemented("onBeaconServiceChange")) {
        // 监听 iBeacon 服务状态变化事件
        uni.onBeaconServiceChange = function (callback) {
            console.warn("api: uni.onBeaconServiceChange 监听 iBeacon 服务状态变化事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("onBeaconUpdate")) {
        // 监听 iBeacon 设备更新事件
        uni.onBeaconUpdate = function (callback) {
            console.warn("api: uni.onBeaconUpdate 监听 iBeacon 设备更新事件 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("getBeacons")) {
        // 获取所有已搜索到的 iBeacon 设备
        uni.getBeacons = function (callback) {
            console.warn("api: uni.getBeacons 获取所有已搜索到的 iBeacon 设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("startBeaconDiscovery")) {
        // 开始搜索附近的 iBeacon 设备
        uni.startBeaconDiscovery = function (callback) {
            console.warn("api: uni.startBeaconDiscovery 开始搜索附近的 iBeacon 设备 在当前平台不支持")
        }
    }
    if (isApiNotImplemented("stopBeaconDiscovery")) {
        // 停止搜索附近的 iBeacon 设备
        uni.stopBeaconDiscovery = function (callback) {
            console.warn("api: uni.stopBeaconDiscovery 停止搜索附近的 iBeacon 设备 在当前平台不支持")
        }
    }
}

/**
* uni.navigateTo 和 uni.redirectTo 不能直接跳转tabbar里面的页面，拦截fail，并当它为tabbar页面时，直接调用uni.switchTab()
*/
function routerPolyfill () {
    var routerApiFailEventHandle = function (res, options) {
        if (res.errMsg.indexOf('tabbar page') > -1) {
            console.error('res.errMsg: ' + res.errMsg)
            var apiName = res.errMsg.match(/not\s(\w+)\sa/)[1]
            console.log(apiName)
            var url = options.url
            if (url) {
                var queryString = url.split('?')[1]
                if (queryString) {
                    console.error(apiName + " 的参数将被忽略：" + queryString)
                }
                uni.switchTab({
                    url: url
                })
            }
        }
    }

    var routerApiHandle = function (oriLogFunc) {
        return function (options) {
            try {
                if (options.fail) {
                    options.fail = (function fail (failFun) {
                        return function (res) {
                            routerApiFailEventHandle(res, options)
                            failFun(res)
                        }
                    })(options.fail)
                } else {
                    options.fail = function (res) {
                        routerApiFailEventHandle(res, options)
                    }
                }
                oriLogFunc.call(oriLogFunc, options)
            } catch (e) {
                console.error('uni.navigateTo or uni.redirectTo error', e)
            }
        }
    }

    uni.navigateTo = routerApiHandle(uni.navigateTo)
    uni.redirectTo = routerApiHandle(uni.redirectTo)
}

var isInit = false
/**
 * polyfill 入口
 */
function init () {
    if (isInit) return
    isInit = true

    console.log("Api polyfill start")
    //条件编译
    platformPolyfill()
    //登录
    loginPolyfill()
    //base64
    base64Polyfill()
    //地图
    mapPolyfill()
    //设备
    devicePolyfill()

    //媒体相关
    mediaPolyfill()

    //蓝牙
    bluetoothPolyfill()
    //低功耗蓝牙
    blePolyfill()
    //iBeacon
    iBeaconPolyfill()
    //wifi
    wifiPolyfill()
    //电量信息
    batteryPolyfill()
    //nfc
    nfcPolyfill()
    //auth
    soterAuthPolyfill()

    //ui
    uiPolyfill()
    //file
    filePolyfill()
    //canvas
    canvasPolyfill()
    //ad
    adPolyfill()
    //plugins
    pluginsPolyfill()
    //other
    otherPolyfill()

    //router
    routerPolyfill()
}


module.exports = {
    init,
    guid
}
