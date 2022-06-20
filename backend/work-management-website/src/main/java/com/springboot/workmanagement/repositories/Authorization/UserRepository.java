package com.springboot.workmanagement.repositories.Authorization;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.User;

public interface UserRepository extends CrudRepository<User, String> {

}
