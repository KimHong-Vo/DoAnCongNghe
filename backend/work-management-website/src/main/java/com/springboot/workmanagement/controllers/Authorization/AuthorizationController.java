package com.springboot.workmanagement.controllers.Authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.workmanagement.repositories.Authorization.UserRepository;
import com.springboot.workmanagement.entities.workSpace.User;



@RestController
@RequestMapping(value = "/account")
public class AuthorizationController {
	@Autowired
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
	@PostMapping("/login")
	public User logIn(@RequestBody User u) {
		users = repository.findAll();
		for (User user : users) {
			if (user.equals(u)) {
				return user;
			}
		}
		return null;
//		System.out.println("Hello");
	}

}
