<template>
    <view class="exam-page">
        <view class="view-wrap">
            <view class="exam-count-down">{{ remainTimeStr }}</view>
        </view>
        <view class="view-wrap-hidden"></view>

        <view>
            <view class="exam-name-title">
                <h1>{{ form.name }}</h1>
            </view>
            <form @submit="formSubmit">
                <i-panel :title="titleItem.name" i-class="exam-panel-title" v-for="(titleItem, index) in form.titleItems" :key="titleItem.name">
                    <i-cell-group i-class="exam-cell">
                        <i-cell v-for="(questionItem, index1) in titleItem.questionItems" :key="titleItem.id">
                            <view v-if="questionItem.questionType === 1">
                                <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                                <radio-group class="radio-group" :name="questionItem.itemOrder + '_' + questionItem.id + '_' + questionItem.questionType">
                                    <label class="radio exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                        <radio color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />

                                        <rich-text :nodes="radioItem.prefix + '. ' + radioItem.content" class="exam-item-left" />
                                    </label>
                                </radio-group>
                            </view>

                            <view v-else-if="questionItem.questionType === 2">
                                <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" class="exam-item-left" style="line-height: 35px" />
                                <checkbox-group
                                    class="exam-item-left"
                                    style="margin-left: 10px"
                                    :name="questionItem.itemOrder + '_' + questionItem.id + '_' + questionItem.questionType"
                                >
                                    <label class="exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                        <checkbox color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />

                                        <rich-text :nodes="radioItem.prefix + '. ' + radioItem.content" class="exam-item-left" />
                                    </label>
                                </checkbox-group>
                            </view>

                            <view v-else-if="questionItem.questionType === 3">
                                <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" class="exam-item-left" style="line-height: 35px" />
                                <radio-group
                                    class="radio-group exam-item-left"
                                    style="margin-left: 10px"
                                    :name="questionItem.itemOrder + '_' + questionItem.id + '_' + questionItem.questionType"
                                >
                                    <label class="radio exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                        <radio color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />

                                        <rich-text :nodes="radioItem.content" class="exam-item-left" />
                                    </label>
                                </radio-group>
                            </view>

                            <view v-else-if="questionItem.questionType === 4">
                                <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                                <view class="exam-input-contain" v-for="(inputItem, idx) in questionItem.items" :key="questionItem.prefix">
                                    <view class="exam-input-contain-label">{{ inputItem.prefix }}</view>

                                    <input
                                        class="exam-input-contain-content"
                                        maxlength="-1"
                                        :name="questionItem.itemOrder + '_' + questionItem.id + '_' + questionItem.questionType + '_' + idx"
                                    />
                                </view>
                            </view>

                            <view v-else>
                                <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                                <view class="exam-textarea-contain">
                                    <textarea placeholder="答案" maxlength="-1" :name="questionItem.itemOrder + '_' + questionItem.id + '_' + questionItem.questionType"></textarea>
                                </view>
                            </view>
                        </i-cell>
                    </i-cell-group>
                </i-panel>

                <view>
                    <button class="i-btn i-btn-primary i-btn-square" form-type="submit">提交</button>
                </view>

                <i-action-sheet :visible="timeOutShow" :mask-closable="false">
                    <view slot="header" style="padding: 16px">
                        <view class="exam-timeout-title">考试试卷结束，请提交试卷！</view>
                        <button class="i-btn i-btn-primary i-btn-square" form-type="submit">提交</button>
                    </view>
                </i-action-sheet>
            </form>

            <i-modal title="考试结果" :visible="modalShow" @ok="returnRecord" @cancel="returnRecord">
                <view>得分：{{ result }}</view>
            </i-modal>

            <i-spin size="large" fix v-if="spinShow"></i-spin>
            <i-message id="message" />
        </view>
    </view>
</template>

<script>
import iPanel from '@/component/iView/panel/index';
import iCellGroup from '@/component/iView/cell-group/index';
import iCell from '@/component/iView/cell/index';
import iRadioGroup from '@/component/iView/radio-group/index';
import iRadio from '@/component/iView/radio/index';
import iRow from '@/component/iView/row/index';
import iCol from '@/component/iView/col/index';
import iInput from '@/component/iView/input/index';
import iActionSheet from '@/component/iView/action-sheet/index';
import iModal from '@/component/iView/modal/index';
import iMessage from '@/component/iView/message/index';
import iSpin from '@/component/iView/spin/index';
import { formatSeconds } from '../../../utils/util.js';
let app = getApp();
export default {
    components: {
        iPanel,
        iCellGroup,
        iCell,
        iRadioGroup,
        iRadio,
        iRow,
        iCol,
        iInput,
        iActionSheet,
        iModal,
        iMessage,
        iSpin
    },
    data() {
        return {
            spinShow: false,
            paperId: null,

            form: {
                name: '',
                titleItems: []
            },

            timer: null,
            doTime: 0,
            remainTime: 0,
            remainTimeStr: {},
            modalShow: false,
            result: 0,
            timeOutShow: false,

            titleItem: {
                name: '',
                questionItems: [],
                id: ''
            },

            questionItem: {
                questionType: 0,
                itemOrder: '',
                title: '',
                id: '',
                items: [],
                prefix: ''
            },

            radioItem: {
                prefix: '',
                checked: '',
                content: ''
            },

            inputItem: {
                prefix: ''
            }
        };
    },
    onLoad: function (options) {
        let paperId = options.id;
        let that = this;
        that.setData({
            spinShow: true
        });
        app.globalData
            .formPost('/api/wx/student/exampaper/select/' + paperId, null)
            .then((res) => {
                that.setData({
                    spinShow: false
                });

                if (res.code === 1) {
                    that.setData({
                        form: res.response,
                        paperId: paperId,
                        remainTime: res.response.suggestTime * 60
                    });
                    that.timeReduce();
                }
            })
            .catch((e) => {
                that.setData({
                    spinShow: false
                });
                app.globalData.message(e, 'error');
            });
    },
    onUnload() {
        clearInterval(this.timer);
    },
    methods: {
        timeReduce() {
            let _this = this;

            let timer = setInterval(function () {
                let remainTime = _this.remainTime;

                if (remainTime <= 0) {
                    _this.timeOut();
                } else {
                    _this.setData({
                        remainTime: remainTime - 1,
                        remainTimeStr: formatSeconds(remainTime),
                        doTime: _this.doTime + 1
                    });
                }
            }, 1000);

            _this.setData({
                timer: timer
            });
        },

        returnRecord() {
            uni.reLaunch({
                url: '/pages/record/index'
            });
        },

        timeOut() {
            clearInterval(this.timer);
            this.setData({
                timeOutShow: true
            });
        },

        formSubmit: function (e) {
            let that = this;

            if (this.timer) {
                clearInterval(this.timer);
            }

            uni.showLoading({
                title: '提交中',
                mask: true
            });
            e.detail.value.id = this.paperId;
            e.detail.value.doTime = this.doTime;
            app.globalData
                .formPost('/api/wx/student/exampaper/answer/answerSubmit', e.detail.value)
                .then((res) => {
                    if (res.code === 1) {
                        that.setData({
                            modalShow: true,
                            result: res.response
                        });
                    } else {
                        app.globalData.message(res.response, 'error');
                    }

                    uni.hideLoading();
                })
                .catch((e) => {
                    uni.hideLoading();
                    app.globalData.message(e, 'error');
                });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
