/**
 * 
 */
angular
		.module('frontApp')
		.controller(
				'jcontrol',
				function($scope,$location,$http) {
					var mydata = this;
					mydata.job= {
						job_Title : "",
						job_Description:"",
						salary:"",
						skillset:"",
						vacancy:"",
						last_Date:""
					};
					mydata.createUser = createUser;
					function createUser() {
						$http
								.post(
										'http://localhost:8080/CollaborationMiddleware/job/addjob',
										mydata.job)
								.then(function(response) {
									alert("Added Successful");
									$location.path("/job");
								}, function(errresponse) {
									alert(" Not Successful");
								});
					}

				})