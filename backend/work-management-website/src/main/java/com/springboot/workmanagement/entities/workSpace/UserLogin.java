package com.springboot.workmanagement.entities.workSpace;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.sun.istack.NotNull;

@Entity
public class UserLogin {
	@Id
	@NotNull
	private String email;
	@NotNull
	private String password;

	private String fullName;

	public UserLogin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public UserLogin() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

}
