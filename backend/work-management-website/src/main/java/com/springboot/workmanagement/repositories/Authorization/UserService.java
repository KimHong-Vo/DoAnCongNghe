package com.springboot.workmanagement.repositories.Authorization;

import com.springboot.workmanagement.entities.workSpace.User;

public interface UserService {

	User login(String email, String password);

}
