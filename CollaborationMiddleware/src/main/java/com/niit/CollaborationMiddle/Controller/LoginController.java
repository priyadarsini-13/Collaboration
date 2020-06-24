package com.niit.CollaborationMiddle.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.niit.Collaboration.DAO.ICustomerDAO;
import com.niit.Collaboration.Model.Customer;
@RestController
public class LoginController {
	@Autowired
	ICustomerDAO customerdao;
	@PostMapping("/login")
	 ResponseEntity<String> login(@RequestBody Customer customer,HttpSession httpsession){
	
		String result=customerdao.checkUser(customer);
		if(result.equals("Employer")||result.equals("Employee")||result.equals("Admin"))
		{
			httpsession.setAttribute("custdetails",customerdao.selectCustomer(customer.getCust_Email()));
			httpsession.setAttribute("userrole", result);
             return new ResponseEntity<String>(result, HttpStatus.OK);
			}
		else
		{
			return new ResponseEntity<String>(result, HttpStatus.NOT_ACCEPTABLE);
		}
	
	}
	@GetMapping("/logout")
	 ResponseEntity<String> logout( HttpSession httpsession){
	
		
			httpsession.invalidate();
			
			return new  ResponseEntity<String>("Logoutsuccecssful", HttpStatus.OK);
			}
	
}