package com.springboot.workmanagement.entities.theme;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Background {
	@Id
	private String id;
	private String path;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	
	

}
