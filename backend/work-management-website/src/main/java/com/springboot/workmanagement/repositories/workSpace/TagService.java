package com.springboot.workmanagement.repositories.workSpace;

import java.util.List;

import com.springboot.workmanagement.entities.workSpace.Tag;

public interface TagService {
	public Tag saveTag(Tag tag);
	public List<Tag> getAllTag();

}
