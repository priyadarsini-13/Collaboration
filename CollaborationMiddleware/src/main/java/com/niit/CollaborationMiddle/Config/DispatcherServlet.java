package com.niit.CollaborationMiddle.Config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.niit.Collaboration.Config.DbConfig;

public class DispatcherServlet extends AbstractAnnotationConfigDispatcherServletInitializer{

	//will look for the configuration files--dbconfig
	@Override
	protected Class<?>[] getRootConfigClasses() {
		// TODO Auto-generated method stub
		return new Class[]{DbConfig.class};
	}
      // going to call my servlet over here
	@Override
	protected Class<?>[] getServletConfigClasses() {
		// TODO Auto-generated method stub
		return new Class[] {WebConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		// TODO Auto-generated method stub
		return new String[] {"/"};
	}

}
