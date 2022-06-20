package com.springboot.workmanagement.repositories.workSpace;

import org.springframework.data.repository.CrudRepository;

import com.springboot.workmanagement.entities.workSpace.Comment;

public interface CommentRepository extends CrudRepository<Comment, Integer>{

}
