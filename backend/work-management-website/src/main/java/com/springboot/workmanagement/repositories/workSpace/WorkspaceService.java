package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;
import java.util.Set;

import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.entities.workSpace.WorkSpace;

public interface WorkspaceService {
	WorkSpace saveWorkSpace(WorkSpace workSpace);
	List<WorkSpace> getListWorkspace();
	Set<Table> getListTableForWorkspace(Integer wpID);

}
