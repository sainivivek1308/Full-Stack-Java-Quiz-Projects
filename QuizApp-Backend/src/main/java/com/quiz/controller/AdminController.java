package com.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.Entity.Login_detail;
import com.quiz.Entity.Quiz_Dto;
import com.quiz.Entity.Frontend.PostBasicData;
import com.quiz.database.LoginDatabase;
import com.quiz.database.UserDataDAO;
import com.quiz.service.QuizService;


@RestController
@CrossOrigin("*")
@RequestMapping(value = "/admin")

public class AdminController {
	@Autowired
	UserDataDAO userjpa;
	
	@Autowired
	QuizService quizservice;
	// @Autowired
	// Login_detail logindetail;
	@Autowired
	LoginDatabase logindatabase;
	
	@GetMapping("/viewall")
	public ResponseEntity<List<PostBasicData>> get(){
		List<PostBasicData> data=userjpa.findAll();
		return new ResponseEntity<List<PostBasicData>>(data,HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteall")
	public ResponseEntity<String> deleteall(){
		userjpa.deleteAll();
		return new ResponseEntity<String>("sucess delete", HttpStatus.OK);
	}

	@DeleteMapping("/deletebyid/{id}")
	public ResponseEntity<String> deletebyid(@PathVariable String id){
		Integer id1=Integer.parseInt(id);
		//logindatabase.deleteAll();
		return quizservice.deletebyid(id1);
	}
	

	@PostMapping("/createquiz")
	public ResponseEntity<String> createmethod(@RequestBody Quiz_Dto quizdto){
		//System.out.println(categorytopic);
		return quizservice.createQuiz(quizdto.getCategory().toLowerCase(),quizdto.getNumq(),quizdto.getTitle().toLowerCase(),quizdto.getCategorytopic().toLowerCase()); 
	}
	@PostMapping("/login")
	public ResponseEntity<String> loginmethod(@RequestBody Login_detail login_detail){
		//System.out.println(categorytopic);
		//System.out.println("Login detail is "+login_detail);

		return quizservice.loginacess(login_detail.getName().toLowerCase(),login_detail.getUsername().toLowerCase(),login_detail.getPassword()); 
	}
	@GetMapping("/login/viewall")
	public ResponseEntity<List<Login_detail>> view(){
		List<Login_detail> detail=logindatabase.findAll();
		return new ResponseEntity<List<Login_detail>>(detail, HttpStatus.OK);
		//return null;
	}
	@GetMapping("login/getstatus")
	public ResponseEntity<Boolean> viewid(@RequestParam("name") String name,@RequestParam String username,@RequestParam String password){

		return quizservice.getidlogin(name.toLowerCase(),username.toLowerCase(),password);
	}

	@DeleteMapping("login/deleteall")
	public ResponseEntity<String> deletealllogin(){
		logindatabase.deleteAll();
		return new ResponseEntity<String>("sucess delete", HttpStatus.OK);
	}

}
