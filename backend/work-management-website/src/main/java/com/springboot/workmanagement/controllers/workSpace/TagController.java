package com.springboot.workmanagement.controllers.workSpace;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Tag;
import com.springboot.workmanagement.repositories.workSpace.ListInTableService;
import com.springboot.workmanagement.repositories.workSpace.TagService;

@RestController
public class TagController {
	@Autowired
	TagService tagService;
	@Autowired
	ListInTableService listTBService;

	@PostMapping("/saveTag/{listInTBId}")
	public ResponseEntity<Tag> saveTag(@RequestBody Tag tag,
			@PathVariable("listInTBId") Integer listId) {
		System.out.println(tag.toString());
		ListInTable list = listTBService.getListById(listId);

		if (list == null) {
			System.out.println("list in table not found");
			return new ResponseEntity<Tag>(HttpStatus.NOT_FOUND);
		} else {
			System.out.println(list.toString());
			tag.setList(list);
			tag.setCreateDate(Calendar.getInstance().getTime());
			Tag tagfinal = tagService.saveTag(tag);
			return new ResponseEntity<Tag>(tagfinal, HttpStatus.OK);
		}
	}

	@GetMapping("/tags")
	public ResponseEntity<List<Tag>> getAllListInTable() {
		return new ResponseEntity<List<Tag>>(tagService.getAllTag(), HttpStatus.OK);
	}

}
