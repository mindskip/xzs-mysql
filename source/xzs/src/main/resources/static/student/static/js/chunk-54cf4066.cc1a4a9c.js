(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54cf4066"],{2927:function(t,e,n){"use strict";n.r(e);n("b0c0");var s=function(){var t=this,e=t._self._c;return e("div",[e("el-row",{staticClass:"do-exam-title",staticStyle:{"background-color":"#F5F5DC"}},[e("el-col",{attrs:{span:24}},t._l(t.answer.answerItems,(function(n){return e("span",{key:n.itemOrder},[e("el-tag",{staticClass:"do-exam-title-tag",attrs:{type:t.questionDoRightTag(n.doRight)},on:{click:function(e){return t.goAnchor("#question-"+n.itemOrder)}}},[t._v(t._s(n.itemOrder))])],1)})),0)],1),e("el-row",{staticClass:"do-exam-title-hidden"},[e("el-col",{attrs:{span:24}},t._l(t.answer.answerItems,(function(n){return e("span",{key:n.itemOrder},[e("el-tag",{staticClass:"do-exam-title-tag"},[t._v(t._s(n.itemOrder))])],1)})),0)],1),e("el-container",{staticClass:"app-item-contain"},[e("el-header",{staticClass:"align-center"},[e("h1",[t._v(t._s(t.form.name))]),e("div",[e("span",{staticClass:"question-title-padding"},[t._v("试卷得分："+t._s(t.answer.score))]),e("span",{staticClass:"question-title-padding"},[t._v("试卷耗时："+t._s(t.formatSeconds(t.answer.doTime)))])])]),e("el-main",[e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:t.form,"label-width":"100px"}},t._l(t.form.titleItems,(function(n,s){return e("el-row",{key:s},[e("h3",[t._v(t._s(n.name))]),0!==n.questionItems.length?e("el-card",{staticClass:"exampaper-item-box"},t._l(n.questionItems,(function(n){return e("el-form-item",{key:n.itemOrder,staticClass:"exam-question-item",attrs:{label:n.itemOrder+".","label-width":"50px",id:"question-"+n.itemOrder}},[e("QuestionAnswerShow",{attrs:{qType:n.questionType,question:n,answer:t.answer.answerItems[n.itemOrder-1]}})],1)})),1):t._e()],1)})),1)],1)],1)],1)},i=[],a=n("5530"),o=n("2f62"),r=n("ed08"),c=n("ff3e"),l=n("ed24"),u={components:{QuestionAnswerShow:c["a"]},data:function(){return{form:{},formLoading:!1,answer:{id:null,score:0,doTime:0,answerItems:[],doRight:!1}}},created:function(){var t=this.$route.query.id,e=this;t&&0!==parseInt(t)&&(e.formLoading=!0,l["a"].read(t).then((function(t){e.form=t.response.paper,e.answer=t.response.answer,e.formLoading=!1})))},methods:{formatSeconds:function(t){return Object(r["a"])(t)},questionDoRightTag:function(t){return this.enumFormat(this.doRightTag,t)},goAnchor:function(t){this.$el.querySelector(t).scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])("enumItem",["enumFormat"])),Object(o["e"])("enumItem",{doRightTag:function(t){return t.exam.question.answer.doRightTag}}))},d=u,m=(n("cda2"),n("2877")),p=Object(m["a"])(d,s,i,!1,null,"15c1a324",null);e["default"]=p.exports},"6ea5":function(t,e,n){},cda2:function(t,e,n){"use strict";n("6ea5")},ff3e:function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.qLoading,expression:"qLoading"}],staticStyle:{"line-height":"1.8"}},[1==t.qType||2==t.qType||3==t.qType||4==t.qType||5==t.qType?e("div",[1==t.qType?e("div",[e("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),e("div",{staticClass:"q-content"},[e("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(n){return e("el-radio",{key:n.prefix,attrs:{label:n.prefix}},[e("span",{staticClass:"question-prefix"},[t._v(t._s(n.prefix)+".")]),e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(n.content)}})])})),1)],1)]):2==t.qType?e("div",[e("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),e("div",{staticClass:"q-content"},[e("el-checkbox-group",{model:{value:t.answer.contentArray,callback:function(e){t.$set(t.answer,"contentArray",e)},expression:"answer.contentArray"}},t._l(t.question.items,(function(n){return e("el-checkbox",{key:n.prefix,attrs:{label:n.prefix}},[e("span",{staticClass:"question-prefix"},[t._v(t._s(n.prefix)+".")]),e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(n.content)}})])})),1)],1)]):3==t.qType?e("div",[e("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:t._s(t.question.title)}}),e("span",{staticStyle:{"padding-right":"10px"}},[t._v("(")]),e("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(n){return e("el-radio",{key:n.prefix,attrs:{label:n.prefix}},[e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(n.content)}})])})),1),e("span",{staticStyle:{"padding-left":"10px"}},[t._v(")")])],1):4==t.qType?e("div",[e("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),null!==t.answer.contentArray?e("div",t._l(t.question.items,(function(n){return e("el-form-item",{key:n.prefix,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:n.prefix,"label-width":"50px"}},[e("el-input",{model:{value:t.answer.contentArray[n.prefix-1],callback:function(e){t.$set(t.answer.contentArray,n.prefix-1,e)},expression:"answer.contentArray[item.prefix-1]"}})],1)})),1):t._e()]):5==t.qType?e("div",[e("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),e("div",[e("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}})],1)]):t._e(),e("div",{staticClass:"question-answer-show-item",staticStyle:{"margin-top":"15px"}},[e("span",{staticClass:"question-show-item"},[t._v("结果：")]),e("el-tag",{attrs:{type:t.doRightTagFormatter(t.answer.doRight)}},[t._v(" "+t._s(t.doRightTextFormatter(t.answer.doRight))+" ")])],1),e("div",{staticClass:"question-answer-show-item"},[e("span",{staticClass:"question-show-item"},[t._v("分数：")]),e("span",[t._v(t._s(t.question.score))])]),e("div",{staticClass:"question-answer-show-item"},[e("span",{staticClass:"question-show-item"},[t._v("难度：")]),e("el-rate",{staticClass:"question-show-item",attrs:{disabled:""},model:{value:t.question.difficult,callback:function(e){t.$set(t.question,"difficult",e)},expression:"question.difficult"}})],1),e("br"),e("div",{staticClass:"question-answer-show-item",staticStyle:{"line-height":"1.8"}},[e("span",{staticClass:"question-show-item"},[t._v("解析：")]),e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.analyze)}})]),e("div",{staticClass:"question-answer-show-item"},[e("span",{staticClass:"question-show-item"},[t._v("正确答案：")]),1==t.qType||2==t.qType||5==t.qType?e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.correct)}}):t._e(),3==t.qType?e("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.trueFalseFormatter(t.question))}}):t._e(),4==t.qType?e("span",[t._v(t._s(t.question.correctArray))]):t._e()])]):e("div")])},i=[],a=n("5530"),o=(n("a9e3"),n("4de4"),n("d3b7"),n("2f62")),r={name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},answer:{type:Object,default:function(){return{id:null,content:"",contentArray:[],doRight:!1}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{trueFalseFormatter:function(t){return t.items.filter((function(e){return e.prefix===t.correct}))[0].content},doRightTagFormatter:function(t){return this.enumFormat(this.doRightTag,t)},doRightTextFormatter:function(t){return this.enumFormat(this.doRightEnum,t)}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])("enumItem",["enumFormat"])),Object(o["e"])("enumItem",{doRightEnum:function(t){return t.exam.question.answer.doRightEnum},doRightTag:function(t){return t.exam.question.answer.doRightTag}}))},c=r,l=n("2877"),u=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=u.exports}}]);