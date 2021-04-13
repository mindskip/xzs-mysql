package com.mindskip.xzs.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * t_learning_section
 * @author 
 */
public class LearnSection implements Serializable {
    private Integer id;

    /**
     * 学科id
     */
    private Integer subjectId;

    /**
     * 学科编码
     */
    private String subjectCode;

    /**
     * 学科名称
     */
    private String subjectName;

    /**
     * 小节点编码
     */
    private String midCode;

    /**
     * 小节点名称
     */
    private String midName;

    /**
     * 小节点类型
     */
    private String midType;

    /**
     * 小节点顺序
     */
    private Integer midOrder;

    /**
     * 小节点完成状态
     */
    private Byte midOver;

    /**
     * 小节点请求地址
     */
    private String requestUrl;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 创建人
     */
    private Integer createUserId;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectCode() {
        return subjectCode;
    }

    public void setSubjectCode(String subjectCode) {
        this.subjectCode = subjectCode;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getMidCode() {
        return midCode;
    }

    public void setMidCode(String midCode) {
        this.midCode = midCode;
    }

    public String getMidName() {
        return midName;
    }

    public void setMidName(String midName) {
        this.midName = midName;
    }

    public String getMidType() {
        return midType;
    }

    public void setMidType(String midType) {
        this.midType = midType;
    }

    public Integer getMidOrder() {
        return midOrder;
    }

    public void setMidOrder(Integer midOrder) {
        this.midOrder = midOrder;
    }

    public Byte getMidOver() {
        return midOver;
    }

    public void setMidOver(Byte midOver) {
        this.midOver = midOver;
    }

    public String getRequestUrl() {
        return requestUrl;
    }

    public void setRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Integer createUserId) {
        this.createUserId = createUserId;
    }
}