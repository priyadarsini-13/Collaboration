/**
 * 
 */
angular
		.module('frontApp')
		.controller(
				'bcontrol',
				function($scope,$location,$http) {
					var mydata = this;
					mydata.blog= {
						blog_Content : "",
						blog_Title:""
					};
					mydata.createUser = createUser;
					function createUser() {
						$http
								.post(
										'http://localhost:8080/CollaborationMiddleware/blog/addblog',
										mydata.blog)
								.then(function(response) {
									alert("Added Successful");
									$location.path("/blog");
								}, function(errresponse) {
									alert(" Not Successful");
								});
					}

				})