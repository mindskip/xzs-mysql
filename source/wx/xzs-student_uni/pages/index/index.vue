<template>
    <view>
        <view>
            <swiper :indicator-dots="false" :autoplay="true" interval="5000" duration="1000">
                <swiper-item>
                    <image src="@/static/assets/carousel/1.png" class="slide-image" />
                </swiper-item>
                <swiper-item>
                    <image src="@/static/assets/carousel/2.png" class="slide-image" />
                </swiper-item>
                <swiper-item>
                    <image src="@/static/assets/carousel/3.png" class="slide-image" />
                </swiper-item>
                <swiper-item>
                    <image src="@/static/assets/carousel/4.png" class="slide-image" />
                </swiper-item>
            </swiper>
        </view>

        <i-panel title="任务中心">
            <i-collapse accordion i-class="index-collapse">
                <i-collapse-item i-class="index-collapse-item" :title="item.title" :name="item.id" data-item="item" v-for="(item, index) in taskList" :key="item.id">
                    <i-cell-group slot="content">
                        <i-cell
                            i-class="index-cell"
                            data-item="item"
                            :title="item.examPaperName"
                            :value="enumItem.format(enumItem.state.exam.examPaperAnswer.statusEnum, item.status)"
                            is-link
                            :url="item.examPaperAnswerId == null ? '/pages/exam/do/index?id=' + item.examPaperId : '/pages/exam/read/index?id=' + item.examPaperAnswerId"
                            v-for="(item, index1) in item.paperItems"
                            :key="item.examPaperId"
                        ></i-cell>
                    </i-cell-group>
                </i-collapse-item>
            </i-collapse>
        </i-panel>

        <i-panel title="固定试卷">
            <i-cell-group>
                <i-cell data-item="item" :title="item.name" is-link :url="'/pages/exam/do/index?id=' + item.id" v-for="(item, index) in fixedPaper" :key="item.id"></i-cell>
            </i-cell-group>
        </i-panel>
        <i-panel title="时段试卷">
            <i-cell-group>
                <i-cell
                    data-item="item"
                    :title="item.name"
                    is-link
                    :url="'/pages/exam/do/index?id=' + item.id"
                    :label="item.startTime + ' 至 ' + item.endTime"
                    v-for="(item, index) in timeLimitPaper"
                    :key="item.id"
                ></i-cell>
            </i-cell-group>
        </i-panel>
        <i-spin size="large" fix v-if="spinShow"></i-spin>
        <i-message id="message" />
    </view>
</template>
<script module="enumItem" lang="wxs" src="../../wxs/enumItem.wxs"></script>
<script>
import iPanel from '@/component/iView/panel/index';
import iCellGroup from '@/component/iView/cell-group/index';
import iCell from '@/component/iView/cell/index';
import iCollapse from '@/component/iView/collapse/index';
import iCollapseItem from '@/component/iView/collapse-item/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
//index.js
//获取应用实例
const app = getApp();
export default {
    components: {
        iPanel,
        iCellGroup,
        iCell,
        iCollapse,
        iCollapseItem,
        iMessage,
        iSpin
    },
    data() {
        return {
            spinShow: false,
            fixedPaper: [],
            pushPaper: [],
            timeLimitPaper: [],
            taskList: [],

            enumItem: {
                format: '',

                state: {
                    exam: {
                        examPaperAnswer: {
                            statusEnum: ''
                        }
                    }
                }
            }
        };
    },
    onLoad: function () {
        this.setData({
            spinShow: true
        });
        this.indexLoad();
    },
    onPullDownRefresh() {
        this.setData({
            spinShow: true
        });

        if (!this.loading) {
            this.indexLoad();
        }
    },
    methods: {
        indexLoad: function () {
            let that = this;
            app.globalData
                .formPost('/api/wx/student/dashboard/index', null)
                .then((res) => {
                    that.setData({
                        spinShow: false
                    });
                    uni.stopPullDownRefresh();

                    if (res.code === 1) {
                        that.setData({
                            fixedPaper: res.response.fixedPaper,
                            timeLimitPaper: res.response.timeLimitPaper,
                            pushPaper: res.response.pushPaper
                        });
                    }
                })
                .catch((e) => {
                    that.setData({
                        spinShow: false
                    });
                    app.globalData.message(e, 'error');
                });
            app.globalData
                .formPost('/api/wx/student/dashboard/task', null)
                .then((res) => {
                    that.setData({
                        spinShow: false
                    });
                    uni.stopPullDownRefresh();

                    if (res.code === 1) {
                        that.setData({
                            taskList: res.response
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
