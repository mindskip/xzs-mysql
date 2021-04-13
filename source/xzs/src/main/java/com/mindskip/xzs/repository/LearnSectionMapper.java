package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.LearnSection;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LearnSectionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(LearnSection record);

    int insertSelective(LearnSection record);

    LearnSection selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(LearnSection record);

    int updateByPrimaryKey(LearnSection record);

    List<LearnSection> getSectionBySubjectCode(String subjectCode);
}