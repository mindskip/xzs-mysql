import{_ as e,o as i,c as n,e as u}from"./app.123c31d4.js";const d={},s=u(`<h1 id="_4-1-学生端" tabindex="-1"><a class="header-anchor" href="#_4-1-学生端" aria-hidden="true">#</a> 4.1 学生端</h1><h3 id="_4-1-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-1-1-登录" aria-hidden="true">#</a> 4.1.1 登录</h3><ul><li>接口地址：/api/user/login</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;student&quot;,  //用户名
    &quot;password&quot;: &quot;&quot;,  //密码
    &quot;remember&quot;: false  //下次自动登录
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
        &quot;userName&quot;: &quot;student&quot;,  //用户名
        &quot;imagePath&quot;: &quot;&quot;,  //头像
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-2-注册" tabindex="-1"><a class="header-anchor" href="#_4-1-2-注册" aria-hidden="true">#</a> 4.1.2 注册</h3><ul><li>接口地址：/api/student/user/register</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;student5&quot;, //用户名
    &quot;password&quot;: &quot;123456&quot;,  //密码
    &quot;userLevel&quot;: 1  //年级
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-3-登出" tabindex="-1"><a class="header-anchor" href="#_4-1-3-登出" aria-hidden="true">#</a> 4.1.3 登出</h3><ul><li>接口地址：/api/user/logout</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-4-首页" tabindex="-1"><a class="header-anchor" href="#_4-1-4-首页" aria-hidden="true">#</a> 4.1.4 首页</h3><ul><li>接口地址：/api/student/dashboard/index</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;fixedPaper&quot;: [  //固定试卷
        {
            &quot;id&quot;: 2399,  //试卷Id
            &quot;name&quot;: &quot;test33333&quot;,  //试卷名称
            &quot;limitStartTime&quot;: null,  //考试开始时间
            &quot;limitEndTime&quot;: null     //考试结束时间
        }
    ],
    &quot;timeLimitPaper&quot;: []    //时段试卷
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-5-任务中心" tabindex="-1"><a class="header-anchor" href="#_4-1-5-任务中心" aria-hidden="true">#</a> 4.1.5 任务中心</h3><ul><li>接口地址：/api/student/dashboard/task</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
        {
            &quot;id&quot;: 50,  //任务id
            &quot;title&quot;: &quot;2021-04-25作业&quot;,  //任务标题
            &quot;paperItems&quot;: [
                {
                    &quot;examPaperId&quot;: 181,   //任务试卷id
                    &quot;examPaperName&quot;: &quot;第一次出卷&quot;,  //任务试卷名称
                    &quot;examPaperAnswerId&quot;: 579,  //答卷id
                    &quot;status&quot;: 2  //答卷状态
                }
            ]
        }
    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-6-学科列表" tabindex="-1"><a class="header-anchor" href="#_4-1-6-学科列表" aria-hidden="true">#</a> 4.1.6 学科列表</h3><ul><li>接口地址：/api/student/education/subject/list</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: &quot;18&quot;,  //学科id
            &quot;name&quot;: &quot;英语&quot;  //学科名称
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-7-试卷分页" tabindex="-1"><a class="header-anchor" href="#_4-1-7-试卷分页" aria-hidden="true">#</a> 4.1.7 试卷分页</h3><ul><li>接口地址：/api/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;paperType&quot;: 1, //试卷类型
    &quot;subjectId&quot;: 158, //学科id
    &quot;pageIndex&quot;: 1, //页数
    &quot;pageSize&quot;: 10  //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 1,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 2520,  //试卷id
                &quot;name&quot;: &quot;生理卫生&quot;,  //试卷名称
                &quot;questionCount&quot;: 1,  //题目数
                &quot;score&quot;: 20,  //试卷分数
                &quot;createTime&quot;: &quot;2021-05-31 13:34:49&quot;, //创建时间
                &quot;createUser&quot;: 2,   //创建人
                &quot;subjectId&quot;: 158,  //学科
                &quot;subjectName&quot;: &quot;英语&quot;,  //学科
                &quot;paperType&quot;: 1,   //试卷类型
                &quot;frameTextContentId&quot;: 9016  //试卷内容
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-8-试卷查询" tabindex="-1"><a class="header-anchor" href="#_4-1-8-试卷查询" aria-hidden="true">#</a> 4.1.8 试卷查询</h3><ul><li>接口地址：/api/student/exam/paper/select/9</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 50,  //试卷id
        &quot;level&quot;: 1,  //年级
        &quot;subjectId&quot;: 1,  //学科
        &quot;paperType&quot;: 1,  //试卷类型
        &quot;name&quot;: &quot;测试一&quot;,  //试卷名称
        &quot;suggestTime&quot;: 22,  //建议时长
        &quot;limitDateTime&quot;: null,  //考试时间限制
        &quot;titleItems&quot;: [  
            {
                &quot;name&quot;: &quot;一、选择题&quot;,  //试卷标题
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 50,      //题目id
                        &quot;questionType&quot;: 5,  //题型
                        &quot;subjectId&quot;: 1,  //学科
                        &quot;title&quot;: &quot;默写咏鹅&quot;,  //标题
                        &quot;gradeLevel&quot;: 1,  //年级
                        &quot;items&quot;: [],  //选项
                        &quot;analyze&quot;: &quot;咏鹅可以带拼音&quot;,  //解析
                        &quot;correctArray&quot;: null,  //标答
                        &quot;correct&quot;: &quot;鹅鹅鹅， 曲项向天歌。 白毛浮绿水， 红掌拨清波。&quot;,  //标答
                        &quot;score&quot;: &quot;10&quot;, //分数
                        &quot;difficult&quot;: 3,  //难度
                        &quot;itemOrder&quot;: 1  //顺序
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;10&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-9-试卷提交" tabindex="-1"><a class="header-anchor" href="#_4-1-9-试卷提交" aria-hidden="true">#</a> 4.1.9 试卷提交</h3><ul><li>接口地址：/api/student/exampaper/answer/answerSubmit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;questionId&quot;: null, 
    &quot;doTime&quot;: 14,    //耗时
    &quot;answerItems&quot;: [
        {
            &quot;questionId&quot;: 4,  //题目id
            &quot;content&quot;: null,  //答题内容
            &quot;contentArray&quot;: [   //填空题内容
                &quot;测试&quot;,
                &quot;1&quot;
            ],
            &quot;completed&quot;: true, //是否完成
            &quot;itemOrder&quot;: 1   //题目序号
        } 
    ],
    &quot;id&quot;: 4   //试卷id
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: &quot;2&quot;   //试卷得分
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-10-答卷查询" tabindex="-1"><a class="header-anchor" href="#_4-1-10-答卷查询" aria-hidden="true">#</a> 4.1.10 答卷查询</h3><ul><li>接口地址：/api/student/exampaper/answer/read/4</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;paper&quot;: {  //试卷信息
            &quot;id&quot;: 50,  //试卷id
            &quot;level&quot;: 1, //年级
            &quot;subjectId&quot;: 1,  //学科
            &quot;paperType&quot;: 4,  //试卷类型
            &quot;name&quot;: &quot;限时考试二&quot;,  //试卷名称
            &quot;suggestTime&quot;: 20,  //考试时长
            &quot;limitDateTime&quot;: [  //考试时间限制
                &quot;2021-06-22 00:00:00&quot;,
                &quot;2021-08-06 00:00:00&quot;
            ],
            &quot;titleItems&quot;: [
                {
                    &quot;name&quot;: &quot;一、完成题目&quot;,  //标题
                    &quot;questionItems&quot;: [   //题目列表
                        {
                            &quot;id&quot;: 50,  //题目id
                            &quot;questionType&quot;: 4,   //题目类型
                            &quot;subjectId&quot;: 1,  //学科
                            &quot;title&quot;: &quot;曲项向天歌红掌拨清波&quot;,  //题目标题
                            &quot;gradeLevel&quot;: 1,  //年级
                            &quot;items&quot;: [   //题目选项
                                {
                                    &quot;prefix&quot;: &quot;1&quot;,   //选项标识
                                    &quot;content&quot;: &quot;鹅鹅鹅&quot;,   //选项内容
                                    &quot;score&quot;: &quot;2&quot;  //选项分数
                                },
                                {
                                    &quot;prefix&quot;: &quot;2&quot;,
                                    &quot;content&quot;: &quot;白毛浮绿水&quot;,
                                    &quot;score&quot;: &quot;2&quot;
                                }
                            ],
                            &quot;analyze&quot;: &quot;咏鹅&quot;,  //解析
                            &quot;correctArray&quot;: [  //标答
                                &quot;鹅鹅鹅&quot;,
                                &quot;白毛浮绿水&quot;
                            ],
                            &quot;correct&quot;: &quot;&quot;,  //标答
                            &quot;score&quot;: &quot;4&quot;,  //题目分数
                            &quot;difficult&quot;: 4, //题目难度
                            &quot;itemOrder&quot;: 1 //题目顺序
                        }
                    ]
                }
            ],
            &quot;score&quot;: &quot;18&quot;   //试卷分数
        },
        &quot;answer&quot;: {  //答卷信息
            &quot;id&quot;: 50,  //答卷id
            &quot;doTime&quot;: 14,  //耗时
            &quot;score&quot;: &quot;2&quot;,  //得分
            &quot;answerItems&quot;: [   //答题信息
                {
                    &quot;id&quot;: 50,  //答题id
                    &quot;questionId&quot;: 4,  //题目id
                    &quot;doRight&quot;: null,  //是否正确
                    &quot;content&quot;: null, //答题内容
                    &quot;itemOrder&quot;: 1, //题序
                    &quot;contentArray&quot;: [  //答题内容
                        &quot;测试&quot;,
                        &quot;1&quot;
                    ],
                    &quot;score&quot;: &quot;0&quot;, //得分
                    &quot;questionScore&quot;: &quot;4&quot;  //题目分数
                }
            ]
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-11-试卷批改" tabindex="-1"><a class="header-anchor" href="#_4-1-11-试卷批改" aria-hidden="true">#</a> 4.1.11 试卷批改</h3><ul><li>接口地址：/api/student/exampaper/answer/edit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 50,  //答卷id
    &quot;doTime&quot;: 14,  //耗时
    &quot;score&quot;: &quot;2&quot;,  //得分数
    &quot;answerItems&quot;: [
        {
            &quot;id&quot;: 50, //答题id
            &quot;questionId&quot;: 4, //题目id
            &quot;doRight&quot;: null,  //是否正确
            &quot;content&quot;: null,  //答题内容
            &quot;itemOrder&quot;: 1,  //题目顺序
            &quot;contentArray&quot;: [  //答题内容
                &quot;测试&quot;,
                &quot;1&quot;
            ],
            &quot;score&quot;: &quot;4&quot;,  //得分
            &quot;questionScore&quot;: &quot;4&quot;  //题目分数
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: &quot;16&quot;  //试卷得分
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-12-考试记录分页" tabindex="-1"><a class="header-anchor" href="#_4-1-12-考试记录分页" aria-hidden="true">#</a> 4.1.12 考试记录分页</h3><ul><li>接口地址：/api/student/exampaper/answer/pageList</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //页码
    &quot;pageSize&quot;: 10  //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 6204,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 6534,  //试卷id
                &quot;createTime&quot;: &quot;2021-06-01 17:56:38&quot;,  //创建时间
                &quot;userScore&quot;: &quot;0&quot;,  //考试分数
                &quot;subjectName&quot;: &quot;数学&quot;,  //考试学科
                &quot;subjectId&quot;: 129, //学科id
                &quot;questionCount&quot;: 1,  //题目数量
                &quot;questionCorrect&quot;: 0,  //题目正确数
                &quot;paperScore&quot;: &quot;3&quot;,  //试卷总分
                &quot;doTime&quot;: &quot;4 秒&quot;,  //耗时
                &quot;paperType&quot;: 7,  //试卷类型
                &quot;systemScore&quot;: &quot;0&quot;,  //系统批改得分
                &quot;status&quot;: 2,   //试卷状态
                &quot;paperName&quot;: &quot;智能训练试卷 - 1845&quot;,  //试卷名称
                &quot;userName&quot;: null  //用户名
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-13-错题本分页" tabindex="-1"><a class="header-anchor" href="#_4-1-13-错题本分页" aria-hidden="true">#</a> 4.1.13 错题本分页</h3><ul><li>接口地址：/api/student/question/answer/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //页码
    &quot;pageSize&quot;: 10  //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 17002,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 24928,   //题目id
                &quot;questionType&quot;: 1,  //题型
                &quot;createTime&quot;: &quot;2021-06-02 16:07:11&quot;,  //创建时间
                &quot;subjectName&quot;: &quot;语文&quot;,  //学科
                &quot;shortTitle&quot;: &quot;666&quot;  //题干
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-14-答题详情" tabindex="-1"><a class="header-anchor" href="#_4-1-14-答题详情" aria-hidden="true">#</a> 4.1.14 答题详情</h3><ul><li>接口地址：/api/student/question/answer/select/25067</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //页码
    &quot;pageSize&quot;: 10  //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;questionVM&quot;: {
            &quot;id&quot;: 507,    //题目id
            &quot;questionType&quot;: 1,   //题目类型
            &quot;subjectId&quot;: 46,  //学科id
            &quot;title&quot;: &quot;111&quot;,   //题干
            &quot;gradeLevel&quot;: 12,    //年级
            &quot;items&quot;: [        //选项
                {
                    &quot;prefix&quot;: &quot;A&quot;,  //选项
                    &quot;content&quot;: &quot;A&quot;,  //选项内容
                    &quot;score&quot;: null    //选项分数
                }
            ],
            &quot;analyze&quot;: &quot;D&quot;,     //解析
            &quot;correctArray&quot;: null,  //标答
            &quot;correct&quot;: &quot;D&quot;,   //标答
            &quot;score&quot;: &quot;2&quot;,  //分数
            &quot;difficult&quot;: 3,  //难度
            &quot;itemOrder&quot;: null  //排序
        },
        &quot;questionAnswerVM&quot;: {   //用户答案
            &quot;id&quot;: 25067,  
            &quot;questionId&quot;: 507,  //题目id
            &quot;doRight&quot;: false,   //是否正确
            &quot;content&quot;: &quot;A&quot;,   //用户答案
            &quot;itemOrder&quot;: 2,   //排序
            &quot;contentArray&quot;: null,   //用户答案
            &quot;score&quot;: &quot;0&quot;,  //得分
            &quot;questionScore&quot;: &quot;2&quot;  //题目分数
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-15-用户动态" tabindex="-1"><a class="header-anchor" href="#_4-1-15-用户动态" aria-hidden="true">#</a> 4.1.15 用户动态</h3><ul><li>接口地址：/api/student/user/log</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 1812,  
            &quot;userId&quot;: 1,  //用户id
            &quot;userName&quot;: &quot;student&quot;,  //用户名
            &quot;realName&quot;: &quot;Test&quot;,  //用户真实姓名
            &quot;content&quot;: &quot;student 登录了学之思开源考试系统&quot;,  //动态内容
            &quot;createTime&quot;: &quot;2021-06-08 17:12:50&quot;  //创建时间
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-16-当前用户信息" tabindex="-1"><a class="header-anchor" href="#_4-1-16-当前用户信息" aria-hidden="true">#</a> 4.1.16 当前用户信息</h3><ul><li>接口地址：/api/student/user/current</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 50,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,
        &quot;userName&quot;: &quot;student&quot;,  //用户名
        &quot;realName&quot;: &quot;Test&quot;,  //真实姓名
        &quot;age&quot;: 18,   //年龄
        &quot;role&quot;: 1,   //角色
        &quot;sex&quot;: 1,  //性别
        &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //生日
        &quot;phone&quot;: &quot;158800882&quot;,  //手机号
        &quot;lastActiveTime&quot;: &quot;&quot;,
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,
        &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,
        &quot;status&quot;: 1,  //状态
        &quot;userLevel&quot;: 1,   //年级
        &quot;classes&quot;: &quot;1班&quot;,  //用户班级
        &quot;imagePath&quot;: &quot;&quot;  //用户头像
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-17-修改用户信息" tabindex="-1"><a class="header-anchor" href="#_4-1-17-修改用户信息" aria-hidden="true">#</a> 4.1.17 修改用户信息</h3><ul><li>接口地址：/api/student/user/update</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;id&quot;: 50,
    &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,
    &quot;userName&quot;: &quot;student&quot;,  //用户名
    &quot;realName&quot;: &quot;Test&quot;,  //真实姓名
    &quot;age&quot;: 18,   //年龄
    &quot;role&quot;: 1,   //角色
    &quot;sex&quot;: 1,  //性别
    &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //生日
    &quot;phone&quot;: &quot;158800882&quot;,  //手机号
    &quot;lastActiveTime&quot;: &quot;&quot;,
    &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,
    &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,
    &quot;status&quot;: 1,  //状态
    &quot;userLevel&quot;: 1,   //年级
    &quot;classes&quot;: &quot;1班&quot;,  //用户班级
    &quot;imagePath&quot;: &quot;&quot;  //用户头像
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-18-消息分页" tabindex="-1"><a class="header-anchor" href="#_4-1-18-消息分页" aria-hidden="true">#</a> 4.1.18 消息分页</h3><ul><li>接口地址：/api/student/user/message/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //页码
    &quot;pageSize&quot;: 10  //每页条数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 5,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 50,
                &quot;title&quot;: &quot;rwerw&quot;,   //消息标题
                &quot;messageId&quot;: 10,
                &quot;content&quot;: &quot;sfsdf&quot;,  //消息内容
                &quot;readed&quot;: true, //是否已读
                &quot;createTime&quot;: &quot;2021-06-11 16:32:40&quot;,   //创建时间
                &quot;sendUserName&quot;: &quot;admin&quot;  //发送人
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-19-消息标记已读" tabindex="-1"><a class="header-anchor" href="#_4-1-19-消息标记已读" aria-hidden="true">#</a> 4.1.19 消息标记已读</h3><ul><li>接口地址：/api/student/user/message/read/14</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-20-未读消息数量" tabindex="-1"><a class="header-anchor" href="#_4-1-20-未读消息数量" aria-hidden="true">#</a> 4.1.20 未读消息数量</h3><ul><li>接口地址：/api/student/user/message/unreadCount</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: 0  //未读消息数量
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,81),t=[s];function l(a,o){return i(),n("div",null,t)}const r=e(d,[["render",l],["__file","student.html.vue"]]);export{r as default};
