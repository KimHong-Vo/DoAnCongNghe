package com.springboot.workmanagement.DTO;

import java.util.Date;

import com.springboot.workmanagement.entities.theme.Background;
import com.springboot.workmanagement.entities.workSpace.User;

public class TableDTO {
	private String id;
	private String title;
	private Date createDate;
	private boolean isPublic;
	private Background background;
	private User owner;
	public TableDTO(String id, String title, Date createDate, boolean isPublic, Background background, User owner) {
		super();
		this.id = id;
		this.title = title;
		this.createDate = createDate;
		this.isPublic = isPublic;
		this.background = background;
		this.owner = owner;
	}
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
	
	

}