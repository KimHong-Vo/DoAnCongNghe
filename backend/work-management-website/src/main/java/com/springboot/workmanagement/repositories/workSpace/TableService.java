package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;
import java.util.Set;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Table;

public interface TableService {
	public Table saveTable(Table table);
	public Table getTableById(String id);
	public List<Table> getAllTable();
	Set<ListInTable> getAllListInTable(String tableID);

}
