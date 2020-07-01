/**
 * 
 */
angular
		.module('frontApp')
		.controller(
				'fcontrol',
				function($scope,$location,$http) {
					var mydata = this;
					mydata.forum= {
						forum_Title:""
					};
					mydata.createUser = createUser;
					function createUser() {
						$http
								.post(
										'http://localhost:8080/CollaborationMiddleware/forum/addforum',
										mydata.forum)
								.then(function(response) {
									alert("Added Successful");
									$location.path("/forum");
								}, function(errresponse) {
									alert(" Not Successful");
								});
					}

				})