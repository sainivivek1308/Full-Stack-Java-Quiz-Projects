package com.quiz.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quiz.Entity.Login_detail;
@Repository
public interface LoginDatabase extends JpaRepository<Login_detail,Integer> {
    Login_detail findByName(String name);
    @Query(value = "SELECT id FROM Login where name=:name AND username=:username AND password=:password",nativeQuery = true)
    Integer findbyid(@Param("name") String name,@Param("username") String username,@Param("password") String password);

    
}
