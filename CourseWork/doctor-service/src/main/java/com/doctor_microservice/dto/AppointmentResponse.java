package com.doctor_microservice.dto;

public class AppointmentResponse {

    private int doctorId;
    private int patientId;
    private boolean isDoctorExists;
    private boolean isPatientExists;

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public boolean isDoctorExists() {
        return isDoctorExists;
    }

    public void setDoctorExists(boolean doctorExists) {
        isDoctorExists = doctorExists;
    }

    public boolean isPatientExists() {
        return isPatientExists;
    }

    public void setPatientExists(boolean patientExists) {
        isPatientExists = patientExists;
    }
}
