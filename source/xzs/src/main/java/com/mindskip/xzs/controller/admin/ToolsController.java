package com.mindskip.xzs.controller.admin;

import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.context.Constants;
import com.mindskip.xzs.service.AuthenticationService;
import com.mindskip.xzs.service.UserEventLogService;
import com.mindskip.xzs.service.UserService;
import com.mindskip.xzs.utility.SeleniumUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController("ToolsController")
@RequestMapping(value = "/api/admin/tools")
public class ToolsController extends BaseApiController {

    private final UserService userService;
    private final UserEventLogService userEventLogService;
    private final AuthenticationService authenticationService;

    @Autowired
    public ToolsController(UserService userService, UserEventLogService userEventLogService, AuthenticationService authenticationService) {
        this.userService = userService;
        this.userEventLogService = userEventLogService;
        this.authenticationService = authenticationService;
    }


    @RequestMapping(value = "fetch_user", method = RequestMethod.GET)
    public RestResponse<String> pageList() {
        Constants.THREAD_POOL_BATCH.execute(() -> {
            try {
                SeleniumUtil.fetchCourse();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        return RestResponse.ok("success");
    }

}
