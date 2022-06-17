package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.Table;

public interface TableRepository extends CrudRepository<Table, String>{
}