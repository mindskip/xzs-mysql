package com.mindskip.xzs.parser;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;

import com.mindskip.xzs.utility.HttpClientUtil;
import org.apache.commons.io.FileUtils;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.util.CollectionUtils;


/**
 * @author LanceGui
 */
public class Parser {
    public static void main(String[] args) throws IOException {
        //getMid();
        //getMidInfo();
        //answerQuestion();
        answer();
    }

    public static void getLocation() {
        String url = "http://xinjiang.ouchn.cn/mod/url/view.php?id=166016";
        String userName = "2065001465720";
        String token = "8dgfjhqf466rtulfseakjh4doh";
        Document doc = getDocument(url,userName,token);
        System.out.println(doc.toString());
        System.out.println(doc.location());
    }

    public static void getMid() {
        String url = "http://xinjiang.ouchn.cn/course/view.php?id=1621&sectionid=57036&mid=166016";
        String userName = "2065001465720";
        String token = "8dgfjhqf466rtulfseakjh4doh";
        Document doc = getDocument(url,userName,token);
        /*Elements lis = doc.getElementsByAttributeValue("is_com","1");
        System.out.println(lis.toString());
        for (Element li:lis) {
            System.out.println(li.toString());
            System.out.println("\n\n");
        }*/
        System.out.println(doc.toString());

    }

    public static void answerQuestion() {
        String url = "http://xinjiang.ouchn.cn/mod/quiz/processattempt.php?cmid=166036";

        Map<String,String> cookies = new HashMap<>();
        cookies.put("MoodleSession","v9r9e30nu5f94v1fbfpd345vcd");
        cookies.put("username","2065001465720");

        Map<String,String> headers = new HashMap<>();
        headers.put("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        headers.put("Accept-Encoding","gzip, deflate");
        headers.put("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8");
        headers.put("Content-Type","multipart/form-data");

        Map<String,String> data = new HashMap<>();


/*
        data.put("q51154:2_answer","2");
        data.put("q51154:3_answer","3");
        data.put("q51154:4_answer","0");
        data.put("q51154:5_answer","1");
        data.put("q51154:6_answer","3");
        data.put("q51154:8_choice1","1");
        data.put("q51154:8_choice2","1");
        data.put("q51154:8_choice3","1");
        data.put("q51154:9_choice0","1");
        data.put("q51154:9_choice1","1");
        data.put("q51154:9_choice2","1");
        data.put("q51154:10_choice1","1");
        data.put("q51154:10_choice2","1");
        data.put("q51154:11_choice1","1");
        data.put("q51154:11_choice2","1");
        data.put("q51154:11_choice3","1");
        data.put("q51154:12_choice0","1");
        data.put("q51154:12_choice1","1");
        data.put("q51154:12_choice2","1");
        data.put("q51154:12_choice3","1");
        data.put("q51154:14_answer","1");
        data.put("q51154:15_answer","1");
        data.put("q51154:16_answer","0");
        data.put("q51154:17_answer","0");
        data.put("q51154:18_answer","0");
        data.put("next","结束试答…");
        data.put("attempt","51154");
        data.put("thispage","2");
        data.put("nextpage","-1");
        data.put("timeup","0");
        data.put("sesskey","wjspTHFntz");
        data.put("slots","1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18");
*/

        data.put("q51154:2_:flagged","0");
        data.put("q51154:2_:sequencecheck","2");
        data.put("q51154:2_answer","2");
        data.put("q51154:3_:flagged","0");
        data.put("q51154:3_:sequencecheck","2");
        data.put("q51154:3_answer","3");
        data.put("q51154:4_:flagged","0");
        data.put("q51154:4_:sequencecheck","2");
        data.put("q51154:4_answer","0");
        data.put("q51154:5_:flagged","0");
        data.put("q51154:5_:sequencecheck","2");
        data.put("q51154:5_answer","1");
        data.put("q51154:6_:flagged","0");
        data.put("q51154:6_:sequencecheck","2");
        data.put("q51154:6_answer","3");
        data.put("q51154:8_:flagged","0");
        data.put("q51154:8_:sequencecheck","2");
        data.put("q51154:8_choice1","1");
        data.put("q51154:8_choice2","1");
        data.put("q51154:8_choice3","1");
        data.put("q51154:9_:flagged","0");
        data.put("q51154:9_:sequencecheck","2");
        data.put("q51154:9_choice0","1");
        data.put("q51154:9_choice1","1");
        data.put("q51154:9_choice2","1");
        data.put("q51154:10_:flagged","0");
        data.put("q51154:10_:sequencecheck","2");
        data.put("q51154:10_choice1","1");
        data.put("q51154:10_choice2","1");
        data.put("q51154:11_:flagged","0");
        data.put("q51154:11_:sequencecheck","2");
        data.put("q51154:11_choice1","1");
        data.put("q51154:11_choice2","1");
        data.put("q51154:11_choice3","1");
        data.put("q51154:12_:flagged","0");
        data.put("q51154:12_:sequencecheck","2");
        data.put("q51154:12_choice0","1");
        data.put("q51154:12_choice1","1");
        data.put("q51154:12_choice2","1");
        data.put("q51154:12_choice3","1");
        data.put("q51154:14_:flagged","0");
        data.put("q51154:14_:sequencecheck","2");
        data.put("q51154:14_answer","1");
        data.put("q51154:15_:flagged","0");
        data.put("q51154:15_:sequencecheck","2");
        data.put("q51154:15_answer","1");
        data.put("q51154:16_:flagged","0");
        data.put("q51154:16_:sequencecheck","2");
        data.put("q51154:16_answer","0");
        data.put("q51154:17_:flagged","0");
        data.put("q51154:17_:sequencecheck","2");
        data.put("q51154:17_answer","0");
        data.put("q51154:18_:flagged","0");
        data.put("q51154:18_:sequencecheck","2");
        data.put("q51154:18_answer","0");
        data.put("next","结束试答…");
        data.put("attempt","51154");
        data.put("thispage","2");
        data.put("nextpage","-1");
        data.put("timeup","0");
        data.put("sesskey","BBVPUDoTc4");
        data.put("slots","1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18");

        Document doc = null;
        try {
            doc = Jsoup.connect(url)
                    .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36")
                    .cookies(cookies)
                    .headers(headers)
                    .data(data)
                    .timeout(5000)
                    .post();
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (null != doc  && null != doc.location()) {
            System.out.println(doc.location());
        }
        System.out.println("\n");
        System.out.println(doc.toString());

    }

    public static void answer() {
        String url = "http://xinjiang.ouchn.cn/mod/quiz/processattempt.php?cmid=166036";

        Map<String,String> headers = new HashMap<>();
        headers.put("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        headers.put("Accept-Encoding","gzip, deflate");
        headers.put("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8");
        headers.put("Content-Type","multipart/form-data;boundary=----WebKitFormBoundary45VaB2G3vuKxgk92");


        String userName = "2065001465720";
        String token = "v9r9e30nu5f94v1fbfpd345vcd";

        List<NameValuePair> nvps = new ArrayList<>();
        nvps.add(new BasicNameValuePair("q51154:7_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:7_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:7_:sequencecheck","2"));
        nvps.add(new BasicNameValuePair("q51154:8_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:8_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:8_:sequencecheck","3"));
        nvps.add(new BasicNameValuePair("q51154:8_choice0","0"));
        nvps.add(new BasicNameValuePair("q51154:8_choice1","1"));
        nvps.add(new BasicNameValuePair("q51154:8_choice2","0"));
        nvps.add(new BasicNameValuePair("q51154:8_choice3","1"));
        nvps.add(new BasicNameValuePair("q51154:9_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:9_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:9_:sequencecheck","3"));
        nvps.add(new BasicNameValuePair("q51154:9_choice0","1"));
        nvps.add(new BasicNameValuePair("q51154:9_choice1","0"));
        nvps.add(new BasicNameValuePair("q51154:9_choice2","1"));
        nvps.add(new BasicNameValuePair("q51154:9_choice3","0"));
        nvps.add(new BasicNameValuePair("q51154:10_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:10_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:10_:sequencecheck","3"));
        nvps.add(new BasicNameValuePair("q51154:10_choice0","1"));
        nvps.add(new BasicNameValuePair("q51154:10_choice1","0"));
        nvps.add(new BasicNameValuePair("q51154:10_choice2","1"));
        nvps.add(new BasicNameValuePair("q51154:10_choice3","0"));
        nvps.add(new BasicNameValuePair("q51154:11_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:11_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:11_:sequencecheck","3"));
        nvps.add(new BasicNameValuePair("q51154:11_choice0","1"));
        nvps.add(new BasicNameValuePair("q51154:11_choice1","0"));
        nvps.add(new BasicNameValuePair("q51154:11_choice2","0"));
        nvps.add(new BasicNameValuePair("q51154:11_choice3","1"));
        nvps.add(new BasicNameValuePair("q51154:12_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:12_:flagged","0"));
        nvps.add(new BasicNameValuePair("q51154:12_:sequencecheck","3"));
        nvps.add(new BasicNameValuePair("q51154:12_choice0","0"));
        nvps.add(new BasicNameValuePair("q51154:12_choice1","1"));
        nvps.add(new BasicNameValuePair("q51154:12_choice2","1"));
        nvps.add(new BasicNameValuePair("q51154:12_choice3","0"));
        nvps.add(new BasicNameValuePair("next","下一页"));
        nvps.add(new BasicNameValuePair("attempt","51154"));
        nvps.add(new BasicNameValuePair("thispage","1"));
        nvps.add(new BasicNameValuePair("nextpage","2"));
        nvps.add(new BasicNameValuePair("timeup","0"));
        nvps.add(new BasicNameValuePair("sesskey","BBVPUDoTc4"));
        nvps.add(new BasicNameValuePair("scrollpos",""));
        nvps.add(new BasicNameValuePair("slots","7,8,9,10,11,12"));

        String response = HttpClientUtil.post(url,null,nvps,headers,token,userName);
        System.out.println(response);
//        JSONObject jsonObject = JSON.parseObject(response);
//        System.out.println(JSONObject.toJSONString(jsonObject, SerializerFeature.PrettyFormat));

    }

    public static void getSection() throws IOException {
        String url = "http://xinjiang.ouchn.cn/course/view.php?id=1621";
        String userName = "2065001465720";
        String token = "8dgfjhqf466rtulfseakjh4doh";
        Document doc = getDocument(url,userName,token);
        Elements courses = doc.getElementsByClass("course-content");
        //System.out.println(courses.toString());

        if (CollectionUtils.isEmpty(courses)) {
            System.out.println("为空");
            return;
        }
        Element course = courses.get(0);
        int sectionCount = 100;
        List<String> lines = new ArrayList<>();
        for (int i = 2;i <= sectionCount;i++) {
            Element section = course.getElementById("section-" + i);
            //System.out.println(section.toString());
            if (null != section) {
                Elements instances = section.select("a[class=aalink]");
                for (Element instance:instances) {
                    String href = instance.attr("href");
                    String instanceName = instance.getElementsByClass("instancename").get(0).ownText();
                    String line = String.format("%s,%s",href,instanceName);
                    System.out.println(line);
                    lines.add(line);
                }
                System.out.println("\n");
                System.out.println("\n");
                System.out.println("-----------------------------------------");
            }
        }
        File file = new File("/Users/guiliangzhou/IdeaProjects/selfAnswerTool_250/section.txt");
        FileUtils.writeLines(file,lines);


    }

    public static Document getDocument(String url,String userName,String token) {
        Map<String,String> cookies = new HashMap<>();
        cookies.put("MoodleSession",token);
        cookies.put("username",userName);

        Map<String,String> headers = new HashMap<>();
        headers.put("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        headers.put("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8");

        Document doc = null;
        try {
            doc = Jsoup.connect(url)
                    .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36")
                    .cookies(cookies)
                    .headers(headers)
                    .timeout(5000)
                    .get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return doc;

    }

    /**
     *  获取Mid类型
     *  $.post(href+'theme/blueonionres/sectionInfo.php',{sectionid:sec,courseid:courseid}
     */

    public static void  getMidInfo() {
        String url = "http://xinjiang.ouchn.cn/theme/blueonionres/sectionInfo.php";
        String userName = "2065001465720";
        String token = "8dgfjhqf466rtulfseakjh4doh";
        Map<String,String> params = new HashMap<>();
        params.put("sectionid","57036");
        params.put("courseid","1621");
        String response = HttpClientUtil.post(url,params,token,userName);
        JSONObject jsonObject = JSON.parseObject(response);
        System.out.println(JSONObject.toJSONString(jsonObject, SerializerFeature.PrettyFormat));

    }


    public void  test () {
        Map<String,String> data = new HashMap<>();

        data.put("q51154:2_:flagged","0");
        data.put("q51154:2_:sequencecheck","2");
        data.put("q51154:2_answer","2");
        data.put("q51154:3_:flagged","0");
        data.put("q51154:3_:sequencecheck","2");
        data.put("q51154:3_answer","3");
        data.put("q51154:4_:flagged","0");
        data.put("q51154:4_:sequencecheck","2");
        data.put("q51154:4_answer","0");
        data.put("q51154:5_:flagged","0");
        data.put("q51154:5_:sequencecheck","2");
        data.put("q51154:5_answer","1");
        data.put("q51154:6_:flagged","0");
        data.put("q51154:6_:sequencecheck","2");
        data.put("q51154:6_answer","3");
        data.put("q51154:8_:flagged","0");
        data.put("q51154:8_:sequencecheck","2");
        data.put("q51154:8_choice1","1");
        data.put("q51154:8_choice2","1");
        data.put("q51154:8_choice3","1");
        data.put("q51154:9_:flagged","0");
        data.put("q51154:9_:sequencecheck","2");
        data.put("q51154:9_choice0","1");
        data.put("q51154:9_choice1","1");
        data.put("q51154:9_choice2","1");
        data.put("q51154:10_:flagged","0");
        data.put("q51154:10_:sequencecheck","2");
        data.put("q51154:10_choice1","1");
        data.put("q51154:10_choice2","1");
        data.put("q51154:11_:flagged","0");
        data.put("q51154:11_:sequencecheck","2");
        data.put("q51154:11_choice1","1");
        data.put("q51154:11_choice2","1");
        data.put("q51154:11_choice3","1");
        data.put("q51154:12_:flagged","0");
        data.put("q51154:12_:sequencecheck","2");
        data.put("q51154:12_choice0","1");
        data.put("q51154:12_choice1","1");
        data.put("q51154:12_choice2","1");
        data.put("q51154:12_choice3","1");
        data.put("q51154:14_:flagged","0");
        data.put("q51154:14_:sequencecheck","2");
        data.put("q51154:14_answer","1");
        data.put("q51154:15_:flagged","0");
        data.put("q51154:15_:sequencecheck","2");
        data.put("q51154:15_answer","1");
        data.put("q51154:16_:flagged","0");
        data.put("q51154:16_:sequencecheck","2");
        data.put("q51154:16_answer","0");
        data.put("q51154:17_:flagged","0");
        data.put("q51154:17_:sequencecheck","2");
        data.put("q51154:17_answer","0");
        data.put("q51154:18_:flagged","0");
        data.put("q51154:18_:sequencecheck","2");
        data.put("q51154:18_answer","0");
        data.put("next","结束试答…");
        data.put("attempt","51154");
        data.put("thispage","2");
        data.put("nextpage","-1");
        data.put("timeup","0");
        data.put("sesskey","wjspTHFntz");
        data.put("slots","1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18");

    }


}
