package com.mindskip.xzs.utility;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 * @version 3.5.0
 * @description: The type Html util.
 * Copyright (C), 2020-2021, 武汉思维跳跃科技有限公司
 * @date 2021/12/25 9:45
 */
public class HtmlUtil {
    /**
     * Clear string.
     *
     * @param htmlStr the html str
     * @return the string
     */

    @Deprecated
    public static String clear(String htmlStr) {
        String regEx_script = "<script[^>]*?>[\\s\\S]*?<\\/script>";
        String regEx_style = "<style[^>]*?>[\\s\\S]*?<\\/style>";
        String regEx_html = "<[^>]+>";
        Pattern p_script = Pattern.compile(regEx_script, Pattern.CASE_INSENSITIVE);
        Matcher m_script = p_script.matcher(htmlStr);
        htmlStr = m_script.replaceAll("");
        Pattern p_style = Pattern.compile(regEx_style, Pattern.CASE_INSENSITIVE);
        Matcher m_style = p_style.matcher(htmlStr);
        htmlStr = m_style.replaceAll("");
        Pattern p_html = Pattern.compile(regEx_html, Pattern.CASE_INSENSITIVE);
        Matcher m_html = p_html.matcher(htmlStr);
        htmlStr = m_html.replaceAll("");
        return htmlStr.trim();
    }

//    上面的代码存在严重的问题，因此需要改动
//    存在XSS注入

    public static interface EscapedString {
        String getAlertText();

        String getPattern();

        String alert(String text);
    }

    private static class SimpleEscapedString implements EscapedString {
        private final String pattern;// 匹配字符

        private final Pattern p;// 一次编译，多次使用，可以减少编译的成本
        private final String alertText;// 替换字符

        public String getAlertText() {
            return alertText;
        }

        public String getPattern() {
            return pattern;
        }

        SimpleEscapedString(String pattern, String alertText) {
            this.pattern = Objects.requireNonNull(pattern);
            this.alertText = Objects.requireNonNull(alertText);
            this.p = Pattern.compile(pattern);
        }

        public String alert(String text) {
            if (Objects.requireNonNull(text).isEmpty()) {
                return text;
            }
            return p.matcher(text).replaceAll(alertText);
        }
    }

    public static final List<EscapedString> escape = new ArrayList<EscapedString>();

    static {
//        这里的$0时回溯引用，这里的处理就是对匹配到的字符加上前后缀
//        测试用例：      <script>wuhu<script>
//                      <alt><</alt>script<alt>></alt>wuhu<alt><</alt>script<alt>></alt>
        escape.add(new SimpleEscapedString("<|>", "<alt>$0</alt>"));
    }

    public static String alert(String text) {
        if (Objects.requireNonNull(text).isEmpty()) return text;
        for (EscapedString escapedString : escape) {
            text = escapedString.alert(text);
        }
        return text;
    }


}