-- ----------------------------
-- Sequence structure for t_exam_paper_answer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_exam_paper_answer_id_seq";
CREATE SEQUENCE "public"."t_exam_paper_answer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_exam_paper_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_exam_paper_id_seq";
CREATE SEQUENCE "public"."t_exam_paper_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_exam_paper_question_customer_answer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_exam_paper_question_customer_answer_id_seq";
CREATE SEQUENCE "public"."t_exam_paper_question_customer_answer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_message_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_message_id_seq";
CREATE SEQUENCE "public"."t_message_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_message_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_message_user_id_seq";
CREATE SEQUENCE "public"."t_message_user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_question_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_question_id_seq";
CREATE SEQUENCE "public"."t_question_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_subject_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_subject_id_seq";
CREATE SEQUENCE "public"."t_subject_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_task_exam_customer_answer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_task_exam_customer_answer_id_seq";
CREATE SEQUENCE "public"."t_task_exam_customer_answer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_task_exam_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_task_exam_id_seq";
CREATE SEQUENCE "public"."t_task_exam_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_text_content_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_text_content_id_seq";
CREATE SEQUENCE "public"."t_text_content_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_user_event_log_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_user_event_log_id_seq";
CREATE SEQUENCE "public"."t_user_event_log_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_user_id_seq";
CREATE SEQUENCE "public"."t_user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for t_user_token_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."t_user_token_id_seq";
CREATE SEQUENCE "public"."t_user_token_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for t_exam_paper
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_exam_paper";
CREATE TABLE "public"."t_exam_paper" (
  "id" int4 NOT NULL DEFAULT nextval('t_exam_paper_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "subject_id" int4,
  "paper_type" int4,
  "grade_level" int4,
  "score" int4,
  "question_count" int4,
  "suggest_time" int4,
  "limit_start_time" timestamp(6),
  "limit_end_time" timestamp(6),
  "frame_text_content_id" int4,
  "create_user" int4,
  "create_time" timestamp(6),
  "deleted" bool,
  "task_exam_id" int4
)
;
COMMENT ON COLUMN "public"."t_exam_paper"."name" IS '试卷名称';
COMMENT ON COLUMN "public"."t_exam_paper"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper"."paper_type" IS '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)';
COMMENT ON COLUMN "public"."t_exam_paper"."grade_level" IS '级别';
COMMENT ON COLUMN "public"."t_exam_paper"."score" IS '试卷总分(千分制)';
COMMENT ON COLUMN "public"."t_exam_paper"."question_count" IS '题目数量';
COMMENT ON COLUMN "public"."t_exam_paper"."suggest_time" IS '建议时长(分钟)';
COMMENT ON COLUMN "public"."t_exam_paper"."limit_start_time" IS '时段试卷 开始时间';
COMMENT ON COLUMN "public"."t_exam_paper"."limit_end_time" IS '时段试卷 结束时间';
COMMENT ON COLUMN "public"."t_exam_paper"."frame_text_content_id" IS '试卷框架 内容为JSON';

-- ----------------------------
-- Records of t_exam_paper
-- ----------------------------

-- ----------------------------
-- Table structure for t_exam_paper_answer
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_exam_paper_answer";
CREATE TABLE "public"."t_exam_paper_answer" (
  "id" int4 NOT NULL DEFAULT nextval('t_exam_paper_answer_id_seq'::regclass),
  "exam_paper_id" int4,
  "paper_name" varchar(255) COLLATE "pg_catalog"."default",
  "paper_type" int4,
  "subject_id" int4,
  "system_score" int4,
  "user_score" int4,
  "paper_score" int4,
  "question_correct" int4,
  "question_count" int4,
  "do_time" int4,
  "status" int4,
  "create_user" int4,
  "create_time" timestamp(6),
  "task_exam_id" int4
)
;
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_name" IS '试卷名称';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_type" IS '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."system_score" IS '系统判定得分';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."user_score" IS '最终得分(千分制)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_score" IS '试卷总分';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."question_correct" IS '做对题目数量';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."question_count" IS '题目总数量';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."do_time" IS '做题时间(秒)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."status" IS '试卷状态(1待判分 2完成)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."create_user" IS '学生';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."create_time" IS '提交时间';

-- ----------------------------
-- Records of t_exam_paper_answer
-- ----------------------------

-- ----------------------------
-- Table structure for t_exam_paper_question_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_exam_paper_question_customer_answer";
CREATE TABLE "public"."t_exam_paper_question_customer_answer" (
  "id" int4 NOT NULL DEFAULT nextval('t_exam_paper_question_customer_answer_id_seq'::regclass),
  "question_id" int4,
  "exam_paper_id" int4,
  "exam_paper_answer_id" int4,
  "question_type" int4,
  "subject_id" int4,
  "customer_score" int4,
  "question_score" int4,
  "question_text_content_id" int4,
  "answer" varchar(255) COLLATE "pg_catalog"."default",
  "text_content_id" int4,
  "do_right" bool,
  "create_user" int4,
  "create_time" timestamp(6),
  "item_order" int4
)
;
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_id" IS '题目Id';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."exam_paper_id" IS '答案Id';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_type" IS '题型';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."customer_score" IS '得分';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_score" IS '题目原始分数';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_text_content_id" IS '问题内容';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."answer" IS '做题答案';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."text_content_id" IS '做题内容';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."do_right" IS '是否正确';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."create_user" IS '做题人';

-- ----------------------------
-- Records of t_exam_paper_question_customer_answer
-- ----------------------------

-- ----------------------------
-- Table structure for t_message
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_message";
CREATE TABLE "public"."t_message" (
  "id" int4 NOT NULL DEFAULT nextval('t_message_id_seq'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "content" varchar(500) COLLATE "pg_catalog"."default",
  "send_user_id" int4,
  "send_user_name" varchar(255) COLLATE "pg_catalog"."default",
  "send_real_name" varchar(255) COLLATE "pg_catalog"."default",
  "read_count" int4,
  "receive_user_count" int4,
  "create_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_message
-- ----------------------------

-- ----------------------------
-- Table structure for t_message_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_message_user";
CREATE TABLE "public"."t_message_user" (
  "id" int4 NOT NULL DEFAULT nextval('t_message_user_id_seq'::regclass),
  "message_id" int4,
  "receive_user_id" int4,
  "receive_user_name" varchar(255) COLLATE "pg_catalog"."default",
  "receive_real_name" varchar(255) COLLATE "pg_catalog"."default",
  "readed" bool,
  "read_time" timestamp(6),
  "create_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_message_user
-- ----------------------------

-- ----------------------------
-- Table structure for t_question
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_question";
CREATE TABLE "public"."t_question" (
  "id" int4 NOT NULL DEFAULT nextval('t_question_id_seq'::regclass),
  "question_type" int4,
  "subject_id" int4,
  "score" int4,
  "grade_level" int4,
  "difficult" int4,
  "correct" text COLLATE "pg_catalog"."default",
  "info_text_content_id" int4,
  "create_user" int4,
  "status" int4,
  "create_time" timestamp(6),
  "deleted" bool
)
;
COMMENT ON COLUMN "public"."t_question"."question_type" IS '1.单选题  2.多选题  3.判断题 4.填空题 5.简答题';
COMMENT ON COLUMN "public"."t_question"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_question"."score" IS '题目总分(千分制)';
COMMENT ON COLUMN "public"."t_question"."grade_level" IS '级别';
COMMENT ON COLUMN "public"."t_question"."difficult" IS '题目难度';
COMMENT ON COLUMN "public"."t_question"."correct" IS '正确答案';
COMMENT ON COLUMN "public"."t_question"."info_text_content_id" IS '题目  填空、 题干、解析、答案等信息';
COMMENT ON COLUMN "public"."t_question"."create_user" IS '创建人';
COMMENT ON COLUMN "public"."t_question"."status" IS '1.正常 2.删除';
COMMENT ON COLUMN "public"."t_question"."create_time" IS '创建时间';

-- ----------------------------
-- Records of t_question
-- ----------------------------

-- ----------------------------
-- Table structure for t_subject
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_subject";
CREATE TABLE "public"."t_subject" (
  "id" int4 NOT NULL DEFAULT nextval('t_subject_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "level" int4,
  "level_name" varchar(255) COLLATE "pg_catalog"."default",
  "item_order" int4,
  "deleted" bool
)
;
COMMENT ON COLUMN "public"."t_subject"."name" IS '语文 数学 英语 等';
COMMENT ON COLUMN "public"."t_subject"."level" IS '年级 (1-12) 小学 初中 高中  大学';
COMMENT ON COLUMN "public"."t_subject"."level_name" IS '一年级、二年级等';
COMMENT ON COLUMN "public"."t_subject"."item_order" IS '排序';

-- ----------------------------
-- Records of t_subject
-- ----------------------------

-- ----------------------------
-- Table structure for t_task_exam
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_task_exam";
CREATE TABLE "public"."t_task_exam" (
  "id" int4 NOT NULL DEFAULT nextval('t_task_exam_id_seq'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "grade_level" int4,
  "frame_text_content_id" int4,
  "create_user" int4,
  "create_user_name" varchar(255) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "deleted" bool
)
;

-- ----------------------------
-- Records of t_task_exam
-- ----------------------------

-- ----------------------------
-- Table structure for t_task_exam_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_task_exam_customer_answer";
CREATE TABLE "public"."t_task_exam_customer_answer" (
  "id" int4 NOT NULL DEFAULT nextval('t_task_exam_customer_answer_id_seq'::regclass),
  "task_exam_id" int4,
  "text_content_id" int4,
  "create_user" int4,
  "create_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_task_exam_customer_answer
-- ----------------------------

-- ----------------------------
-- Table structure for t_text_content
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_text_content";
CREATE TABLE "public"."t_text_content" (
  "id" int4 NOT NULL DEFAULT nextval('t_text_content_id_seq'::regclass),
  "content" text COLLATE "pg_catalog"."default",
  "create_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_text_content
-- ----------------------------

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_user";
CREATE TABLE "public"."t_user" (
  "id" int4 NOT NULL DEFAULT nextval('t_user_id_seq'::regclass),
  "user_uuid" uuid,
  "user_name" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "real_name" varchar(255) COLLATE "pg_catalog"."default",
  "age" int4,
  "sex" int4,
  "birth_day" timestamp(6),
  "user_level" int4,
  "phone" varchar(255) COLLATE "pg_catalog"."default",
  "role" int4,
  "status" int4,
  "image_path" varchar(255) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "modify_time" timestamp(6),
  "last_active_time" timestamp(6),
  "deleted" bool,
  "wx_open_id" varchar COLLATE "pg_catalog"."default"
)
;
COMMENT ON COLUMN "public"."t_user"."user_name" IS '用户名';
COMMENT ON COLUMN "public"."t_user"."real_name" IS '真实姓名';
COMMENT ON COLUMN "public"."t_user"."sex" IS '1.男 2女';
COMMENT ON COLUMN "public"."t_user"."user_level" IS '学生年级(1-12)';
COMMENT ON COLUMN "public"."t_user"."role" IS '1.学生 2.老师 3.管理员';
COMMENT ON COLUMN "public"."t_user"."status" IS '1.启用 2禁用';
COMMENT ON COLUMN "public"."t_user"."image_path" IS '头像地址';

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO "public"."t_user" VALUES (2, '55bad52c-cdf7-4321-87b8-e37d958b24cf', 'admin', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '管理员', 18, 1, '2019-09-02 00:00:00', 13, '1561651651616156', 3, 1, NULL, '2019-07-23 07:17:16.923', '2020-02-08 10:52:42.234', '2019-07-23 07:17:16.923', 'f', NULL);
INSERT INTO "public"."t_user" VALUES (1, 'b41eaab1-926a-4824-94e8-da9259986ab6', 'student', 'RA6atJcbedAQUA/3jTcC85RuVuedZEgkeWUCiagtwhz6SjEKerC4IvFQe1OGSvbk+tPZGfkInRrmipPgHU6tzcpaQfdJkV9cXSGoxyldrWSFxblfpGGDxVisQrtrH7N1AEyi6u3h4iYrwkf4sPV8xoU8ZpOhlKmLEjDEq/an6rQ=', '学生', 16, 2, '1979-06-05 00:00:00', 12, '16677890000', 1, 1, 'http://image.alvisu.com/Fia70c6H5rPxn3-oLutkfCOPThP_', '2019-07-23 05:02:29.027', '2020-02-05 09:36:52.138', '2019-07-23 05:02:29.027', 'f', NULL);

-- ----------------------------
-- Table structure for t_user_event_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_user_event_log";
CREATE TABLE "public"."t_user_event_log" (
  "id" int4 NOT NULL DEFAULT nextval('t_user_event_log_id_seq'::regclass),
  "user_id" int4,
  "user_name" varchar(255) COLLATE "pg_catalog"."default",
  "real_name" varchar(255) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "create_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_user_event_log
-- ----------------------------

-- ----------------------------
-- Table structure for t_user_token
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_user_token";
CREATE TABLE "public"."t_user_token" (
  "id" int4 NOT NULL DEFAULT nextval('t_user_token_id_seq'::regclass),
  "token" uuid,
  "user_id" int4,
  "wx_open_id" varchar(255) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "end_time" timestamp(6),
  "user_name" varchar(255) COLLATE "pg_catalog"."default"
)
;
COMMENT ON COLUMN "public"."t_user_token"."user_id" IS '用户Id';
COMMENT ON COLUMN "public"."t_user_token"."wx_open_id" IS '微信openId';
COMMENT ON COLUMN "public"."t_user_token"."user_name" IS '用户名';

-- ----------------------------
-- Records of t_user_token
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_exam_paper_answer_id_seq"
OWNED BY "public"."t_exam_paper_answer"."id";
SELECT setval('"public"."t_exam_paper_answer_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_exam_paper_id_seq"
OWNED BY "public"."t_exam_paper"."id";
SELECT setval('"public"."t_exam_paper_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_exam_paper_question_customer_answer_id_seq"
OWNED BY "public"."t_exam_paper_question_customer_answer"."id";
SELECT setval('"public"."t_exam_paper_question_customer_answer_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_message_id_seq"
OWNED BY "public"."t_message"."id";
SELECT setval('"public"."t_message_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_message_user_id_seq"
OWNED BY "public"."t_message_user"."id";
SELECT setval('"public"."t_message_user_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_question_id_seq"
OWNED BY "public"."t_question"."id";
SELECT setval('"public"."t_question_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_subject_id_seq"
OWNED BY "public"."t_subject"."id";
SELECT setval('"public"."t_subject_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_task_exam_customer_answer_id_seq"
OWNED BY "public"."t_task_exam_customer_answer"."id";
SELECT setval('"public"."t_task_exam_customer_answer_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_task_exam_id_seq"
OWNED BY "public"."t_task_exam"."id";
SELECT setval('"public"."t_task_exam_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_text_content_id_seq"
OWNED BY "public"."t_text_content"."id";
SELECT setval('"public"."t_text_content_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_user_event_log_id_seq"
OWNED BY "public"."t_user_event_log"."id";
SELECT setval('"public"."t_user_event_log_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_user_id_seq"
OWNED BY "public"."t_user"."id";
SELECT setval('"public"."t_user_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."t_user_token_id_seq"
OWNED BY "public"."t_user_token"."id";
SELECT setval('"public"."t_user_token_id_seq"', 1, true);

-- ----------------------------
-- Primary Key structure for table t_exam_paper
-- ----------------------------
ALTER TABLE "public"."t_exam_paper" ADD CONSTRAINT "t_exam_paper_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_exam_paper_answer
-- ----------------------------
ALTER TABLE "public"."t_exam_paper_answer" ADD CONSTRAINT "t_exam_paper_answer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_exam_paper_question_customer_answer
-- ----------------------------
ALTER TABLE "public"."t_exam_paper_question_customer_answer" ADD CONSTRAINT "t_exam_paper_question_customer_answer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_message
-- ----------------------------
ALTER TABLE "public"."t_message" ADD CONSTRAINT "t_message_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_message_user
-- ----------------------------
ALTER TABLE "public"."t_message_user" ADD CONSTRAINT "t_message_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_question
-- ----------------------------
ALTER TABLE "public"."t_question" ADD CONSTRAINT "t_question_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_subject
-- ----------------------------
ALTER TABLE "public"."t_subject" ADD CONSTRAINT "t_subject_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_task_exam
-- ----------------------------
ALTER TABLE "public"."t_task_exam" ADD CONSTRAINT "t_task_exam_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_task_exam_customer_answer
-- ----------------------------
ALTER TABLE "public"."t_task_exam_customer_answer" ADD CONSTRAINT "t_task_exam_customer_answer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_text_content
-- ----------------------------
ALTER TABLE "public"."t_text_content" ADD CONSTRAINT "t_text_content_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_user
-- ----------------------------
ALTER TABLE "public"."t_user" ADD CONSTRAINT "t_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_user_event_log
-- ----------------------------
ALTER TABLE "public"."t_user_event_log" ADD CONSTRAINT "t_user_event_log_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_user_token
-- ----------------------------
ALTER TABLE "public"."t_user_token" ADD CONSTRAINT "t_user_token_pkey" PRIMARY KEY ("id");
