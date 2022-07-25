package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.repositories.Authorization.ListInTableRepository;

@Service
public class ListInTableImplement implements ListInTableService{
	@Autowired
    ListInTableRepository listRepo;
	@Override
	public void save(ListInTable list) {
		listRepo.save(list);
	}
	

}
