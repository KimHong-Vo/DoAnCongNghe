package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.springboot.workmanagement.entities.workSpace.Tag;
@Repository
public interface TagRepository extends CrudRepository<Tag, Long>{


import com.springboot.workmanagement.entities.workSpace.Tag;

public interface TagRepository extends CrudRepository<Tag, Integer>{


}
