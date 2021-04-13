package com.mindskip.xzs.domain.enums;

import java.util.HashMap;
import java.util.Map;

public enum QuestionTypeEnum {

    SingleChoice(1, "单选题"),
    MultipleChoice(2, "多选题"),
    TrueFalse(3, "判断题"),
    GapFilling(4, "填空题"),
    ShortAnswer(5, "简答题"),

    page(6, "静态页面(查看) "),
    forum(7, "讨论区(部分需要额外处理)"),
    url(8, "观看类(音视频、文章等)"),
    quiz(9, "章节自测题"),
    assign(10, "实训(添加文字或文件等)"),
    resource(11, "资源下载"),
    glossary(12,"名词术语检索"),
    feedback(13, "问券调查");

    int code;
    String name;

    QuestionTypeEnum(int code, String name) {
        this.code = code;
        this.name = name;
    }


    private static final Map<Integer, QuestionTypeEnum> keyMap = new HashMap<>();

    static {
        for (QuestionTypeEnum item : QuestionTypeEnum.values()) {
            keyMap.put(item.getCode(), item);
        }
    }

    public static QuestionTypeEnum fromCode(Integer code) {
        return keyMap.get(code);
    }

    public static boolean needSaveTextContent(Integer code) {
        QuestionTypeEnum questionTypeEnum = QuestionTypeEnum.fromCode(code);
        switch (questionTypeEnum) {
            case GapFilling:
            case ShortAnswer:
                return true;
            default:
                return false;
        }
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
