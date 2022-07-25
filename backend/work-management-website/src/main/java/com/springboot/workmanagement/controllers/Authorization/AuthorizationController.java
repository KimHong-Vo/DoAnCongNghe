package com.springboot.workmanagement.controllers.Authorization;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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


@CrossOrigin
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
	UserRepository repository;
	Iterable<User> users;
	// má»Ÿ form Ä‘Äƒng nháº­p
	// khai bÃ¡o Ä‘Æ°á»�ng dáº«n Ä‘áº¿n trang Ä‘Äƒng nháº­p

	// modelmap dÃ¹ng Ä‘á»ƒ Ä‘Æ°a dá»¯ liá»‡u lÃªn trang login
//	public String logIn(@ModelAttribute(value = "tk") UserLogin tk, ModelMap result, HttpSession session) {
//		result.put("tk", new UserLogin());
//		if(tk.getUsername().equals("doanthuc")&&tk.getPassword().equals("123")) {
//			session.setAttribute("username", tk.getUsername());
//			return "welcome";
//		}else {
////			result.put
//			
//			
//		}
//		return null;
//	}

	// xu ly dang nhap
	// https://localhost:8080/account/login
	@CrossOrigin
	@PostMapping("/login")
	public User logIn(@RequestBody User u) {
		System.out.print("Login: ");
		users = repository.findAll();
		for (User user : users) {
			if (user.equals(u)) {
				System.out.println("success");
				return user;
				
			}
		}
		System.out.println("fail");
		return null;
//		System.out.println("Hello");
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
