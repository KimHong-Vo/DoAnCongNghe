package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Tag;

public class TagImplement implements TagService{

	@Autowired
	TagRepository tagRepo;
	
	@Override
	public Tag saveTag(Tag tag) {
		return tagRepo.save(tag);
	}

	@Override
	public List<Tag> getAllTag() {
		return (List<Tag>) tagRepo.findAll();
	}

}
