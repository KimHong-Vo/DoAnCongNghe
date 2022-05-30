package com.springboot.workmanagement.controllers.Authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.workmanagement.repositories.Authorization.UserRepository;
import com.springboot.workmanagement.entities.workSpace.UserLogin;



@RestController
@RequestMapping(value = "/account")
public class AuthorizationController {
	@Autowired
	UserRepository repository;
	Iterable<UserLogin> users;
	// mở form đăng nhập
	// khai báo đường dẫn đến trang đăng nhập

	// modelmap dùng để đưa dữ liệu lên trang login
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
	@GetMapping("/login")
	public UserLogin logIn(@RequestParam("email") String email, @RequestParam("password") String password) {
		users = repository.findAll();
		for (UserLogin user : users) {
			if (user.getEmail().equals(email)&&user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
//		System.out.println("Hello");
	}

}
