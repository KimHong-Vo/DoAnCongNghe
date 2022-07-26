package com.springboot.workmanagement.repositories.workSpace;

import java.util.Set;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Tag;

public interface ListInTableService {
	ListInTable save(ListInTable list);
	Set<Tag> getListTag(Integer listInTableID);
	ListInTable findListInTbByID(Integer id);
	
	
}
