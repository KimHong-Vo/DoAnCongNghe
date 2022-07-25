package com.springboot.workmanagement.repositories.Authorization;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.User;

@Service
public class UserServiceImplement implements UserService{
	@Autowired
	UserRepository uRepo;
	

	@Override
	public User login(String email, String password) {
		System.out.println("Jump to uservice implement");
		Optional<User> u = uRepo.findById(email);
		if(u==null||u.isEmpty()) {
			return null;
		}else if(u.get().getPassword().equals(password)) {
			System.out.println("Jump to uservice implement");
			return u.get();
		}
		return null;
	}

}
