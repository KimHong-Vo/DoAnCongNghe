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

import com.springboot.workmanagement.DTO.ListDTO;
import com.springboot.workmanagement.entities.workSpace.ListInTable;
import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.repositories.Authorization.AuthorizationService;
import com.springboot.workmanagement.repositories.workSpace.ListInTableService;
import com.springboot.workmanagement.repositories.workSpace.TableService;

@RestController
public class ListInTableController {
	@Autowired
	AuthorizationService authService;
	@Autowired
	TableService tbService;
	@Autowired
	ListInTableService listInTableSer;

	@PostMapping("/createListInTable/{tableID}")
	public ResponseEntity<ListDTO> addListInTableForTable(@RequestHeader("Authorization") String token,
			@RequestBody ListInTable listInTable, @PathVariable String tableID) {
		//check user logined
		if(!authService.checkToken(token)) return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
		// get user
		User u = authService.getUserByToken(token);
		if (u == null) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			listInTable.setCreateDate(Calendar.getInstance().getTime());
			listInTable.setOwner(u);
			//check table 
			Table tb = tbService.getTableById(tableID);
			if (tb == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else {
				System.out.println(tb.getId()+"nametable");
				listInTable.setPosition(tb.getListsInTable().size()+1);
				listInTable.setTable(tb);
				ListInTable result = listInTableSer.save(listInTable);
				ListDTO listInTabledto = new ListDTO();
				System.out.println(result.getId()+"idlist");
				listInTabledto.setId(result.getId());
				listInTabledto.setName(result.getName());
				System.out.println(result.getName()+"namelist");
				return ResponseEntity.ok(listInTabledto);
			}
		}
	}

}
