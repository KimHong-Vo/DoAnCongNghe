package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import com.springboot.workmanagement.entities.workSpace.Table;

public interface TableService {
	public Table saveTable(Table table);
	public Table getTableById(String id);
	public List<Table> getAllTable();


}
