import{_ as l,r as d,o as a,c as r,a as e,b as n,d as s,e as t}from"./app.123c31d4.js";const c={},o=e("h1",{id:"_5-项目开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-项目开发","aria-hidden":"true"},"#"),n(" 5. 项目开发")],-1),v=e("h3",{id:"_5-1-开发环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-1-开发环境","aria-hidden":"true"},"#"),n(" 5.1 开发环境")],-1),u=e("thead",null,[e("tr",null,[e("th",null,"环境"),e("th",null,"版本"),e("th",null,"下载地址")])],-1),m=e("td",null,"NodeJs",-1),h=e("td",null,"16",-1),b={href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer"},_=e("td",null,"Jdk",-1),p=e("td",null,"1.8",-1),x={href:"https://www.oracle.com/java/technologies/downloads/#java8-windows",target:"_blank",rel:"noopener noreferrer"},g=e("td",null,"Mysql",-1),w=e("td",null,"8.0",-1),f={href:"https://dev.mysql.com/downloads/windows/installer/8.0.html",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"_5-2-开发说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-2-开发说明","aria-hidden":"true"},"#"),n(" 5.2 开发说明")],-1),k={href:"https://www.mindskip.net:999",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,"代码下载 mysql版本，配合相应的数据库使用",-1),q=e("li",null,"安装mysql ，导入xzs-mysql.sql脚本",-1),j=e("li",null,"学生端默认账号：student / 123456",-1),I=e("li",null,"管理端默认账号：admin / 123456",-1),B=e("h3",{id:"_5-3-后端开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-3-后端开发","aria-hidden":"true"},"#"),n(" 5.3 后端开发")],-1),N=e("li",null,"/uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开",-1),T=e("li",null,"打开application-dev.yml文件中，配置好mysql的服务地址",-1),V=e("li",null,"去七牛云官网申请好对象存储账号，修改application.yml中的qn相关的配置，七牛云主要用于文件存储",-1),E=e("li",null,"启动后台程序,默认端口为8000",-1),J={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},S={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="_5-4-前端开发" tabindex="-1"><a class="header-anchor" href="#_5-4-前端开发" aria-hidden="true">#</a> 5.4 前端开发</h3><ul><li>在win11系统中输入命令，低版本的win会出现不兼容的问题，无法执行对应的命令。</li><li>前端使用webstorm或者vscode，分别打开文件夹打开源代码\\source\\vue\\xzs-student和source\\vue\\xzs-admin</li><li>执行下面2个命令，安装node_module：</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm config set sass_binary_site https://registry.npmmirror.com
npm install --registry https://registry.npmmirror.com  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>若执行上面命令报错，先删除node_modules文件夹，再解压node_modules.zip文件到当前文件夹。</li><li>执行下面命令，启动前端代码</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>打包命名</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-5-小程序开发" tabindex="-1"><a class="header-anchor" href="#_5-5-小程序开发" aria-hidden="true">#</a> 5.5 小程序开发</h3><ul><li>去腾讯小程序官网注册账号，拿到appid和secret信息</li><li>下载好微信小程序开发工具</li><li>打开工具，导入代码 \\source\\wx\\xzs-student</li><li>修改application.yml文件里的wx配置下面的appid和secret</li><li>启动微信小程序开发工具</li></ul><h3 id="_5-6-代码结构简介" tabindex="-1"><a class="header-anchor" href="#_5-6-代码结构简介" aria-hidden="true">#</a> 5.6 代码结构简介</h3><h4 id="_5-6-1-后端系统" tabindex="-1"><a class="header-anchor" href="#_5-6-1-后端系统" aria-hidden="true">#</a> 5.6.1 后端系统</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- source 代码文件夹
 - xzs 后端代码
  - src 
   - main
    - java
      - xzs
       - base   项目基础类
       - configuration   springboot的基础配置
       - context   项目上下文
       - controller
        - admin   管理端控制器
        - student   学生端控制器
        - wechat   小程序控制器
       - domain   领域对象
       - event   事件驱动模型，配合监听器一起使用
       - exception   业务异常
       - listener   监听器，配合event使用
       - repository   数据仓储，mybaties的映射Mapper
       - service   服务
        - impl   服务实现
       - utility   工具类
       - viewmodel   视图、接口类
        - admin   管理端视图类
        - student   学生端视图类
        - wx   微信端视图类
      - resources
       - mapper   数据仓库的sql文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-6-2-学生端" tabindex="-1"><a class="header-anchor" href="#_5-6-2-学生端" aria-hidden="true">#</a> 5.6.2 学生端</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- source 代码文件夹
 - vue 后端代码
  - xzs-student  学生端代码
   - public 公共文件、主页
   - src 前端代码
    - api 接口地址
    - assets 图片资源
    - components 公共组件
     - BackToTop 返回顶部组件
     - Pagination 分页组件
     - SvgIcon 图标组件
     - Ueditor 编辑器组件
    - icons 图标库
    - layout 母版页
    - store 状态管理
    - styles 主题样式
    - utils 公共方法
    - views 视图、系统页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-6-3-微信端" tabindex="-1"><a class="header-anchor" href="#_5-6-3-微信端" aria-hidden="true">#</a> 5.6.3 微信端</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- source 代码文件夹
 - wx 微信端代码
  - xzs-student  学生端代码
   - assets 图片资源文件
   - component 组件库
    - iView 主题
   - pages 小程序页面
   - utils 公共方法
   - wxs 页面公共方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-6-4-管理端" tabindex="-1"><a class="header-anchor" href="#_5-6-4-管理端" aria-hidden="true">#</a> 5.6.4 管理端</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- source 代码文件夹
 - vue 后端代码
  - xzs-student  学生端代码
   - public 公共文件、主页
   - src 前端代码
    - api 接口地址
    - assets 图片资源
    - components 公共组件
     - BackToTop 返回顶部组件
     - Pagination 分页组件
     - SvgIcon 图标组件
     - Ueditor 编辑器组件
    - icons 图标库
    - layout 母版页
    - store 状态管理
    - styles 主题样式
    - utils 公共方法
    - views 视图、系统页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function M(P,U){const i=d("ExternalLinkIcon");return a(),r("div",null,[o,v,e("table",null,[u,e("tbody",null,[e("tr",null,[m,h,e("td",null,[e("a",b,[n("https://nodejs.org/download/release/latest-v16.x/"),s(i)])])]),e("tr",null,[_,p,e("td",null,[e("a",x,[n("https://www.oracle.com/java/technologies/downloads/#java8-windows"),s(i)])])]),e("tr",null,[g,w,e("td",null,[e("a",f,[n("https://dev.mysql.com/downloads/windows/installer/8.0.html"),s(i)])])])])]),y,e("ul",null,[e("li",null,[n("数据库脚本下载地址："),e("a",k,[n("https://www.mindskip.net:999"),s(i)]),n("，创建表初始化数据，数据库名称为xzs")]),z,q,j,I]),B,e("ul",null,[N,T,V,E,e("li",null,[n("学生系统地址："),e("a",J,[n("http://ip:8000/student"),s(i)])]),e("li",null,[n("管理端地址："),e("a",S,[n("http://ip:8000/admin"),s(i)])])]),L])}const C=l(c,[["render",M],["__file","develop.html.vue"]]);export{C as default};
