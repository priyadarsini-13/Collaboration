/**
 * 
 */
angular
		.module('frontApp')
		.controller(
				'bcontrol',
				function($scope, $location, $http) {
					var mydata = this;
					mydata.blog = {
						blog_Content : "",
						blog_Title : ""
					};
					mydata.createUser = createUser;
					mydata.approveBlog = approveBlog;
					getallBlogs();
					getUsers();// this s to call my function call statement.
					function createUser() {
						$http
								.post(
										'http://localhost:8080/CollaborationMiddleware/blog/addblog',
										mydata.blog).then(function(response) {
									alert("Added Successful");
									$location.path("/addblog");
								}, function(errresponse) {
									alert(" Not Successful");
								});
					}
					function getUsers() {
						$http
								.get(
										'http://localhost:8080/CollaborationMiddleware/blog/adminapproval')
								.then(function(response) {
									mydata.unapprovedcustomers = null;

								}, function(errresponse) {
									mydata.unapprovedcustomers = errresponse.data;
								//	console.log(mydata.unapprovedcustomers);
								})

					}
					function approveBlog(blogid) {
						$http
								.get(
										'http://localhost:8080/CollaborationMiddleware/blog/updatestatus?blogid='+blogid)
								.then(function(response) {
									alert("Status updated");
								}, function(errresponse) {
									alert("Status not updated" );
								});

					}
					function getallBlogs(){
						$http
								.get(
										'http://localhost:8080/CollaborationMiddleware/blog/allblogs')
								.then(function(response) {
									mydata.blogs = null;

								}, function(errresponse) {
									
									mydata.blogs = errresponse.data;
									$location.path("/allblog");
									//console.log(mydata.approvedcustomers);
								});
					}
				});