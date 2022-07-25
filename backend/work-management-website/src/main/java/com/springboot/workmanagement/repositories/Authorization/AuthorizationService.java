package com.springboot.workmanagement.repositories.Authorization;

import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.entities.workSpace.UserJWT;

public interface AuthorizationService {

	void saveJWT(UserJWT ujwt);

	void removeTokenById(String token);

	User getUserByToken(String token);

}
