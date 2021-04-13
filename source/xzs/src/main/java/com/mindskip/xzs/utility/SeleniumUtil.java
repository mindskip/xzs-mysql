package com.mindskip.xzs.utility;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mindskip.xzs.configuration.application.ApplicationContextProvider;
import com.mindskip.xzs.domain.*;
import com.mindskip.xzs.domain.enums.ExamPaperTypeEnum;
import com.mindskip.xzs.domain.enums.UserStatusEnum;
import com.mindskip.xzs.repository.LearnArchiveMapper;
import com.mindskip.xzs.repository.SubjectMapper;
import com.mindskip.xzs.service.ExamPaperService;
import com.mindskip.xzs.service.SubjectService;
import com.mindskip.xzs.service.TextContentService;
import com.mindskip.xzs.service.UserService;
import net.lightbody.bmp.BrowserMobProxy;
import net.lightbody.bmp.BrowserMobProxyServer;
import net.lightbody.bmp.client.ClientUtil;
import net.lightbody.bmp.core.har.Har;
import net.lightbody.bmp.core.har.HarEntry;
import net.lightbody.bmp.core.har.HarResponse;
import net.lightbody.bmp.proxy.CaptureType;
import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.util.CollectionUtils;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * selenium自动化支持程度不高  , 故不采用
 */
public class SeleniumUtil {

    public static void main(String[] args) throws InterruptedException, IOException {
        fetchCourse();
    }
    public static void  fetchCourse () throws IOException, InterruptedException {
        List<User> users = ApplicationContextProvider.getBean(UserService.class).getUsers();
       /* Map<Integer,List<User>> userMap = new HashMap<>();
        int i = 1;
        for (User users1:users) {
            if (users1.getUserType().intValue() != 1) {
                continue;
            }
            if (users1.getId().intValue() < 10) {
                continue;
            }
            if (users1.getStatus().intValue() == 3) {
                continue;
            }
            int key = i % 5;
            List<User> list = userMap.getOrDefault(key,new ArrayList<>());
            list.add(users1);
            userMap.put(key,list);
            i++;
        }*/
      /* User user = ApplicationContextProvider.getBean(UserService.class).getUserById(2282);
       List<User> list = Lists.newArrayList(user);*/
       fetchCourse(users,0);
    }

        public static void  fetchCourse (List<com.mindskip.xzs.domain.User> subUsers,int order) throws IOException, InterruptedException {
        // start the proxy
        BrowserMobProxy proxy = new BrowserMobProxyServer();
        proxy.start(0);

        // get the Selenium proxy object
        Proxy seleniumProxy = ClientUtil.createSeleniumProxy(proxy);

        // configure it as a desired capability
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.PROXY, seleniumProxy);

/*
        File userInfoFile = new File("/Users/guiliangzhou/IdeaProjects/selfAnswerTool_250/src/main/resources/user"+i+".info");
        List<String> users = FileUtils.readLines(userInfoFile,"utf-8");
*/
        for (User user:subUsers) {
            if (user.getUserType().intValue() != 1) {
                continue;
            }
            if (user.getId().intValue() < 10) {
                continue;
            }
            if (user.getStatus().intValue() == UserStatusEnum.success.getCode()) {
                continue;
            }
            if (user.getStatus().intValue() == UserStatusEnum.error.getCode()) {
                continue;
            }
            user.setStatus(UserStatusEnum.running.getCode());
            ApplicationContextProvider.getBean(UserService.class).updateById(user);

            Integer  userid = user.getId();
            String username = user.getUserName();
            String password = user.getClearPassword();

            System.out.println("start fetch username:" + username);

            // start the browser up
            ChromeDriver chromeDriver = new ChromeDriver(capabilities);

            proxy.enableHarCaptureTypes(CaptureType.REQUEST_CONTENT, CaptureType.RESPONSE_CONTENT);

            WebDriver.Navigation navigation = chromeDriver.navigate();

            navigation.to("http://passport.ouchn.cn/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dstudentspace%26redirect_uri%3Dhttp%253A%252F%252Fstudent.ouchn.cn%252F%2523%252Fsignin-oidc%2523%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520ouchnuser%2520ouchnstudentspaceapi%2520offline_access%26state%3Dca1cb5d0270b49fdaea508b8a846c457%26nonce%3Dd257df51b0a141ac8ed35b1caf59ef4c");

            //WebDriverWait webDriverWait=new WebDriverWait(chromeDriver,5);

            WebElement agreeButton = chromeDriver.findElement(By.id("RememberLogin"));

            agreeButton.click();
            TimeUnit.SECONDS.sleep(1);

            WebElement userNameInput = chromeDriver.findElement(By.id("username"));
            userNameInput.clear();
            userNameInput.sendKeys(username);
            TimeUnit.SECONDS.sleep(1);

            WebElement passwordInput = chromeDriver.findElement(By.id("password"));
            passwordInput.clear();
            passwordInput.sendKeys(password);
            TimeUnit.SECONDS.sleep(1);

            //webDriverWait.until(ExpectedConditions.elementToBeClickable(By.id("loginId"))).sendKeys(username);

            WebElement loginBtn = chromeDriver.findElement(By.name("button"));

            loginBtn.click();

            TimeUnit.SECONDS.sleep(5);

            System.out.println(chromeDriver.manage().getCookies().toString());
            TimeUnit.SECONDS.sleep(5);

            //chromeDriver.navigate().refresh();
            chromeDriver.get("http://student.ouchn.cn/#/home");

            Set<Cookie> cookies = null;
            int count = 0;
            do{
                System.out.println("获取token第" + count  + "次 ");
                try {
                    cookies = chromeDriver.manage().getCookies();
                }catch (Exception e3){
                    e3.printStackTrace();
                }
            }while(cookies == null);
            System.out.println(cookies);
            TimeUnit.SECONDS.sleep(2);
            //获取 JS信息
            // create a new HAR with the label "yahoo.com"
            proxy.newHar("117.78.41.66");

            // open yahoo.com
            //chromeDriver.navigate().refresh();

            chromeDriver.navigate().refresh();

            TimeUnit.SECONDS.sleep(3);
            // get the HAR data
            Har har = proxy.getHar();

            JSONObject courseObject = null;
            JSONObject learnObject = null;

            Date now = new Date();

            //TODO  通过webDriver访问想获取的URL地址
            List<HarEntry> list =  har.getLog().getEntries();
            for (HarEntry harEntry : list){
                String url = harEntry.getRequest().getUrl();
                System.out.println(url);
                if(url.endsWith("/MyCourse/CoursesSemestersInfo")){
                    HarResponse harResponse = harEntry.getResponse();
                    String responseBody = harResponse.getContent().getText();

                    if (StringUtils.isNotEmpty(responseBody)) {
                        System.out.println(responseBody);
                        courseObject = JSON.parseObject(responseBody);
                    }
                }
                if(url.endsWith("/MyCourse/LearningArchives")){
                    HarResponse harResponse = harEntry.getResponse();
                    String responseBody = harResponse.getContent().getText();

                    if (StringUtils.isNotEmpty(responseBody)) {
                        System.out.println(responseBody);
                        learnObject = JSON.parseObject(responseBody);
                    }
                }

            }

           //处理自己的业务逻辑
            proxy.endHar();

            TimeUnit.SECONDS.sleep(3);

            List<WebElement> elements = chromeDriver.findElements(By.tagName("button"));

            System.out.println(elements.size());

            String  errInfo = null;

            for (WebElement element:elements) {
                try {
                    if (!"btn bg-primary".equalsIgnoreCase(element.getAttribute("class"))) {
                        continue;
                    }
                } catch (Exception ex) {
                    errInfo = ex.getMessage();
                    System.out.println("这个用户报错了报错了");
                    System.out.println(ex.toString());
                    System.out.println("上面是报错信息");
                    System.out.println(errInfo);
                    break;
                }
                System.out.println(element.getText());
                try {
                    element.click();
                } catch (Exception ex) {
                    errInfo = ex.getMessage();
                    System.out.println("这个用户报错了报错了");
                    System.out.println(ex.toString());
                    System.out.println("上面是报错信息");
                    break;
                }
                TimeUnit.SECONDS.sleep(2);
            }
            if (null != errInfo) {
                user.setStatus(UserStatusEnum.error.getCode());
                ApplicationContextProvider.getBean(UserService.class).updateById(user);
                chromeDriver.close();
                chromeDriver.quit();
                System.out.println("错误用户:" + username);
                System.out.println("错误信息:" + errInfo);
                continue;
            }
            Set<String>  ses  = chromeDriver.getWindowHandles();
            Deque<String> deque = new LinkedList<>();
            for (String str1:ses) {
                chromeDriver.switchTo().window(str1);
                String url = null;
                try {
                    url = chromeDriver.getCurrentUrl();
                } catch (Exception ex) {
                    errInfo = ex.getMessage();
                    System.out.println("这个用户报错了报错了");
                    System.out.println(ex.toString());
                    System.out.println("上面是报错信息");
                    break;
                }

                if (url.contains("home")) {
                    continue;
                }
                System.out.println(url);
                deque.addLast(url);
                //chromeDriver.close();
            }

            if (null != errInfo) {
                user.setStatus(UserStatusEnum.error.getCode());
                ApplicationContextProvider.getBean(UserService.class).updateById(user);
                chromeDriver.close();
                chromeDriver.quit();
                System.out.println("错误用户:" + username);
                System.out.println("错误信息:" + errInfo);
                continue;
            }

            //save learning
            LearnArchive learnArchive = OuchnParaserUtil.parseLearnArchive(learnObject);
            if (null == learnArchive) {
                user.setStatus(UserStatusEnum.error.getCode());
                ApplicationContextProvider.getBean(UserService.class).updateById(user);
                chromeDriver.close();
                chromeDriver.quit();
                System.out.println("错误用户:" + username);
                System.out.println("考试计划为空");
                continue;

            }
            learnArchive.setCreateTime(now);
            learnArchive.setUserId(userid);
            learnArchive.setUserName(username);
            ApplicationContextProvider.getBean(LearnArchiveMapper.class).insert(learnArchive);



            List<String> userCourses = new ArrayList<>();
            if (null != courseObject ) {
                JSONArray array = courseObject.getJSONObject("Data").getJSONArray("LearningCourses");
                for (Object object:array) {
                    JSONObject json = (JSONObject) object;
                    json.put("requestUrl",deque.pollLast());
                    String requestUrl = json.getString("requestUrl");
                    String examId = requestUrl.split("id=")[1].trim();
                    String courseCode = json.getString("CourseCode");
                    String courseName = json.getString("CourseName");
                    String courseClassName = json.getString("CourseClassName");
                    List<Subject> subjects = ApplicationContextProvider.getBean(SubjectMapper.class).getSubjectBySubjectCode(courseCode.trim());
                    Subject subject = null;
                    if (CollectionUtils.isEmpty(subjects)) {
                        subject = new Subject();
                        subject.setDeleted(false);
                        subject.setItemOrder(++order);
                        subject.setLevel(21);
                        subject.setLevelName(courseClassName);
                        subject.setName(courseName);
                        subject.setSubjectCode(courseCode);
                        ApplicationContextProvider.getBean(SubjectService.class).insert(subject);
                    } else {
                        subject = subjects.get(0);
                    }


                    TextContent paperContent = new TextContent();
                    paperContent.setCreateTime(now);
                    paperContent.setContent("待补充");
                    ApplicationContextProvider.getBean(TextContentService.class).insert(paperContent);


                    ExamPaper examPaper = new ExamPaper();
                    examPaper.setPaperType(ExamPaperTypeEnum.Fixed.getCode());
                    examPaper.setCreateTime(now);
                    examPaper.setCreateUser(4);
                    examPaper.setGradeLevel(21);
                    examPaper.setLearnArchiveId(learnArchive.getId());
                    examPaper.setDeleted(false);
                    examPaper.setFrameTextContentId(paperContent.getId());
                    examPaper.setScore(100);
                    examPaper.setQuestionCount(0);
                    examPaper.setExamCode(examId);
                    examPaper.setRequestUrl(requestUrl);
                    examPaper.setScore(100);
                    examPaper.setSuggestTime(100);
                    examPaper.setSubjectId(subject.getId());
                    examPaper.setSubjectCode(subject.getSubjectCode());
                    examPaper.setName(String.format("%s-%s-%s-%s(%s)-%s",learnArchive.getOrganizationName(),learnArchive.getLearnYear(),learnArchive.getLearnQuarter(),learnArchive.getSpecialtyName(),learnArchive.getSpecialtyLevelName(),courseName));

                    ApplicationContextProvider.getBean(ExamPaperService.class).insert(examPaper);

                    user.setStatus(UserStatusEnum.success.getCode());
                    ApplicationContextProvider.getBean(UserService.class).updateById(user);







/*
                    File courseFile = new File("/Users/guiliangzhou/IdeaProjects/selfAnswerTool_250/src/main/resources/course/" + courseCode + "_" + examId + ".course"+"i");
                    if (courseFile.exists()) {
                        System.out.println("文件已存在");
                        System.out.println(courseFile.getPath());
                        continue;
                    } else {
                        FileUtils.writeStringToFile(courseFile,JSONObject.toJSONString(json, SerializerFeature.PrettyFormat));
                    }
*/
                }

/*
                File userCourseFile =  new File("/Users/guiliangzhou/IdeaProjects/selfAnswerTool_250/src/main/resources/user_course/" + username + ".txt"+i);
                FileUtils.writeLines(userCourseFile,userCourses);
*/

                chromeDriver.close();
                chromeDriver.quit();
                TimeUnit.SECONDS.sleep(1);
                System.out.println("end fetch username:" + username);
            }

        }
        return;
    }
}
