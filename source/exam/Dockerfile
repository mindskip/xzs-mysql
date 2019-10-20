FROM maven:3.6.2-jdk-8

MAINTAINER caoqiang<caoqiang@jiuqi.com.cn>
#ADD pom.xml /app/
#ADD src/ /app/src/
WORKDIR /app/
#RUN mvn package -Pdev
ADD target/exam-2.0.1.jar target/exam-2.0.1.jar

CMD ["java","-jar","target/exam-2.0.1.jar"]  