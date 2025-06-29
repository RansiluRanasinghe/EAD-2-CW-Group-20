package com.doctor_microservice.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.*;


public interface DoctorRepository extends JpaRepository<Doctor,Long> {


    @Query("SELECT d FROM Doctor d WHERE d.email = ?1")
    Optional<Doctor> findByEmail(String email);


    @Query("SELECT d FROM Doctor d WHERE LOWER(d.name) LIKE LOWER(CONCAT('%', ?1, '%'))")
    List<Doctor> findByNameContainingIgnoreCase(String name);


    @Query("SELECT d FROM Doctor d WHERE LOWER(d.specialization) LIKE LOWER(CONCAT('%', ?1, '%'))")
    List<Doctor> findBySpecializationContainingIgnoreCase(String specialization);



}
