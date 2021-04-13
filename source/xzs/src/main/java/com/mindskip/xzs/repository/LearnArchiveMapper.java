package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.LearnArchive;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LearnArchiveMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(LearnArchive record);

    int insertSelective(LearnArchive record);

    LearnArchive selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(LearnArchive record);

    int updateByPrimaryKey(LearnArchive record);
}