package com.springboot.workmanagement.entities.workSpace;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.sun.istack.NotNull;

@Entity
public class User {
	@Id
	@NotNull
	private String email;
	@NotNull
	private String password;

	private String fullName;
	
	private String profile;
	private Date joinDate;

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public User() {}

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

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public Date getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj instanceof User) {
			return (((User) obj).getEmail().equals(this.email) && ((User) obj).getPassword().equals(this.password));
		}
		else return false;
	}

}
