package com.mindskip.xzs.parser;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @author LanceGui
 */
public class GeneParam {

    public static void main(String[] args) throws IOException {
        String  boundary = "----WebKitFormBoundaryx9iK2qWXMVKlMkkF";
        gene(boundary);
    }

    public static String gene(String boundary) throws IOException {
        File file = new File("/Users/guiliangzhou/IdeaProjects/xzs-mysql/source/xzs/src/main/resources/request/test3.request");
        List<String> lines = FileUtils.readLines(file,"utf-8");
        StringBuilder sb = new StringBuilder();
        for (String str:lines) {
            int index = str.lastIndexOf(":");
            String key = str.substring(0,index).trim();
            String value =  str.substring(index + 1).trim();
            sb.append("--")
                    .append(boundary)
                    .append("\r\n")
                    .append("Content-Disposition: form-data; name=\"")
                    .append(key)
                    .append("\"")
                    .append("\r\n\r\n")
                    .append(value)
                    .append("\r\n");
        }
        sb.append("--")
                .append(boundary)
                .append("--")
                .append("\r\n");
        return sb.toString();
    }
}
