package com.springboot.workmanagement.service.workSpace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.WorkSpace;
import com.springboot.workmanagement.repositories.workSpace.WorkSpaceRepository;

@Service
public class WorkSpaceServiceImpl implements WorkSpaceService{
	@Autowired
	private WorkSpaceRepository workSpaceRepository;

	@Override
	public WorkSpace saveWorkSpace(WorkSpace workSpace) {
		// TODO Auto-generated method stub
		return workSpaceRepository.save(workSpace);
	}
}
