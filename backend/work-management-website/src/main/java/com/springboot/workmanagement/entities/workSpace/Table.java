package com.springboot.workmanagement.entities.workSpace;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

import com.springboot.workmanagement.entities.theme.Background;

@Entity
@javax.persistence.Table(name = "tables")
public class Table {
	// using uuid for generate string id
	@Id @GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;
	
	@ManyToOne
	@JoinColumn(name = "workspace_ID", nullable = false)
	private WorkSpace workspace;
	
	
	private String title;
	
	@OneToOne
	@JoinColumn(name = "background_id")
	private Background background;

	public Table(String title) {
		this.title = title;
	}
	
	public Table() {}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public WorkSpace getWorkspace() {
		return workspace;
	}

	public void setWorkspace(WorkSpace workspace) {
		this.workspace = workspace;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "TABLE TITLE: " + this.title;
	}
	
}
