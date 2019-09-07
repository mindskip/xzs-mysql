/*
 Navicat Premium Data Transfer

 Source Server         : 101.132.110.182(min)
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : 101.132.110.182:3306
 Source Schema         : exam

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 07/09/2019 20:09:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_exam_paper
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper`;
CREATE TABLE `t_exam_paper`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试卷名称',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `paper_type` int(11) NULL DEFAULT NULL COMMENT '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)',
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `score` int(11) NULL DEFAULT NULL COMMENT '试卷总分(千分制)',
  `question_count` int(11) NULL DEFAULT NULL COMMENT '题目数量',
  `suggest_time` int(11) NULL DEFAULT NULL COMMENT '建议时长(分钟)',
  `limit_start_time` datetime(0) NULL DEFAULT NULL COMMENT '时段试卷 开始时间',
  `limit_end_time` datetime(0) NULL DEFAULT NULL COMMENT '时段试卷 结束时间',
  `frame_text_content_id` int(11) NULL DEFAULT NULL COMMENT '试卷框架 内容为JSON',
  `create_user` int(11) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL,
  `task_exam_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_exam_paper
-- ----------------------------
INSERT INTO `t_exam_paper` VALUES (1, '固定试卷', 59, 1, 12, 70, 2, 20, NULL, NULL, 3, 2, '2019-09-07 06:59:14', b'0', NULL);

-- ----------------------------
-- Table structure for t_exam_paper_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper_answer`;
CREATE TABLE `t_exam_paper_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exam_paper_id` int(11) NULL DEFAULT NULL,
  `paper_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试卷名称',
  `paper_type` int(11) NULL DEFAULT NULL COMMENT '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `system_score` int(11) NULL DEFAULT NULL COMMENT '系统判定得分',
  `user_score` int(11) NULL DEFAULT NULL COMMENT '最终得分(千分制)',
  `paper_score` int(11) NULL DEFAULT NULL COMMENT '试卷总分',
  `question_correct` int(11) NULL DEFAULT NULL COMMENT '做对题目数量',
  `question_count` int(11) NULL DEFAULT NULL COMMENT '题目总数量',
  `do_time` int(11) NULL DEFAULT NULL COMMENT '做题时间(秒)',
  `status` int(11) NULL DEFAULT NULL COMMENT '试卷状态(1待判分 2完成)',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '学生',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '提交时间',
  `task_exam_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_exam_paper_answer
-- ----------------------------
INSERT INTO `t_exam_paper_answer` VALUES (1, 1, '固定试卷', 1, 59, 30, 60, 70, 1, 2, 4, 2, 1, '2019-09-07 07:07:09', NULL);

-- ----------------------------
-- Table structure for t_exam_paper_question_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper_question_customer_answer`;
CREATE TABLE `t_exam_paper_question_customer_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NULL DEFAULT NULL COMMENT '题目Id',
  `exam_paper_id` int(11) NULL DEFAULT NULL COMMENT '答案Id',
  `exam_paper_answer_id` int(11) NULL DEFAULT NULL,
  `question_type` int(11) NULL DEFAULT NULL COMMENT '题型',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `customer_score` int(11) NULL DEFAULT NULL COMMENT '得分',
  `question_score` int(11) NULL DEFAULT NULL COMMENT '题目原始分数',
  `question_text_content_id` int(11) NULL DEFAULT NULL COMMENT '问题内容',
  `answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '做题答案',
  `text_content_id` int(11) NULL DEFAULT NULL COMMENT '做题内容',
  `do_right` bit(1) NULL DEFAULT NULL COMMENT '是否正确',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '做题人',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `item_order` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_exam_paper_question_customer_answer
-- ----------------------------
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (1, 1, 1, 1, 1, 59, 30, 30, 1, 'B', NULL, b'1', 1, '2019-09-07 07:07:09', 1);
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (2, 2, 1, 1, 4, 59, 30, 40, 2, NULL, 4, b'0', 1, '2019-09-07 07:07:09', 2);

-- ----------------------------
-- Table structure for t_message
-- ----------------------------
DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `send_user_id` int(11) NULL DEFAULT NULL COMMENT '发送者用户ID',
  `send_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '发送者用户名',
  `send_real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '发送者真实姓名',
  `receive_user_count` int(11) NULL DEFAULT NULL COMMENT '接收人数',
  `read_count` int(11) NULL DEFAULT NULL COMMENT '已读人数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_message
-- ----------------------------
INSERT INTO `t_message` VALUES (1, '分为非', '分为分为', '2019-09-07 06:59:59', 2, 'admin', '管理员', 1, 1);

-- ----------------------------
-- Table structure for t_message_user
-- ----------------------------
DROP TABLE IF EXISTS `t_message_user`;
CREATE TABLE `t_message_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) NULL DEFAULT NULL COMMENT '消息内容ID',
  `receive_user_id` int(11) NULL DEFAULT NULL COMMENT '接收人ID',
  `receive_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收人用户名',
  `receive_real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收人真实姓名',
  `readed` bit(1) NULL DEFAULT NULL COMMENT '是否已读',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `read_time` datetime(0) NULL DEFAULT NULL COMMENT '阅读时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_message_user
-- ----------------------------
INSERT INTO `t_message_user` VALUES (1, 1, 1, 'student', '学生', b'1', '2019-09-07 06:59:59', '2019-09-07 07:06:50');

-- ----------------------------
-- Table structure for t_question
-- ----------------------------
DROP TABLE IF EXISTS `t_question`;
CREATE TABLE `t_question`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_type` int(11) NULL DEFAULT NULL COMMENT '1.单选题  2.多选题  3.判断题 4.填空题 5.简答题',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `score` int(11) NULL DEFAULT NULL COMMENT '题目总分(千分制)',
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `difficult` int(11) NULL DEFAULT NULL COMMENT '题目难度',
  `correct` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '正确答案',
  `info_text_content_id` int(11) NULL DEFAULT NULL COMMENT '题目  填空、 题干、解析、答案等信息',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `status` int(11) NULL DEFAULT NULL COMMENT '1.正常',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `deleted` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_question
-- ----------------------------
INSERT INTO `t_question` VALUES (1, 1, 59, 30, 12, 4, 'B', 1, 2, 1, '2019-09-07 06:58:04', b'0');
INSERT INTO `t_question` VALUES (2, 4, 59, 40, 12, 4, '', 2, 2, 1, '2019-09-07 06:58:44', b'0');

-- ----------------------------
-- Table structure for t_subject
-- ----------------------------
DROP TABLE IF EXISTS `t_subject`;
CREATE TABLE `t_subject`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '语文 数学 英语 等',
  `level` int(11) NULL DEFAULT NULL COMMENT '年级 (1-12) 小学 初中 高中  大学',
  `level_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '一年级、二年级等',
  `item_order` int(11) NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 68 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_subject
-- ----------------------------
INSERT INTO `t_subject` VALUES (1, '语文', 1, '一年级', NULL);
INSERT INTO `t_subject` VALUES (2, '数学', 1, '一年级', NULL);
INSERT INTO `t_subject` VALUES (3, '语文', 2, '二年级', NULL);
INSERT INTO `t_subject` VALUES (4, '数学', 2, '二年级', NULL);
INSERT INTO `t_subject` VALUES (5, '英语', 2, '二年级', NULL);
INSERT INTO `t_subject` VALUES (6, '英语', 1, '一年级', NULL);
INSERT INTO `t_subject` VALUES (7, '语文', 3, '三年级', NULL);
INSERT INTO `t_subject` VALUES (8, '数学', 3, '三年级', NULL);
INSERT INTO `t_subject` VALUES (9, '英语', 3, '三年级', NULL);
INSERT INTO `t_subject` VALUES (10, '语文', 4, '四年级', NULL);
INSERT INTO `t_subject` VALUES (11, '数学', 4, '四年级', NULL);
INSERT INTO `t_subject` VALUES (12, '英语', 4, '四年级', NULL);
INSERT INTO `t_subject` VALUES (13, '语文', 5, '五年级', NULL);
INSERT INTO `t_subject` VALUES (14, '数学', 5, '五年级', NULL);
INSERT INTO `t_subject` VALUES (15, '英语', 5, '五年级', NULL);
INSERT INTO `t_subject` VALUES (16, '语文', 6, '六年级', NULL);
INSERT INTO `t_subject` VALUES (17, '数学', 6, '六年级', NULL);
INSERT INTO `t_subject` VALUES (18, '英语', 6, '六年级', NULL);
INSERT INTO `t_subject` VALUES (19, '语文', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (20, '数学', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (21, '英语', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (22, '政治', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (23, '历史', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (24, '地理', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (25, '生物', 7, '初一', NULL);
INSERT INTO `t_subject` VALUES (26, '语文', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (27, '数学', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (28, '英语', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (29, '政治', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (30, '历史', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (31, '地理', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (32, '生物', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (33, '物理', 8, '初二', NULL);
INSERT INTO `t_subject` VALUES (34, '语文', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (35, '数学', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (36, '英语', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (37, '政治', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (38, '历史', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (39, '物理', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (40, '化学', 9, '初三', NULL);
INSERT INTO `t_subject` VALUES (41, '语文', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (42, '数学', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (43, '英语', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (44, '历史', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (45, '政治', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (46, '地理', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (47, '化学', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (48, '物理', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (49, '生物', 10, '高一', NULL);
INSERT INTO `t_subject` VALUES (50, '语文', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (51, '数学', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (52, '英语', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (53, '历史', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (54, '政治', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (55, '化学', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (56, '地理', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (57, '物理', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (58, '生物', 11, '高二', NULL);
INSERT INTO `t_subject` VALUES (59, '语文', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (60, '数学', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (61, '英语', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (62, '历史', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (63, '政治', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (64, '地理', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (65, '化学', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (66, '物理', 12, '高三', NULL);
INSERT INTO `t_subject` VALUES (67, '生物', 12, '高三', NULL);

-- ----------------------------
-- Table structure for t_task_exam
-- ----------------------------
DROP TABLE IF EXISTS `t_task_exam`;
CREATE TABLE `t_task_exam`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `frame_text_content_id` int(11) NULL DEFAULT NULL COMMENT '任务框架 内容为JSON',
  `create_user` int(11) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL,
  `create_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_task_exam_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_task_exam_customer_answer`;
CREATE TABLE `t_task_exam_customer_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_exam_id` int(11) NULL DEFAULT NULL,
  `create_user` int(255) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `text_content_id` int(11) NULL DEFAULT NULL COMMENT '任务完成情况(Json)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_text_content
-- ----------------------------
DROP TABLE IF EXISTS `t_text_content`;
CREATE TABLE `t_text_content`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_text_content
-- ----------------------------
INSERT INTO `t_text_content` VALUES (1, '{\"titleContent\":\"<p class=\\\"ueditor-p\\\">单选题单选题单选题单选题</p>\",\"analyze\":\"单选题\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"单选题\",\"score\":null},{\"prefix\":\"B\",\"content\":\"单选题\",\"score\":null},{\"prefix\":\"C\",\"content\":\"单选题\",\"score\":null}],\"correct\":\"B\"}', '2019-09-07 06:58:04');
INSERT INTO `t_text_content` VALUES (2, '{\"titleContent\":\"填空题<span class=\\\"gapfilling-span 60e3a2c5-7d2e-4651-82f5-1a33818d3dba\\\">1</span>分为非<span class=\\\"gapfilling-span 5242aa1d-87b3-42be-b827-b3e5c38e6e31\\\">2</span>分为非\",\"analyze\":\"gregr&nbsp;\",\"questionItemObjects\":[{\"prefix\":\"1\",\"content\":\"fdsf\",\"score\":20},{\"prefix\":\"2\",\"content\":\"gfd\",\"score\":20}],\"correct\":\"\"}', '2019-09-07 06:58:44');
INSERT INTO `t_text_content` VALUES (3, '[{\"name\":\"一、题目测试\",\"questionItems\":[{\"id\":1,\"itemOrder\":1},{\"id\":2,\"itemOrder\":2}]}]', '2019-09-07 06:59:14');
INSERT INTO `t_text_content` VALUES (4, '[\"few\",\"greg\"]', '2019-09-07 07:07:09');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_uuid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `age` int(11) NULL DEFAULT NULL,
  `sex` int(11) NULL DEFAULT NULL COMMENT '1.男 2女',
  `birth_day` datetime(0) NULL DEFAULT NULL,
  `user_level` int(11) NULL DEFAULT NULL COMMENT '学生年级(1-12)',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` int(11) NULL DEFAULT NULL COMMENT '1.学生 2.老师 3.管理员',
  `status` int(11) NULL DEFAULT NULL COMMENT '1.启用 2禁用',
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像地址',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `modify_time` datetime(0) NULL DEFAULT NULL,
  `last_active_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL COMMENT '是否删除',
  `wx_open_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信openId',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'd2d29da2-dcb3-4013-b874-727626236f47', 'student', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '学生', 17, 1, '2019-09-07 18:54:40', 12, '15007133738', 1, 1, NULL, '2019-09-07 18:55:02', NULL, NULL, b'0', 'oaWyB4kWcyKeJ441iQcnJXm14Uhg');
INSERT INTO `t_user` VALUES (2, '52045f5f-a13f-4ccc-93dd-f7ee8270ad4c', 'admin', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '管理员', 30, 1, '2019-09-07 18:56:07', NULL, NULL, 3, 1, NULL, '2019-09-07 18:56:21', NULL, NULL, b'0', NULL);
INSERT INTO `t_user` VALUES (3, '52379b13-5c01-43f9-a427-899ae57989c0', 'alvis', 'fnanT3ob78rUADLF8Mky+N29gFyP5952C861ONTSn0A9n8VXU414aSqIVghU+YOVc6UHltxMM+AVymdZPssw+zIUiJtbWu4+zYH4iDfpIHyJW1Tb01IVs3nJPId5YMVWd9rMBBkavA73zOjdwkm13HcV98bFMxyhIqoNuuWdCSY=', 'alvis', NULL, NULL, NULL, 1, NULL, 1, 1, NULL, '2019-09-07 06:54:49', NULL, '2019-09-07 06:54:49', b'0', NULL);
INSERT INTO `t_user` VALUES (4, '4e182be9-3ee0-45a4-8329-fd79aee3b8e2', '32', 'je+NzP95ymeyrTYnFy7+SLqWlePAYvV4AoZBnVhNAJcYYPDJ9hpLMOj0epD7nkz9N1F/IunV4kK8HylCqGZoDFGx4/ey8LKVElG1JYxbZEvAf6OM8Qu/gvL6Hhyan3UHMbYcgXQ16gZtasHrz3K4s3Pb0x14GZtN9WBqqBw4Vec=', '32', NULL, NULL, NULL, NULL, NULL, 2, 2, NULL, '2019-09-07 06:56:28', NULL, '2019-09-07 06:56:28', b'0', NULL);
INSERT INTO `t_user` VALUES (5, 'f0cfa3c5-7131-48af-a2be-b8c792018daa', 'bbbvc', 'kc0DETYvKgh9AYyb2oV+b7Z9+DOrcrAbp5F/KMFCtLE5hPyhXy7kHqksNEcCvsPgW2jygkGF6Gfj5iyhRwA/fhacW/LR7+8zOGUQ3hyejPygLW+H2VEkUVnV/LlkD5ge7chqAdBRUkU7uW6MoFGscPL1oTTLusjE5e1hRmHkdWQ=', '2323', NULL, NULL, NULL, NULL, NULL, 3, 1, NULL, '2019-09-07 06:57:16', NULL, '2019-09-07 06:57:16', b'0', NULL);

-- ----------------------------
-- Table structure for t_user_event_log
-- ----------------------------
DROP TABLE IF EXISTS `t_user_event_log`;
CREATE TABLE `t_user_event_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user_event_log
-- ----------------------------
INSERT INTO `t_user_event_log` VALUES (1, 1, 'student', '学生', 'student 登录了学之思考试系统', '2019-09-07 06:49:23');
INSERT INTO `t_user_event_log` VALUES (2, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2019-09-07 06:51:35');
INSERT INTO `t_user_event_log` VALUES (3, 2, 'admin', '管理员', 'admin 登出了学之思考试系统', '2019-09-07 07:00:38');
INSERT INTO `t_user_event_log` VALUES (4, 1, 'student', '学生', 'student 登录了学之思考试系统', '2019-09-07 07:00:44');
INSERT INTO `t_user_event_log` VALUES (5, 1, 'student', '学生', 'student 提交试卷：固定试卷 得分：3 耗时：4 秒', '2019-09-07 07:07:09');
INSERT INTO `t_user_event_log` VALUES (6, 1, 'student', '学生', 'student 批改试卷：固定试卷 得分：6', '2019-09-07 07:07:20');

-- ----------------------------
-- Table structure for t_user_token
-- ----------------------------
DROP TABLE IF EXISTS `t_user_token`;
CREATE TABLE `t_user_token`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户Id',
  `wx_open_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信openId',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `end_time` datetime(0) NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
