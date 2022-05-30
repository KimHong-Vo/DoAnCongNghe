package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.UserLogin;

public interface UserRepository extends CrudRepository<UserLogin, Integer> {

}
