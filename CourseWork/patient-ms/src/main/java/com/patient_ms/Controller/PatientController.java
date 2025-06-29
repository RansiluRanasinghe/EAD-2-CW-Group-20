package com.patient_ms.Controller;

import com.patient_ms.Data.LoginRequest;
import com.patient_ms.Data.Patient;
import com.patient_ms.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping(path = "/patients")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping(path = "/patients/{id}")
    public Patient getPatientById(@PathVariable int id) {
        return patientService.getPatientById(id);
    }

    @GetMapping(path = "/patients", params = {"name"})
    public List<Patient> searchPatientByName(@RequestParam String name) {
        return patientService.searchPatientByName(name);
    }

    @PostMapping(path = "/patients/register")
    public Patient registerPatient(@RequestBody Patient pat) {
        return patientService.registerPatient(pat);
    }

    @PutMapping(path = "/patients/{id}")
    public Patient updatePatient(@PathVariable int id, @RequestBody Patient pat) {
        return patientService.updatePatient(pat);
    }

    @DeleteMapping(path = "/patients/{id}")
    public void deletePatientById(@PathVariable int id) {
        patientService.deletePatientById(id);
    }

    @PostMapping("/patients/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest login) {
        boolean success = patientService.login(login.getEmail(), login.getPassword());
        if (success)
            return ResponseEntity.ok("Login successful");
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Email Address or Password!");
    }

    @PostMapping("/patients/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok(patientService.logout());
    }

}
