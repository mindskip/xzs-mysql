package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.configuration.property.SystemConfig;
import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.service.AuthenticationService;
import com.mindskip.xzs.service.UserService;
import com.mindskip.xzs.utility.RsaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AuthenticationServiceImpl implements AuthenticationService {


    private final UserService userService;
    private final SystemConfig systemConfig;

    @Autowired
    public AuthenticationServiceImpl(UserService userService, SystemConfig systemConfig) {
        this.userService = userService;
        this.systemConfig = systemConfig;
    }


    /**
     * @param username username
     * @param password password
     * @return boolean
     */
    @Override
    public boolean authUser(String username, String password) {
        User user = userService.getUserByUserName(username);
        return authUser(user, username, password);
    }


    @Override
    public boolean authUser(User user, String username, String password) {
//        不推荐在对比信息时，将重要信息（pwd）解密，一次改为将输入进行加密对比，同时也能防止用户通过利用equal的时间长度判断密码长度
        if (user == null || password == null) {
            return false;
        }
        String encodePwd = user.getPassword();
        if (null == encodePwd || encodePwd.length() == 0) {
            return false;
        }
        String pwd = pwdEncode(password);
        return pwd.equals(encodePwd);
    }

    @Override
    public String pwdEncode(String password) {
        return RsaUtil.rsaEncode(systemConfig.getPwdKey().getPublicKey(), password);
    }

    @Override
    public String pwdDecode(String encodePwd) {
        return RsaUtil.rsaDecode(systemConfig.getPwdKey().getPrivateKey(), encodePwd);
    }


}
