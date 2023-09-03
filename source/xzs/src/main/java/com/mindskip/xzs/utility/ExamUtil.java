package com.mindskip.xzs.utility;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


/**
 * @version 3.5.0
 * @description: The type Exam util.
 * Copyright (C), 2020-2021, 武汉思维跳跃科技有限公司
 * @date 2021/12/25 9:45
 */
public class ExamUtil {

    /**
     * Score to vm string.
     *
     * @param score the score
     * @return the string
     */
    public static String scoreToVM(Integer score) {
        if (score % 10 == 0) {
            return String.valueOf(score / 10);
        } else {
            return String.format("%.1f", score / 10.0);
        }
    }

    /**
     * Score from vm integer.
     *
     * @param score the score
     * @return the integer
     */
    public static Integer scoreFromVM(String score) {
        if (score == null) {
            return null;
        } else {
            return (int) (Float.parseFloat(score) * 10);
        }
    }

    /**
     * Second to vm string.
     *
     * @param second the second
     * @return the string
     */
    public static String secondToVM(Integer second) {
//        将这个的主要实现放在DateTimeUtil中
//    这个函数多用于前后端交互时对于前端的数据整理，但是这个并非后端的工作内容，建议交给前端处理，这样可以减轻服务器负载
        return  DateTimeUtil.secondToVM(second);
    }

    private static final String ANSWER_SPLIT = ",";

    /**
     * Content to string string.
     *
     * @param contentArray the content array
     * @return the string
     */
    public static String contentToString(List<String> contentArray) {
        return contentArray.stream().sorted().collect(Collectors.joining(ANSWER_SPLIT));
    }


    /**
     * Content to array list.
     *
     * @param contentArray the content array
     * @return the list
     */
    public static List<String> contentToArray(String contentArray) {
        return Arrays.asList(contentArray.split(ANSWER_SPLIT));
    }

    private static final String FORM_ANSWER_SPLIT = "_";

    /**
     * Last num integer.
     *
     * @param str the str
     * @return the integer
     */
    public static Integer lastNum(String str) {
        Integer start = str.lastIndexOf(FORM_ANSWER_SPLIT);
        return Integer.parseInt(str.substring(start + 1));
    }
}
