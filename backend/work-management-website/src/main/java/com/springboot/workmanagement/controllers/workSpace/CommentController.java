package com.springboot.workmanagement.controllers.workSpace;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springboot.workmanagement.entities.workSpace.AttachFile;
import com.springboot.workmanagement.entities.workSpace.Comment;
import com.springboot.workmanagement.repositories.workSpace.CommentRepository;
import com.springboot.workmanagement.repositories.workSpace.StorageService;

@RestController
public class CommentController {
	@Autowired
	CommentRepository commentRepository;
	@Autowired
	StorageService storageService;
	
	
	@PostMapping("/saveComment")
	public ResponseEntity<Comment> saveComment(@RequestBody Comment comment){
		Comment cm = commentRepository.save(comment);
		if(cm == null)
			return null;
		else
			return new ResponseEntity<>(cm, HttpStatus.OK);
	}
	@GetMapping("/getComment")
	public ResponseEntity<List<Comment>> getAllComment(){		
		return new ResponseEntity<List<Comment>>((List<Comment>)commentRepository.findAll(), HttpStatus.OK);
	}
	//create comment 
	//save file
	//save attach inform
	//return comment id
	//save id content
	@PostMapping("/comment/saveFile")
	public String uploadFile(@RequestBody MultipartFile file){// return path of file
		//check file empty
		if(file.isEmpty()) return "Emty file";
		
		//save file if not empty
		String filePath = storageService.store(file);
		AttachFile at = new AttachFile(); at.setPathFile(filePath); at.setFileName(file.getOriginalFilename());
		Comment cm = new Comment(Calendar.getInstance().getTime(), "", at);
//		cm.getAttachFilePath().setId(cm.getId());
		Comment c =  commentRepository.save(cm);
		return c.getId() +"";
	}
	
	@PostMapping("/updateComment/{comment_id}")
	public String updateComment(@RequestBody String content, @PathVariable(name = "comment_id", required = true) int commentId) {
		Optional<Comment> comment =  commentRepository.findById(commentId);
		if(comment.get()!=null)
			commentRepository.save(comment.get());
		return "OK";
	}

}
