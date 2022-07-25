package com.springboot.workmanagement.entities.workSpace;

import java.util.Date;
import java.util.HashSet;
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
public class ListInTable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Date createDate;
	private String name;
	private int position;

	// reference table
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User owner;

	@ManyToOne
	@JoinColumn(name = "table_id", nullable = false)
	@JsonIgnore
	private Table table;
	
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Tag> tables = new HashSet<>();

	public ListInTable() {
	}

	public ListInTable(Date createDate, String name, int position, User owner) {
		this.createDate = createDate;
		this.position = position;
		this.owner = owner;
//		this.table = table;
	}
	
	public ListInTable(String name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Set<Tag> getTables() {
		return tables;
	}

	public void setTables(Set<Tag> tables) {
		this.tables = tables;
	}

	public Table getTable() {
		return table;
	}

	public void setTable(Table table) {
		this.table = table;
	}

	

}
