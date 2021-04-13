package com.mindskip.xzs.utility;

import com.alibaba.fastjson.JSONObject;
import com.mindskip.xzs.domain.LearnArchive;

/**
 * @author LanceGui
 */
public class OuchnParaserUtil {

    public static LearnArchive parseLearnArchive(JSONObject object) {
        if (null == object) {
            return null;
        }
        boolean authorization =  object.getBoolean("Authorization");
        if (!authorization) {
            return null;
        }
        JSONObject data = object.getJSONObject("Data");
        if (null == data) {
            return null;
        }
        LearnArchive archive = new LearnArchive();
        archive.setLearnCode(data.getLong("Id").toString());
        String str = data.getString("SemesterName");
        String[] strs = str.split("年");
        archive.setLearnYear(strs[0]);
        archive.setLearnQuarter(strs[1]);
        archive.setOrganizationName(data.getString("OrganizationName"));
        archive.setCompulsoryCredit(data.getDouble("CompulsoryCredit"));
        archive.setEarnedCompulsoryCredit(data.getDouble("EarnedCompulsoryCredit"));
        archive.setEarnedCredit(data.getDouble("EarnedCredit"));
        archive.setTotalCredit(data.getDouble("TotalCredit"));
        archive.setElectiveCredit(data.getDouble("ElectiveCredit"));
        archive.setEarnedElectivecredit(data.getDouble("EarnedElectiveCredit"));
        archive.setSpecialtyName(data.getString("SpecialtyName"));
        archive.setSpecialtyLevelName(data.getString("SpecialtyLevelName"));
        return archive;
    }
 }
