package com.mindskip.xzs.domain.enums;

import java.util.HashMap;
import java.util.Map;

public enum MidSectionTypeEnum {



    page("page", "静态页面(查看) "),
    forum("forum", "讨论区(部分需要额外处理)"),
    url("url", "观看类(音视频、文章等)"),
    quiz("quiz", "章节自测题"),
    assign("assign", "实训(添加文字或文件等)"),
    resource("resource", "资源下载"),
    glossary("glossary", "名词术语检索"),
    feedback("feedback", "问券调查");

    public String code;
    public String name;

    MidSectionTypeEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    private static final Map<String, MidSectionTypeEnum> keyMap = new HashMap<>();

    static {
        for (MidSectionTypeEnum item : MidSectionTypeEnum.values()) {
            keyMap.put(item.getCode(), item);
        }
    }

    public static MidSectionTypeEnum fromCode(String code) {
        return keyMap.get(code);
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
