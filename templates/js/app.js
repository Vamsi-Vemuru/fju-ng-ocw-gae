(function() {
	var app = angular.module('landingpage',['ngMaterial']);

	app.config(function($interpolateProvider) {
 		$interpolateProvider.startSymbol('{[{');
  		$interpolateProvider.endSymbol('}]}');
	});

	app.controller("courseReqCtrl", function() {
		this.courses = courseReq;
	});


	app.controller("foundationCoursesCtrl", function() {
		this.courses = foundationCourses;
	});

	app.controller("breadthCoursesCtrl", function() {
		this.courses = breadthCourses;
	});

	app.controller("specializationsCtrl", function() {
		this.courses = specializations;
	});

	var courseReq = [{
		name:"Foundation Courses",
		credits:"6"
	}, {
		name:"Breadth Courses",
		credits:"6"
	}, {
		name:"Specializations",
		credits:"6"
	}];

	var foundationCourses = [{
		coursename: "Intro Programming",
		description: "",
		instructor: ""
	}, {
		coursename: "Object Oriented Programming",
		description: "",
		instructor: ""
	}, {
		coursename: "Computer Systems",
		description: "",
		instructor: ""
	}, {
		coursename: "Algorithms and Data Structures",
		description: "",
		instructor: ""
	}, {
		coursename: "Databases",
		description: "",
		instructor: ""
	}, {
		coursename: "Software Engineering",
		description: "",
		instructor: ""
	}];

	var breadthCourses = [{
		coursename: "Social Network Computing",
		description: "",
		instructor: ""
	}, {
		coursename: "Mobile Apps",
		description: "",
		instructor: ""
	}, {
		coursename: "Data Analytics",
		description: "",
		instructor: ""
	}, {
		coursename: "Cloud Computing",
		description: "",
		instructor: ""
	}, {
		coursename: "Artificial Intelligence",
		description: "",
		instructor: ""
	}, {
		coursename: "Robotics",
		description: "",
		instructor: ""
	}, {
		coursename: "Network",
		description: "",
		instructor: ""
	} , {
		coursename: "Security",
		description: "",
		instructor: ""
	}];

	var specializations = [{
		coursename: "Full Stack Web Development",
		description: "",
		instructor: ""
	}, {
		coursename: "Android App Development",
		description: "",
		instructor: ""
	}, {
		coursename: "Data Science",
		description: "",
		instructor: ""
	}, {
		coursename: "Software Engineering",
		description: "",
		instructor: ""
	}, {
		coursename: "Cloud Computing",
		description: "",
		instructor: ""
	}, {
		coursename: "Advanced Programming",
		description: "",
		instructor: ""
	}];
})();