package com.doctor_microservice.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule,Long> {
    List<Schedule> findByDoctorId(Long doctorId);
}
