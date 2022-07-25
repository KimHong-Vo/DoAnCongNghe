package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.WorkSpace;
import com.springboot.workmanagement.entities.workSpace.WorkSpaceType;

public interface WorkSpaceRepository extends CrudRepository<WorkSpace,Integer>{

}
