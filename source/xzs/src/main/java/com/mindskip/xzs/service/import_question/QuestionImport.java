package com.mindskip.xzs.service.import_question;

import com.mindskip.xzs.domain.Question;
import com.mindskip.xzs.domain.TextContent;
import com.mindskip.xzs.domain.enums.QuestionTypeEnum;
import com.mindskip.xzs.repository.TextContentMapper;
import com.mindskip.xzs.service.QuestionService;
import com.mindskip.xzs.service.TextContentService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class QuestionImport {

    @Autowired
    private TextContentService textContentService;

    @Autowired
    private QuestionService questionService;

    public void save(Integer subjectId,String subjectCode) throws IOException {
        File request = new File("E:\\code\\xzs-mysql\\source\\xzs\\src\\main\\resources\\request\\section.txt");
        List<String> lines = FileUtils.readLines(request,"utf-8");
        for (String str:lines) {
            String[] strs = str.split(",");
            String url = strs[0].trim();
            String name = strs[1].trim();
            if (!url.contains("view")) {
                continue;
            }
            Date now = new Date();
            TextContent content = new TextContent();
            content.setContent("{\"titleContent\":\""+ name +"\",\"analyze\":\""+url+"\",\"questionItemObjects\":[],\"correct\":\""+url+"\"}");
            content.setCreateTime(now);
            textContentService.insert(content);

            Question question = new Question();
            question.setSubjectId(subjectId);
            question.setSubjectCode(subjectCode);
            question.setQuestionCode(url.split("id=")[1]);
            question.setInfoTextContentId(content.getId());
            question.setRequestUrl(url);

            question.setQuestionType(QuestionTypeEnum.ShortAnswer.getCode());
            question.setGradeLevel(21);
            question.setDeleted(false);
            question.setCreateTime(now);
            question.setCorrect(url);
            question.setScore(0);
            question.setCreateUser(4);
            question.setDifficult(2);

            questionService.insert(question);

        }
        return;

    }

}
