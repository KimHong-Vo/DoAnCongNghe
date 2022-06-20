package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
