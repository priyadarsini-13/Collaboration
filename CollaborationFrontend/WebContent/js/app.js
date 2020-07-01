/**
 * module is a container for the differentparts of an appliction in all ur js
 * pages you will use the myapp variable to call the package front app is used
 * in html page to call my application since we are creating SPA there can be
 * only one html head body tags index page will have body tag and in that tag i
 * will call frontapp angular js routing----navigate from one page to another
 * with no page reloading mongo---databse--nosql---json---there no transaction
 * acid
 */
var myApp=angular.module('frontApp',['ngRoute']);
myApp.config(function($routeProvider)
		{
	$routeProvider.when("/",{templateUrl:"home.html"})
	.when("/home",{templateUrl:"home.html"})
	.when("/aboutus",{templateUrl:"aboutus.html"})
	.when("/contactus",{templateUrl:"contactus.html"})
	.when("/register",{templateUrl:"register.html"})
	.when("/blog",{templateUrl:"blog.html"})
	.when("/job",{templateUrl:"job.html"})
	.when("/forum",{templateUrl:"forum.html"})
	.when("/login",{templateUrl:"login.html"})
	.when("/addblog",{templateUrl:"addblog.html"})
	.when("/viewblog",{templateUrl:"viewblog.html"})
	.when("/blogstoapprove",{templateUrl:"blogstoapprove.html"})
	.when("/myblog",{templateUrl:"myblogs.html"});
		
		});
myApp.run(function($rootScope,$location,$http,$cookieStore){
$rootScope.on($locationChangeStart,function(event,current,next){
var status=$cookieStore.get('loggedin');
var role=$rootScope.loggeduser.cust_Role;
var emp_Page=['/addblog','/viewblog','/myblogs','/updateblog','/deleteblog'];
var empr_Page=['/addblog','/viewblog','/myblogs','/updateblog','/deleteblog'];
var admin_Page=['/blogstoapprove'];
var currenturl=$location.path();
var isemppage=$.inArray(currenturl,emp_page)>=0;
var isemprpage=$.inArray(currenturl,empr_page)>=0;
var isadminpage=$.inArray(currenturl,admin_page)>=0;
if(status){
	if(role== 'Employee'){
		if(isemprpage || isadminpage ){
			alert("Sorry you dont have access");
			$location.path("/");
		}
	}else if(role == 'Employer'){
		if(isemppage || isadminpage ){
			alert("Sorry you dont have access");
			$location.path("/");
		}
	}else{
		if(isemprpage || isemppage ){
			alert("Sorry you dont have access");
			$location.path("/");
		
		}
	}
}else{
	if(isemppage || isemprpage || isadminpage){
		alert("Please login to view content");
		$location.path("/login");
	}
}
});

$rootScope.loggeduser=$cookieStore.get('currentuser') || null;
if($rootScope.loggeduser){
	$http.defaults.headers.common['Authorization']='Basic'
		+$rootScope.loggeduser;
}
});

