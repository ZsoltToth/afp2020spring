package hu.uni.eszterhazy.afp.core.service;

import hu.uni.eszterhazy.afp.core.model.Author;

import java.util.Collection;

public interface AuthorManager {

    Collection<Author> listAuthors();
    void recordAuthor(Author author);
}
