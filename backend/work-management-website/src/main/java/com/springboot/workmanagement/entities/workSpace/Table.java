package com.springboot.workmanagement.entities.workSpace;

import java.util.Date;

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
	private String title;
	private Date createDate;
	private boolean isPublic;
	
	
	//reference table
	@ManyToOne
	@JoinColumn(name = "workspace_ID", nullable = false)
	private WorkSpace workspace;
	
	@OneToOne
	@JoinColumn(name = "background_id")
	private Background background;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User owner;
	
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
	
	
	
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public boolean isPublic() {
		return isPublic;
	}

	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
	}

	public Background getBackground() {
		return background;
	}

	public void setBackground(Background background) {
		this.background = background;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "TABLE TITLE: " + this.title;
	}
	
}
