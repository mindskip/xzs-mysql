package com.mindskip.xzs;

import com.mindskip.xzs.configuration.application.ApplicationContextProvider;
import com.mindskip.xzs.configuration.property.SystemConfig;
import com.mindskip.xzs.service.import_question.QuestionImport;
import com.mindskip.xzs.utility.ModelMapperSingle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.IOException;

/**
 * @author 么么哒
 */
@SpringBootApplication
@EnableTransactionManagement
@EnableConfigurationProperties(value = { SystemConfig.class})
@EnableCaching
public class XzsApplication {


    public static void main(String[] args) throws IOException {
        SpringApplication.run(XzsApplication.class, args);
        //ApplicationContextProvider.getBean(QuestionImport.class).save(1,"1621");
    }
}
