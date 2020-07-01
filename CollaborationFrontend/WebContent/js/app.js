/**
*module is a container for the differentparts of an appliction
*in all ur js pages you will use the myapp
*variable to call the package
*front app is used in html page to call my application
*since we are creating SPA there can be only one
*html head body tags
*index page will have body tag and in that tag i will call
*frontapp
*angular js routing----navigate  from one page to another with no page reloading
*mongo---databse--nosql---json---there no transaction acid
*/
var myApp=angular.module('frontApp',['ngRoute']);
myApp.config(function($routeProvider)
		{
	$routeProvider.when("/",{templateUrl:"home.html"})
	.when("/home",{templateUrl:"home.html"})
	.when("/aboutus",{templateUrl:"aboutus.html"})
	.when("/contactus",{templateUrl:"contactus.html"})
	.when("/register",{templateUrl:"register.html"})
	.when("/login",{templateUrl:"login.html"});
		}
);