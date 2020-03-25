package hu.uni.eszterhazy.afp.dao;

import hu.uni.eszterhazy.afp.core.model.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author, Long> {
}
