package com.mindskip.xzs.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * t_learn_archive
 * @author 
 */
public class LearnArchive implements Serializable {
    private Integer id;

    /**
     * 用户Id
     */
    private Integer userId;

    /**
     * 用户名
     */
    private String userName;

    private String learnCode;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 学习中心
     */
    private String organizationName;

    /**
     * 入学年份
     */
    private String learnYear;

    /**
     * 入学季度
     */
    private String learnQuarter;

    /**
     * 必修总学分
     */
    private Double compulsoryCredit;

    /**
     * 必修已修学分
     */
    private Double earnedCompulsoryCredit;

    /**
     * 总学分
     */
    private Double totalCredit;

    /**
     * 已修总学分
     */
    private Double earnedCredit;

    /**
     * 已修选修学分
     */
    private Double earnedElectivecredit;

    /**
     * 选修总学分
     */
    private Double electiveCredit;

    /**
     * 专业名
     */
    private String specialtyName;

    /**
     * 专业分类名
     */
    private String specialtyLevelName;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getLearnCode() {
        return learnCode;
    }

    public void setLearnCode(String learnCode) {
        this.learnCode = learnCode;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getOrganizationName() {
        return organizationName;
    }

    public void setOrganizationName(String organizationName) {
        this.organizationName = organizationName;
    }

    public String getLearnYear() {
        return learnYear;
    }

    public void setLearnYear(String learnYear) {
        this.learnYear = learnYear;
    }

    public String getLearnQuarter() {
        return learnQuarter;
    }

    public void setLearnQuarter(String learnQuarter) {
        this.learnQuarter = learnQuarter;
    }

    public Double getCompulsoryCredit() {
        return compulsoryCredit;
    }

    public void setCompulsoryCredit(Double compulsoryCredit) {
        this.compulsoryCredit = compulsoryCredit;
    }

    public Double getEarnedCompulsoryCredit() {
        return earnedCompulsoryCredit;
    }

    public void setEarnedCompulsoryCredit(Double earnedCompulsoryCredit) {
        this.earnedCompulsoryCredit = earnedCompulsoryCredit;
    }

    public Double getTotalCredit() {
        return totalCredit;
    }

    public void setTotalCredit(Double totalCredit) {
        this.totalCredit = totalCredit;
    }

    public Double getEarnedCredit() {
        return earnedCredit;
    }

    public void setEarnedCredit(Double earnedCredit) {
        this.earnedCredit = earnedCredit;
    }

    public Double getEarnedElectivecredit() {
        return earnedElectivecredit;
    }

    public void setEarnedElectivecredit(Double earnedElectivecredit) {
        this.earnedElectivecredit = earnedElectivecredit;
    }

    public Double getElectiveCredit() {
        return electiveCredit;
    }

    public void setElectiveCredit(Double electiveCredit) {
        this.electiveCredit = electiveCredit;
    }

    public String getSpecialtyName() {
        return specialtyName;
    }

    public void setSpecialtyName(String specialtyName) {
        this.specialtyName = specialtyName;
    }

    public String getSpecialtyLevelName() {
        return specialtyLevelName;
    }

    public void setSpecialtyLevelName(String specialtyLevelName) {
        this.specialtyLevelName = specialtyLevelName;
    }
}