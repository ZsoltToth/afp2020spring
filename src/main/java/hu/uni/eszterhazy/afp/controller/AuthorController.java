package hu.uni.eszterhazy.afp.controller;

import hu.uni.eszterhazy.afp.core.model.Author;
import hu.uni.eszterhazy.afp.core.service.AuthorManager;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value="/authors")
public class AuthorController {

    private AuthorManager authorManager;

    public AuthorController(AuthorManager authorManager) {
        this.authorManager = authorManager;
    }

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public Collection<Author> listAuthors(){
        return authorManager.listAuthors();
    }

    @RequestMapping(value = {"/record"}, method = RequestMethod.POST)
    public void recordAuthor(@RequestBody Author author){
        System.out.println(author);
        authorManager.recordAuthor(author);
    }
}
