package hu.uni.eszterhazy.afp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Greetings {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello( @RequestParam(name = "name", required = false) String name){
        return name == null ? "Hello Wrold!" : String.format("Hello %s!", name);
    }
}
