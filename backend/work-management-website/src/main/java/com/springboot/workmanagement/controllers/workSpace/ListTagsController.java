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
import com.springboot.workmanagement.entities.workSpace.Table;
import com.springboot.workmanagement.repositories.workSpace.ListInTableService;
import com.springboot.workmanagement.repositories.workSpace.TableService;

@RestController
public class ListTagsController {
	@Autowired
	TableService tableService;
	@Autowired
	ListInTableService listTBService;

	@PostMapping("/saveList/{tbId}")
	public ResponseEntity<ListInTable> savelistInTable(@RequestBody ListInTable listInTable, @PathVariable("tbId") String tbId) {
		System.out.println(listInTable.toString());
		Table table = tableService.getTableById(tbId);

		if (table == null) {
			System.out.println("TB not found");
			return new ResponseEntity<ListInTable>(HttpStatus.NOT_FOUND);
		} else {
			System.out.println(table.toString());
			listInTable.setTable(table);
			listInTable.setCreateDate(Calendar.getInstance().getTime());
			ListInTable list = listTBService.saveListInTable(listInTable);
			return new ResponseEntity<ListInTable>(list, HttpStatus.OK);
		}
	}

	@GetMapping("/listInTable")
	public ResponseEntity<List<ListInTable>> getAllListInTable() {
		return new ResponseEntity<List<ListInTable>>(listTBService.getAllList(), HttpStatus.OK);
	}

}
