package com.niit.Collaboration.Impl;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.Collaboration.DAO.IJobDAO;
import com.niit.Collaboration.Model.Blog;
import com.niit.Collaboration.Model.Job;
@Repository("jobdao")
@Transactional
public class JobDAOImpl implements IJobDAO {
	@Autowired
	SessionFactory sessionfactory;
	@Override
	public boolean addJob(Job job) {
		try {
			
			sessionfactory.getCurrentSession().save(job);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateJob(Job job) {
try {
			
			sessionfactory.getCurrentSession().update(job);
			return true;
		} catch (Exception e) {
			return false;
		}
	}


	@Override
	public boolean deleteJob(Job job) {
try {
			
			sessionfactory.getCurrentSession().delete(job);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public ArrayList<Job> selectAllApporovedJobs() {
		try {
			 return (ArrayList<Job>) sessionfactory.getCurrentSession()
					.createCriteria(Job.class).add(Restrictions.eq("status",true)).list();
		
		} catch (Exception e) {
			return null;
		}	}
		

	@Override
	public ArrayList<Job> selectAllJobOfOneUser(int cust_Id) {
		try {
			 return (ArrayList<Job>) sessionfactory.getCurrentSession()
					.createCriteria(Job.class).add(Restrictions.eq("customer",cust_Id)).list();
		
		} catch (Exception e) {
			return null;
			}
	}

	@Override
	public ArrayList<Job> selectAllUnapporovedJobs() {
		try {
			 return (ArrayList<Job>) sessionfactory.getCurrentSession()
					.createCriteria(Job.class).add(Restrictions.eq("status",false)).list();
		
		} catch (Exception e) {
			return null;
		}	}

	@Override
	public Job selectOneJob(int jobid) {
		try {
			 return (Job) sessionfactory.getCurrentSession()
					.createCriteria(Job.class).add(Restrictions.eq("jobid",jobid)).list();
		
		} catch (Exception e) {
			return null;
			}

	}
}
