package com.springboot.workmanagement.controllers.workSpace;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springboot.workmanagement.entities.workSpace.AttachFile;
import com.springboot.workmanagement.entities.workSpace.Comment;
import com.springboot.workmanagement.entities.workSpace.Tag;
import com.springboot.workmanagement.entities.workSpace.User;
import com.springboot.workmanagement.repositories.workSpace.CommentRepository;
import com.springboot.workmanagement.repositories.workSpace.StorageService;
import com.springboot.workmanagement.repositories.workSpace.TagService;

@RestController
public class CommentController {
	@Autowired
	CommentRepository commentRepository;
	@Autowired
	StorageService storageService;
	@Autowired
//	AuthorizationService authService;
//	@Autowired
	TagService tagService;
	
	@PostMapping("/saveComment/{tagId}")
	public ResponseEntity<Comment> saveComment(@RequestHeader("Authorization")String userId, @RequestBody Comment comment, @PathVariable long tagId){
		//check user
//		User u = authService.getUserByToken(userId);
//		if(u == null) {
//			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//		}
//		else {
//		check tag
			Tag tag = tagService.findById(tagId);
			if(tag==null) {return new ResponseEntity<>(HttpStatus.NOT_FOUND);}
			else {
				comment.setCreateDate(Calendar.getInstance().getTime());
//				comment.setUser(u);
				comment.setTag(tag);
				
				Comment cm = commentRepository.save(comment);
				
				if(cm == null)
					return new ResponseEntity<>(HttpStatus.METHOD_FAILURE);
				else 
					return new ResponseEntity<>(cm, HttpStatus.OK);
				}
//			}
	}
	@GetMapping("/getComment")
	public ResponseEntity<List<Comment>> getAllComment(){		
		return new ResponseEntity<List<Comment>>((List<Comment>)commentRepository.findAll(), HttpStatus.OK);
	}
	@GetMapping("/getTagComment")
	public ResponseEntity<List<Comment>> getTagComment(@RequestParam(name = "tagId")long tagId){		
		Tag tag = tagService.findById(tagId);
		if(tag==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);}
		else {
			Set<Comment> comments = tag.getCommnents();
			List<Comment> rs = new ArrayList<>();
			for (Comment comment : comments) {
				rs.add(comment);
			}
		return new ResponseEntity<List<Comment>>(rs, HttpStatus.OK);
		}
	}
	//create comment 
	//save file
	//save attach inform
	//return comment id
	//save id content
	@PostMapping("/comment/saveFile")
	public String uploadFile(@RequestBody MultipartFile file){// return path of file
		//check file empty
		if(file == null || file.isEmpty()) return "Emty file";
		
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
