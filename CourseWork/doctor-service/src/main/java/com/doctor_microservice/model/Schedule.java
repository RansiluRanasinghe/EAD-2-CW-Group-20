package com.doctor_microservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "schedules")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long doctorId;

    private String date;

    private String startTime;

    private String endTime;

    private String status;

}

