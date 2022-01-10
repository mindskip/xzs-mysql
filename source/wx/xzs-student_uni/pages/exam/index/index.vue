<template>
    <!--pages/exam/index/index.wxml-->
    <view>
        <i-tabs :current="paperType" @change="tabChange" :fixed="true">
            <i-tab key="1" title="固定试卷" />
            <i-tab key="4" title="时段试卷" />
        </i-tabs>
        <view class="exam-tab-view">
            <i-cell-group>
                <i-cell
                    data-item="item"
                    :title="item.name"
                    is-link
                    :url="'/pages/exam/do/index?id=' + item.id"
                    :value="item.subjectName"
                    v-for="(item, index) in tableData"
                    :key="item.id"
                ></i-cell>
            </i-cell-group>
        </view>
        <i-load-more :tip="loadMoreTip" :loading="loadMoreLoad" i-class="xzs-load-more" />
        <i-spin size="large" fix v-if="spinShow"></i-spin>
        <i-message id="message" />
    </view>
</template>

<script>
import iTabs from '@/component/iView/tabs/index';
import iTab from '@/component/iView/tab/index';
import iCellGroup from '@/component/iView/cell-group/index';
import iCell from '@/component/iView/cell/index';
import iLoadMore from '@/component/iView/load-more/index';
import iButton from '@/component/iView/button/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
// pages/exam/index/index.js
let app = getApp();
export default {
    components: {
        iTabs,
        iTab,
        iCellGroup,
        iCell,
        iLoadMore,
        iButton,
        iMessage,
        iSpin
    },
    data() {
        return {
            paperType: 1,
            spinShow: false,
            loadMoreLoad: false,
            loadMoreTip: {},
            queryParam: {
                paperType: 1,
                pageIndex: 1,
                pageSize: app.globalData.pageSize
            },
            tableData: [],
            total: 1
        };
    },
    onLoad: function (options) {
        this.setData({
            spinShow: true
        });
        this.search(true);
    },
    onPullDownRefresh() {
        this.setData({
            spinShow: true
        });

        if (!this.loading) {
            this.setData({
                ['queryParam.pageIndex']: 1
            });
            this.search(true);
        }
    },
    onReachBottom() {
        if (!this.loading && this.queryParam.pageIndex < this.total) {
            this.setData({
                loadMoreLoad: true,
                loadMoreTip: '正在加载'
            });
            this.setData({
                ['queryParam.pageIndex']: this.queryParam.pageIndex + 1
            });
            this.search(false);
        }
    },
    methods: {
        tabChange({ detail }) {
            this.setData({
                spinShow: true
            });
            let size = app.globalData.pageSize;
            this.setData({
                paperType: detail.key,
                queryParam: {
                    paperType: detail.key,
                    pageIndex: 1,
                    pageSize: app.globalData.pageSize
                }
            });
            this.search(true);
        },

        search: function (override) {
            let that = this;
            app.globalData
                .formPost('/api/wx/student/exampaper/pageList', this.queryParam)
                .then((res) => {
                    that.setData({
                        spinShow: false
                    });
                    uni.stopPullDownRefresh();

                    if (res.code === 1) {
                        const re = res.response;
                        that.setData({
                            ['queryParam.pageIndex']: re.pageNum,
                            tableData: override ? re.list : this.tableData.concat(re.list),
                            total: re.pages
                        });

                        if (re.pageNum >= re.pages) {
                            this.setData({
                                loadMoreLoad: false,
                                loadMoreTip: '暂无数据'
                            });
                        }
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
