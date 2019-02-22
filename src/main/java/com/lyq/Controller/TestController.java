package com.lyq.Controller;


import com.alibaba.dubbo.config.annotation.Reference;

import com.lyq.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class TestController {
      @Resource
      private ProductService productService;

           @GetMapping("test")
           public String test(){


                return "小明说："+productService.say();
            }

}
