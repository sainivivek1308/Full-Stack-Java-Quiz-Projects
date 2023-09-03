package com.quiz.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.Entity.Login_detail;
@Repository
public interface LoginDatabase extends JpaRepository<Login_detail,Integer> {

    
}
