package com.mindskip.xzs.parser;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class GeneParams {

    public static void main(String[] args) throws IOException {
        File request = new File("E:\\code\\xzs-mysql\\source\\xzs\\src\\main\\resources\\request\\test.request");
        List<String> lines = FileUtils.readLines(request,"utf-8");
        for (String str:lines) {
            int index = str.lastIndexOf(":");
            String key = str.substring(0,index);
            String value = str.substring(index + 1);
            String out = String.format("nvps.add(new BasicNameValuePair(\"%s\",\"%s\"));",key.trim(),value.trim());
            System.out.println(out);
        }
    }
}
