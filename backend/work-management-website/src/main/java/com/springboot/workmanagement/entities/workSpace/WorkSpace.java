package com.springboot.workmanagement.entities.workspace;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import javax.persistence.ManyToOne;


@Entity
public class WorkSpace{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String description;
	private String logoPath;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "workspace")
	private Set<Table> tables = new HashSet<>();

	@ManyToOne
	private WorkSpaceType workSpaceType;


	public WorkSpace() {}
	public WorkSpace(String name, String description, WorkSpaceType workSpaceType) {
		this.name = name;

		this.description = description;	
	}
	
	public Set<Table> getTables() {
		return tables;
	}
	public void setTables(Set<Table> tables) {
		this.tables = tables;
	}

		this.description = description;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public WorkSpaceType getWorkSpaceType() {
		return workSpaceType;
	}
	public void setWorkSpaceType(WorkSpaceType workSpaceType) {
		this.workSpaceType = workSpaceType;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id: " + this.id + "- name: " + this.name + "- description: " + this.description ;
	}
}
