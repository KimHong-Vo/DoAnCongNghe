package com.springboot.workmanagement.controllers.workSpace;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.workmanagement.entities.workSpace.WorkSpace;
import com.springboot.workmanagement.repositories.workSpace.WorkSpaceRepository;
import com.springboot.workmanagement.service.workSpace.WorkSpaceService;

@RestController
public class WorkSpaceController{
	@Autowired
	WorkSpaceService workSpaceService;

	
	@GetMapping("/insertWorkspace")
	public String insertWorkspace(@RequestBody WorkSpace workSpace) {
		workSpaceService.saveWorkSpace(workSpace);
		return "success";
	}
	
//	@GetMapping("/getWorkspace")
//	public String getWorkspace() {
//		ObjectMapper mapper = new ObjectMapper();
//		try {
//			List<WorkSpace> workspaceList = new ArrayList<>();
//			Iterable<WorkSpace> wss = workSpaceRepository.findAll();
//			for(WorkSpace ws : wss) {
//				workspaceList.add(ws);
//			}
//			return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(workspaceList);
//		} catch (JsonProcessingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			return "fail to read data";
//		}
//		
//	}
}