package com.springboot.workmanagement.repositories.workSpace;

import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
	public final String SOURCE_PATH ="E:/myProject/DoAnCongNghe/DoAnCongNghe/backend/work-management-website/uploadedFile";
	void init();
	String store(MultipartFile file);
	Stream<Path> loadAll();
	Path load(String fileName);
	Resource loadAsResource(String fileName);
	void deleteByName(String fileName);
	

}
