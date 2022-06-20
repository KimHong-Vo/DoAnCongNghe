package com.springboot.workmanagement.entities.workSpace;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="WorkSpace")
public class WorkSpace implements Serializable{
public class WorkSpace implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String description;
	private String logoPath;
	
	public WorkSpace() {}
	public WorkSpace(String newName, String newDescription) {
		this.name = newName;
		this.description = newDescription;
		

	}

	public WorkSpace() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLogoPath() {
		return logoPath;
	}

	public void setLogoPath(String logoPath) {
		this.logoPath = logoPath;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id: " + this.id + "- name: " + this.name + "- description: " + this.description;
	}
}
