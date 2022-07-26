package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Table;

@Service
public class ListInTableImplement implements ListInTableService {
	@Autowired
	ListInTableRepository listRepo;

	@Override
	public ListInTable saveListInTable(ListInTable list) {
		return listRepo.save(list);
	}

	@Override
	public List<ListInTable> getAllList() {
		return (List<ListInTable>) listRepo.findAll();
	}

	@Override
	public ListInTable getListById(Integer id) {
		Optional<ListInTable> op = listRepo.findById(id);
		if(op.isEmpty())
			return null;
		else
			return op.get();
	}


}
