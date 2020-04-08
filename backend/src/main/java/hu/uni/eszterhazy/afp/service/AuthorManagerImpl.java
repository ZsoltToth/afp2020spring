package hu.uni.eszterhazy.afp.service;

import hu.uni.eszterhazy.afp.core.model.Author;
import hu.uni.eszterhazy.afp.core.service.AuthorManager;
import hu.uni.eszterhazy.afp.dao.AuthorRepository;

import java.util.ArrayList;
import java.util.Collection;

public class AuthorManagerImpl implements AuthorManager {

    private AuthorRepository repository;

    public AuthorManagerImpl(AuthorRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Author> listAuthors() {
        return new ArrayList<Author>((Collection<? extends Author>) repository.findAll());
    }

    @Override
    public void recordAuthor(Author author) {
        repository.save(author);
    }
}
