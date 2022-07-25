package com.springboot.workmanagement.entities.workSpace;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WorkSpaceType {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String type;
	
	public WorkSpaceType() {}
	public WorkSpaceType(Integer id, String type) {
		super();
		this.id = id;
		this.type = type;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id: " + this.id + "- Type of work space: " + this.type;
	}
	
}
