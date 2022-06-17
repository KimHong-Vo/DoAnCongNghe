package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.Table;

@Service
public class TableImplement implements TableService{
	@Autowired
	TableRepository tableRepository;
	@Autowired 
	WorkSpaceRepository wsr;
	
	@Override
	public Table saveTable(Table table) {
		return tableRepository.save(table);
	}

	@Override
	public Table getTableById(String id) {
		Optional<Table> op = tableRepository.findById(id);
		if(op.isEmpty())
			return null;
		else
			return op.get();
	}

	@Override
	public List<Table> getAllTable() {
		// TODO Auto-generated method stub
		return (List<Table>) tableRepository.findAll();
	}

}
