package com.mindskip.xzs.viewmodel.admin.exam;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class ExamPaperEditrandomRequestVM {

    private Integer id;
    @NotNull
    private Integer level;
    @NotNull
    private Integer subjectId;
    @NotNull
    private Integer paperType;
    @NotBlank
    private String name;
    @NotNull
    private Integer suggestTime;

    private List<String> limitDateTime;

    private String score;

    /** 单选题数量*/
    private Integer radioQuestionSum;

    /** 多选题数量*/
    private Integer multiSelectQuestionSum;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getPaperType() {
        return paperType;
    }

    public void setPaperType(Integer paperType) {
        this.paperType = paperType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSuggestTime() {
        return suggestTime;
    }

    public void setSuggestTime(Integer suggestTime) {
        this.suggestTime = suggestTime;
    }

    public List<String> getLimitDateTime() {
        return limitDateTime;
    }

    public void setLimitDateTime(List<String> limitDateTime) {
        this.limitDateTime = limitDateTime;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    /**
     * get radioQuestionSum
     *
     * @return radioQuestionSum
     */
    public Integer getRadioQuestionSum() {
        return radioQuestionSum;
    }

    /**
     * set radioQuestionSum
     *
     * @param radioQuestionSum radioQuestionSum
     * @return ExamPaperEditrandomRequestVM.
     */
    public ExamPaperEditrandomRequestVM setRadioQuestionSum(Integer radioQuestionSum) {
        this.radioQuestionSum = radioQuestionSum;
        return this;
    }

    /**
     * get multiSelectQuestionSum
     *
     * @return multiSelectQuestionSum
     */
    public Integer getMultiSelectQuestionSum() {
        return multiSelectQuestionSum;
    }

    /**
     * set multiSelectQuestionSum
     *
     * @param multiSelectQuestionSum multiSelectQuestionSum
     * @return ExamPaperEditrandomRequestVM.
     */
    public ExamPaperEditrandomRequestVM setMultiSelectQuestionSum(Integer multiSelectQuestionSum) {
        this.multiSelectQuestionSum = multiSelectQuestionSum;
        return this;
    }
}
