package com.doctor_microservice.service;


import com.doctor_microservice.model.Doctor;
import com.doctor_microservice.model.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repo;

    @Autowired
    private PasswordEncoder encorder;

    public Doctor createDoctor(Doctor doctor) {
        Optional<Doctor> existing = repo.findByEmail(doctor.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException(("Email already exists"));
        }
        String hashedPassword = encorder.encode(doctor.getPassword());
        doctor.setPassword(hashedPassword);
        return repo.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return repo.findAll();
    }

    public Optional<Doctor> getDoctorById(Long id) {
        return repo.findById(id);
    }

    public List<Doctor> searchByName(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }

    public List<Doctor> searchBySpecialization(String specialization) {
        return repo.findBySpecializationContainingIgnoreCase(specialization);
    }

    public Optional<Doctor> updateDoctor(Long id, Doctor updatedDoctor) {
        Optional<Doctor> optionalDoctor = repo.findById(id);
        if (optionalDoctor.isPresent()) {
            Doctor doctor = optionalDoctor.get();
            doctor.setName(updatedDoctor.getName());
            doctor.setAge(updatedDoctor.getAge());
            doctor.setAddress(updatedDoctor.getAddress());
            doctor.setEmail(updatedDoctor.getEmail());
            doctor.setContactNumber(updatedDoctor.getContactNumber());
            doctor.setAvailability(updatedDoctor.getAvailability());
            doctor.setRole(updatedDoctor.getRole());
            doctor.setSpecialization(updatedDoctor.getSpecialization());

            repo.save(doctor);
            return Optional.of(doctor);
        } else {
            return Optional.empty();
        }
    }

    public void deleteDoctor(Long id) {
        repo.deleteById(id);
    }

    public Optional<Doctor> login(String email, String password) {
        Optional<Doctor> doctor = repo.findByEmail(email);
        if (doctor.isPresent()) {
            boolean match = encorder.matches(password, doctor.get().getPassword());
            if (match) {
                return doctor;
            }
        }
        return Optional.empty();
    }

    public Optional<Doctor> updateAvailability(Long id, String availability) {
        Optional<Doctor> optionalDoctor = repo.findById(id);
        if (optionalDoctor.isPresent()) {
            Doctor doctor = optionalDoctor.get();
            doctor.setAvailability(availability);
            repo.save(doctor);
            return Optional.of(doctor);
        } else {
            return Optional.empty();
        }
    }
}



















