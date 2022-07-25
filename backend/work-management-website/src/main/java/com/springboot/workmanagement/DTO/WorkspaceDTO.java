package com.springboot.workmanagement.DTO;

public class WorkspaceDTO {
	private Integer id;
	private String name;
	private String logoPath;

	public WorkspaceDTO(Integer id, String name, String logoPath) {
		super();
		this.id = id;
		this.name = name;
		this.logoPath = logoPath;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogoPath() {
		return logoPath;
	}

	public void setLogoPath(String logoPath) {
		this.logoPath = logoPath;
	}

}
