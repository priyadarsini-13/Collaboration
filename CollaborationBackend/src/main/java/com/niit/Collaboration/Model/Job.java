package com.niit.Collaboration.Model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Job {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int job_Id;
	
	@Column(nullable = false, unique = true)
	 String job_Title;
	
	@Column(nullable = false,columnDefinition="text")
	 String skillset;
	
	@Column(nullable = false,columnDefinition="text")
	 String job_Description;
	
	@Column(nullable = false)
	 int salary;
	
	@Column(nullable = false)
	 int vacancy;
	
	@Column(nullable = false,columnDefinition="date default sysdate()")
	@Temporal(TemporalType.DATE)
	Date posted_Date;
	
	@Column(nullable = false,columnDefinition="date default sysdate()+10")
	@Temporal(TemporalType.DATE)
	 Date last_Date;
	
	@Column(nullable = false)
	 String job_Status;

	public int getJob_Id() {
		return job_Id;
	}

	public void setJob_Id(int job_Id) {
		this.job_Id = job_Id;
	}

	public String getJob_Title() {
		return job_Title;
	}

	public void setJob_Title(String job_Title) {
		this.job_Title = job_Title;
	}

	public String getSkillset() {
		return skillset;
	}

	public void setSkillset(String skillset) {
		this.skillset = skillset;
	}

	public String getJob_Description() {
		return job_Description;
	}

	public void setJob_Description(String job_Description) {
		this.job_Description = job_Description;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public int getVacancy() {
		return vacancy;
	}

	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}

	public Date getPosted_Date() {
		return posted_Date;
	}

	public void setPosted_Date(Date posted_Date) {
		this.posted_Date = posted_Date;
	}

	public Date getLast_Date() {
		return last_Date;
	}

	public void setLast_Date(Date last_Date) {
		this.last_Date = last_Date;
	}

	public String getJob_Status() {
		return job_Status;
	}

	public void setJob_Status(String job_Status) {
		this.job_Status = job_Status;
	}
	
	
}
