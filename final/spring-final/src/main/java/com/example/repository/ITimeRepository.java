package com.example.repository;

import com.example.model.Times;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITimeRepository extends JpaRepository<Times, Integer> {
}
