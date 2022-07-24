package com.springboot.workmanagement.controllers.workSpace;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.workmanagement.DTO.WorkspaceDTO;
import com.springboot.workmanagement.entities.workSpace.WorkSpace;
import com.springboot.workmanagement.repositories.workSpace.WorkSpaceRepository;
import com.springboot.workmanagement.repositories.workSpace.WorkspaceService;

@RestController
public class WorkSpaceController {
	@Autowired
	WorkSpaceRepository workSpaceRepository;
	@Autowired
	WorkspaceService wpService;
	
	@GetMapping("/myWorkspace")
	public WorkSpace getMyWorkspace() {
//		return new WorkSpace("This is my workspace", "This is a workspace is automatically generate");
		return new WorkSpace();
	}
	
	@PostMapping("/insertWorkspace")
	public ResponseEntity<WorkSpace> insertWorkspace(@RequestBody WorkSpace workSpace) {
		WorkSpace s =  workSpaceRepository.save(workSpace);
		if(s==null) {
			return new ResponseEntity<WorkSpace>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		else
		return new ResponseEntity<WorkSpace>(s, HttpStatus.OK);
	}
	
	@GetMapping("/getWorkspace")
	public String getWorkspace() {
		ObjectMapper mapper = new ObjectMapper();
		try {
			List<WorkSpace> workspaceList = new ArrayList<WorkSpace>();
			Iterable<WorkSpace> wss = workSpaceRepository.findAll();
			for(WorkSpace ws : wss) {
				workspaceList.add(ws);
			}
			return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(workspaceList);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "fail to read data";
		}
		
	}

	//id, name, logo path -> loadWorkspace to menu Workspace
	@GetMapping("/getListWorkspaceForMenu")
	public ResponseEntity<List<WorkspaceDTO>> getListWorkSpaceForMenu(){
		List<WorkspaceDTO> result = new ArrayList<>();
		for(WorkSpace wp: wpService.getListWorkspace()) {
			WorkspaceDTO wpdto = new WorkspaceDTO(wp.getId(), wp.getName(), wp.getLogoPath());
		    result.add(wpdto);
		}
		return ResponseEntity.ok(result);
		
	}
}