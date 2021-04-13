package com.mindskip.xzs.parser;

import java.io.IOException;
import java.util.*;


import com.mindskip.xzs.utility.HttpClientUtil;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.helper.HttpConnection;
import org.jsoup.nodes.Document;


/**
 * @author LanceGui
 */
public class Parser2 {
    public static void main(String[] args) throws Exception {
        //answerQuestion();
        ans();
    }


    public static void answerQuestion() {
        String url = "http://xinjiang.ouchn.cn/mod/quiz/processattempt.php?cmid=166036";

        Map<String,String> cookies = new HashMap<>();
        cookies.put("MoodleSession","dhuh28i8rmtk3kikcuncnvpcgv");
        cookies.put("username","2065001465720");

        Map<String,String> headers = new HashMap<>();
        headers.put("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36");
        headers.put("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        headers.put("Accept-Encoding","gzip, deflate");
        headers.put("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8");
        headers.put("Content-Type","multipart/form-data; boundary=----WebKitFormBoundarynxc4XEbb0WE8ceVs");
        headers.put("Host","xinjiang.ouchn.cn");
        headers.put("Pragma","no-cache");
        headers.put("Cache-Control","no-cache");
        headers.put("Upgrade-Insecure-RequestsUpgrade-Insecure-Requests","1");
        headers.put("Origin","http://xinjiang.ouchn.cn");
        headers.put("Referer","http://xinjiang.ouchn.cn/mod/quiz/attempt.php?attempt=51154&cmid=166036&page=1");

        Collection<Connection.KeyVal> params = new LinkedList<>();
        params.add(HttpConnection.KeyVal.create("q51154:7_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:7_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:7_:sequencecheck",": 2"));
        params.add(HttpConnection.KeyVal.create("q51154:8_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:8_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:8_:sequencecheck",": 7"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice0",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice1",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice1",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice2",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice2",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:8_choice3",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_:sequencecheck",": 7"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice0",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice0",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice1",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice1",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice2",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:9_choice3",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_:sequencecheck",": 5"));
        params.add(HttpConnection.KeyVal.create("q51154:10_choice0",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_choice1",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_choice2",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:10_choice3",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_:sequencecheck",": 6"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice0",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice1",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice1",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice2",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice2",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:11_choice3",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_:flagged",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_:sequencecheck",": 7"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice0",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice0",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice1",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice1",": 1"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice2",": 0"));
        params.add(HttpConnection.KeyVal.create("q51154:12_choice3",": 0"));
        params.add(HttpConnection.KeyVal.create("next",": 下一页"));
        params.add(HttpConnection.KeyVal.create("attempt",": 51154"));
        params.add(HttpConnection.KeyVal.create("thispage",": 1"));
        params.add(HttpConnection.KeyVal.create("nextpage",": 2"));
        params.add(HttpConnection.KeyVal.create("timeup",": 0"));
        params.add(HttpConnection.KeyVal.create("sesskey",": c87z9Wi6IL"));
        params.add(HttpConnection.KeyVal.create("scrollpos",":"));
        params.add(HttpConnection.KeyVal.create("slots",": 7,8,9,10,11,12"));



        Document doc = null;
        try {
            doc = Jsoup.connect(url)
                    .cookies(cookies)
                    .headers(headers)
                    .data(params)
                    .timeout(5000)
                    .method(Connection.Method.POST)
                    .execute().parse();
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (null != doc  && null != doc.location()) {
            System.out.println(doc.location());
        }
        System.out.println("\n");
        System.out.println(doc.toString());

    }

    public static void ans() throws Exception {
        String url = "http://xinjiang.ouchn.cn/mod/quiz/processattempt.php?cmid=166036";
        String token = "dhuh28i8rmtk3kikcuncnvpcgv";
        String userName = "2065001465720";
        String  cookie = String.format("MoodleSession=%s; username=%s",token,userName);

        Map<String,String> headers = new HashMap<>();
        //cookie
        headers.put("Cookie",cookie);
        headers.put("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36");
        headers.put("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
        headers.put("Accept-Encoding","gzip, deflate");
        headers.put("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8");
        headers.put("Content-Type","multipart/form-data;charset=utf-8");
        headers.put("Host","xinjiang.ouchn.cn");
        headers.put("Pragma","no-cache");
        headers.put("Cache-Control","no-cache");
        headers.put("Upgrade-Insecure-RequestsUpgrade-Insecure-Requests","1");
        //headers.put("Origin","http://xinjiang.ouchn.cn");
        //headers.put("Referer","http://xinjiang.ouchn.cn/mod/quiz/attempt.php?attempt=51154&cmid=166036&page=1");
        //headers.put("Proxy-Connection","keep-alive");
        List<NameValuePair> params = new ArrayList<>();

        params.add(new BasicNameValuePair("q51154:7_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:7_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:7_:sequencecheck","2"));
        params.add(new BasicNameValuePair("q51154:8_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:8_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:8_:sequencecheck","7"));
        params.add(new BasicNameValuePair("q51154:8_choice0","0"));
        params.add(new BasicNameValuePair("q51154:8_choice1","0"));
        params.add(new BasicNameValuePair("q51154:8_choice1","1"));
        params.add(new BasicNameValuePair("q51154:8_choice2","0"));
        params.add(new BasicNameValuePair("q51154:8_choice2","1"));
        params.add(new BasicNameValuePair("q51154:8_choice3","0"));
        params.add(new BasicNameValuePair("q51154:9_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:9_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:9_:sequencecheck","7"));
        params.add(new BasicNameValuePair("q51154:9_choice0","0"));
        params.add(new BasicNameValuePair("q51154:9_choice0","1"));
        params.add(new BasicNameValuePair("q51154:9_choice1","0"));
        params.add(new BasicNameValuePair("q51154:9_choice1","1"));
        params.add(new BasicNameValuePair("q51154:9_choice2","0"));
        params.add(new BasicNameValuePair("q51154:9_choice3","0"));
        params.add(new BasicNameValuePair("q51154:10_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:10_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:10_:sequencecheck","5"));
        params.add(new BasicNameValuePair("q51154:10_choice0","0"));
        params.add(new BasicNameValuePair("q51154:10_choice1","0"));
        params.add(new BasicNameValuePair("q51154:10_choice2","0"));
        params.add(new BasicNameValuePair("q51154:10_choice3","0"));
        params.add(new BasicNameValuePair("q51154:11_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:11_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:11_:sequencecheck","6"));
        params.add(new BasicNameValuePair("q51154:11_choice0","0"));
        params.add(new BasicNameValuePair("q51154:11_choice1","0"));
        params.add(new BasicNameValuePair("q51154:11_choice1","1"));
        params.add(new BasicNameValuePair("q51154:11_choice2","0"));
        params.add(new BasicNameValuePair("q51154:11_choice2","1"));
        params.add(new BasicNameValuePair("q51154:11_choice3","0"));
        params.add(new BasicNameValuePair("q51154:12_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:12_:flagged","0"));
        params.add(new BasicNameValuePair("q51154:12_:sequencecheck","7"));
        params.add(new BasicNameValuePair("q51154:12_choice0","0"));
        params.add(new BasicNameValuePair("q51154:12_choice0","1"));
        params.add(new BasicNameValuePair("q51154:12_choice1","0"));
        params.add(new BasicNameValuePair("q51154:12_choice1","1"));
        params.add(new BasicNameValuePair("q51154:12_choice2","0"));
        params.add(new BasicNameValuePair("q51154:12_choice3","0"));
        params.add(new BasicNameValuePair("next","下一页"));
        params.add(new BasicNameValuePair("attempt","51154"));
        params.add(new BasicNameValuePair("thispage","1"));
        params.add(new BasicNameValuePair("nextpage","2"));
        params.add(new BasicNameValuePair("timeup","0"));
        params.add(new BasicNameValuePair("sesskey","c87z9Wi6IL"));
        params.add(new BasicNameValuePair("scrollpos",""));
        params.add(new BasicNameValuePair("slots","7,8,9,10,11,12"));

        HttpClientUtil.formDataRequest(url,params,headers);

    }



}
