package com.springboot.workmanagement.repositories.Authorization;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.UserJWT;

public interface UserJWTRepository extends CrudRepository<UserJWT, String> {

}
