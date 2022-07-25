package com.springboot.workmanagement.controllers.workSpace;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.workmanagement.DTO.ListDTO;
import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.repositories.workSpace.ListInTableService;

@RestController
public class ListInTableController {
	
	@Autowired
	ListInTableService listService;

    @PostMapping("/createListInTable/{tableID}")
	public ResponseEntity<ListDTO> addListInTableForTable(@RequestHeader("Authorization")String userId, @RequestBody ListInTable listInTable) {
		ListDTO listInTabledto = new ListDTO();
		
		return ResponseEntity.ok(listInTabledto);
	}

}
