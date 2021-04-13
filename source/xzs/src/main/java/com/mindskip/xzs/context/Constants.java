package com.mindskip.xzs.context;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author LanceGui
 */
public class Constants {

    /**
     * 系统运行时的核数
     */
    public static final int NUMBER_OF_CORES = Runtime.getRuntime().availableProcessors();

    /**
     * 跑批线程池
     */
    public static final ExecutorService THREAD_POOL_BATCH =
            new ThreadPoolExecutor(NUMBER_OF_CORES * 2, NUMBER_OF_CORES * 2, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<>(5000));


}
