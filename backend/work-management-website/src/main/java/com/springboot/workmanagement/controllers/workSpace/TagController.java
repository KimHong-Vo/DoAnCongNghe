package com.springboot.workmanagement.controllers.workSpace;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.workmanagement.DTO.TagDTO;
import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Tag;
import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.repositories.Authorization.AuthorizationService;
import com.springboot.workmanagement.repositories.workSpace.ListInTableService;
import com.springboot.workmanagement.repositories.workSpace.TagService;

@RestController
public class TagController {
	@Autowired
	AuthorizationService authService;
	@Autowired
	TagService tagService;
	@Autowired
	ListInTableService listInTableSer;
	
	//tao the
	@PostMapping("/createListInTable/{listInTableID}")
	public ResponseEntity<TagDTO> addTagForListInTable(@RequestHeader("Authorization") String token,
			@RequestBody Tag tag, @PathVariable Integer listInTableID) {
		//check user logined?
		if(!authService.checkToken(token)) return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
		// get user
		User u = authService.getUserByToken(token);
		if (u == null) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			tag.setCreateDate(Calendar.getInstance().getTime());
			tag.setOwner(u);
			//check listInTable 
			ListInTable listInTb = listInTableSer.findListInTbByID(listInTableID);
			if (listInTb == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else {
				System.out.println(listInTb.getId()+"id listInTb");
				tag.setPosition(listInTb.getTables().size()+1);
				tag.setList(listInTb);
				Tag result = tagService.saveTag(tag);
				TagDTO tagDto = new TagDTO();
				System.out.println(result.getId()+"idTag");
				tagDto.setId(result.getId());
				tagDto.setTitle(result.getTitle());
				tagDto.setCreateDate(result.getCreateDate());
				return ResponseEntity.ok(tagDto);
			}
		}
	}


}
