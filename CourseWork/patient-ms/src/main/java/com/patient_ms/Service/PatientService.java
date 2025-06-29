package com.patient_ms.Service;

import com.patient_ms.Data.Patient;
import com.patient_ms.Data.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patRepo;

    public List<Patient> getAllPatients(){
        return patRepo.findAll();
    }

    public Patient getPatientById(int id) {
        Optional<Patient> pat = patRepo.findById(id);

        if (pat.isPresent()){
            return pat.get();
        }
        return null;
    }

    public List<Patient> searchPatientByName(String name) {
        return patRepo.searchPatient(name);
    }

    public Patient registerPatient(Patient pat) {
        return patRepo.save(pat);
    }

    public Patient updatePatient(Patient pat) {
        return patRepo.save(pat);
    }

    public void deletePatientById(int id) {
        patRepo.deleteById(id);
    }

    public boolean login(String email, String pwd) {
        return patRepo.findAll().stream().anyMatch(p -> p.getEmail().equals(email) && p.getPassword().equals(pwd));
    }

    public String logout() {
        return "Logged out successfully";
    }
}
