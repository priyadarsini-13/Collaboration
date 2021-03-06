/**
 * module is a container for the differentparts of an appliction in all ur js
 * pages you will use the myapp variable to call the package front app is used
 * in html page to call my application since we are creating SPA there can be
 * only one html head body tags index page will have body tag and in that tag i
 * will call frontapp angular js routing----navigate from one page to another
 * with no page reloading mongo---databse--nosql---json---there no transaction
 * acid
 */
var myApp = angular.module('frontApp', [ 'ngRoute' ]);
myApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "home.html"
	}).when("/home", {
		templateUrl : "home.html"
	}).when("/aboutus", {
		templateUrl : "aboutus.html"
	}).when("/contactus", {
		templateUrl : "contactus.html"
	}).when("/register", {
		templateUrl : "register.html"
	})

	.when("/addjob", {
		templateUrl : "job.html"
	}).when("/addforum", {
		templateUrl : "forum.html"
	}).when("/viewforum", {
		templateUrl : "viewforum.html"
	}).when("/login", {
		templateUrl : "login.html"
	}).when("/addblog", {
		templateUrl : "blog.html"
	}).when("/viewblog", {
		templateUrl : "viewblog.html"
	}).when("/allblog", {
		templateUrl : "allblog.html"
	}).when("/viewforum", {
		templateUrl : "viewforum.html"
	}).when("/viewjob", {
		templateUrl : "viewjob.html"
	}).when("/blogstoapprove", {
		templateUrl : "blogstoapprove.html"
	}).when("/myblog", {
		templateUrl : "myblogs.html"
	});

});
myApp.run(function($rootScope, $location, $http,$route) {
	$rootScope.$on('$locationChangeStart', function(event, current, next) {
		var status = $rootScope.loggedin;
		var role = $rootScope.loggeduser;
		var emp_Page = [];
		var empr_Page = [ '/addblog','/viewblog','allblog','/addjob','/viewjob', ];
		var admin_Page = ['/addforum','/viewforum'];
		var currenturl = $location.path();
		var isemppage = $.inArray(currenturl, emp_Page) >= 0;
		var isemprpage = $.inArray(currenturl, empr_Page) >= 0;
		var isadminpage = $.inArray(currenturl, admin_Page) >= 0;
		alert(role);
		alert(status);
		if (status) {
			if (role == 'Employee') {
				if (isemprpage || isadminpage) {
					alert("Sorry you dont have access"+role);
					$location.path("/");
				}
			} else if (role == 'Employer') {
				if (isemppage || isadminpage) {
					alert("Sorry you dont have access"+role);
					$location.path("/");
				}
			} else {
				if (isemprpage || isemppage) {
					alert("Sorry you dont have access"+role);
					$location.path("/");

				}
			}
		} else {
			if (isemppage || isemprpage || isadminpage) {
				alert("Please login to view content");
				$location.path("/login");
			}
		}
	});

});
