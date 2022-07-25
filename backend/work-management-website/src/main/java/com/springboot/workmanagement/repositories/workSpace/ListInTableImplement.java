package com.springboot.workmanagement.repositories.workSpace;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Tag;
import com.springboot.workmanagement.repositories.Authorization.ListInTableRepository;

@Service
public class ListInTableImplement implements ListInTableService{
	@Autowired
    ListInTableRepository listRepo;
	@Override
	public ListInTable save(ListInTable list) {
		return listRepo.save(list);
	}
	@Override
	public Set<Tag> getListTag(Integer listInTableID) {
		return listRepo.findById(listInTableID).get().getTables();
	}
	@Override
	public ListInTable findListInTbByID(Integer id) {
		return listRepo.findById(id).get();
	}
	

}
