package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.ListInTable;


public interface ListInTableService {
	public ListInTable saveListInTable(ListInTable list);
	public List<ListInTable> getAllList();
	public ListInTable getListById(Integer id);

}
