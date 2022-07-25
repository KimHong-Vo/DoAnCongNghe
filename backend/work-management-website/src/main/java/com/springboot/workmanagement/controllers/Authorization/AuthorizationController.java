package com.springboot.workmanagement.controllers.Authorization;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.workmanagement.repositories.Authorization.AuthorizationService;
import com.springboot.workmanagement.repositories.Authorization.UserService;
import com.springboot.workmanagement.Request.UserRequest;
import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.entities.workSpace.UserJWT;



@RestController
@RequestMapping(value = "/account")
public class AuthorizationController {
	@Autowired
	UserService uService;
	@Autowired
	AuthorizationService authService;
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody(required = true) UserRequest userReq){
		User result = uService.login(userReq.getEmail(),userReq.getPassword());
		if(result==null) {
			return new ResponseEntity<String>("",HttpStatus.UNAUTHORIZED);
		}else {
			String token = Base64.getEncoder().encodeToString(result.getEmail().getBytes());
			UserJWT ujwt = new UserJWT();
			ujwt.setCode(token);
			ujwt.setUser(result);
			authService.saveJWT(ujwt);
			return new ResponseEntity<String>(token, HttpStatus.OK);
		}
	}
	
	@GetMapping("/getUser")
	public ResponseEntity<User> getUserByToken(@RequestHeader("Authorization") String token) {
		User result = authService.getUserByToken(token);
		if(result==null)
			return new ResponseEntity<User>(result, HttpStatus.UNAUTHORIZED);
		else {	
			return new ResponseEntity<User>(result, HttpStatus.OK);
		}
	}
	
	@GetMapping("/logout")
	public void removeToken(@RequestHeader("Authorization") String token) {
		authService.removeTokenById(token);
	}
}
