package com.mindskip.xzs.utility;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.FormBodyPart;
import org.apache.http.entity.mime.FormBodyPartBuilder;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.util.CollectionUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HttpClientUtil {
    public static String getResByUrlAndCookie(String url , Map<String,String> headerParams , String cookie , boolean getCookie)  {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);
        Header header = new BasicHeader("Cookie",cookie);
        httpGet.addHeader(header);
        if(headerParams != null && headerParams.size() >0){
            for(Map.Entry<String, String> entry : headerParams.entrySet()){
                Header basicHeader = new BasicHeader(entry.getKey() , entry.getValue());
                httpGet.addHeader(basicHeader);
            }
        }
        CloseableHttpResponse response2 = null;
        try {
            response2 = httpclient.execute(httpGet);

            HttpEntity entity2 = response2.getEntity();
            String respStr = EntityUtils.toString(entity2 , Charset.defaultCharset());
            Header[] cookies = response2.getHeaders("Set-Cookie");
            StringBuffer cookieStr = new StringBuffer();
            if(cookies != null && cookies.length != 0){
                for(Header cookHeader : cookies){
                    cookieStr.append(cookHeader.getValue() + ";");
                }
            }
            response2.close();

            if(getCookie){
                return respStr + "#" + cookieStr.toString();
            }else{
                return respStr;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;

    }

    public static String postResByUrlAndCookie(String url , String cookie,Map<String,String> params , Boolean getCookie) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpPost httPost = new HttpPost(url);
        List<NameValuePair> nvps = new ArrayList<NameValuePair>();
        if(params != null && params.size() != 0){
            for(Map.Entry entry : params.entrySet()){
                nvps.add(new BasicNameValuePair(entry.getKey().toString() , entry.getValue().toString()));
            }
        }
        Header header = new BasicHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");

        //cookie
        if(cookie != null && !cookie.equals("")){
            Header cookieHeader = new BasicHeader("Cookie",cookie);
            httPost.addHeader(cookieHeader);
        }

        Header referHeader = new BasicHeader("Referer","http://sso.njcedu.com/login.htm");
        httPost.addHeader(header);

        httPost.addHeader(referHeader);
        httPost.addHeader(header);
        try {
            httPost.setEntity(new UrlEncodedFormEntity(nvps , Charset.forName("UTF-8")));
            CloseableHttpResponse response2 = httpclient.execute(httPost);
            Header[] cookies = response2.getHeaders("Set-Cookie");
            StringBuffer cookieStr = new StringBuffer();
            if(cookies != null && cookies.length != 0){
                for(Header cookHeader : cookies){
                    cookieStr.append(cookHeader.getValue() + ";");
                }
            }

            HttpEntity entity2 = response2.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed

            String respStr = EntityUtils.toString(entity2 , Charset.defaultCharset());
            if(getCookie){
                return respStr + "#" + cookieStr.toString();
            }

            response2.close();
            return respStr;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;

    }

    public static String post(String url ,Map<String,String> params ,String token,String userName) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpPost httPost = new HttpPost(url);
        List<NameValuePair> nvps = new ArrayList<NameValuePair>();
        if(params != null && params.size() != 0){
            for(Map.Entry entry : params.entrySet()){
                nvps.add(new BasicNameValuePair(entry.getKey().toString() , entry.getValue().toString()));
            }
        }
        Header header = new BasicHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
        httPost.addHeader(header);

        //cookie
        Header cookieHeader = new BasicHeader("Cookie","MoodleSession=" + token);
        httPost.addHeader(cookieHeader);

//        Header referHeader = new BasicHeader("Accept","application/json");
//        httPost.addHeader(referHeader);

        Header agent = new BasicHeader("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36");
        httPost.addHeader(agent);

        try {
            httPost.setEntity(new UrlEncodedFormEntity(nvps , Charset.forName("UTF-8")));
            CloseableHttpResponse response2 = httpclient.execute(httPost);
            HttpEntity entity2 = response2.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed
            String respStr = EntityUtils.toString(entity2);
            response2.close();
            return respStr;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;

    }

    public static String formDataRequest(String url ,List<NameValuePair> request,Map<String,String> headers) throws Exception {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost = new HttpPost(url);

        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.setBoundary("----WebKitFormBoundarynxc4XEbb0WE8ceVs");

        if (!CollectionUtils.isEmpty(request))  {
            for (NameValuePair pair:request) {
                //FormBodyPart part = FormBodyPartBuilder.create(pair.getName(),new StringBody(pair.getValue(),ContentType.MULTIPART_FORM_DATA.withCharset(Charset.forName("utf-8")))).build();
                FormBodyPart part1 = new FormBodyPart(pair.getName(),new StringBody(pair.getValue(),ContentType.MULTIPART_FORM_DATA.withCharset(Charset.forName("utf-8"))));
                part1.getHeader().removeFields("Content-Type");
                part1.getHeader().removeFields("Content-Transfer-Encoding");
                builder.addPart(part1);
            }
        }
        if (!CollectionUtils.isEmpty(headers))  {
            for(Map.Entry<String,String> entry : headers.entrySet()){
                httpPost.addHeader(entry.getKey(),entry.getValue());
            }
        }
        HttpEntity entity = builder.setContentType(ContentType.MULTIPART_FORM_DATA).setCharset(Charset.forName("utf-8")).build();
        //entity.writeTo(System.out);
        httpPost.setEntity(entity);

        try {
            CloseableHttpResponse response = httpclient.execute(httpPost);
            try {
                int code = response.getStatusLine().getStatusCode();
                String info = response.getStatusLine().getReasonPhrase();
                System.out.println("----------------------------------------");
                System.out.println(response.getStatusLine());
                HttpEntity resEntity = response.getEntity();
                if (resEntity != null) {
                    System.out.println("Response content length: " + resEntity.getContentLength());
                    System.out.println(resEntity);
                }
                EntityUtils.consume(resEntity);
            } finally {
                response.close();
            }
        } finally {
            httpclient.close();
        }
        return null;
    }

    public static String post(String url ,Map<String,String> params ,List<NameValuePair> nvps,Map<String,String> headers,String token,String userName) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpPost httPost = new HttpPost(url);
        if (CollectionUtils.isEmpty(nvps)) {
            nvps = new ArrayList<>();
        }
        if(params != null && params.size() != 0){
            for(Map.Entry entry : params.entrySet()){
                nvps.add(new BasicNameValuePair(entry.getKey().toString() , entry.getValue().toString()));
            }
        }

        if(headers != null && headers.size() != 0){
            for(Map.Entry entry : headers.entrySet()){
                httPost.addHeader(new BasicHeader(entry.getKey().toString() , entry.getValue().toString()));
            }
        }

        //cookie
        Header cookieHeader = new BasicHeader("Cookie","MoodleSession=" + token + ";" + "username" + "=" + userName);
        httPost.addHeader(cookieHeader);



        try {
            httPost.setEntity(new UrlEncodedFormEntity(nvps , Charset.forName("UTF-8")));
            CloseableHttpResponse response2 = httpclient.execute(httPost);
            HttpEntity entity2 = response2.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed
            String respStr = EntityUtils.toString(entity2);
            response2.close();
            return respStr;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;

    }


}
