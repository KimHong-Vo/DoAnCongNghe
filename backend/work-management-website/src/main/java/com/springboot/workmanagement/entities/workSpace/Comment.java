package com.springboot.workmanagement.entities.workSpace;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.swing.text.html.parser.ContentModel;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "comments")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private Date createDate;
	private String content;

	@OneToOne(cascade = CascadeType.ALL)
	private AttachFile attachFile;
	
//	@ManyToOne
//	@JoinColumn(name = "user_id")
//	private User user;
	public Comment() {}
	public Comment(Date date, String content, AttachFile attach) {
		this.createDate = date;
		this.content = content;
		this.attachFile = attach;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public AttachFile getAttachFilePath() {
		return attachFile;
	}

	public void setAttachFilePath(AttachFile attachFilePath) {
		this.attachFile = attachFilePath;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
	
	
	
	

}
