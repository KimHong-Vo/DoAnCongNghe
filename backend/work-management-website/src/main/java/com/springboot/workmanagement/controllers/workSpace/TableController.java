package com.springboot.workmanagement.controllers.workSpace;

import java.util.Calendar;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;


import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.entities.workSpace.User;
//import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.entities.workSpace.WorkSpace;
import com.springboot.workmanagement.repositories.workSpace.TableRepository;
import com.springboot.workmanagement.repositories.workSpace.TableService;
import com.springboot.workmanagement.repositories.workSpace.WorkSpaceRepository;

@RestController
@CrossOrigin
public class TableController {
	@Autowired
	TableService tableService;
	@Autowired
	WorkSpaceRepository wsr;
//	@Autowired
//	AuthorizationService authService;
	
	@PostMapping("/saveTable/{wsId}")
	public ResponseEntity<Table> saveTable(@RequestHeader("Authorization")String token, @RequestBody Table table, @PathVariable("wsId") int wsId) {
		//https://docs.atlassian.com/hibernate2/2.1.8/reference/example-parentchild.html
		// validate user by token
//		User u = authService.getUserByToken("");
//		if(u == null) {
//			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//		}
		//find workspace to add table 
		WorkSpace ws = wsr.findById(wsId).get();		
		if(ws== null) {
			System.out.println("WS not found");
			return new ResponseEntity<Table>( HttpStatus.NOT_FOUND);
		}
		else {
			System.out.println(ws.toString());
//			table.setWorkspace(ws);
			table.setCreateDate(Calendar.getInstance().getTime());
//			table.setOwner(u);
			Table t = tableService.saveTable(table);
			return new ResponseEntity<Table>(t, HttpStatus.OK);
		}
	}
	
	@GetMapping("/talbe")
	public ResponseEntity<List<Table>> getAllTable(){
		return new ResponseEntity<List<Table>>(tableService.getAllTable(), HttpStatus.OK);
	}

}
