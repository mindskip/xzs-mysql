## 2.0.19（2021-12-29）
# uView2.0重磅发布，利剑出鞘，一统江湖

1. 优化微信小程序包体积可在微信中预览，请升级HbuilderX3.3.4，同时在“运行->运行到小程序模拟器”中勾选“运行时是否压缩代码”
2. 优化微信小程序setData性能，处理某些方法如$u.route()无法在模板中使用的问题
3. navbar添加autoBack参数
4. 允许avatar组件的事件冒泡
5. 修复cell组件报错问题
6. 其他修复
## 2.0.18（2021-12-28）
# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复app端编译报错问题
2. 重新处理微信小程序端setData过大的性能问题
3. 修复边框问题
4. 修复最大最小月份不大于0则没有数据出现的问题
5. 修复SwipeAction微信小程序端无法上下滑动问题
6. 修复input的placeholder在小程序端默认显示为true问题
7. 修复divider组件click事件无效问题
8. 修复u-code-input maxlength 属性值为 String 类型时显示异常
9. 修复当 grid只有 1到2时 在小程序端algin设置无效的问题
10. 处理form-item的label为top时，取消错误提示的左边距
11. 其他修复
## 2.0.17（2021-12-26）
## uView正在参与开源中国的“年度最佳项目”评选，之前投过票的现在也可以投票，恳请同学们投一票，[点此帮助uView](https://www.oschina.net/project/top_cn_2021/?id=583)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 解决HBuilderX3.3.3.20211225版本导致的样式问题
2. calendar日历添加monthNum参数
3. navbar添加center slot
## 2.0.16（2021-12-25）
## uView正在参与开源中国的“年度最佳项目”评选，之前投过票的现在也可以投票，恳请同学们投一票，[点此帮助uView](https://www.oschina.net/project/top_cn_2021/?id=583)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 解决微信小程序setData性能问题
2. 修复count-down组件change事件不触发问题
## 2.0.15（2021-12-21）
## uView正在参与开源中国的“年度最佳项目”评选，之前投过票的现在也可以投票，恳请同学们投一票，[点此帮助uView](https://www.oschina.net/project/top_cn_2021/?id=583)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复Cell单元格titleWidth无效
2. 修复cheakbox组件ischecked不更新
3. 修复keyboard是否显示"."按键默认值问题
4. 修复number-keyboard是否显示键盘的"."符号问题
5. 修复Input输入框 readonly无效
6. 修复u-avatar 导致打包app、H5时候报错问题
7. 修复Upload上传deletable无效
8. 修复upload当设置maxSize时无效的问题
9. 修复tabs lineWidth传入带单位的字符串的时候偏移量计算错误问题
10. 修复rate组件在有padding的view内，显示的星星位置和可触摸区域不匹配，无法正常选中星星
## 2.0.13（2021-12-14）
## [点击加群交流反馈：364463526](https://jq.qq.com/?_chanwv=1027&k=mCxS3TGY)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复配置默认单位为rpx可能会导致自定义导航栏高度异常的问题
## 2.0.12（2021-12-14）
## [点击加群交流反馈：364463526](https://jq.qq.com/?_chanwv=1027&k=mCxS3TGY)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复tabs组件在vue环境下划线消失的问题
2. 修复upload组件在安卓小程序无法选择视频的问题
3. 添加uni.$u.config.unit配置，用于配置参数默认单位，详见：[默认单位配置](https://www.uviewui.com/components/setting.html#%E9%BB%98%E8%AE%A4%E5%8D%95%E4%BD%8D%E9%85%8D%E7%BD%AE)
4. 修复textarea组件在没绑定v-model时，字符统计不生效问题
5. 修复nvue下控制是否出现滚动条失效问题
## 2.0.11（2021-12-13）
## [点击加群交流反馈：364463526](https://jq.qq.com/?_chanwv=1027&k=mCxS3TGY)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. text组件align参数无效的问题
2. subsection组件添加keyName参数
3. upload组件无法判断[Object file]类型的问题
4. 处理notify层级过低问题
5. codeInput组件添加disabledDot参数
6. 处理actionSheet组件round参数无效的问题
7. calendar组件添加round参数用于控制圆角值
8. 处理swipeAction组件在vue环境下默认被打开的问题
9. button组件的throttleTime节流参数无效的问题
10. 解决u-notify手动关闭方法close()无效的问题
11. input组件readonly不生效问题
12. tag组件type参数为info不生效问题
## 2.0.10（2021-12-08）
## [点击加群交流反馈：364463526](https://jq.qq.com/?_chanwv=1027&k=mCxS3TGY)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复button sendMessagePath属性不生效
2. 修复DatetimePicker选择器title无效
3. 修复u-toast设置loading=true不生效
4. 修复u-text金额模式传0报错
5. 修复u-toast组件的icon属性配置不生效
6. button的icon在特殊场景下的颜色优化
7. IndexList优化，增加#
## 2.0.9（2021-12-01）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 优化swiper的height支持100%值(仅vue有效)，修复嵌入视频时click事件无法触发的问题
2. 优化tabs组件对list值为空的判断，或者动态变化list时重新计算相关尺寸的问题
3. 优化datetime-picker组件逻辑，让其后续打开的默认值为上一次的选中值，需要通过v-model绑定值才有效
4. 修复upload内嵌在其他组件中，选择图片可能不会换行的问题
## 2.0.8（2021-12-01）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复toast的position参数无效问题
2. 处理input在ios nvue上无法获得焦点的问题
3. avatar-group组件添加extraValue参数，让剩余展示数量可手动控制
4. tabs组件添加keyName参数用于配置从对象中读取的键名
5. 处理text组件名字脱敏默认配置无效的问题
6. 处理picker组件item文本太长换行问题
## 2.0.7（2021-11-30）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 修复radio和checkbox动态改变v-model无效的问题。
2. 优化form规则validator在微信小程序用法
3. 修复backtop组件mode参数在微信小程序无效的问题
4. 处理Album的previewFullImage属性无效的问题
5. 处理u-datetime-picker组件mode='time'在选择改变时间时，控制台报错的问题
## 2.0.6（2021-11-27）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. 处理tag组件在vue下边框无效的问题。
2. 处理popup组件圆角参数可能无效的问题。
3. 处理tabs组件lineColor参数可能无效的问题。
4. propgress组件在值很小时，显示异常的问题。
## 2.0.5（2021-11-25）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. calendar在vue下显示异常问题。 
2. form组件labelPosition和errorType参数无效的问题
3. input组件inputAlign无效的问题
4. 其他一些修复
## 2.0.4（2021-11-23）
## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

0. input组件缺失@confirm事件，以及subfix和prefix无效问题
1. component.scss文件样式在vue下干扰全局布局问题
2. 修复subsection在vue环境下表现异常的问题
3. tag组件的bgColor等参数无效的问题
4. upload组件不换行的问题
5. 其他的一些修复处理
## 2.0.3（2021-11-16）
## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. uView2.0已实现全面兼容nvue
2. uView2.0对1.x进行了架构重构，细节和性能都有极大提升
3. 目前uView2.0为公测阶段，相关细节可能会有变动
4. 我们写了一份与1.x的对比指南，详见[对比1.x](https://www.uviewui.com/components/diff1.x.html)
5. 处理modal的confirm回调事件拼写错误问题
6. 处理input组件@input事件参数错误问题
7. 其他一些修复
## 2.0.2（2021-11-16）
## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. uView2.0已实现全面兼容nvue
2. uView2.0对1.x进行了架构重构，细节和性能都有极大提升
3. 目前uView2.0为公测阶段，相关细节可能会有变动
4. 我们写了一份与1.x的对比指南，详见[对比1.x](https://www.uviewui.com/components/diff1.x.html)
5. 修复input组件formatter参数缺失问题
6. 优化loading-icon组件的scss写法问题，防止不兼容新版本scss
## 2.0.0(2020-11-15)
## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0重磅发布，利剑出鞘，一统江湖

1. uView2.0已实现全面兼容nvue
2. uView2.0对1.x进行了架构重构，细节和性能都有极大提升
3. 目前uView2.0为公测阶段，相关细节可能会有变动
4. 我们写了一份与1.x的对比指南，详见[对比1.x](https://www.uviewui.com/components/diff1.x.html)
5. 修复input组件formatter参数缺失问题


