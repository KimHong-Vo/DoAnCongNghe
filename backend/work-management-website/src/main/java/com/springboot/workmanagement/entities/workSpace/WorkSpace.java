package com.springboot.workmanagement.entities.workSpace;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="WorkSpace")
public class WorkSpace{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String workspace_name;
	private String nameTable;
	private int idUser;
	private String logo;
	private String typeOfWorkSpace;
	private String descriptionOfWorkSpace;
	public WorkSpace() {
		super();
	}
	public WorkSpace(String workspace_name, String nameTable, int idUser, String logo,String typeOfWorkSpace, String descriptionOfWorkSpace) {
		super();
		this.workspace_name = workspace_name;
		this.nameTable = nameTable;
		this.idUser = idUser;
		this.logo = logo;
		this.typeOfWorkSpace = typeOfWorkSpace;
		this.descriptionOfWorkSpace = descriptionOfWorkSpace;
	}
	public String getWorkspace_name() {
		return workspace_name;
	}
	public void setWorkspace_name(String workspace_name) {
		this.workspace_name = workspace_name;
	}
	public String getNameTable() {
		return nameTable;
	}
	public void setNameTable(String nameTable) {
		this.nameTable = nameTable;
	}
	public int getIdUser() {
		return idUser;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	public String getTypeOfWorkSpace() {
		return typeOfWorkSpace;
	}
	public void setTypeOfWorkSpace(String typeOfWorkSpace) {
		this.typeOfWorkSpace = typeOfWorkSpace;
	}
	public String getDescriptionOfWorkSpace() {
		return descriptionOfWorkSpace;
	}
	public void setDescriptionOfWorkSpace(String descriptionOfWorkSpace) {
		this.descriptionOfWorkSpace = descriptionOfWorkSpace;

public class WorkSpace implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String description;
	
	public WorkSpace() {}
	public WorkSpace(String newName, String newDescription) {
		this.name = newName;
		this.description = newDescription;
		

	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getId() {
		return this.id;
	}

	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id: " + this.id + "- name: " + this.name + "- description: " + this.description;
	}
	
	
}