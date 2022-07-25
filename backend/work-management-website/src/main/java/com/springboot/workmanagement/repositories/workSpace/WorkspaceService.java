package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import com.springboot.workmanagement.entities.workSpace.WorkSpace;

public interface WorkspaceService {
	WorkSpace saveWorkSpace(WorkSpace workSpace);
	List<WorkSpace> getListWorkspace();

}
