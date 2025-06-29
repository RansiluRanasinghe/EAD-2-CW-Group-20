package com.doctor_microservice.controller;


import com.doctor_microservice.model.Schedule;
import com.doctor_microservice.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {
    @Autowired
    private ScheduleService service;

    @PostMapping
    public Schedule create(@RequestBody Schedule schedule) {
        return service.createSchedule(schedule);
    }

    @GetMapping
    public List<Schedule> getAll() {
        return service.getAllSchedules();
    }

    @GetMapping("/{id}")
    public Schedule getById(@PathVariable Long id) {
        return service.getScheduleById(id).orElse(null);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Schedule> getByDoctorId(@PathVariable Long doctorId) {
        return service.getSchedulesByDoctorId(doctorId);
    }

    @PutMapping("/{id}")
    public Schedule update(@PathVariable Long id, @RequestBody Schedule schedule) {
        return service.updateSchedule(id, schedule);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteSchedule(id);
        return "Deleted";
     }
}
