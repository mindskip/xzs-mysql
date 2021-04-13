create table if not exists t_exam_paper
(
    id                    int auto_increment
        primary key,
    name                  varchar(255) null comment '试卷名称',
    subject_id            int          null comment '学科',
    paper_type            int          null comment '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)',
    grade_level           int          null comment '级别',
    score                 int          null comment '试卷总分(千分制)',
    question_count        int          null comment '题目数量',
    suggest_time          int          null comment '建议时长(分钟)',
    limit_start_time      datetime     null comment '时段试卷 开始时间',
    limit_end_time        datetime     null comment '时段试卷 结束时间',
    frame_text_content_id int          null comment '试卷框架 内容为JSON',
    create_user           int          null,
    create_time           datetime     null,
    deleted               bit          null,
    task_exam_id          int          null,
    learn_archive_id      int          null comment '学习计划ID',
    subject_code          varchar(32)  null comment '学科编码',
    request_url           varchar(128) null comment '请求地址',
    exam_code             varchar(32)  null comment '考试编码'
)
    charset = utf8mb4;


create table if not exists t_exam_paper_answer
(
    id               int auto_increment
        primary key,
    exam_paper_id    int          null,
    paper_name       varchar(255) null comment '试卷名称',
    paper_type       int          null comment '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )',
    subject_id       int          null comment '学科',
    system_score     int          null comment '系统判定得分',
    user_score       int          null comment '最终得分(千分制)',
    paper_score      int          null comment '试卷总分',
    question_correct int          null comment '做对题目数量',
    question_count   int          null comment '题目总数量',
    do_time          int          null comment '做题时间(秒)',
    status           int          null comment '试卷状态(1待判分 2完成)',
    create_user      int          null comment '学生',
    create_time      datetime     null comment '提交时间',
    task_exam_id     int          null
)
    charset = utf8mb4;

create table if not exists t_exam_paper_question_customer_answer
(
    id                       int auto_increment
        primary key,
    question_id              int          null comment '题目Id',
    exam_paper_id            int          null comment '答案Id',
    exam_paper_answer_id     int          null,
    question_type            int          null comment '题型',
    subject_id               int          null comment '学科',
    customer_score           int          null comment '得分',
    question_score           int          null comment '题目原始分数',
    question_text_content_id int          null comment '问题内容',
    answer                   varchar(255) null comment '做题答案',
    text_content_id          int          null comment '做题内容',
    do_right                 bit          null comment '是否正确',
    create_user              int          null comment '做题人',
    create_time              datetime     null,
    item_order               int          null
)
    charset = utf8mb4;

create table if not exists t_message
(
    id                 int auto_increment
        primary key,
    title              varchar(255) null comment '标题',
    content            varchar(500) null comment '内容',
    create_time        datetime     null,
    send_user_id       int          null comment '发送者用户ID',
    send_user_name     varchar(255) null comment '发送者用户名',
    send_real_name     varchar(255) null comment '发送者真实姓名',
    receive_user_count int          null comment '接收人数',
    read_count         int          null comment '已读人数'
)
    charset = utf8mb4;

create table if not exists t_message_user
(
    id                int auto_increment
        primary key,
    message_id        int          null comment '消息内容ID',
    receive_user_id   int          null comment '接收人ID',
    receive_user_name varchar(255) null comment '接收人用户名',
    receive_real_name varchar(255) null comment '接收人真实姓名',
    readed            bit          null comment '是否已读',
    create_time       datetime     null,
    read_time         datetime     null comment '阅读时间'
)
    charset = utf8mb4;

create table if not exists t_question
(
    id                   int auto_increment
        primary key,
    question_type        int          null comment '1.单选题  2.多选题  3.判断题 4.填空题 5.简答题',
    subject_id           int          null comment '学科',
    score                int          null comment '题目总分(千分制)',
    grade_level          int          null comment '级别',
    difficult            int          null comment '题目难度',
    correct              text         null comment '正确答案',
    info_text_content_id int          null comment '题目  填空、 题干、解析、答案等信息',
    create_user          int          null comment '创建人',
    status               int          null comment '1.正常',
    create_time          datetime     null comment '创建时间',
    deleted              bit          null,
    question_code        varchar(64)  null comment '题目编码',
    request_url          varchar(128) null comment '请求URL',
    request_method       varchar(8)   null comment '请求方法',
    subject_code         varchar(32)  null comment '学科编码',
    question_real_type   tinyint      null comment '问题实际类型'
)
    charset = utf8mb4;

create table if not exists t_subject
(
    id           int auto_increment
        primary key,
    name         varchar(255) null comment '语文 数学 英语 等',
    level        int          null comment '年级 (1-12) 小学 初中 高中  大学',
    level_name   varchar(255) null comment '一年级、二年级等',
    item_order   int          null comment '排序',
    deleted      bit          null,
    subject_code varchar(32)  null comment '学科编码'
)
    charset = utf8mb4;

create table if not exists t_task_exam
(
    id                    int auto_increment
        primary key,
    title                 varchar(255) null,
    grade_level           int          null comment '级别',
    frame_text_content_id int          null comment '任务框架 内容为JSON',
    create_user           int          null,
    create_time           datetime     null,
    deleted               bit          null,
    create_user_name      varchar(255) null
)
    charset = utf8mb4;

create table if not exists t_task_exam_customer_answer
(
    id              int auto_increment
        primary key,
    task_exam_id    int      null,
    create_user     int(255) null,
    create_time     datetime null,
    text_content_id int      null comment '任务完成情况(Json)'
)
    charset = utf8mb4;

create table if not exists t_text_content
(
    id          int auto_increment
        primary key,
    content     text     null,
    create_time datetime null
)
    charset = utf8mb4;

create table if not exists t_user
(
    id               int auto_increment
        primary key,
    user_uuid        varchar(36)       null,
    user_name        varchar(255)      null comment '用户名',
    password         varchar(255)      null,
    real_name        varchar(255)      null comment '真实姓名',
    age              int               null,
    sex              int               null comment '1.男 2女',
    birth_day        datetime          null,
    user_level       int               null comment '学生年级(1-12)',
    phone            varchar(255)      null,
    role             int               null comment '1.学生 2.老师 3.管理员',
    status           int               null comment '1.启用 2禁用',
    image_path       varchar(255)      null comment '头像地址',
    create_time      datetime          null,
    modify_time      datetime          null,
    last_active_time datetime          null,
    deleted          bit               null comment '是否删除',
    wx_open_id       varchar(255)      null comment '微信openId',
    clear_password   varchar(128)      null comment '明文密码',
    user_type        tinyint default 1 null comment '用户类别(1:国电网用户)'
)
    charset = utf8mb4;

create table if not exists t_user_event_log
(
    id          int auto_increment
        primary key,
    user_id     int          null comment '用户id',
    user_name   varchar(255) null comment '用户名',
    real_name   varchar(255) null comment '真实姓名',
    content     text         null comment '内容',
    create_time datetime     null comment '时间'
)
    charset = utf8mb4;

create table if not exists t_user_token
(
    id          int auto_increment
        primary key,
    token       varchar(36)  null,
    user_id     int          null comment '用户Id',
    wx_open_id  varchar(255) null comment '微信openId',
    create_time datetime     null,
    end_time    datetime     null,
    user_name   varchar(255) null comment '用户名'
)
    charset = utf8mb4;

create table if not exists t_learning_archive
(
    id          int auto_increment
        primary key,
    user_id     int          null comment '用户Id',
    user_name   varchar(255) null comment '用户名',
    learning_code       varchar(36)  null,
    create_time datetime     null comment '创建时间',
    organization_name varchar(64) null comment '学习中心',
    learning_year varchar(8) null comment '入学年份',
    learning_quarter varchar(8) null comment '入学季度',
    compulsory_credit float(6) null comment '必修总学分',
    earned_compulsory_credit float(6) null comment '必修已修学分',
    total_credit float(6) null comment '总学分',
    earned_credit float(6) null comment '已修总学分',
    earned_electiveCredit float(6) null comment '已修选修学分',
    elective_credit float(6) null comment '选修总学分'

)
    charset = utf8mb4;


create table if not exists t_learning_section
(
    id          int auto_increment
        primary key,
    subject_id     int          null comment '学科id',
    subject_code   varchar(32)  null comment '学科编码',
    subject_name   varchar(64) null comment '学科名称',
    mid_code        varchar(32)  null  comment '小节点编码',
    mid_name  varchar(128) null comment '小节点名称',
    mid_type varchar(16) null comment '小节点类型',
    mid_order int null comment  '小节点顺序',
    mid_over tinyint(4) null  comment '小节点完成状态',
    request_url  varchar(128)  null comment '小节点请求地址',
    create_time datetime     null comment '创建时间',
    create_user_id int null comment '创建人'
)
    charset = utf8mb4;
