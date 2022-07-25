package com.springboot.workmanagement.repositories.Authorization;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.entities.workSpace.UserJWT;

@Service
public class AuthorizationServiceImplement implements AuthorizationService{
	
	@Autowired
	UserJWTRepository userJWTRepo;

	@Override
	public void saveJWT(UserJWT ujwt) {
	    userJWTRepo.save(ujwt);
		
		
	}

	@Override
	public void removeTokenById(String token) {
		userJWTRepo.deleteById(token);
	}

	@Override
	public User getUserByToken(String token) {
		Optional<UserJWT> jwt = userJWTRepo.findById(token);
		return jwt.get().getUser();
	}

	@Override
	public boolean checkToken(String token) {
		Optional<UserJWT> jwt = userJWTRepo.findById(token);
		if(jwt.isEmpty())
		return false;
		else
			return true;
	}

}
