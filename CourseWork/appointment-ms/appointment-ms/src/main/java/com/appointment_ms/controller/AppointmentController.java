package com.appointment_ms.controller;

import com.appointment_ms.data.Appointment;
import com.appointment_ms.service.AppointmentService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

@RestController
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    //Get all appointments
    @GetMapping(path = "/appointments")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    //Get appointment by id
    @GetMapping(path = "/appointments/{id}")
    public Appointment getAllAppointmentById(@PathVariable int id) {
        return appointmentService.getAllAppointmentById(id);
    }

    //Create appointment
    @PostMapping(path = "/appointments")
    public ResponseEntity<?> createAppointment(@RequestBody Appointment appoint) {
        String result = appointmentService.registerAppointment(appoint);
        return ResponseEntity.ok(result);
    }

    //Update appointment
    @PutMapping(path = "/appointments")
    public Appointment updateAppointment(@RequestBody Appointment appoint) {
        return appointmentService.updateAppointment(appoint);
    }

    //Delete appointment by id
    @DeleteMapping(path = "/appointments/{id}")
    public String deleteAppointmentById(@PathVariable int id) {
        appointmentService.deleteAppointmentById(id);
        return "Appointment " + id + " deleted!";
    }

    //Delete all appointments
    @DeleteMapping(path = "/appointments/all")
    public String deleteAllAppointments() {
        appointmentService.deleteAllAppointments();
        return "All appointments deleted!";
    }


    //Get appointments by doctor id
    @GetMapping(path ="/appointments", params ={"doctorId"})
    public List<Appointment> getAppointmentByDoctorId(@RequestParam int doctorId) {
        return appointmentService.getAppointmentByDoctorId(doctorId);
    }

    //Get appointments by patient id
    @GetMapping(path ="/appointments", params ={"patientId"})
    public List<Appointment> getAppointmentByPatientId(@RequestParam int patientId){
        return appointmentService.getAppointmentByPatientId(patientId);
    }



}

