package com.appointment_ms.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    @Query("select app from Appointment app where app.docId=?1")
    List<Appointment> getAppointmentByDoctorId(int id);

    @Query("select app from Appointment app where app.patientId=?1")
    List<Appointment> getAppointmentByPatientId(int id);

}
