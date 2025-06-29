package com.appointment_ms.service;

import com.appointment_ms.data.Appointment;
import com.appointment_ms.data.AppointmentRepository;
import com.appointment_ms.dto.AppointmentCheckRequest;
import com.appointment_ms.dto.AppointmentResponse;
import com.appointment_ms.service.producer.MessageProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepo;

    @Autowired
    private MessageProducer producer;

    //Get all appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    //Get appointment by id
    public Appointment getAllAppointmentById(int id) {
        Optional<Appointment> sch = appointmentRepo.findById(id);
        return sch.orElse(null);
    }

    //Create appointment
    public Appointment createAppointment(Appointment appoint) {
        return appointmentRepo.save(appoint);
    }

    //Update appointment
    public Appointment updateAppointment(Appointment appoint) {
        return appointmentRepo.save(appoint);
    }

    //Delete appointment by id
    public void deleteAppointmentById(int id) {
        appointmentRepo.deleteById(id);
    }

    //Delete all appointments
    public void deleteAllAppointments() {
        appointmentRepo.deleteAll();
    }


    //Get appointments by doctor id
    public List<Appointment> getAppointmentByDoctorId(int id) {
        return appointmentRepo.getAppointmentByDoctorId(id);
    }

    //Get appointments by patient id
    public List<Appointment> getAppointmentByPatientId(int id) {
        return appointmentRepo.getAppointmentByPatientId(id);
    }

    public String registerAppointment(Appointment appointment) {
        AppointmentCheckRequest checkRequest = new AppointmentCheckRequest();
        checkRequest.setDoctorId(appointment.getDocId());
        checkRequest.setPatientId(appointment.getPatientId());

        boolean doctorExists = producer.checkDoctorExists(checkRequest);
        if (!doctorExists) return "Doctor not found";

        boolean patientExists = producer.checkPatientExists(checkRequest);
        if (!patientExists) return "Patient not found";

        appointment.setStatus("confirmed");
        createAppointment(appointment);

        return "Appointment confirmed";
    }


}
