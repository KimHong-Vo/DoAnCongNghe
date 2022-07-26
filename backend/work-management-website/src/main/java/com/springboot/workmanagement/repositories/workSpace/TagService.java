package com.springboot.workmanagement.repositories.workSpace;


import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.Tag;


public interface TagService {
	public Tag saveTag(Tag tag);
	public List<Tag> getAllTag();
	Tag findById(Long id);


}
