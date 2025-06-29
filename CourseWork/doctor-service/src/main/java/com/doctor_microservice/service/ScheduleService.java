package com.doctor_microservice.service;

import com.doctor_microservice.model.Schedule;
import com.doctor_microservice.model.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository repo;

    public Schedule createSchedule(Schedule schedule) {
        return repo.save(schedule);
    }

    public List<Schedule> getAllSchedules() {
        return repo.findAll();
    }

    public Optional<Schedule> getScheduleById(Long id) {
        return repo.findById(id);
    }

    public List<Schedule> getSchedulesByDoctorId(Long doctorId) {
        return repo.findByDoctorId(doctorId);
    }

    public Schedule updateSchedule(Long id, Schedule updated) {
        Optional<Schedule> optional = repo.findById(id);
        if (optional.isPresent()) {
            Schedule s = optional.get();
            s.setDoctorId(updated.getDoctorId());
            s.setDate(updated.getDate());
            s.setStartTime(updated.getStartTime());
            s.setEndTime(updated.getEndTime());
            s.setStatus(updated.getStatus());
            return repo.save(s);
        }
        return null;
    }

    public void deleteSchedule(Long id) {
        repo.deleteById(id);
    }
}
