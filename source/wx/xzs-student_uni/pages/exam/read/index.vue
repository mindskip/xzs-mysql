<template>
    <view class="exam-page">
        <view class="view-wrap-hidden"></view>
        <view>
            <view class="exam-name-title">
                <h1>{{ paper.name }}</h1>
            </view>
            <view class="exam-result">
                <h1 class="">试卷得分: {{ answer.score }}</h1>
                <h1 class="exam-result-detail">试卷耗时: {{ answer.doTime }}秒</h1>
            </view>

            <i-panel :title="titleItem.name" i-class="exam-panel-title" v-for="(titleItem, index) in paper.titleItems" :key="titleItem.name">
                <i-cell-group i-class="exam-cell">
                    <i-cell v-for="(questionItem, index1) in titleItem.questionItems" :key="titleItem.id">
                        <view v-if="questionItem.questionType === 1">
                            <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                            <radio-group class="radio-group">
                                <label class="radio exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                    <radio
                                        color="#2d8cf0"
                                        :value="radioItem.prefix"
                                        :checked="radioItem.prefix == answer.answerItems[questionItem.itemOrder - 1].content"
                                        class="exam-item-left"
                                    />

                                    <rich-text
                                        :nodes="radioItem.prefix + '. ' + radioItem.content"
                                        :class="'exam-item-left ' + (radioItem.prefix == answer.answerItems[questionItem.itemOrder - 1].content ? 'item-content-selected' : '')"
                                    />
                                </label>
                            </radio-group>
                        </view>

                        <view v-else-if="questionItem.questionType === 2">
                            <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" class="exam-item-left" style="line-height: 35px" />
                            <checkbox-group class="exam-item-left" style="margin-left: 10px">
                                <label class="exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                    <checkbox
                                        color="#2d8cf0"
                                        :value="radioItem.prefix"
                                        :checked="filter.indexOf(answer.answerItems[questionItem.itemOrder - 1].content, radioItem.prefix)"
                                        class="exam-item-left"
                                    />

                                    <rich-text
                                        :nodes="radioItem.prefix + '. ' + radioItem.content"
                                        :class="
                                            'exam-item-left ' +
                                            (filter.indexOf(answer.answerItems[questionItem.itemOrder - 1].content, radioItem.prefix) ? 'item-content-selected' : '')
                                        "
                                    />
                                </label>
                            </checkbox-group>
                        </view>

                        <view v-else-if="questionItem.questionType === 3">
                            <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" class="exam-item-left" style="line-height: 35px" />
                            <radio-group class="radio-group exam-item-left" style="margin-left: 10px">
                                <label class="radio exam-radio-item-label" v-for="(radioItem, index2) in questionItem.items" :key="questionItem.prefix">
                                    <radio
                                        color="#2d8cf0"
                                        :value="radioItem.prefix"
                                        :checked="radioItem.prefix == answer.answerItems[questionItem.itemOrder - 1].content"
                                        class="exam-item-left"
                                    />

                                    <rich-text :nodes="radioItem.content" class="exam-item-left" />
                                </label>
                            </radio-group>
                        </view>

                        <view v-else-if="questionItem.questionType === 4">
                            <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                            <view class="exam-input-contain" v-for="(inputItem, idx) in questionItem.items" :key="questionItem.prefix">
                                <view class="exam-input-contain-label">{{ inputItem.prefix }}</view>

                                <input class="exam-input-contain-content" maxlength="-1" :value="answer.contentArray[inputItem.prefix - 1]" />
                            </view>
                        </view>

                        <view v-else>
                            <rich-text :nodes="questionItem.itemOrder + '. ' + questionItem.title" />
                            <view class="exam-textarea-contain">
                                <textarea placeholder="" maxlength="-1">{{ answer.answerItems[questionItem.itemOrder - 1].content }}</textarea>
                            </view>
                        </view>

                        <view class="exam-clear">
                            <view class="exam-extend-item" style="padding-left: 0px">
                                结果:
                                <text class="question-answer-right question-answer-result" v-if="answer.answerItems[questionItem.itemOrder - 1].doRight == true">正确</text>
                                <text class="question-answer-error question-answer-result" v-else-if="answer.answerItems[questionItem.itemOrder - 1].doRight == false">错误</text>
                                <text class="question-answer-judge question-answer-result" v-else-if="answer.answerItems[questionItem.itemOrder - 1].doRight === null">待批改</text>
                            </view>
                            <view class="exam-extend-item">得分: {{ answer.answerItems[questionItem.itemOrder - 1].score }}</view>
                            <view class="exam-extend-item">分数: {{ questionItem.score }}</view>
                            <view class="exam-extend-item" style="padding-left: 0px">
                                难度:
                                <i-rate :value="questionItem.difficult" i-class="exam-item-rate" />
                            </view>
                            <view class="exam-extend-item">
                                <rich-text :nodes="'解析: ' + questionItem.analyze" />
                            </view>
                            <view class="exam-extend-item">
                                <rich-text
                                    :nodes="'正确答案: ' + questionItem.correct"
                                    v-if="questionItem.questionType == 1 || questionItem.questionType == 2 || questionItem.questionType == 5"
                                />
                                <rich-text :nodes="'正确答案: ' + filter.trueFalseFormatter(questionItem)" v-else-if="questionItem.questionType == 3" />
                                <rich-text :nodes="'正确答案: ' + questionItem.correctArray" v-else-if="questionItem.questionType == 4" />
                            </view>
                        </view>
                    </i-cell>
                </i-cell-group>
            </i-panel>

            <i-spin size="large" fix v-if="spinShow"></i-spin>
            <i-message id="message" />
        </view>
    </view>
</template>
<script module="filter" lang="wxs" src="../../../wxs/exam-fun.wxs"></script>
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
import iRate from '@/component/iView/rate/index';
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
        iSpin,
        iRate
    },
    data() {
        return {
            spinShow: false,
            paperId: null,

            paper: {
                name: '',
                titleItems: []
            },

            answer: {
                score: '',
                doTime: '',

                answerItems: [
                    {
                        content: ''
                    }
                ],

                contentArray: {}
            },

            timer: null,
            doTime: 0,
            remainTime: 0,
            remainTimeStr: '',
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
                items: [],
                prefix: '',
                score: '',
                difficult: '',
                analyze: '',
                correct: '',
                correctArray: ''
            },

            radioItem: {
                prefix: '',
                content: ''
            },

            filter: {
                indexOf: ''
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
            .formPost('/api/wx/student/exampaper/answer/read/' + paperId, null)
            .then((res) => {
                that.setData({
                    spinShow: false
                });

                if (res.code === 1) {
                    that.setData({
                        paper: res.response.paper,
                        answer: res.response.answer,
                        paperId: paperId
                    });
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
        }
    }
};
</script>
<style>
@import './index.css';
</style>
