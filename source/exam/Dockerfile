FROM maven:3.6.2-jdk-8

MAINTAINER caoqiang<caoqiang@jiuqi.com.cn>
#ADD pom.xml /app/
#ADD src/ /app/src/
WORKDIR /app/
#RUN mvn package -Pdev
ADD target/exam.jar /app/exam.jar

#CMD ["java", "-jar", "exam.jar"]  