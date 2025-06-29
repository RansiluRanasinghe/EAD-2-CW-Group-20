package com.doctor_microservice.controller;

import com.doctor_microservice.model.Doctor;
import com.doctor_microservice.service.DoctorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public Doctor createDoctor(@RequestBody @Valid Doctor doctor) {
        return doctorService.createDoctor(doctor);
    }

    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        Optional<Doctor> doctor = doctorService.getDoctorById(id);
        return doctor.orElse(null);
    }

    @GetMapping(params = {"name"})
    public List<Doctor> searchByName(@RequestParam String name) {
        return doctorService.searchByName(name);
    }

    @GetMapping(params = {"specialization"})
    public List<Doctor> searchBySpecialization(@RequestParam String specialization) {
        return doctorService.searchBySpecialization(specialization);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        Optional<Doctor> updated = doctorService.updateDoctor(id, doctor);
        return updated.orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return "Doctor deleted";
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        Optional<Doctor> doctor = doctorService.login(email, password);
        return doctor.map(value -> "Login successful for: " + value.getName()).orElse("Invalid credentials");
    }

    @PutMapping("/{id}/availability")
    public Doctor updateAvailability(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String availability = body.get("availability");
        Optional<Doctor> updated = doctorService.updateAvailability(id, availability);
        return updated.orElse(null);
        }
}
