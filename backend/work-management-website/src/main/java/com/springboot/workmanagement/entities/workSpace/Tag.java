package com.springboot.workmanagement.entities.workSpace;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tag implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date createDate;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private int position;
	
	// reference table
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User owner;
	
	@ManyToOne
	@JoinColumn(name = "list_id", nullable = false)
	@JsonIgnore
	private ListInTable list;
	
	@OneToMany(mappedBy = "tag",
	        cascade = CascadeType.ALL)
	private Set<Comment> commnents = new HashSet<>();
	
	public Tag() {}
	
	public Tag(String title, String description, int position) {
		this.title = title;
		this.description = description;
		this.position = position;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public ListInTable getList() {
		return list;
	}

	public void setList(ListInTable list) {
		this.list = list;
	}

	public Set<Comment> getCommnents() {
		return commnents;
	}

	public void setCommnents(Set<Comment> commnents) {
		this.commnents = commnents;
	}
	

	}
