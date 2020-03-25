package hu.uni.eszterhazy.afp.web;

import hu.uni.eszterhazy.afp.controller.AuthorController;
import hu.uni.eszterhazy.afp.core.service.AuthorManager;
import hu.uni.eszterhazy.afp.dao.AuthorRepository;
import hu.uni.eszterhazy.afp.service.AuthorManagerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootConfiguration
public class WebConfig {

    @Bean
    public AuthorManager authorManager(AuthorRepository repository){
        return new AuthorManagerImpl(repository);
    }

}
