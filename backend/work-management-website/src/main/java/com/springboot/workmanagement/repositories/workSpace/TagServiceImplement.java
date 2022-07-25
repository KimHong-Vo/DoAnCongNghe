package com.springboot.workmanagement.repositories.workSpace;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.workmanagement.entities.workSpace.Tag;
@Service
public class TagServiceImplement implements TagService{
	@Autowired
	TagRepository tagRepo;
	@Override
	public Tag findById(Long id) {
		Optional<Tag> tagEntity = tagRepo.findById(id);
		if(tagEntity==null||tagEntity.get()==null)
			return null;
		return tagEntity.get();
	}

}
