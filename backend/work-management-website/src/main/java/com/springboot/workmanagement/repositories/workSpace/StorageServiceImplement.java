package com.springboot.workmanagement.repositories.workSpace;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageServiceImplement implements StorageService{

	@Override
	public void init() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String store(MultipartFile file) {
		String path = SOURCE_PATH + "/"  + file.getOriginalFilename();
		try {
//			InputStream sFile 
			BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(path));
			
			outputStream.write(file.getBytes());
			outputStream.close();
			return path;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
			return null;
		}
		
	}

	@Override
	public Stream<Path> loadAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Path load(String fileName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Resource loadAsResource(String fileName) {
		String path = "";
		
		return null;
	}

	@Override
	public void deleteByName(String fileName) {
		// TODO Auto-generated method stub
		
	}

}
