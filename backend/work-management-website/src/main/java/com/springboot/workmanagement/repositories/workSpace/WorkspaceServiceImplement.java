package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.entities.workSpace.WorkSpace;

@Service
public class WorkspaceServiceImplement implements WorkspaceService{
	@Autowired
	WorkSpaceRepository worspaceRepository;
	@Override
	public WorkSpace saveWorkSpace(WorkSpace workSpace) {
		// TODO Auto-generated method stub
		return worspaceRepository.save(workSpace);
	}
	@Override
	public List<WorkSpace> getListWorkspace() {
		return (List<WorkSpace>)worspaceRepository.findAll();
	}
	@Override
	public Set<Table> getListTableForWorkspace(Integer wpID) {
		WorkSpace wp = worspaceRepository.findById(wpID).get();
		System.out.println("worspace"+wp.getName());
		System.out.println("worspace tabe size"+wp.getTables().size());
		return wp.getTables();
	}

}
